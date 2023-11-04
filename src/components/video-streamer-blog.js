import React from 'react'

export default function VideoStreamerBlog() {
  return (
    <div className='container'>

      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <header className='text-5xl font-extrabold leading text-white underline text-center'>
          ExpressJS Video Streaming Server with AWS
        </header>
      </div>
            
      <div className='pl-2 prose mt-4 mb-3 max-w-none text-gray-500 dark:text-gray-400'>

        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          This blog post discusses the architecture of my NodeJS video streaming server, which utilizes some AWS services. I focus on the configuration of the services, which were set up through the AWS console. During my research of this topic there were many resources, but they were developed using different languages and libraries that had little support. Additionally, many skip through some details of setting up the AWS services so I will try to go through the process step by step with each service I have integrated. Navigating between services will be necessary as the configurations are being completed. In the end I will discuss some problems I came across during the development process.
        </div>
        
        <br></br>
        <h2 className='text-white mb-3 text-3xl font-bold leading-8 tracking-tight text-center'>
          VIDEO FORMATTING:
        </h2>

        <br></br>
        In this project, I use HTTP Live Streaming (HLS) protocol to serve videos to the client. This protocol splits the media files into separate shorter segments (“.ts” files) and creates a playlist/manifest (.m3u8) file. The manifest file describes the order, location, and other configurations of the media file, which are then sent to the client via HTTP. The “.ts” segments are retrieved from the same domain/resource path as the “.m3u8” file. It is far better performance to serve videos using this protocol compared to serving entire .mp4/.mov/etc files. The segments, which are much smaller in size, are sent to the client via HTTP and allows the client to play the segments seamlessly. This is a much quicker method and provides better user experience compared to having to wait for the entire video to be downloaded.
        In addition, I have implemented an upload video functionality from the client, HLS format conversion, and then uploaded to AWS S3. Files are kept in memory in temp folders until they are uploaded to S3. After upload, the temp directories are deleted. The code to this is available to view in my Github: https://github.com/ryanpv/node-video-streamer .
        <br></br>
        <br></br>

        <h2 className='text-white mb-5 mt-5 text-3xl font-bold leading-8 tracking-tight text-center'>
          ARCHITECTURE:
        </h2>

        <div className='m-4 flex flex-col divide-y divide-gray-700'>

          <h3 className='text-white mb-1 mt-3 text-xl font-bold leading-8 tracking-tight'>
            <i>OVERVIEW:</i>
          </h3>

          The AWS services I am using to stream the videos are CloudFront, API Gateway, Lambda, and S3. To add some layers of protection for resources stored in S3, I configured it to block all public access and access resources through CloudFront signed URLs. Serving files through a CloudFront CDN enhances performance. CDNs optimize performance by reducing physical distance between the data and client. Data is served from the closest CDN cache location. Additionally, CDNs will use minification and file compression behind the scenes to improve the speeds for content delivery. API Gateway and Lambda functions fetch the manifest file and sign the “.ts” segments.

          <h3 className='text-white mb-1 mt-3 text-xl font-bold leading-8 tracking-tight'>
            <i>IAM ROLE POLICIES:</i>
          </h3>

          I created a role in IAM services using the principle of least privilege to limit it to specific permissions. This should be implemented as much as possible with role-based access control (RBAC). The necessary permissions used for this project are:
          -	AmazonS3ReadOnlyAccess
          -	A custom permission policy to allow resources to assume this role and invoke Lambda functions:
          o	Policy reference: https://docs.aws.amazon.com/apigateway/latest/developerguide/permissions.html
          o	In the IAM console, using the link follow “API Gateway permissions model for invoking an API”. First policy statement goes under the IAM role’s “Trust relationships” and the second goes under “Permission policies” in the “Permissions tab”.
          Trust relationships are necessary because they specify which resources can assume this role. The link above provides the trust policy JSON, but Lambda needs to be added to the list of services.

          <h3 className='text-white mb-1 mt-3 text-xl font-bold leading-8 tracking-tight'>
            <i>S3 BUCKET SETUP:</i>
          </h3>

          Initial setup for the S3 bucket is simple. A single S3 bucket is used to store all “.m3u8” and “.ts” files. Upon creation, all settings are kept default other than the bucket name. Most important configuration is the “Block all public access” as it limits access to the stored S3 objects. This should also be the default configuration. To allow access to the S3 bucket, its policy must list the specific service(s) as well as the action(s). This project uses CloudFront to access S3, in which it will be included in the S3 policy statement. Fortunately, AWS makes adding the permissions policy easy by providing it when we setup CloudFront. This will be discussed in more detail during the CloudFront setup. For now, I’ll continue with the API gateway setup. When we add an S3 bucket as a CloudFront origin, the policy is automatically created for that specific distribution. Users would just need to click on the “Copy policy” button, click on the link “Go to S3 bucket permissions” and paste in the policy. The policy is always available in the CloudFront origin’s settings, which can be accessed by selecting the origin and clicking “Edit”. 
          An important note for this project specifically is that the S3 path parameters of where the “.ts” files are stored in MUST match the path parameters of our API gateway. This necessity is due to the behaviour of the HLS protocol. It retrieves the “.ts” file segments by using the same request URL but replaces the only “.m3u8” file name path parameter with the “.ts” segment file name. For example, the request URL may look something like “https://1a2b3.CloudFront.net/lambda_test/requestedFile.m3u8”. When it’s time for the “.ts” file to be fetched, it will replace the “.m3u8” parameter in the request URL, which would look like “https://1a2b3.CloudFront.net/lambda_test/requestedFileSegment.ts” instead. To successfully retrieve all “.ts” files, all objects are stored in a folder “/lambda_test” matches the API gateway path that is used.

          <h3 className='text-white mb-1 mt-3 text-xl font-bold leading-8 tracking-tight'>
            <i>API GATEWAY SETUP PART 1:</i>
          </h3>

          To build the API Gateway, I used the “REST API” type. Although this may potentially increase cost compared to the “HTTP API”, which is limited in services, the REST API option can provide better flexibility with integrated services. After selecting the “API type”, I configured a “New API” and opted for “Edge-optimized” for the “API endpoint type”. On top of using a CloudFront CDN, this will enhance the performance and scalability for this project.
          After the API build process completed, I created a stage named “tester”, which can be done by navigating to the “Stages” section on the side panel of the console. Stages can be named anything, but the appropriate naming convention should really be a reference the current stage of the project, such as “production” or “development”. 
          Next, I created a resource by navigating to the “Resources” section on the side panel. Resource names in API gateway are just the URI parameters, hence “resource”. Since I was also testing out how to integrate Lambda with API gateway, I set up a resource named “lambda_test” and then added another resource under it but selected the “Proxy resource” option. The proxy option allows us to use the resource like a dynamic route. If you are familiar with Express APIs, you will notice that the endpoint params are similar. In Express a dynamic route would look like “/lambda_test/:proxy”, but in API gateway it looks like “/lambda_test/&#123;proxy+&#125;”. The proxy param is used to fetch the different media file requests.
          Before integrating Lambda with the API, a method needs to be attached to the resource. To create a method, navigate to the specific resource and click on the “Create method” button. There are multiple “Integration type” options, but since we are using Lambda functions I selected “Lambda Proxy” with a GET “Method type”. The settings can be modified anytime so at this time the “Lambda function” section can be left blank. Once a method is created, it will show up under that specific resource only. After completing the setup, the API must be deployed, which can be done by using the “Deploy API” button. Select the stage that is currently in use, such as development/production. However, in my case, I stuck with my “tester” stage. Whenever any changes are made to the API under the “Resources” section, the API must be redeployed for the changes to take effect.
          One important note in this specific project is that the path parameters of where we store objects in S3 MUST match the path parameters of our API gateway. This necessity is due to the behaviour of the HLS protocol and how it retrieves “.ts” file segments. Since the API gateway retrieves the original “.m3u8” file, it will use the same domain and path parameters to retrieve the “.ts” files. For example, the API gateway resource is setup as “/lambda_test/&#123;proxy+&#125;” to fetch the “.m3u8” file. In the S3 bucket used for this project, all media files were uploaded and stored in a folder named “lambda_test”. So, path parameters to those files in the S3 bucket would be “/Lambda_test/uploadedS3Object”, which matches API gateway. 
          This concludes the first part of the API gateway setup. We will return to the “Integration request” configuration after setting up the Lambda function.

          <h3 className='text-white mb-1 mt-3 text-xl font-bold leading-8 tracking-tight'>
            <i>LAMBDA FUNCTION SETUP:</i>
          </h3>

          The main purpose of the Lambda function will be to fetch “.m3u8” files and sign the “.ts” segments in the “.m3u8” file before returning it to the client. To create the Lambda function, I chose “Author from scratch” with a “Node.js 18x” for the “Runtime” configuration. With the IAM role already created, it can be selected under the “Change default execution role” drop down. 
          To break down the business logic a bit further:
          1.	Using the AWS SDK, a GET request will be sent to S3 to retrieve the “.m3u8” playlist/manifest file. The file has a multiline format so the “transformToString()” method from the SDK will return as a multiline string.
          2.	With the returned response, each line is separated into its own string and looped through to find the “.ts” segments for signing with the CloudFront URL.
          a.	Depending on how API gateway resources are set up, the resource name/param must be included in the “url” property when being signed with “getSignedUrl()”.
          3.	After the signature is completed, all query params such as “Signature”, “Key-Pair-Id”, and “Expires”, should be split from the signed URL and appended to the “.ts” segment in the “.m3u8 file replacing the old segments.
          4.	Once replacing the old segments with the signed ones are complete, ensure formatting of the modified “.m3u8” file matches the old one. (Same number of lines/spaces/etc).
          a.	The initial splitting of the lines will include an additional line at the end that is an empty string. This must be removed for the playlist to work.
          5.	Return the modified “.m3u8” as the response body.
          Typically, CloudFront sends an event object with the request/response data accessible by “event.Resource[0].cf”. However, the integration of API gateway as an origin will change this formatting. For Lambda to be able to send a successful response, it will have to use the same formatting.
          i.	See link for proper format: https://docs.aws. 	amazon.com/lambda/latest/dg/services-apigateway.html#apigateway-example-event 

          <h3 className='text-white mb-1 mt-3 text-xl font-bold leading-8 tracking-tight'>
            <i>API GATEWAY SETUP PART 2:</i>
          </h3>

          To make updates an easier process for API gateway with Lambda integration, I use “Stage variables”. These can be added by navigating to the “Stages” section from the side panel. Stage variables allow us to reference the Lambda function version instead of changing the entire ARN in API gateway. This helps to avoid redeploying the app after each Lambda function version update, which would save time and resources while developing the API. 
          These are the simple steps to integrate the Lambda function:
          1.	Navigate to “Resources” section on side panel.
          2.	Select the resource method being used.
          3.	Click the “Integration request” tab and click “Edit”.
          4.	Select “Lambda function” as the “Integration type”.
          5.	Toggle “Lambda proxy integration” to use the stage variables as a placeholder for the Lambda function version in the ARN. 
          a.	ARN for the Lambda function should look something like this: “arn:aws:lambda:us-east-1:123456789876:function:lambdaFunctionName:$&#123;stageVariables.stageVariableName&#125;”
          6.	Paste in the same execution role ARN that is attached to the Lambda function.
          This completes the entire API gateway setup. Next step is the CloudFront CDN setup.

          <h3 className='text-white mb-1 mt-3 text-xl font-bold leading-8 tracking-tight'>
            <i>CLOUDFRONT CDN SETUP:</i>
          </h3>

          Before beginning the CloudFront distribution setup, I generated a public and private key using OpenSSL. These are the keys that will be used to sign the URLs. Any library that generates a key pair like this can be used. Once that is completed, I went through these steps:
          1.	Click on “Key management” in the side panel and then “Public keys”. 
          2.	Click on the “Create public key” button and fill out the form using the public key generated with OPENSSL before clicking the create button again. 
          a.	The “ID” of this generated from this step is what we use to sign the CloudFront URLs. 
          3.	Next, under the same section of the side panel click on “Key groups” and create a key group using the newly added public key. 
          a.	This key group is used later with CloudFront behaviour settings. 
          Once I have completed those steps, I created a CloudFront distribution through the “Distributions” section on the side panel. The initial setup will ask to specify one origin, but more can always be added later. 

          <h3 className='text-white mb-1 mt-3 text-1xl font-bold leading-8 tracking-tight'>
            <i>CloudFront origins setup:</i>
          </h3>

          Origins are the AWS resources that are accessed through CloudFront. Only two are needed for this project: API gateway and S3. Configurations for both origins are similar. These are the steps:
          1.	Clicking on “Create origin” button opens a “Settings” form.
          2.	I select my API gateway as the “Origin domain”.
          a.	You will notice after selection the name is transformed to the APIs invoke URL. This is how CloudFront accesses services and their resources, hence why it has an option for “Origin path”.
          3.	For an added layer of protection, “HTTPS only” is used for the protocol.
          4.	“Origin path” is optional, but since my API is deployed under the “tester” stage I must specify it as the path to access it. 
          5.	The rest of the settings I have left as default. 
          After completion of this origin configuration, I added another for the S3 bucket. If objects are stored in a folder in S3, we can either add an “Origin path” here or we can specify it in the key when fetching it using the AWS SDK. For this configuration, I have also selected “Origin access control settings (recommended)” then selected the S3 bucket for “Origin access control”. This setting enhances security by restricting the bucket access to only CloudFront. AWS provides a prompt stating that you must allow CloudFront access and includes a pre-written policy that can be copied and pasted the S3 bucket permission. The rest of the settings can be left as default.

          <h3 className='text-white mb-1 mt-3 text-1xl font-bold leading-8 tracking-tight'>
            <i>CloudFront behaviors setup:</i>
          </h3>

          Moving on to the “Behaviors” tab under the CloudFront distribution, I create behaviours, which describe how CloudFront handles incoming requests based on the path pattern, such as “/param1/mediaFile.m3u8”. Query parameters are excluded from these rules. If a request URL params matches the path pattern of a specific behaviour, CloudFront will use it. However, since it is possible to have more than one behaviour, which one CloudFront runs also depends on the behaviour’s precedence. Behaviour precedence is 0-indexed, so like an array the 0 index comes first. To describe an example, when a behaviour is created, but no “Path pattern” is set CloudFront will use a “Default (*)” path. This path will accept all requests with different path patterns. However, if another behaviour is created and its precedence is moved before (I.e. New behaviour set with precedence 0 and Default (*) behaviour with precedence 1) then only the new behaviour would be used if the request path matches. Therefore, “Default (*)” pattern can be problematic. If it is necessary at all in a distribution, then I recommend it being placed at the highest precedence value (last). Precedence can only be changed by going to the “Behaviors” tab, select the radio input of the behaviour, and click “Move up” or “Move down”.
          For this project, only two behaviours are used for the path patterns “*.m3u8” and “*.ts”. The “*” in the path represent wildcards. Both behaviours are configured similarly. For the “*.m3u8” behaviour, the origin is set as the API gateway created earlier. The origin for the “*.ts” behaviour is the S3 bucket. The following are the steps for configuring these behaviours:
          1.	Start with either “Path pattern” but match the “Origin and origin groups” as described above.
          2.	Change viewer protocol policy to “Redirect HTTP to HTTPS.
          3.	Yes for “Restrict viewer access” and then to use our key group we created earlier, select “Trusted key groups (recommended)” and select the correct key group.
          4.	For “Cache key and origin request”, AWS recommends disabling cache when using API gateway.
          a.	This helps with debugging since most recent changes will be reflected rather than the cache.
          5.	“Response headers policy” use “CORS-With-Preflight” to be able to access S3 through CloudFront.
          6.	“Function associations” can be left alone since API gateway invokes the Lambda function.
          This concludes the setup for the AWS services used in this project. 

          <h3 className='text-white mb-1 mt-8 text-2xl font-bold leading-8 tracking-tight text-center'>
            <i>PROBLEMS ENCOUNTERED:</i>
          </h3>
          
          Throughout the development of this project, I encountered a few problems due to a lack of experience with AWS services and HLS protocol for streaming media. However, through taking time to research and test different solutions I was able to make it work. Here are a couple of problems that helped me better understand how to use the technologies I was using:
          I received status 500 responses while trying to integrate Lambda and API gateway. The response would return “Invalid permissions on Lambda function”. I had the API gateway Lambda integration request properly set up as well as Lambda’s “Resource-based policy statements” for invoke permissions, but the error persisted. Upon research, I found a simple solution of providing the execution role with a permissions policy that specifies which services can invoke Lambda functions. Previously, the execution role used had the basic Lambda execution role, which did not have the same permissions. In addition, the other 500 response I was receiving was due to API gateway not having permission to assume the provided role. The solution was also simple. API gateway needed to be added to the IAM role’s trust relationships list. These trust relationships I have provided in “IAM POLICIES SETUP” a link to this solution from AWS.
          The other significant problem I encountered was the 403 “Access denied” errors when attempting to fetch the “.ts” segment files of a video from the S3 bucket. This was a confusing error at first because the associated “.m3u8” file was stored in the same location and was successfully fetched. With a returned status 403 “Access denied”, I assumed this to be an issue with permissions. I double checked role permissions as well as the policy statements for my S3 bucket to ensure all the correct permissions were there. My next thought was with CloudFront restricted viewer access, it can also return a 403 response due to “Missing key” when the request URL is not signed. However, I confirmed that the signature was present in the request headers through the browser console network tab. I also thought of the possibility of the file not being stored at the proper location since the same response code returned in previous testing. I initially denied this possibility after I successfully fetched it with a separate endpoint on my Express server. However, upon further inspection of the request data, I realized that the path parameters were like that of the request for the “.m3u8” file. The only difference was that the parameter with “.m3u8” file name was replaced with the “.ts” file name. As explained previously, this is the behaviour of using HLS protocol. This finding meant that the “.ts” file was being requested from a folder in S3 that did not exist. It’s also important to note that the fetch methods for both file types were different. The “.m3u8” files are fetched through CloudFront integration with API gateway whereas the “.ts” files are fetched through a CloudFront and S3 integration. My solution was to store the files in S3 in a way that the path matches that of the “.m3u8” request, which was “/lambda_test” in my case. In addition, I had to add the path parameters to the signed URL to ensure a proper signature to access S3 through CloudFront. In a sense, the “.ts” file was not stored in the right location, but this was in part due to how I developed the project. 
        </div>
      </div>
    </div>
  )
}

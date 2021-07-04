// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1qsvt75f6rrclb8nhsqiuoupbe",     // CognitoClientID
  "api_base_url": "https://6gjcynira7.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "todoappdemo-lambda-refarch-webapp.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1t0d0it1dreuz.amplifyapp.com"                                      // AmplifyURL
};

export default config;

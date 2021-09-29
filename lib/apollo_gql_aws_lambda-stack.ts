import * as path from 'path';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apiGateway from '@aws-cdk/aws-apigateway';

export class ApolloGqlAwsLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const graphqlLambda = new lambda.Function(this, 'graphqlLambda', {
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      handler: 'main.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
  });

  new apiGateway.LambdaRestApi(this, 'graphqlEndpoint', {
      handler: graphqlLambda,
  });
    // The code that defines your stack goes here
  }
}

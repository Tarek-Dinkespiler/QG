import * as cdk from "aws-cdk-lib";
import { ReactDeploymentStack } from "./stack";

require("dotenv").config();

const app = new cdk.App();

new ReactDeploymentStack(app, "QG", {
  env: {
    account: process.env.AWS_ACCOUNT_ID,
    region: process.env.AWS_DEFAULT_REGION,
  },
});

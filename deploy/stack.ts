#!/usr/bin/env node
import path from "path";
import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

import { CloudFrontWebDistribution } from "aws-cdk-lib/aws-cloudfront";

export class ReactDeploymentStack extends Stack {
  public readonly bucket: Bucket;
  public readonly distribution: CloudFrontWebDistribution;
  public readonly cloudfrontDomainName: CfnOutput;
  public readonly s3BucketUrl: CfnOutput;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.bucket = this._createS3Bucket();

    new BucketDeployment(this, "myWebsiteDeployment", {
      sources: [
        Source.asset(path.join(__dirname, "../dist")),
        Source.asset(path.join(__dirname, "../public")),
      ],
      destinationBucket: this.bucket,
    });

    this.distribution = this._createCloudFrontDistribution(this.bucket);
    this.cloudfrontDomainName = this._outputDomainName(this.distribution);
    this.s3BucketUrl = this._outputS3Url(this.bucket);
  }

  _createS3Bucket() {
    const reactAppBucket = new Bucket(this, "ReactApp", {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      publicReadAccess: true,
      blockPublicAccess: {
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      },
    });

    return reactAppBucket;
  }

  _createCloudFrontDistribution(bucket: Bucket) {
    const distribution = new CloudFrontWebDistribution(
      this,
      "ReactDeploymentDistribution",
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
      },
    );

    return distribution;
  }

  _outputS3Url(reactDeploymentBucket: Bucket) {
    const s3Url = new CfnOutput(this, "WebsiteURL", {
      value: reactDeploymentBucket.bucketWebsiteUrl,
      description: "URL of the website",
    });

    return s3Url;
  }

  _outputDomainName(distribution: CloudFrontWebDistribution) {
    const domainName = new CfnOutput(this, "CloudFrontDistributionDomainName", {
      value: distribution.distributionDomainName,
      description: "CloudFront Distribution Domain Name",
    });

    return domainName;
  }
}

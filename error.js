#!/bin/bash -eo pipefail
./scripts/deploy.sh peering.yml peering
 ===>  used var env  <=====
      RESOURCE:peering,
      GROUP_NAME:ipic,
      DEPLOY_ENV:prod,
      AWS_REGION:us-west-2,
      SERVICE_NAME:ecs,
      ENTERPRISE_NAME:dso,

 ====>  Cloudformation Info  <=====
      RESOURCE_NAME: peering
      RESOURCE_CLOUDFORMATION_STACK_NAME: dso-ipic-ecs-peering

 Spinning cloudformation...
aws cloudformation deploy --stack-name dso-ipic-ecs-peering --template-file /home/circleci/project/templates/peering.yml --capabilities CAPABILITY_NAMED_IAM

Waiting for changeset to be created..

Failed to create the changeset: Waiter ChangeSetCreateComplete failed: Waiter encountered a terminal failure state: For expression "Status" we matched expected path: "FAILED" Status: FAILED. Reason: Template format error: Unresolved resource dependencies [VPCSonarqube] in the Resources block of the template
 Failed Cloudformation stack deployment...
{
    "StackEvents": [
        {
            "StackId": "arn:aws:cloudformation:us-west-2:258840583819:stack/dso-ipic-ecs-peering/9991b0c0-8ffb-11ef-b079-0abcd53692ad",
            "EventId": "9990ed70-8ffb-11ef-b079-0abcd53692ad",
            "StackName": "dso-ipic-ecs-peering",
            "LogicalResourceId": "dso-ipic-ecs-peering",
            "PhysicalResourceId": "arn:aws:cloudformation:us-west-2:258840583819:stack/dso-ipic-ecs-peering/9991b0c0-8ffb-11ef-b079-0abcd53692ad",
            "ResourceType": "AWS::CloudFormation::Stack",
            "Timestamp": "2024-10-21T22:27:04.831000+00:00",
            "ResourceStatus": "REVIEW_IN_PROGRESS",
            "ResourceStatusReason": "User Initiated"
        }
    ]
}

Exited with code exit status 1
CircleCI received exit code 1










Install AWS cli ☁️ 📦

Explain this error
AI Experiment
0s
1
2
3
4
5
6
7
8
9
#!/bin/bash -eo pipefail
chmod +x ./scripts/install_aws.sh
./scripts/install_aws.sh prodb 9

Setting aws Environment ⚙️ 🔧
Not valid Yappy aws env, please refer to your wiki 📖

Exited with code exit status 1
CircleCI received exit code 1



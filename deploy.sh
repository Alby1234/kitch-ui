#!/bin/bash

# deploy build folder to S3 bucket
aws s3 sync build/ s3://kitch-ui --acl public-read
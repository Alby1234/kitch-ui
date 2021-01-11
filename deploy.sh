#!/bin/bash

# deploy build folder to S3 bucket
aws s3 sync build/ s3://kitch-ui --acl public-read

#invalidate cloudfront cache so that changes are seen promptly
aws cloudfront create-invalidation --distribution-id E13P5CM7QXQ5A9 --paths "/*"

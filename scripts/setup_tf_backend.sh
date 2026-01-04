#!/bin/bash
set -e

REGION="ap-south-1"
BUCKET_NAME="trakbit-terraform-state-$(date +%s)"
TABLE_NAME="trakbit-terraform-lock"

echo "Creating S3 Bucket for Terraform State: $BUCKET_NAME..."
aws s3api create-bucket \
    --bucket $BUCKET_NAME \
    --region $REGION \
    --create-bucket-configuration LocationConstraint=$REGION

echo "Enabling versioning on bucket..."
aws s3api put-bucket-versioning \
    --bucket $BUCKET_NAME \
    --versioning-configuration Status=Enabled

echo "Creating DynamoDB Table for Terraform Locking: $TABLE_NAME..."
aws dynamodb create-table \
    --table-name $TABLE_NAME \
    --attribute-definitions AttributeName=LockID,AttributeType=S \
    --key-schema AttributeName=LockID,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
    --region $REGION

echo "Terraform Backend Setup Complete!"
echo "Bucket: $BUCKET_NAME"
echo "Table: $TABLE_NAME"

# Save backend config details for later use
echo "bucket = \"$BUCKET_NAME\"" > terraform/backend.conf
echo "dynamodb_table = \"$TABLE_NAME\"" >> terraform/backend.conf
echo "region = \"$REGION\"" >> terraform/backend.conf

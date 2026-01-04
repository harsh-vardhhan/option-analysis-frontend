terraform {
  backend "s3" {
    key     = "terraform.tfstate"
    encrypt = true
    # Bucket, Region, and DynamoDB table will be passed via -backend-config in CI/CD or local init
    # We will use the generated backend.conf for local dev
  }
}

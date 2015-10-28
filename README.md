# Neal React

neal-react is a collection of reactjs components to quickly build landing pages. 

## Visit the Sample Page

- Hosted Sample Page
- [Sample Page Code on Github](https://github.com/dennybritz/neal-sample)

## Available Components

Main components:

- `App`
- `Code`
- `CustomerQuotes`
- `Footer`
- `Hero`
- `HorizontalSplit`
- `ImageList`
- `Navbar`
- `Page`
- `PricingTable`
- `Section`
- `SignupInline`
- `SignupModel`
- `Team`

Third-Party integrations

- `GoogleAnalytics`
- `Segment`
- `Stripe`
- `Typeform`


## Documentation

The best way to learn about the components is to look at the [code for the sample page](https://github.com/dennybritz/neal-sample). But, basically:

```javascript
// TODO
```

## Deploying to AWS

Simply copy the `public/` directory to an AWS S3 bucket and enable [Static Website Hosting](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html). You can use a script such as this to minifify and upload:


```bash
#! /usr/bin/env bash

S3_BUCKET=yourbucket
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd $BASE_DIR

# Build the assets
webpack -p

# Upload to S3
aws s3 cp $BASE_DIR/public/ s3://$S3_BUCKET --recursive
```
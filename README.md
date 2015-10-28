# neal-react

`neal-react` is a collection of reactjs components to quickly build landing pages. I found that using hosted services like Launchrock don't give me enough flexibility, but frameworks like Bootstrap are too low-level and lead to lots of repetitive code. I wanted something in between these two extremees.


## Visit the Sample Page

- [Hosted Sample Page](http://www.nealjs.com)
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

The best way to learn about the components is to look at the [code for the sample page](https://github.com/dennybritz/neal-sample/blob/master/js/sample-page.jsx). But, basically:

```bash
npm install --save neal-react
```

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { App, Page, Section, Hero, Navbar, HorizontalSplit } from "neal-react";

ReactDOM.render((
  <App googleAnalyticsKey="UA-42490151-3">
    <Page>
      <Navbar brand="hello">{ /* Your nav */ }</Navbar>
      <Hero className="text-center"> <h1>{ /* Content */ }</h1> </Hero>
      <Section heading="Hello!">
        <HorizontalSplit padding="md"> { /* Content */ } </HorizontalSplit>
      </Section>
      { /* More ... */ }
    </Page>
  </App>
), document.getElementById("main"));

```

Other dependencies that should be included from a CDN:

- jQuery
- Bootstrap v4 Javascript (https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.js)
- Font Awesome

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
```

## Custom Styling

Styling can be overwritten by setting the [appropriate SASS Variables](https://github.com/dennybritz/neal-react/blob/master/css/_variables.scss) in your code.

## A note on Bootstrap

`neal-react` uses [Boostrap 4](http://v4-alpha.getbootstrap.com/), which is currently in alpha. Because the alpha version is not published on npm its styles are included manually here until it's officially avalailable.

## Deploying to AWS

If you are using third-party integrations like Stripe or Typeform to capture user information there is no need to write your on backend and you can simply copy your `public/` directory to an AWS S3 bucket and enable [Static Website Hosting](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html). You can use a script such as this to minifify and upload:


```bash
#! /usr/bin/env bash

S3_BUCKET=s3://www.nealjs.com
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../" && pwd)"
cd $BASE_DIR

# Build the assets
webpack -p

# Upload to S3
aws s3 cp $BASE_DIR/public/ $S3_BUCKET --recursive
```
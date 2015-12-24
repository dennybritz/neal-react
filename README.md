# neal-react

`neal-react` is a collection of reactjs components to quickly build landing pages. I found that using hosted services like Launchrock doesn't give me enough flexibility, but frameworks like Bootstrap are too low-level and lead to lots of repetitive code. I wanted something in between these two extremees.


## Visit the Sample Page

- [Hosted Sample Page](http://www.nealjs.com)
- [Sample Page Code on Github](https://github.com/dennybritz/neal-sample)

## Available Components

Main components:

- [`App`](https://github.com/dennybritz/neal-react/blob/master/js/components/app.jsx)
- [`Code`](https://github.com/dennybritz/neal-react/blob/master/js/components/code.jsx)
- [`CustomerQuotes`](https://github.com/dennybritz/neal-react/blob/master/js/components/customer-quotes.jsx)
- [`Footer`](https://github.com/dennybritz/neal-react/blob/master/js/components/footer.jsx)
- [`Figure`](https://github.com/dennybritz/neal-react/blob/master/js/components/figure.jsx)
- [`Hero`](https://github.com/dennybritz/neal-react/blob/master/js/components/hero.jsx)
- [`HorizontalSplit`](https://github.com/dennybritz/neal-react/blob/master/js/components/horizontal-split.jsx)
- [`ImageList`](https://github.com/dennybritz/neal-react/blob/master/js/components/image-list.jsx)
- [`Navbar`](https://github.com/dennybritz/neal-react/blob/master/js/components/navbar.jsx)
- [`Page`](https://github.com/dennybritz/neal-react/blob/master/js/components/page.jsx)
- [`PricingTable`](https://github.com/dennybritz/neal-react/blob/master/js/components/pricing-table.jsx)
- [`Section`](https://github.com/dennybritz/neal-react/blob/master/js/components/section.jsx)
- [`SignupInline`](https://github.com/dennybritz/neal-react/blob/master/js/components/signup-inline.jsx)
- [`SignupModal`](https://github.com/dennybritz/neal-react/blob/master/js/components/signup-modal.jsx)
- [`Team`](https://github.com/dennybritz/neal-react/blob/master/js/components/team.jsx)

Third-Party integrations

- [`GoogleAnalytics`](https://github.com/dennybritz/neal-react/blob/master/js/components/vendor/google-analytics.jsx)
- [`Segment`](https://github.com/dennybritz/neal-react/blob/master/js/components/vendor/segment.jsx)
- [`Stripe`](https://github.com/dennybritz/neal-react/blob/master/js/components/vendor/stripe.jsx)
- [`Typeform`](https://github.com/dennybritz/neal-react/blob/master/js/components/vendor/typeform.jsx)


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
      <Hero className="text-xs-center"> <h1>{ /* Content */ }</h1> </Hero>
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

## Using with [Structor](https://github.com/ipselon/structor)

Structor is a visual development environment for node.js web applications with React UI. You can find a boilerplate project for neal on the [Structor Marketplace](http://helmetrex.com/) and the corresponding code in [this repository](https://github.com/ipselon/neal-react-prepack). A big thanks to [ispelon](https://github.com/ipselon) for implementing this.

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

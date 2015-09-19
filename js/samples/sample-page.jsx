import React from 'react';
import {Page, Navbar, Hero, Footer, SignupInline, SignupModal, GoogleAnalytics} from '../components/index';

export default (props) => {
  var brandName = "SamplePage"
  var navItems = [
    { text: 'Home' },
    { text: 'About' },
    { text: 'Contact '}
  ]
  return(
    <Page>
      <Navbar brandName={brandName} items={navItems} />
      <Hero heading="Blitz Sample Page" subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
      <Footer brandName={brandName} items={navItems}/>
      <SignupInline/>
      <SignupModal/>
      <GoogleAnalytics/>
    </Page>
  );
};
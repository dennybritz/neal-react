import React from 'react';
import {Page, Navbar, Hero, Footer, SignupInline, SignupModal, GoogleAnalytics, Section, HorizontalSplit, CustomerQuotes, Team} from '../components/index';

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
      <Section heading="Inline Signup Component">
        <p><code>SignupInline</code> does the validation for you, but you can add your own callback handler.</p>
        <SignupInline/>
      </Section>
      <Section heading="Horizontal Split">
        <HorizontalSplit>
          <p> You can create Horizontal Splits with 1,2,3,4,6 or 12 columns. </p>
          <p>
            Describe your Features with three columns, like all the cool startups.
          </p>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </HorizontalSplit>
      </Section>
      <Section heading="Signup Modal">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <SignupModal/>
      </Section>
      
      <Section heading="Customer Quotes">
        <CustomerQuotes>
          <CustomerQuotes.Quote name="Denny" title="Founder at BigCo" imageUrl="http://lorempixel.com/output/people-q-c-200-200-7.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </CustomerQuotes.Quote>
          <CustomerQuotes.Quote name="Denny" title="Founder at BigCo" imageUrl="http://lorempixel.com/output/people-q-c-200-200-7.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </CustomerQuotes.Quote>          
          <CustomerQuotes.Quote name="Denny" title="Founder at BigCo" imageUrl="http://lorempixel.com/output/people-q-c-200-200-7.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </CustomerQuotes.Quote>
        </CustomerQuotes>
      </Section>

      <Section heading="Team">
        <Team>
          <Team.Member name="Denny Britz" title="Founder at BigCo" imageUrl="http://placehold.it/200x200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Team.Member>
          <Team.Member name="Denny Britz" title="Founder at BigCo" imageUrl="http://placehold.it/200x200">
          TODO
          </Team.Member>
          <Team.Member name="Denny Britz" title="Founder at BigCo" imageUrl="http://placehold.it/200x200">
          TODO
          </Team.Member>
        </Team>
      </Section>


      <GoogleAnalytics account="ABC"/>
      <Footer brandName={brandName}
        facebookUrl="http://www.facebook.com"
        twitterUrl="http://www.twitter.com"
        emailUrl="mailto:info@google.com"/>
    </Page>
  );
};
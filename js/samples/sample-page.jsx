import React from 'react';
import {Page, Navbar, NavItem, Hero, Footer, SignupInline, SignupModal, Section, HorizontalSplit, CustomerQuotes, Team, CustomerQuote, Stripe} from '../components/index';

// Function to call when someone signs up
var onSignup = ({name: name, email: email, password: password}) => Stripe.StripeHandler.open({
  name: 'Stripe Integration',
  description: "Like this? Donate $5 to keep it up :)",
  panelLabel: "Donate {{amount}}",
  email: email,
  amount: 500
});


export default (props) => {
  var brandName = "SamplePage"
  return(
    <Page>
      <Navbar brandName={brandName}>
        <NavItem>Home</NavItem>
        <NavItem>Github</NavItem>
        <NavItem>Documentation</NavItem>
      </Navbar>
      <Hero heading="Declarative Landing Pages for React.js" backgroundImage='img/hero-bg-01.jpg' subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
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
        <SignupModal modalId='signup-modal' onSubmit={onSignup}/>
        <a className="btn btn-primary btn-lg" data-toggle="modal" data-target="#signup-modal">Show signup modal</a>
      </Section>
      
      <Section heading="Customer Quotes">
        <CustomerQuotes>
          <CustomerQuote name="Denny" title="Founder at BigCo" imageUrl="http://lorempixel.com/output/people-q-c-200-200-7.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </CustomerQuote>
          <CustomerQuote name="Denny" title="Founder at BigCo" imageUrl="http://lorempixel.com/output/people-q-c-200-200-7.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </CustomerQuote>          
          <CustomerQuote name="Denny" title="Founder at BigCo" imageUrl="http://lorempixel.com/output/people-q-c-200-200-7.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </CustomerQuote>
        </CustomerQuotes>
      </Section>
      <Section heading="Inline Signup Component">
        <p><code>SignupInline</code> does the validation for you, but you can add your own callback handler.</p>
        <SignupInline onSubmit={onSignup}/>
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
      <Footer brandName={brandName}
        facebookUrl="http://www.facebook.com"
        twitterUrl="http://www.twitter.com"
        emailUrl="mailto:info@google.com"/>
    </Page>
  );
};
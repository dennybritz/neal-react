import React from "react";
import { Page, Hero, Footer, FooterAddress, Section } from "../components/index";
import { Code } from "../components/index";
import { SignupInline, SignupModal } from "../components/index";
import { HorizontalSplit } from "../components/index";
import { CustomerQuotes, CustomerQuote } from "../components/index";
import { PricingTable, PricingPlan } from "../components/index";
import { Team, TeamMember } from "../components/index";
import { Stripe } from "../components/index";
import { ImageList,  ImageListItem } from "../components/index";
import { Navbar, NavItem, DropdownToggle, DropdownMenu } from "../components/index";
import { Link } from "react-router";

let brandName = "SamplePage";

// Function to call when someone signs up
let onSignup = ({ name: name, email: email, password: password }) => Stripe.StripeHandler.open({
  name: "Stripe Integration Included",
  description: "Like this? Donate $5 <3",
  panelLabel: "Donate {{amount}}",
  email: email,
  amount: 500
});

let businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    1355 Market Street, Suite 900<br/>
    San Francisco, CA 94103<br/>
    +1 (123) 456-7890
  </address>
);

let pricingPlan1 = {
  name: "Starter",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  price: "$99",
  features: {
    "Fully Integrated E-Commerce": true,
    "Sell 1 Product & Accept Donations": true,
    "Mobile Website and Store": false,
    "Custom Domain": false,
    "24/7 Customer Support": false
  },
  onClick: onSignup
};

let pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "$499",
  name: "Startup",
  features: Object.assign({}, pricingPlan1.features, {
    "Mobile Website and Store": true
  })
});

let pricingPlan3 = Object.assign({}, pricingPlan2, {
  price: "$999",
  name: "Enterprise",
  features: Object.assign({}, pricingPlan2.features, {
    "Custom Domain": true,
    "24/7 Customer Support": true
  })
});

let sampleCode = `
<Page>
  <Hero heading="Declarative Landing Pages for React.js"></Hero>
  <Section heading="Hello!">
    <HorizontalSplit padding="md"> { /* Content */} </HorizontalSplit>
  </Section>
  <Section>
    <Team>
      <TeamMember name="Link" title="Co-founder" imageUrl="img/link.jpg"> { /* Description */} </TeamMember>
      <TeamMember name="Yoshi" title="Co-founder" imageUrl="img/yoshi.jpg"> { /* Description */} </TeamMember>
    </Team>
  </Section>
  <Section>
    <PricingTable>
      <PricingPlan {... pricingPlan1} />
      <PricingPlan {... pricingPlan2} />
      <PricingPlan {... pricingPlan3} />
    </PricingTable>
    <SignupInline onSubmit={onSignupCallback}/>
  </Section>
</Page>
`;


export default (props) => {
  return(
    <Page>

      <Navbar brandName={brandName}>
        <NavItem><Link to="Home" className="nav-link">Home</Link></NavItem>
        <NavItem dropdown={true}>
          <DropdownToggle>Dropdown</DropdownToggle>
          <DropdownMenu>
            <Link to="Home" className="dropdown-item">Action</Link>
            <Link to="Home" className="dropdown-item">Another action</Link>
          </DropdownMenu>
        </NavItem>
        <NavItem><a href="https://github.com/dennybritz/" className="nav-link" target="_blank">Github</a></NavItem>
        <NavItem><Link to="Home" className="nav-link">Documentation</Link></NavItem>
      </Navbar>

      <Hero heading="Declarative Landing Pages for React.js" backgroundImage="img/hero-bg-01.jpg"
        className="text-center">
        <p className="lead">Build a beautiful landing page in less than an hour.
          No more redundant code. Easily extensible.</p>
        <p>
          <a className="btn btn-white">Learn More</a>
          &nbsp;
          <a className="btn btn-white">Get it on Github</a>
        </p>
      </Hero>

      <Section heading="What it looks like...">
        <Code lang="jsx" block>{sampleCode}</Code>
      </Section>

      <Section>
        <HorizontalSplit padding="md">
          <div>
            <p className="lead">Batteries Included</p>
            <p>Blitz ships with a navbar, hero unit, footer, sections, horziontal split (this text), and all the other basic elements you need for a landing page. No more repetetive coding!</p>
          </div>
          <div>
            <p className="lead">Third-Party Integrations</p>
            <p>Blitz includes integration components for <a>Google Analytics</a>, <a>Segment</a>, and <a>Stripe</a>. No more copying & pasting integration code, all you need is your API keys. We automatically track events when visitors navigate to different parts of your page, using the react-router library.</p>
          </div>
          <div>
            <p className="lead">Open-source. Used in production. </p>
            <p>I use Blitz in production, so you can be sure it's maintained.
            </p>
          </div>
        </HorizontalSplit>
      </Section>

      <Section heading="Inline and Modal Signup components" className="gray">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <SignupInline onSubmit={onSignup}/>
        <SignupModal modalId="signup-modal" onSubmit={onSignup}/>
        <p>
          <a className="btn btn-primary" data-toggle="modal" data-target="#signup-modal">Show Signup modal</a>
        </p>
      </Section>

      <Section heading="Pricing Table">
        <PricingTable>
          <PricingPlan {... pricingPlan1} />
          <PricingPlan {... pricingPlan2} />
          <PricingPlan {... pricingPlan3} />
        </PricingTable>
      </Section>

      <Section heading="Customer Quotes">
        <CustomerQuotes>
          <CustomerQuote name="Denny" title="Co-founder" imageUrl="img/people/paulgraham.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </CustomerQuote>
          <CustomerQuote name="Denny" title="Co-founder" imageUrl="img/people/elonmusk.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </CustomerQuote>
          <CustomerQuote name="Denny" title="Co-founder" imageUrl="img/people/reidhoffman.jpg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </CustomerQuote>
        </CustomerQuotes>
      </Section>

      <Section heading="Team">
        <Team>
          <TeamMember name="Denny Britz" title="Co-founder" imageUrl="img/people/paulgraham.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
          <TeamMember name="Denny Britz" title="Co-founder" imageUrl="img/people/elonmusk.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
          <TeamMember name="Denny Britz" title="Co-founder" imageUrl="img/people/reidhoffman.jpg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </TeamMember>
        </Team>
      </Section>

      <Section heading="As seeen on...">
        <ImageList centered={false}>
          <ImageListItem src="img/press/cnn-logo.png" url="http://www.cnn.com"/>
          <ImageListItem src="img/press/forbes-logo.png" url="http://forbes.com/"/>
          <ImageListItem src="img/press/theverge-logo.png" url="http://www.theverge.com/"/>
          <ImageListItem src="img/press/techcrunch-logo.jpg" url="http://techcrunch.com/"/>
          <ImageListItem src="img/press/venturebeat-logo.jpg" url="http://venturebeat.com/"/>
        </ImageList>
      </Section>

      <Footer brandName={brandName} facebookUrl="http://www.facebook.com" twitterUrl="http://www.twitter.com"
        emailUrl="mailto:info@google.com" address={businessAddress}>
      </Footer>
    </Page>
  );
};

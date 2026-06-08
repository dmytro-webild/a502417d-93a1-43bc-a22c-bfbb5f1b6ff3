"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Reviews",
          id: "/reviews",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      button={{
        text: "Call Now: (301) 905-2220",
        href: "tel:+13019052220",
      }}
      brandName="Jeffrey Landscaping"
    />
  </div>

  <div id="contact-page" data-section="contact-page">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Let's Create Your Dream Yard"
      description="Reach out to Jeffrey Landscaping for inquiries, free estimates, or to schedule your next service. We're here to help!"
      imageSrc="http://img.b2bpic.net/free-photo/distracted-man-with-map-sunset_1153-408.jpg"
      imageAlt="Landscaper talking to a client about a quote"
      mediaAnimation="opacity"
      mediaPosition="right"
      inputPlaceholder="Your Email Address"
      buttonText="Send Message"
      termsText="Prefer to speak with us? Call directly at (301) 905-2220 or email us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "What areas do you serve?",
          content: "Jeffrey Landscaping proudly serves homeowners in the Maryland/DMV area, including Rockville, Bethesda, Potomac, Silver Spring, and Gaithersburg.",
        },
        {
          id: "faq2",
          title: "How do I get a free quote?",
          content: "You can request a free quote by filling out the form on our website, calling us directly at (301) 905-2220, or sending us an email.",
        },
        {
          id: "faq3",
          title: "What payment methods do you accept?",
          content: "We accept various payment methods including major credit cards, bank transfers, and checks. Details will be provided with your service agreement.",
        },
        {
          id: "faq4",
          title: "Do I need to be home for service?",
          content: "No, you do not need to be home for most of our services as long as we have clear access to your yard. We'll notify you when service is complete.",
        },
        {
          id: "faq5",
          title: "Are you insured and licensed?",
          content: "Yes, Jeffrey Landscaping is fully insured and licensed to operate in the Maryland/DMV area, providing peace of mind for our clients.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our services, scheduling, and pricing."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Weekly Mowing",
              href: "/services#mowing",
            },
            {
              label: "Yard Cleanups",
              href: "/services#cleanups",
            },
            {
              label: "Mulching",
              href: "/services#mulching",
            },
            {
              label: "Landscaping",
              href: "/services#general",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/#about-metrics",
            },
            {
              label: "Reviews",
              href: "/reviews",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Jeffrey Landscaping. All rights reserved."
      bottomRightText="Built with care in DMV"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

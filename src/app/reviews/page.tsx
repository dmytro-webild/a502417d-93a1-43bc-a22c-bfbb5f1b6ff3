"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterSimple from '@/components/sections/footer/FooterSimple';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { CalendarCheck, MessageSquare, Star } from "lucide-react";

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

  <div id="all-testimonials" data-section="all-testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Gretchen I.",
          handle: "@GretchenI",
          testimonial: "The work was amazing and prompt. They went above and beyond.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-businesswoman-smiling-happy-standing-city_839833-16454.jpg",
          imageAlt: "Gretchen I.",
        },
        {
          id: "2",
          name: "Jim P.",
          handle: "@JimP",
          testimonial: "He is easy to communicate with and cares about his work.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-executive-with-big-smile-taking-selfie_23-2147562060.jpg",
          imageAlt: "Jim P.",
        },
        {
          id: "3",
          name: "Cheryl S.",
          handle: "@CherylS",
          testimonial: "Very careful, courteous, and reasonably priced. I've trusted them with my large yard for 9 years.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-beautiful-european-girl-with-smartphone-sitting-home-talking-mobile_1258-200140.jpg",
          imageAlt: "Cheryl S.",
        },
        {
          id: "4",
          name: "Robert D.",
          handle: "@RobertD",
          testimonial: "Professional and always on time. My lawn has never looked better. Highly recommend Jeffrey Landscaping!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/deaf-woman-communicating-through-sign-language_23-2148590375.jpg",
          imageAlt: "Robert D.",
        },
        {
          id: "5",
          name: "Jessica & Mark T.",
          handle: "@JessicaMarkT",
          testimonial: "We love their attention to detail! They truly go above and beyond, making our yard the envy of the neighborhood.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-adult-son-his-mature-father-holding-hands-while-greeting-each-other-kitchen_637285-10296.jpg",
          imageAlt: "Jessica & Mark T.",
        },
        {
          id: "6",
          name: "Sarah L.",
          handle: "@SarahL",
          testimonial: "Jeffrey Landscaping transformed my messy yard into a beautiful oasis. Their team is fantastic and very respectful of my property.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-smiling-kitchen_107420-12357.jpg",
          imageAlt: "Sarah L.",
        },
      ]}
      showRating={true}
      title="Our 5-Star Customer Feedback"
      description="Read what more happy homeowners have to say about Jeffrey Landscaping's commitment to quality, clear communication, and outstanding results."
    />
  </div>

  <div id="our-track-record" data-section="our-track-record">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "rating",
          icon: Star,
          title: "Average Rating",
          value: "5.0 / 5",
        },
        {
          id: "reviews",
          icon: MessageSquare,
          title: "Google Reviews",
          value: "18+",
        },
        {
          id: "experience",
          icon: CalendarCheck,
          title: "Years of Experience",
          value: "9+",
        },
      ]}
      title="Our Commitment to Excellence"
      description="Our long-standing presence and high customer satisfaction scores reflect our dedication to providing the best landscaping services in the DMV."
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

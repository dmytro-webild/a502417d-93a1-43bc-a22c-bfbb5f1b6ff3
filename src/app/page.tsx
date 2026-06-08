"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Shield, Star, Users } from "lucide-react";

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

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "plain",
      }}
      title="Your Trusted Partner for a Beautiful Lawn"
      description="Jeffrey Landscaping: 5-star rated, hardworking, and easy to communicate with. We provide reliable lawn care, mulching, and yard cleanups for homeowners in the Maryland/DMV area. Get a free quote today!"
      buttons={[
        {
          text: "Get a Free Quote",
          href: "/contact",
        },
        {
          text: "Call Now: (301) 905-2220",
          href: "tel:+13019052220",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/natural-grass-close-up_23-2148858214.jpg"
      imageAlt="Perfectly manicured green lawn of a residential home"
      mediaAnimation="opacity"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-happy-student-girl-with-dark-curly-hair-sitting-stairs-university-with-textbooks-knees-cup-coffee-go-hand-joyfully-looking-friend_574295-3958.jpg",
          alt: "Happy client smiling",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-positive-young-man-business-suit-showing-thumbs-up-smiling-like-something-good-p_1258-173568.jpg",
          alt: "Satisfied customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-couple-standing-front-camper-van_23-2148653441.jpg",
          alt: "Homeowner testimonial",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-aged-woman-park-grandma-white-hat_1157-41303.jpg",
          alt: "Elderly man with beautiful yard",
        },
        {
          src: "http://img.b2bpic.net/free-photo/couple-spending-time-forest_329181-12309.jpg",
          alt: "Smiling couple in their garden",
        },
      ]}
      avatarText="Trusted by hundreds of homeowners"
      marqueeItems={[
        {
          type: "text",
          text: "5-Star Service",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/fresh-green-leaves_1232-3444.jpg",
          alt: "Lush green lawn texture",
        },
        {
          type: "text",
          text: "Local Experts",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/gardening-tools_23-2148013551.jpg",
          alt: "Gardening tools in grass",
        },
        {
          type: "text",
          text: "Free Estimates",
        },
      ]}
    />
  </div>

  <div id="about-metrics" data-section="about-metrics">
      <AboutMetric
      useInvertedBackground={false}
      title="Why Homeowners Trust Jeffrey Landscaping"
      metrics={[
        {
          icon: Star,
          label: "5-Star Rating",
          value: "18 Reviews",
        },
        {
          icon: Shield,
          label: "Years in Service",
          value: "9+",
        },
        {
          icon: Users,
          label: "Happy Clients",
          value: "Long-Term",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="key-services" data-section="key-services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Weekly Lawn Mowing",
          description: "Keep your lawn pristine with our reliable weekly mowing, trimming, and edging services. We ensure a consistent, professional finish every time.",
          imageSrc: "http://img.b2bpic.net/free-photo/old-gardener-cuts-bush-with-large-metal-old-pruning-shears_169016-10697.jpg",
          imageAlt: "Lawnmower cutting grass on a residential property",
          buttonIcon: "ArrowRight",
        },
        {
          title: "Seasonal Yard Cleanups",
          description: "Prepare your yard for changing seasons with our comprehensive cleanups. We remove leaves, debris, and prune for healthy growth.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-taking-care-her-plants_23-2149037258.jpg",
          imageAlt: "Landscaper raking leaves during a fall yard cleanup",
          buttonIcon: "ArrowRight",
        },
        {
          title: "Mulching Garden Beds",
          description: "Enhance your garden's beauty and health with our mulching services. We use high-quality mulch to retain moisture and suppress weeds.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-tank-piece-russian-s-war-ukraine_23-2149437839.jpg",
          imageAlt: "Fresh mulch being spread in a garden bed",
          buttonIcon: "ArrowRight",
        },
        {
          title: "General Landscaping",
          description: "From garden design to shrub care, we handle all your general landscaping needs with care and expertise, bringing your vision to life.",
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view_7502-10152.jpg",
          imageAlt: "Beautifully designed residential garden with diverse plants",
          buttonIcon: "ArrowRight",
        },
      ]}
      title="Our Expert Landscaping Services"
      description="Jeffrey Landscaping offers a full range of reliable lawn care solutions to keep your property looking its best year-round. From routine maintenance to seasonal transformations, we've got you covered."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Gretchen I.",
          handle: "@GretchenI",
          testimonial: "The work was amazing and prompt. They went above and beyond.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-blonde-girl-posing-studio_176420-29646.jpg",
          imageAlt: "Gretchen I.",
        },
        {
          id: "2",
          name: "Jim P.",
          handle: "@JimP",
          testimonial: "He is easy to communicate with and cares about his work.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-looking-camera-lying-blanket-park_23-2148201656.jpg",
          imageAlt: "Jim P.",
        },
        {
          id: "3",
          name: "Cheryl S.",
          handle: "@CherylS",
          testimonial: "Very careful, courteous, and reasonably priced. I've trusted them with my large yard for 9 years.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-looking-her-husband_23-2148435724.jpg",
          imageAlt: "Cheryl S.",
        },
        {
          id: "4",
          name: "Robert D.",
          handle: "@RobertD",
          testimonial: "Professional and always on time. My lawn has never looked better. Highly recommend Jeffrey Landscaping!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-senior-businessman-with-gray-beard_1262-3872.jpg",
          imageAlt: "Robert D.",
        },
        {
          id: "5",
          name: "Jessica & Mark T.",
          handle: "@JessicaMarkT",
          testimonial: "We love their attention to detail! They truly go above and beyond, making our yard the envy of the neighborhood.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-woman-smiling-against-backdrop-jewelry-store-copy-space-with-joyful-scene-choosing-gifts-anniversary-christmas_166373-8861.jpg",
          imageAlt: "Jessica & Mark T.",
        },
      ]}
      showRating={true}
      title="What Our Valued Customers Say"
      description="Don't just take our word for it—see why homeowners in the DMV area consistently give Jeffrey Landscaping 5-star ratings for our exceptional service and dedication."
    />
  </div>

  <div id="contact-home" data-section="contact-home">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get Started"
      title="Ready for a Beautiful Yard?"
      description="Contact Jeffrey Landscaping today for a free, no-obligation quote. We're responsive, friendly, and ready to transform your outdoor space."
      imageSrc="http://img.b2bpic.net/free-photo/smiling-greenhouse-owner-posing-with-laptop-her-hands-talking-phone-having-many-flowers-glass-roof_158595-7108.jpg"
      imageAlt="Landscaper talking to a client about a quote"
      mediaAnimation="opacity"
      mediaPosition="right"
      inputPlaceholder="Enter your email"
      buttonText="Request a Free Quote"
      termsText="Prefer to call? Reach us directly at (301) 905-2220"
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

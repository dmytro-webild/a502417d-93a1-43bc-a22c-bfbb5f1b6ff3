"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

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

  <div id="services-details" data-section="services-details">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Regular Lawn Mowing & Trimming",
          description: "Our scheduled mowing, precise trimming, and crisp edging keep your lawn looking sharp, promoting healthy growth and a vibrant green appearance.",
          imageSrc: "http://img.b2bpic.net/free-photo/worker-is-cutting-grass-with-hose_7502-9835.jpg",
          imageAlt: "Precision lawn mowing service",
          buttonIcon: "Sprout",
        },
        {
          title: "Spring & Fall Yard Cleanups",
          description: "We prepare your yard for the changing seasons with thorough leaf removal, debris clearing, garden bed preparation, and shrub pruning.",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-with-waist-tool-bag_23-2147714899.jpg",
          imageAlt: "Seasonal yard cleanup with raking",
          buttonIcon: "Leaf",
        },
        {
          title: "Premium Mulching Services",
          description: "Enhance soil health, conserve moisture, and give your garden beds a polished look with our diverse range of high-quality mulch options.",
          imageSrc: "http://img.b2bpic.net/free-photo/grass-sprout-with-ground-small-shovel-work-garden_127675-2667.jpg",
          imageAlt: "Applying fresh mulch to garden beds",
          buttonIcon: "Trees",
        },
        {
          title: "Custom Garden Design & Installation",
          description: "From concept to completion, we create stunning, sustainable garden designs tailored to your preferences, adding curb appeal and value.",
          imageSrc: "http://img.b2bpic.net/free-photo/succulent_1127-3421.jpg",
          imageAlt: "Beautiful custom garden design",
          buttonIcon: "Palette",
        },
        {
          title: "Tree & Shrub Care",
          description: "Ensure the health and longevity of your trees and shrubs with our expert pruning, trimming, and maintenance services.",
          imageSrc: "http://img.b2bpic.net/free-photo/someone-trimming-bushes-with-garden-scissors_1157-37103.jpg",
          imageAlt: "Professional tree and shrub pruning",
          buttonIcon: "TreeDeciduous",
        },
        {
          title: "Seasonal Color Planting",
          description: "Add vibrant splashes of color to your landscape with our seasonal flower and plant installations, keeping your yard fresh and inviting.",
          imageSrc: "http://img.b2bpic.net/free-photo/pink-yellow-flowers-combination-inside-bamboo-vase_114579-2570.jpg",
          imageAlt: "Seasonal flower beds with colorful blooms",
          buttonIcon: "Flower",
        },
      ]}
      title="Comprehensive Landscaping Solutions"
      description="Jeffrey Landscaping provides a full suite of services designed to enhance and maintain the beauty of your property. We are dedicated to delivering top-tier results that exceed expectations."
    />
  </div>

  <div id="service-packages" data-section="service-packages">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "basic-lawn",
          name: "Basic Lawn Care",
          price: "$120/month",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-young-man-driving-lawn-mower_23-2149382199.jpg",
          imageAlt: "Basic lawn mowing service",
        },
        {
          id: "seasonal-beauty",
          name: "Seasonal Beauty Package",
          price: "$350/season",
          imageSrc: "http://img.b2bpic.net/free-photo/autumn-yellow-leaf_1150-12642.jpg",
          imageAlt: "Seasonal yard cleanup package",
        },
        {
          id: "garden-refresh",
          name: "Garden Refresh & Mulch",
          price: "$200",
          imageSrc: "http://img.b2bpic.net/free-photo/cement-background-crossed-by-diagonal-line-pebbles-stone_158595-6387.jpg",
          imageAlt: "Garden mulching service",
        },
        {
          id: "premium-landscape",
          name: "Premium Landscape Design",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/young-kids-trick-treating-halloween_53876-41218.jpg",
          imageAlt: "Custom landscape design",
        },
        {
          id: "tree-shrub-health",
          name: "Tree & Shrub Health",
          price: "$180",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-petrol-hedge-cutter-that-holding-afro-gardener_651396-1481.jpg",
          imageAlt: "Tree and shrub care service",
        },
        {
          id: "vibrant-planting",
          name: "Vibrant Seasonal Planting",
          price: "$150",
          imageSrc: "http://img.b2bpic.net/free-photo/different-flowers-frame_23-2147761791.jpg",
          imageAlt: "Seasonal flower planting service",
        },
      ]}
      title="Our Service Packages"
      description="We offer flexible packages to suit your needs, ensuring a beautiful and well-maintained outdoor space without the hassle."
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

"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, TrendingUp, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="medium"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Modules",
          id: "modules",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="3D Dropship Pro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "sparkles-gradient",
      }}
      title="Master Dropshipping with 3D Interactive Learning"
      description="Premium courses combining live mentorship, real-time case studies, and immersive 3D modules. Join 5,000 students earning $5K–$50K monthly."
      tag="Limited Time Offer"
      buttons={[
        {
          text: "Start Your Free Module Today",
          href: "#modules",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-graph-computer-illustration_23-2151884859.jpg",
          imageAlt: "3d dashboard ui dark mode ecommerce growth",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349213.jpg",
          imageAlt: "3d product mockup ecommerce glowing background",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-network-communications-background-with-plexus-design_1048-17688.jpg",
          imageAlt: "global supply chain network visualization 3d",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-graph-computer-illustration_23-2151884896.jpg",
          imageAlt: "software course interface dashboard glassmorphism",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/blue-orange-glitter-line-texture-background-trendy-style-copy-space_559531-10768.jpg",
          imageAlt: "financial growth chart 3d professional ui",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Advanced Security",
          description: "Bank-grade protection for your ecommerce backend operations.",
          imageSrc: "http://img.b2bpic.net/free-photo/cloud-with-key_1048-1668.jpg",
        },
        {
          title: "Expert Mentorship",
          description: "Direct access to 7-figure store operators for guidance.",
          imageSrc: "http://img.b2bpic.net/free-photo/light-bulb-left-side-with-white-background_187299-39887.jpg",
        },
        {
          title: "Global Logistics",
          description: "Proven strategies for shipping and international scaling.",
          imageSrc: "http://img.b2bpic.net/free-vector/business-designs-set_1209-55.jpg",
        },
      ]}
      title="Why Our Program Wins"
      description="We bridge the gap between theoretical dropshipping and real-world profitable execution."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Users,
          title: "Active Students",
          value: "5,000+",
        },
        {
          id: "m2",
          icon: TrendingUp,
          title: "Avg Monthly Gain",
          value: "$25K",
        },
        {
          id: "m3",
          icon: Award,
          title: "ROI within 3mo",
          value: "92%",
        },
      ]}
      title="Proven Results"
      description="The numbers speak for themselves after scaling through our 3D training modules."
    />
  </div>

  <div id="modules" data-section="modules">
      <ProductCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Phase 1: Foundations",
          price: "$99",
          imageSrc: "http://img.b2bpic.net/free-photo/black-friday-sale-banner-template-mobile-mockup_460848-6333.jpg",
        },
        {
          id: "p2",
          name: "Phase 2: Product Sourcing",
          price: "$199",
          imageSrc: "http://img.b2bpic.net/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294542.jpg",
        },
        {
          id: "p3",
          name: "Phase 3: Ads & Funnels",
          price: "$299",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-data-technology-background-with-low-poly-plexus-design_1048-17287.jpg",
        },
        {
          id: "p4",
          name: "Phase 4: Scaling Ops",
          price: "$399",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-graph-computer-illustration_23-2151884888.jpg",
        },
        {
          id: "p5",
          name: "Phase 5: Automation",
          price: "$499",
          imageSrc: "http://img.b2bpic.net/free-photo/blue-graph-chart-arrow-icon-sign-symbol-white-background-3d-illustration_56104-2004.jpg",
        },
        {
          id: "p6",
          name: "Phase 6: Exits",
          price: "$599",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-character-emerging-from-smartphone_23-2151336676.jpg",
        },
      ]}
      title="Core Course Modules"
      description="Interactive modules that visualize the journey from zero to scaling."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Changed my life",
          quote: "I reached my first $10k in month 3 thanks to the 3D walkthroughs.",
          name: "Sarah J.",
          role: "Entrepreneur",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg",
        },
        {
          id: "t2",
          title: "Practical skills",
          quote: "Finally a course that shows you the backend, not just theory.",
          name: "Michael B.",
          role: "Marketer",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-holding-tablet_23-2149442310.jpg",
        },
        {
          id: "t3",
          title: "Highly recommended",
          quote: "The 3D dashboards made the logistics part so easy to understand.",
          name: "Emily R.",
          role: "Owner",
          imageSrc: "http://img.b2bpic.net/free-photo/financial-department-team-leader-researching-marketing-ideas-while-analyzing-company-expenses-report-startup-project-manager-developing-budget-growth-solutions-while-brainstorming-promoting-strategy_482257-38904.jpg",
        },
        {
          id: "t4",
          title: "Worth every penny",
          quote: "Mentorship was the turning point for my business scaling.",
          name: "David K.",
          role: "Ecommerce Pro",
          imageSrc: "http://img.b2bpic.net/free-photo/man-solar-panels-plant-using-laptop-improve-solar-cells-efficiency_482257-119894.jpg",
        },
        {
          id: "t5",
          title: "Real ROI",
          quote: "Hit $50k monthly targets within 6 months of finishing the course.",
          name: "Jessica L.",
          role: "Business Owner",
          imageSrc: "http://img.b2bpic.net/free-photo/man-smiling_1187-3402.jpg",
        },
      ]}
      title="Student Success Stories"
      description="Join our community of over 5,000 successful dropshippers."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "lite",
          tag: "Starter",
          price: "$499",
          period: "/ lifetime",
          description: "Foundational course access and community.",
          button: {
            text: "Join Lite",
          },
          featuresTitle: "Core benefits",
          features: [
            "Full Module Access",
            "Community Forum",
            "Basic Updates",
          ],
        },
        {
          id: "pro",
          tag: "Growth",
          price: "$999",
          period: "/ lifetime",
          description: "Interactive modules and group mentorship.",
          button: {
            text: "Join Pro",
          },
          featuresTitle: "Everything in Lite plus",
          features: [
            "Interactive 3D Modules",
            "Group Mentorship",
            "Case Study Library",
          ],
        },
        {
          id: "elite",
          tag: "Master",
          price: "$2,499",
          period: "/ lifetime",
          description: "1-on-1 mentorship and full scaling support.",
          button: {
            text: "Join Elite",
          },
          featuresTitle: "Everything in Growth plus",
          features: [
            "1-on-1 Mentorship",
            "Direct Dev Support",
            "Lifetime Access",
          ],
        },
      ]}
      title="Investment Options"
      description="Choose the path that fits your current business needs."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "Is this for beginners?",
          content: "Yes, our modules start from absolute zero, covering both theory and advanced 3D-visualized implementation.",
        },
        {
          id: "faq2",
          title: "What tools do I need?",
          content: "Just a computer and a reliable internet connection. We provide the rest via our interactive platform.",
        },
        {
          id: "faq3",
          title: "Do you offer refunds?",
          content: "We offer a 14-day money-back guarantee for students who complete the first two modules.",
        },
      ]}
      sideTitle="Common Inquiries"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Need Advice?"
      description="Have questions about the program? Reach out to our support team and we will assist."
      inputs={[
        {
          name: "fullname",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your message",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/3d-rendering-people-avatars-zoom-call_23-2149576743.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/3d-background-with-hexagonal-shapes-texture_23-2150473197.jpg"
      logoText="3D Dropship Pro"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Help Center",
              href: "#",
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
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

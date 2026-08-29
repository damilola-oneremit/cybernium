export interface ServiceFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface HeadingPart {
  text: string;
  muted: boolean;
}

export interface Service {
  slug: string;
  name: string;
  megaIcon: string;
  megaDesc: string;
  badge: string;
  h1Muted: string;
  h1Solid: string;
  subtitle: string;
  /** "What's included" heading: lines of parts (muted = 60% opacity) */
  includedHeading: HeadingPart[][];
  features: ServiceFeature[];
}

export const services: Service[] = [
  {
    slug: 'it-infrastructure',
    name: 'IT Infrastructure',
    megaIcon: '/assets/mega-ion-server-8592acb3.svg',
    megaDesc: 'Servers, cloud, workstations.',
    badge: 'IT Infrastructure',
    h1Muted: 'Office and business technology,',
    h1Solid: 'ready before day one.',
    subtitle:
      "From a single office to a new headquarters, we plan, source, and deploy the servers, workstations, and systems your team needs to actually get to work — not just what's on a spec sheet.",
    includedHeading: [
      [{ text: 'Everything your ', muted: true }],
      [
        { text: 'infrastructure', muted: true },
        { text: 'needs', muted: false },
      ],
    ],
    features: [
      {
        icon: '/assets/svc-laptop-c76fa15f.svg',
        title: 'Workstation & endpoint setup',
        desc: 'Laptops, desktops, and peripherals configured and imaged before they reach your team.',
      },
      {
        icon: '/assets/svc-server-7160e738.svg',
        title: 'Server & storage deployment',
        desc: 'On-premise, cloud, or hybrid — sized to your business, not oversold.',
      },
      {
        icon: '/assets/svc-office-24ce4454.svg',
        title: 'Office technology planning',
        desc: 'Full technology plans for new offices, floors, or relocations.',
      },
      {
        icon: '/assets/svc-documents-26920e49.svg',
        title: 'Systems documentation',
        desc: "Every deployment documented, so nothing lives only in someone's head.",
      },
      {
        icon: '/assets/svc-maintenance-de0ce415.svg',
        title: 'Ongoing maintenance',
        desc: "Scheduled upkeep and troubleshooting once you're live.",
      },
      {
        icon: '/assets/svc-truck-583d8d06.svg',
        title: 'Migrations & relocations',
        desc: 'Moving office or consolidating locations, handled with minimal disruption.',
      },
    ],
  },
  {
    slug: 'networking',
    name: 'Networking',
    megaIcon: '/assets/mega-dashicons-networking-810727c9.svg',
    megaDesc: 'Cabling, wifi, connectivity',
    badge: 'networking',
    h1Muted: 'Connectivity that holds up,',
    h1Solid: 'not just on launch day',
    subtitle:
      "Structured cabling, enterprise Wi-Fi, and hardened network design — built for the business you have today and the one you're growing into.",
    includedHeading: [
      [{ text: 'Everything your ', muted: true }],
      [
        { text: 'connectivity', muted: true },
        { text: 'depends on', muted: false },
      ],
    ],
    features: [
      {
        icon: '/assets/net-cable-97631176.svg',
        title: 'Structured Cabling',
        desc: "Clean, labeled, documented cabling that won't need to be redone in two years.",
      },
      {
        icon: '/assets/net-wifi-94034162.svg',
        title: 'Enterprise Wi-Fi',
        desc: 'Coverage planned around your actual floor plan, not guesswork.',
      },
      {
        icon: '/assets/net-router-8e93e495.svg',
        title: 'Switches & Routing',
        desc: 'Configured for your traffic, not left on factory defaults.',
      },
      {
        icon: '/assets/net-security-579bb919.svg',
        title: 'Firewall & networking security',
        desc: 'Segmented and monitored against the basics that catch most businesses out.',
      },
      {
        icon: '/assets/net-wave-pulse-482b0d81.svg',
        title: 'Network monitoring',
        desc: "Visibility into what's happening on your network before it becomes a problem.",
      },
      {
        icon: '/assets/net-house-d36be6c7.svg',
        title: 'Multi-site rollouts',
        desc: 'One standardized design, replicated cleanly across every branch or office.',
      },
    ],
  },
  {
    slug: 'procurement',
    name: 'Procurement',
    megaIcon: '/assets/mega-streamline-ai-spark-6089622f.svg',
    megaDesc: 'Sourced, vetted equiment.',
    badge: 'procurement',
    h1Muted: 'The right equipment, sourced',
    h1Solid: 'without the back and forth',
    subtitle:
      'Laptops, servers, networking gear, and everything in between — sourced, vetted, and configured to your specification, from one order instead of a dozen vendors.',
    includedHeading: [
      [{ text: 'Everything you need to', muted: true }],
      [
        { text: 'source,', muted: true },
        { text: 'in one place', muted: false },
      ],
    ],
    features: [
      {
        icon: '/assets/boxicons-laptop-filled-f27963af.svg',
        title: 'Computer & Workstations',
        desc: 'Laptops, desktops, and monitors matched to how your team actually works.',
      },
      {
        icon: '/assets/flowbite-server-solid-14707fc7.svg',
        title: 'Servers & Storage',
        desc: 'Sized and specified for real workloads, not oversold.',
      },
      {
        icon: '/assets/fluent-server-16-filled-f3873a33.svg',
        title: 'Networking equipment',
        desc: 'Switches, routers, and access points from vendors we trust.',
      },
      {
        icon: '/assets/line-md-security-filled-ab533bff.svg',
        title: 'Security hardware',
        desc: 'CCTV, access control, and endpoint protection devices.',
      },
      {
        icon: '/assets/ri-key-line-b547b31b.svg',
        title: 'Software & Licensing',
        desc: 'Procurement and management of the licenses your systems depend on.',
      },
      {
        icon: '/assets/mynaui-box-solid-756b9884.svg',
        title: 'Vendor Coordination',
        desc: 'We deal with suppliers and logistics, so you deal with one invoice.',
      },
    ],
  },
  {
    slug: 'security',
    name: 'Security',
    megaIcon: '/assets/mega-shield-7618055b.svg',
    megaDesc: 'Protection for your systems',
    badge: 'security',
    h1Muted: 'Protection that works as one',
    h1Solid: 'system, not a patchwork',
    subtitle:
      'Firewalls, endpoint protection, CCTV, and access control — designed together, so nothing gets left as an afterthought.',
    includedHeading: [
      [
        { text: 'A system,', muted: false },
        { text: 'not a patchwork', muted: true },
      ],
    ],
    features: [
      {
        icon: '/assets/line-md-security-filled-8ce4435a.svg',
        title: 'Network Security',
        desc: 'Firewalls and segmentation configured for your actual traffic.',
      },
      {
        icon: '/assets/icon-park-solid-endpoint-displacement-3b56a54e.svg',
        title: 'Endpoint protection',
        desc: 'Every device covered, monitored, and kept current.',
      },
      {
        icon: '/assets/mdi-cctv-73ef2178.svg',
        title: 'CCTV',
        desc: 'Coverage planned around how your space is actually used.',
      },
      {
        icon: '/assets/boxicons-lock-filled-c027462b.svg',
        title: 'Access control',
        desc: 'Who can get in, where, and when — managed centrally.',
      },
      {
        icon: '/assets/mingcute-search-fill-e73d3cfd.svg',
        title: 'Security audits',
        desc: "An honest look at where you're exposed, before it's a problem.",
      },
      {
        icon: '/assets/bxs-error-745ef959.svg',
        title: 'Incident response',
        desc: 'A clear plan and a fast response if something does go wrong.',
      },
    ],
  },
  {
    slug: 'ai-automation',
    name: 'AI & Automation',
    megaIcon: '/assets/mega-robot-d33a0580.svg',
    megaDesc: 'Smarter, automated operations',
    badge: 'AI Automation',
    h1Muted: 'Automation built on infrastructure',
    h1Solid: 'we already manage for you',
    subtitle:
      'Practical AI agents for support, sales, and back-office work — with a human always in the loop for what matters.',
    includedHeading: [
      [
        { text: 'Where automation', muted: false },
        { text: 'actually helps', muted: true },
      ],
    ],
    features: [
      {
        icon: '/assets/fluent-person-support-24-filled-d42c5577.svg',
        title: 'Customer support agents',
        desc: 'Handle common questions instantly, escalate the rest to your team.',
      },
      {
        icon: '/assets/icon-park-solid-sales-report-fa1ed4e4.svg',
        title: 'Sales & lead qualification',
        desc: 'Follow up and qualify leads before they go cold.',
      },
      {
        icon: '/assets/basil-document-solid-b49385f3.svg',
        title: 'Document processing',
        desc: 'Extract, sort, and route documents without manual data entry.',
      },
      {
        icon: '/assets/ri-ai-agent-fill-b2e3988e.svg',
        title: 'Internal knowledge assistants',
        desc: 'Give your team instant answers from your own internal documentation.',
      },
      {
        icon: '/assets/reicon-wave-pulse-fd5728e7.svg',
        title: 'Workflow automation',
        desc: 'Connect the systems you already use so information moves without manual handoffs.',
      },
      {
        icon: '/assets/material-symbols-settings-675c6223.svg',
        title: 'Custom solutions',
        desc: "Something specific that doesn't fit a template? We'll scope it properly.",
      },
    ],
  },
];

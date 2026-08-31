export interface ArticleSection {
  heading?: string;
  /** Paragraphs; a leading "**Label:** text" pair renders the label bold inline */
  paragraphs: { lead?: string; text: string }[];
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  detailSubtitle: string;
  author: string;
  date: string;
  readTime: string;
  thumb: string;
  intro: string;
  sections: ArticleSection[];
}

/*
 * The Figma file designs one full article (the AI Automation piece).
 * The other two articles exist in the design only as cards (title + subtitle);
 * their bodies below are written to match the design's tone so the card links
 * resolve to real pages instead of 404s.
 */
export const articles: Article[] = [
  {
    slug: 'what-ai-automation-actually-looks-like',
    title: 'What AI Automation actually looks like for a small operations team',
    subtitle:
      'Not a chatbot for it’s own sake, a specific repetitive task taken off someone’s plate',
    detailSubtitle:
      "Not a chatbot for its own sake — a specific, repetitive task taken off someone's plate.",
    author: 'Cybernium Team',
    date: '20 August 2026',
    readTime: '4 mins read',
    thumb: '/assets/blog-detail-thumb-d83dfe07.webp',
    intro:
      '"AI automation" tends to conjure something big and abstract — a system that somehow runs the business. In practice, for a small operations team, it\'s almost always smaller and more specific than that. It\'s one repetitive task, taken off someone\'s plate.',
    sections: [
      {
        heading: 'It starts with a task, not a technology',
        paragraphs: [
          {
            text: 'The useful starting question isn\'t "where can we use AI." It\'s "what does someone on the team do every day that\'s repetitive, rule-based, and eats time they\'d rather spend elsewhere." Answering that first avoids the common trap of bolting AI onto a process that didn\'t need it.',
          },
        ],
      },
      {
        heading: 'What this actually looks like in practice',
        paragraphs: [
          {
            lead: 'Support triage:',
            text: ' sorting incoming requests by urgency and routing them, instead of a person reading every single one first.',
          },
          {
            lead: 'Lead qualification:',
            text: ' following up on incoming enquiries and gathering basic details before a person ever gets involved.',
          },
          {
            lead: 'Document handling:',
            text: ' pulling the relevant fields out of invoices, forms, or RFQs instead of someone retyping them into a system.',
          },
          {
            lead: 'Internal Q&A',
            text: ' giving the team instant answers from existing internal documentation instead of interrupting someone who already knows.',
          },
        ],
      },
      {
        heading: '"Human in the loop" isn\'t a caveat, it\'s the design',
        paragraphs: [
          {
            text: 'The useful version of this isn\'t "AI handles it, full stop." It\'s AI handling the repetitive first pass and flagging anything unusual or high-stakes for a person. The goal is removing the tedious 80%, not removing judgment from the 20% that actually needs it.',
          },
        ],
      },
      {
        heading: 'Where it tends to go wrong',
        paragraphs: [
          {
            text: 'Most disappointing AI projects share the same root cause: they automated a process that was already broken, or tried to solve everything at once instead of one task well. The ones that work start narrow, prove themselves, and expand from there.',
          },
        ],
      },
      {
        heading: 'The short version',
        paragraphs: [
          {
            text: 'If there\'s a task on your team that\'s repetitive, well-defined, and mildly dreaded, that\'s usually a better starting point for automation than any abstract "we should be using AI" conversation.',
          },
        ],
      },
    ],
  },
  {
    slug: 'basic-security-gaps-growing-businesses-miss',
    title: 'The basic security gaps most growing businesses miss',
    subtitle:
      'Most breaches don’t start with something exotic, they start with something boring nobody fixed',
    detailSubtitle:
      "Most breaches don't start with something exotic — they start with something boring nobody fixed.",
    author: 'Cybernium Team',
    date: '12 August 2026',
    readTime: '3 mins read',
    thumb: '/assets/blog-detail-thumb-d83dfe07.webp',
    intro:
      "Security incidents at growing businesses rarely involve sophisticated attackers. Far more often the way in is something mundane: a default password that never got changed, a firewall left on factory settings, or an ex-employee's account that nobody remembered to close.",
    sections: [
      {
        heading: 'The boring gaps that matter most',
        paragraphs: [
          {
            lead: 'Default credentials:',
            text: ' routers, cameras, and printers shipped with admin/admin and left that way.',
          },
          {
            lead: 'Stale accounts:',
            text: ' access that outlives the person or the project it was created for.',
          },
          {
            lead: 'Flat networks:',
            text: ' one network for everything, so one compromised device can reach it all.',
          },
          {
            lead: 'Unpatched systems:',
            text: ' updates deferred indefinitely because nobody owns the schedule.',
          },
        ],
      },
      {
        heading: 'Why they persist',
        paragraphs: [
          {
            text: "None of these gaps are hard to fix. They persist because they sit between responsibilities — the internet provider installed the router, a contractor fitted the cameras, and nobody is accountable for the whole picture. That's a coordination problem more than a technology problem.",
          },
        ],
      },
      {
        heading: 'The short version',
        paragraphs: [
          {
            text: 'Before budgeting for advanced tooling, close the boring gaps: change defaults, remove stale access, segment the network, and put someone’s name against patching. That alone rules out most of the incidents we get called in to clean up.',
          },
        ],
      },
    ],
  },
  {
    slug: 'plan-office-network-before-you-sign-a-lease',
    title: 'How to plan an office network before you sign a lease',
    subtitle:
      'The best time to think about cabling and Wi-Fi is before you’ve signed anything.',
    detailSubtitle:
      "The best time to think about cabling and Wi-Fi is before you've signed anything.",
    author: 'Cybernium Team',
    date: '4 August 2026',
    readTime: '3 mins read',
    thumb: '/assets/blog-detail-thumb-d83dfe07.webp',
    intro:
      'Most office network problems are decided long before the first cable is run — they’re decided when the lease is signed. A space that looks perfect on a walkthrough can be quietly hostile to connectivity.',
    sections: [
      {
        heading: 'What to check during the walkthrough',
        paragraphs: [
          {
            lead: 'Incoming connectivity:',
            text: ' which providers actually service the building, and at what real-world speeds.',
          },
          {
            lead: 'Riser and duct access:',
            text: ' whether there is a sane path to bring cabling to your floor.',
          },
          {
            lead: 'A comms room:',
            text: ' somewhere ventilated and lockable for your rack — not a coat cupboard.',
          },
          {
            lead: 'Construction materials:',
            text: ' concrete and steel that will shape your Wi-Fi coverage plan.',
          },
        ],
      },
      {
        heading: 'Plan the network with the floor plan',
        paragraphs: [
          {
            text: 'Desk positions, meeting rooms, and access points should be planned together. Retrofitting cabling after the fit-out costs multiples of doing it during, and "we’ll just use Wi-Fi for everything" is how offices end up with dead zones at the desks that matter.',
          },
        ],
      },
      {
        heading: 'The short version',
        paragraphs: [
          {
            text: 'Bring connectivity questions into the lease conversation. An hour of network planning before signing routinely saves weeks of disruption after moving in.',
          },
        ],
      },
    ],
  },
];

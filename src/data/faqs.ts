/*
 * Questions come from the Figma FAQs section. Only the first item is expanded
 * in the design, so only its answer is design-specified; the remaining answers
 * are written to match the design's tone.
 */
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on the scope - a single-office setup can take days, a multi-branch rollout takes longer. We’ll give you a realistic timeline as part of your quote, not a guess.',
  },
  {
    question: 'Do you only work in major cities?',
    answer:
      'No. We’re based in Ibadan and work wherever the project is — offices, warehouses, and multi-branch operations across Nigeria. Distance affects logistics, not whether we’ll take the work.',
  },
  {
    question: 'What happens after I submit a quote request?',
    answer:
      'We review what you’ve told us, follow up within one business day to confirm scope, and then send a clear, itemised quotation — no obligation and no sales pitch.',
  },
  {
    question: 'Can you work with the existing equipments we have?',
    answer:
      'Yes. We audit what you already own first and build around anything that’s still fit for purpose. You only replace what genuinely needs replacing.',
  },
  {
    question: 'Do you offer ongoing support, or just the initial setup?',
    answer:
      'Both. Every deployment comes documented and tested, and we stay reachable after go-live — a system is only as good as the support behind it.',
  },
];

export interface StepItem {
  id: string;
  stepNumber: string;
  description: string;
  imageSrc: string;
}

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    id: 'step-1',
    stepNumber: 'Step One',
    description:
      'Input your production brief—location, shoot duration, crew size, and budget—in plain language or industry speak. Gaffer AI immediately parses your requirements to generate a tailored workspace template.',
    imageSrc: '/assets/images/gafferAI/image-1.png'
  },
  {
    id: 'step-2',
    stepNumber: 'Step Two',
    description:
      'Review matched department heads based on verified experience and availability. Secure your team instantly with standardized digital deal memos and automated contract execution directly inside the platform.',
    imageSrc: '/assets/images/gafferAI/image-2.png'
  },
  {
    id: 'step-3',
    stepNumber: 'Step Three',
    description:
      'Fine-tune camera, lighting, and grip packages optimized for your specific shoot parameters. Gaffer AI cross-checks lens mounts, power requirements, and accessory compatibility to prevent on-set bottlenecks.',
    imageSrc: '/assets/images/gafferAI/image-3.png'
  },
  {
    id: 'step-4',
    stepNumber: 'Step Four',
    description:
      'Collaborate seamlessly across active productions with real-time messaging, document sharing, and instant crew broadcast updates to keep every department aligned.',
    imageSrc: '/assets/images/gafferAI/image-4.png'
  },
  {
    id: 'step-5',
    stepNumber: 'Step Five',
    description:
      'Access live technical assistance throughout your shoot window. Get immediate troubleshooting for gear queries, emergency equipment swap-outs, or quick crew additions directly through your production workspace.',
    imageSrc: '/assets/images/gafferAI/image-5.png'
  },
];
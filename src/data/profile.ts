import heroPortrait from '@/assets/frank-wang-hero-portrait.webp';

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Paper {
  title: string;
  arxivId: string;
  venue: string;
  venueFull: string;
  year: string;
  role: string;
  tags: string[];
  problemIdea: string;
  method: string;
  result: string;
  thumbnail?: string;
  thumbnailAlt?: string;
}

export interface ResearchProject {
  title: string;
  role: string;
  organization: string;
  period: string;
  tags: string[];
  description: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  awards?: string[];
}

export interface Venture {
  name: string;
  role: string;
  status: string;
  shortDescription: string;
  description: string;
  url: string;
  logo: string;
  logoAlt: string;
}

export const profile = {
  name: 'WANG Can',
  displayName: 'Frank Wang',
  chineseName: '王璨',
  handle: 'frank.wang',
  email: 'wangcan.frank@hotmail.com',
  github: 'https://github.com/healgney',
  githubHandle: 'healgney',
  tagline: 'Multimodal Vision Researcher',
  bio: 'I study how multimodal models see, reason, and justify their decisions. My work focuses on visual intelligence that is not only capable, but grounded in evidence we can inspect.',
  heroMeta: 'MSc · The Hong Kong Polytechnic University',
  heroImage: {
    src: heroPortrait,
    alt: 'Oil-painted portrait of Frank Wang looking toward a rocket launch outside a window.',
    width: 1023,
    height: 1537,
  } as HeroImage,

  venture: {
    name: 'Swishly',
    role: 'Founder & Builder',
    status: 'In Active Development',
    shortDescription: 'AI basketball training app',
    description:
      'An early-stage AI basketball training app designed to use mobile computer vision to help athletes review shot outcomes, release mechanics, and training patterns—without wearable sensors.',
    url: 'https://swishly.app',
    logo: '/swishly-logo.png',
    logoAlt: 'Swishly basketball-and-hoop logo',
  } as Venture,

  researchInterests: [
    'Multimodal Learning',
    'Visual Grounding & Reasoning',
    'AI-Generated Image/Video Forensics',
    'Image & Video Generation',
  ],

  education: [
    {
      institution: 'The Hong Kong Polytechnic University',
      degree: 'MSc in Urban Informatics and Smart Cities',
      period: '2022.9 - 2024.10',
    },
    {
      institution: 'Capital Normal University',
      degree: 'BSc in Geographic Information Science',
      period: '2018.9 - 2022.6',
      awards: [
        'Outstanding Graduate (2022)',
        'University First-Class Scholarship (2021)',
        'University Third-Class Scholarship (2020)',
      ],
    },
  ] as EducationItem[],

  papers: [
    {
      title: 'LaP-Forensics: Latent-Pixel Consistency Guided Multimodal Reasoning for Deepfake Detection',
      arxivId: 'arXiv:2607.25962',
      venue: 'ACM MM 2026',
      venueFull: 'CCF-A',
      year: '2026',
      role: 'First Author',
      tags: ['#Deepfake Detection/Localization', '#MLLM', '#DDIM', '#SAM', '#SFT', '#GRPO'],
      thumbnail: '/lap-forensics-motivation.jpg',
      thumbnailAlt:
        'LaP-Forensics motivation figure comparing RGB-only forensic reasoning with reconstruction-based compatibility cues and artifact localization.',
      problemIdea:
        'RGB-only MLLMs can produce plausible forensic explanations without evidence grounded in actual image artifacts.',
      method:
        'Fuses RGB features with DDIM inversion–reconstruction residuals, then uses Where–What–Why reasoning to prompt SAM for localization.',
      result:
        '72.19% mIoU / 63.62% F1 on SynthScars, plus +8.24-point average UniversalFakeDetect accuracy over baseline.',
    },
  ] as Paper[],

  projects: [
    {
      title: 'AI Dance Video Pose Transfer Generation Based on Wan2.1',
      role: 'Research Project',
      organization: 'INiT:Ai CO.',
      period: '2025.8 - 2025.10',
      tags: ['#Wan2.1', '#LoRA', '#DiffSynth', '#Diffusion Video'],
      description: [
        'Built a 5,000+ video dance dataset and fine-tuned Wan2.1-VACE with DiffSynth/LoRA.',
        'Achieved enhanced pose fidelity and identity consistency with the fine-tuned diffusion model.',
      ],
    },
    {
      title: 'Real-Time 3D Hand Pose Estimation via Asynchronous RGB-Event Fusion',
      role: 'Research Project',
      organization: 'DVSense CO.',
      period: '2024.8 - 2025.1',
      tags: ['#3D Reconstruction', '#Pose Estimation', '#Event Camera', '#Multimodal Fusion', '#MANO'],
      description: [
        'Designed an asynchronous RGB-event fusion framework with a cached slow branch for multi-scale frame-guided hand structure features and a fast event-buffer branch for high-frequency motion cues between RGB frames.',
        'Combined deformable spatiotemporal alignment with MANO-based two-hand parameter prediction to produce temporally responsive 3D joints and meshes, improving MPJPE by 5 mm / 52% over a single-RGB baseline while reducing latency by 20 ms.',
      ],
    },
    {
      title: 'Building Change Detection on Panoramic Street View Images',
      role: "Master's Graduation Dissertation",
      organization: 'The Hong Kong Polytechnic University',
      period: '2023.8 - 2024.4',
      tags: ['#SVCD', '#YOLO', '#ViT', '#Feature Matching', '#End-to-End Detection'],
      description: [
        'Formulated street-view building change detection as instance-level visual inconsistency localization under viewpoint shift and occlusion.',
        'Built a 3k+ image-pair / 10k+ instance benchmark with Siamese ViT-feature matching, improving recall by 37% and accuracy by 16%.',
      ],
    },
  ] as ResearchProject[],

  experience: [
    {
      company: 'DVSENSE (Beijing) Technology Co., Ltd.',
      title: 'Algorithm Engineer',
      period: '2024.8 - Present',
      location: 'Beijing, China',
      highlights: [
        'Conducted multimodal RGB-event reconstruction research, including dataset construction, model validation, and robustness evaluation for challenging real-world hand-motion scenes.',
        'Developed AI Customer Service based on Qwen3 with RAG, including retrieval system design, knowledge base construction, and response quality evaluation.',
      ],
    },
    {
      company: 'INiT:Ai CO.',
      title: 'AIGC Algorithm Development (Remote)',
      period: '2025.8 - 2025.10',
      type: 'Remote',
      highlights: [
        'Conducted cutting-edge generative video research and pose transfer pipelines using Wan2.1 and diffusion video models.',
      ],
    },
    {
      company: 'The Hong Kong Polytechnic University',
      title: 'Research Assistant',
      period: '2022.8 - 2023.8',
      location: 'Hong Kong (Otto Poon Fund Institute for Smart Cities)',
      highlights: [
        'GBA Big Data Platform: Land-Use Category Conversion System via large-scale Remote Sensing (RS) Image Segmentation (Deep Learning, Qt).',
        'Engineered an enterprise-grade interactive Data Annotation System for geospatial intelligence.',
      ],
    },
  ] as ExperienceItem[],

  skills: {
    modelsAndMethods: [
      'MLLMs',
      'Diffusion Models',
      'Transformers',
      'CNNs',
      'CLIP',
      'SAM',
      'LoRA',
      'SFT',
      'GRPO',
      'RAG',
    ],
    mlPlatforms: ['PyTorch', 'HuggingFace Transformers', 'ComfyUI', 'DiffSynth'],
    programmingAndSystems: ['Python', 'C++', 'LaTeX', 'Linux', 'Git', 'Docker'],
    languages: [
      'Mandarin (Native)',
      'English (IELTS 7, CET-4/6 550+)',
      'Basic Cantonese',
      'Basic French',
    ],
    multimedia: [
      'Photography',
      'Video Editing',
      'Graphic Design',
      'AI-Aided Automation Pipeline for Media Production',
    ],
    hobbies: ['Basketball', 'Skiing', 'Kayaking', 'Photography', 'Hip-Hop'],
  },
};

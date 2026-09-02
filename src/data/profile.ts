import type { Profile } from '@/types/profile';

export const profile: Profile = {
  name: 'Your Name',
  handle: 'your-handle',
  tagline: 'Research Engineer · Generative Vision · Multimodal AI',
  location: 'Beijing / Remote',
  bio: 'I build systems at the intersection of computer vision, generative models, and AIGC forensics — with a bias toward results that ship.',
  socials: [
    { kind: 'github', href: 'https://github.com/your-handle' },
    { kind: 'scholar', href: 'https://scholar.google.com/citations?user=YOUR_ID' },
    { kind: 'email', href: 'mailto:you@example.com' },
    { kind: 'cv', href: 'cv.pdf' },
    { kind: 'linkedin', href: 'https://www.linkedin.com/in/your-handle/' },
  ],
  about: {
    interests: [
      'Generative Models (Diffusion / Flow)',
      'Multimodal Perception',
      'AIGC Forensics & Watermarking',
      'Efficient Inference',
    ],
    skills: [
      'PyTorch',
      'JAX',
      'CUDA / Triton',
      'Diffusers',
      'TensorRT',
      'TypeScript',
      'React',
      'Linux / Slurm',
    ],
    currentFocus:
      'Building robust detectors for diffusion-generated imagery and exploring controllable generation at sub-second latency.',
  },
  projects: [
    {
      title: 'Diffusion Forensics Toolkit',
      tags: ['Diffusion', 'Detection', 'Robustness'],
      problem:
        'Existing AIGC detectors collapse under common post-processing (JPEG, resize, social-media pipelines).',
      method:
        'Frequency-domain prompts + lightweight ViT adapter, trained with a curriculum of degradations to learn invariances.',
      result:
        '+12.4 AUC over the strongest open baseline on a held-out wild benchmark; 4.2 ms inference on a single 3090.',
      links: [
        { label: 'Code', href: 'https://github.com/your-handle/diffusion-forensics' },
        { label: 'Paper', href: 'https://arxiv.org/abs/0000.00000' },
      ],
      accent: 'cyan',
    },
    {
      title: 'Multimodal Retrieval Engine',
      tags: ['CLIP', 'Retrieval', 'Systems'],
      problem:
        'Production teams need sub-100ms image-text retrieval across 50M assets without sacrificing recall.',
      method:
        'Two-stage retrieval: distilled CLIP-S encoder + IVF-PQ index with on-GPU rerank using a fine-tuned cross-encoder.',
      result:
        'Recall@10 +6.1 pts vs. open-CLIP baseline; p95 latency 78 ms at 50M-vector scale.',
      links: [
        { label: 'Demo', href: 'https://example.com/demo' },
        { label: 'Write-up', href: 'https://example.com/post' },
      ],
      accent: 'violet',
    },
    {
      title: 'Real-time AIGC Watermark',
      tags: ['Watermark', 'Diffusion', 'Provenance'],
      problem:
        'Invisible watermarks for diffusion outputs must survive cropping, compression, and re-encoding by generative pipelines.',
      method:
        'Latent-space message embedding aligned with the diffusion prior; extraction is a tiny CNN with adversarial training.',
      result:
        '94% extraction accuracy under combined JPEG-Q40 + 0.6× resize; <2% FID degradation.',
      links: [{ label: 'Paper', href: 'https://arxiv.org/abs/0000.00000' }],
      accent: 'amber',
    },
  ],
  publications: [
    {
      kind: 'paper',
      title: 'Robust Detection of Diffusion-Generated Imagery via Frequency Prompts',
      venue: 'CVPR',
      year: 2025,
      authors: 'Y. Name, A. Coauthor, B. Coauthor',
      summary:
        'A lightweight ViT adapter conditioned on frequency-domain prompts substantially improves robustness to common image-processing attacks.',
      href: 'https://arxiv.org/abs/0000.00000',
      badges: ['Oral'],
    },
    {
      kind: 'paper',
      title: 'Latent-Space Watermarking for Diffusion Models',
      venue: 'NeurIPS',
      year: 2024,
      authors: 'Y. Name, C. Coauthor',
      summary:
        'We hide robust messages inside the latent space of pretrained diffusion models with negligible quality loss.',
      href: 'https://arxiv.org/abs/0000.00000',
    },
    {
      kind: 'blog',
      title: 'A Pragmatic Tour of AIGC Detection in 2025',
      year: 2025,
      summary:
        'What works in production, what does not, and the open problems worth your time.',
      href: 'https://example.com/post',
    },
    {
      kind: 'demo',
      title: 'CLIP-Retrieval Playground',
      year: 2025,
      summary: 'Try the multimodal retrieval engine on 1M open-domain images.',
      href: 'https://example.com/demo',
    },
  ],
};

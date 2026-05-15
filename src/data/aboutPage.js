/**
 * About page narrative — structure inspired by industry “Our Company” pages,
 * written specifically for Editor Xpert (not copied from third-party sites).
 */

export const ABOUT_PAGE = {
  founder: {
    roleLabel: 'Founder & CEO',
    heading: 'Meet Our Founder',
    name: 'Muhammad Usama',
    bio: [
      'Muhammad Usama is the Founder of Editor Xpert. Driven by a passion for visual storytelling and scalable channel operations, he built the studio around one idea: creators should spend time on strategy—not endless edits and upload logistics.',
      'What began as focused video editing work has grown into a full production partner for faceless channels, brands, and educators: daily editing, thumbnails, publishing, and systems that keep uploads on schedule. Under his direction, Editor Xpert combines editorial craft with repeatable workflows so serious channels can scale without hiring an entire in-house team.',
    ],
  },

  aboutUs: {
    title: 'About us',
    body:
      'In 2026 and beyond, we are focused on helping creators grow in ways that matter: predictable output, premium polish, and smarter publishing—not vanity metrics alone. From strengthening your upload rhythm to connecting content with audience intent, we deliver YouTube automation and video production support so your brand advances with clarity and momentum.',
  },

  history: {
    eyebrow: 'The journey',
    title: 'From editing desks to full channel support',
    body:
      'Editor Xpert has evolved alongside the creator economy—supporting channels that need more than one-off edits: documentary-style storytelling, fast-turn daily cuts, thumbnail systems, SEO-minded titles, and scheduling that respects your niche. We work with creators and brands locally and internationally, combining proven workflows with fresh creative execution so small channels can professionalize and established channels can sustain volume without burning out their team.',
  },

  strategic: {
    title: 'Our strategic approach to delivering results',
  },

  /** Wavy roadmap on About — order matches peak / trough alternation */
  strategicSteps: [
    {
      title: 'Content Strategy & Planning',
      desc:
        'We identify winning ideas and build a clear direction that aligns with audience demand and growth goals',
      peak: true,
    },
    {
      title: 'Creative Production',
      desc:
        'We turn concepts into high-quality visuals and engaging content that holds attention and builds retention',
      peak: false,
    },
    {
      title: 'Performance Optimization',
      desc:
        'We refine titles, thumbnails, and SEO to improve clicks, watch time, and overall video reach',
      peak: true,
    },
    {
      title: 'Growth Scaling System',
      desc:
        'We use data-driven insights to continuously improve results and scale channels consistently over time',
      peak: false,
    },
  ],

  tools: {
    title: 'Creative tools we use',
    subtitle: 'Industry-standard software for edit, motion, color, and design—so deliverables stay broadcast-ready.',
    items: [
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'DaVinci Resolve',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Audition',
    ],
  },

  process: {
    title: 'How we make it happen',
    body:
      'Editor Xpert helps brands and creators win on YouTube with a clear, repeatable pipeline: intake, editorial, packaging, and publishing. Whether you are scaling a faceless channel or leveling up a brand presence, we align on goals, lock a production cadence, and execute with quality checks—so results show up in watch time, consistency, and growth—not just tasks completed.',
  },

  pillars: [
    {
      step: '1',
      title: 'Our mission',
      text:
        'Help creators grow with simple, smart, and effective production support—daily editing, thumbnails, publishing, and channel operations that respect your niche and your audience.',
    },
    {
      step: '2',
      title: 'Our vision',
      text:
        'Build a future where every serious channel can publish at a professional standard—without building a full in-house studio—through dependable workflows and creative excellence.',
    },
    {
      step: '3',
      title: 'Our strategies',
      text:
        'Blend proven editorial craft with data-aware publishing: pacing, packaging, titles, and scheduling tuned for retention and discovery—plus iteration until the workflow fits your channel.',
    },
    {
      step: '4',
      title: 'Our results',
      text:
        'Outcomes you can feel: steadier uploads, stronger packaging, clearer positioning, and less operational drag—so energy goes into content strategy and growth.',
    },
  ],
}

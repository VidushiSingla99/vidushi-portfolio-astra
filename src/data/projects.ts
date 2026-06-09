export const projects = [
  {
    slug: "virtual-analytics-workflow",

    title: "Virtual Analytics Workflow",

    tagline:
      "AI-powered analytics platform that transforms CSV data into actionable insights and visual reports.",

    description:
      "Upload CSV datasets and generate AI-assisted insights, summaries, and visualizations.",

    overview:
      "An AI-assisted analytics platform that enables users to upload CSV datasets and generate actionable insights, visual summaries, and interactive reports without requiring technical expertise.",

    problem:
      "Business users often relied on manual spreadsheet analysis, making it difficult to extract insights quickly from large datasets and delaying decision-making.",

    solution:
      "Designed and implemented a React-based analytics interface that processes uploaded datasets, generates AI-assisted summaries, and presents results through interactive visualizations and reporting workflows.",

    architecture: [
      "React-based frontend architecture",
      "CSV parsing and validation layer",
      "AI-powered insight generation workflows",
      "Interactive charting and visualization system",
      "Reusable reporting components"
    ],

    challenges: [
      "Handling datasets with varying structures and quality",
      "Designing flexible visualizations for multiple data types",
      "Creating reliable AI prompts for structured datasets",
      "Maintaining responsiveness while processing larger files"
    ],

    results: [
      "Reduced time required for manual dataset analysis",
      "Enabled non-technical users to extract insights independently",
      "Created a scalable foundation for future analytics capabilities",
      "Improved accessibility of business intelligence workflows"
    ],

    stack: [
      "React",
      "TypeScript",
      "OpenAI",
      "Chart.js"
    ]
  },

  {
    slug: "workflow-builder",

    title: "Workflow Builder",

    tagline:
      "Visual drag-and-drop workflow orchestration platform for automation and process management.",

    description:
      "Node-based workflow editor with reusable components and dynamic workflow execution.",

    overview:
      "A visual workflow orchestration platform that enables users to create, configure, and manage automation pipelines through an intuitive drag-and-drop interface.",

    problem:
      "Users needed a no-code solution for building complex workflows while maintaining flexibility, scalability, and ease of use.",

    solution:
      "Architected and implemented a node-based workflow editor with dynamic configuration panels, reusable workflow components, and persistent state management. The platform was designed to support future workflow types and integrations without requiring major UI changes.",

    architecture: [
      "React component architecture",
      "Zustand-based state management",
      "Node relationship management system",
      "Dynamic workflow configuration panels",
      "Persistent workflow storage and restoration"
    ],

    challenges: [
      "Managing relationships between interconnected workflow nodes",
      "Maintaining performance as workflows increased in complexity",
      "Designing extensible workflow schemas",
      "Ensuring reliable persistence and restoration of workflow state"
    ],

    results: [
      "Improved workflow creation efficiency through visual editing",
      "Enabled scalable workflow configuration using reusable node architecture",
      "Reduced engineering effort required to introduce new workflow types",
      "Established a foundation for future automation capabilities"
    ],

    stack: [
      "React",
      "TypeScript",
      "Zustand"
    ]
  },

  {
    slug: "personal-portfolio",

    title: "Personal Portfolio",

    tagline:
      "Modern developer portfolio built with Astro, focused on performance, maintainability, and project storytelling.",

    description:
      "Portfolio showcasing experience, projects, and engineering case studies.",

    overview:
      "A modern developer portfolio built using Astro and Tailwind CSS to showcase professional experience, technical projects, and engineering case studies.",

    problem:
      "Traditional portfolio sites often rely heavily on client-side rendering and generic templates, resulting in slower performance and limited flexibility.",

    solution:
      "Built a static-first architecture using Astro, leveraging reusable components, dynamic routes, and data-driven content generation to deliver a fast and maintainable experience.",

    architecture: [
      "Astro static-site generation",
      "Component-driven architecture",
      "Dynamic project routing using file-based routing",
      "Tailwind CSS design system",
      "Reusable data-driven project pages"
    ],

    challenges: [
      "Designing a reusable component architecture",
      "Implementing dynamic project routes",
      "Maintaining strong performance while creating an engaging UX",
      "Creating a scalable structure for future projects and content"
    ],

    results: [
      "Achieved fast page-load performance through static generation",
      "Created a maintainable architecture for future portfolio growth",
      "Improved project storytelling through detailed case studies",
      "Provided a professional platform for showcasing engineering work"
    ],

    stack: [
      "Astro",
      "TypeScript",
      "Tailwind CSS"
    ]
  }
];
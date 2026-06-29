import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed resources
  const resources = [
    {
      slug: "founder-os",
      title: "Founder OS",
      description: "My complete operating system for running a startup solo.",
      category: "Founder OS",
      published: true,
      featured: true,
    },
    {
      slug: "eu-ai-act-cheatsheet",
      title: "EU AI Act Cheatsheet",
      description: "One-page reference for AI founders shipping to Europe.",
      category: "AI Trust Toolkit",
      published: true,
      featured: true,
    },
    {
      slug: "cold-email-crm",
      title: "Cold Email CRM",
      description: "The exact Notion CRM I use for enterprise outreach.",
      category: "Enterprise Sales OS",
      published: true,
      featured: false,
    },
    {
      slug: "founder-prompt-library",
      title: "Founder Prompt Library",
      description: "50+ prompts I use daily for research, writing, strategy.",
      category: "Prompt Library",
      published: true,
      featured: false,
    },
  ];

  for (const resource of resources) {
    await prisma.resource.upsert({
      where: { slug: resource.slug },
      update: {},
      create: resource,
    });
  }

  console.log("✅ Database seeded");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

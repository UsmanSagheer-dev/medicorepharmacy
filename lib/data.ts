export const siteConfig = {
  appUrl: "https://medicore-hms.vercel.app/auth/login",
  demoEndpoint: "",
  trialLabel: "Free Trial",
}

export const benefits = [
  {
    icon: "receipt",
    title: "Fast Medicine Billing",
    text: "Process sales quickly with medicine search, barcode scanning, and instant receipt generation.",
  },
  {
    icon: "boxes",
    title: "Smart Stock Management",
    text: "Track inventory across batches, set reorder points, and get low-stock alerts automatically.",
  },
  {
    icon: "alert",
    title: "Expiry & Low-Stock Alerts",
    text: "Never miss an expiry date or run out of stock with proactive notifications.",
  },
  {
    icon: "chart",
    title: "Clear Business Reports",
    text: "View sales, purchases, and inventory insights to make better decisions for your pharmacy.",
  },
]

export const featureGroups = [
  {
    icon: "receipt",
    eyebrow: "Quick Billing",
    title: "Process sales in seconds",
    description:
      "Search medicines by name or barcode, add items to cart, and complete sales with automatic stock updates and receipt generation.",
    preview: "billing",
    points: [
      "Instant medicine search with suggestions",
      "Barcode-ready workflow",
      "Automatic stock deduction",
      "Digital receipts for customers",
    ],
  },
  {
    icon: "boxes",
    eyebrow: "Inventory Control",
    title: "Know what you have, always",
    description:
      "Track medicines across batches, monitor expiry dates, and set reorder thresholds to prevent stockouts.",
    preview: "inventory",
    points: [
      "Batch-wise tracking",
      "Expiry date monitoring",
      "Low-stock alerts",
      "Supplier management",
    ],
  },
  {
    icon: "alert",
    eyebrow: "Smart Alerts",
    title: "Stay ahead of problems",
    description:
      "Get notified about expiring medicines, low stock levels, and other critical inventory issues before they impact operations.",
    preview: "alerts",
    points: [
      "Expiry date warnings",
      "Low stock notifications",
      "Custom alert thresholds",
      "Email and in-app alerts",
    ],
  },
]

export const plans = [
  {
    name: "Starter",
    description: "Perfect for small pharmacies just getting started with digital management.",
    featured: false,
    cta: "Get Started",
    features: [
      "Up to 500 medicine records",
      "Basic inventory tracking",
      "Sales & receipt management",
      "1 user account",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For growing pharmacies that need more capacity and advanced features.",
    featured: true,
    cta: "Get Started",
    features: [
      "Up to 2,000 medicine records",
      "Batch tracking",
      "Expiry alerts",
      "Up to 3 user accounts",
      "Priority support",
      "Basic reports",
    ],
  },
  {
    name: "Enterprise",
    description: "For large pharmacies and chains with complex operations.",
    featured: false,
    cta: "Contact Sales",
    features: [
      "Unlimited medicine records",
      "Advanced analytics",
      "Multiple locations",
      "Unlimited users",
      "Dedicated support",
      "Custom integrations",
    ],
  },
]

export const tutorialCategories = [
  "All tutorials",
  "Getting Started",
  "Billing",
  "Inventory",
  "Reports",
]

export const tutorials = [
  {
    slug: "getting-started",
    category: "Getting Started",
    title: "Setting Up Your Pharmacy Account",
    description:
      "Learn how to register your pharmacy, configure basic settings, and prepare for your first sale.",
    duration: "5 min",
    level: "Beginner",
    language: "Urdu",
    steps: [
      "Sign up for a Medicore account",
      "Enter your pharmacy details",
      "Configure your business settings",
      "Add your first user accounts",
    ],
  },
  {
    slug: "adding-medicines",
    category: "Inventory",
    title: "Adding Medicines to Your System",
    description:
      "Step-by-step guide to adding medicine records, setting up batches, and managing supplier information.",
    duration: "8 min",
    level: "Beginner",
    language: "Urdu",
    steps: [
      "Navigate to the Medicines section",
      "Click 'Add Medicine' and enter details",
      "Set up batch information",
      "Link to supplier records",
      "Save and verify the record",
    ],
  },
  {
    slug: "processing-sales",
    category: "Billing",
    title: "Processing a Sale",
    description:
      "Learn the complete workflow from searching medicines to generating receipts and updating stock.",
    duration: "6 min",
    level: "Beginner",
    language: "Urdu",
    steps: [
      "Open the billing section",
      "Search for medicines by name or barcode",
      "Add items to the cart",
      "Set quantities and apply discounts",
      "Complete the sale and print receipt",
    ],
  },
  {
    slug: "managing-stock",
    category: "Inventory",
    title: "Managing Stock Levels",
    description:
      "How to monitor inventory, set reorder points, and handle stock adjustments efficiently.",
    duration: "7 min",
    level: "Intermediate",
    language: "Urdu",
    steps: [
      "Review current stock levels",
      "Identify low-stock items",
      "Set reorder thresholds",
      "Record stock adjustments",
      "Generate stock reports",
    ],
  },
  {
    slug: "expiry-tracking",
    category: "Inventory",
    title: "Tracking Expiry Dates",
    description:
      "Configure expiry date tracking, set up alerts, and manage expiring stock effectively.",
    duration: "5 min",
    level: "Intermediate",
    language: "Urdu",
    steps: [
      "Enter expiry dates for batches",
      "Configure expiry alert settings",
      "Review expiring items report",
      "Plan for expiry management",
      "Document disposal procedures",
    ],
  },
  {
    slug: "generating-reports",
    category: "Reports",
    title: "Generating Business Reports",
    description:
      "Create sales reports, inventory summaries, and purchase analytics to understand your pharmacy performance.",
    duration: "9 min",
    level: "Intermediate",
    language: "Urdu",
    steps: [
      "Navigate to the Reports section",
      "Select report type and date range",
      "Customize report parameters",
      "Generate and review the report",
      "Export or print as needed",
    ],
  },
]

export const faqs = [
  {
    q: "What is Medicore Pharmacy?",
    a: "Medicore Pharmacy is a pharmacy management software designed to help medical stores in Pakistan manage their daily operations, including sales, inventory, billing, and reporting.",
  },
  {
    q: "How long does it take to get started?",
    a: "You can set up your pharmacy account and start using the basic features within a few hours. Full onboarding with staff training typically takes 1-2 days.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, we offer a trial period so you can explore the software and see how it fits your pharmacy's workflow. Contact us to learn about trial availability and duration.",
  },
  {
    q: "Do I need special hardware?",
    a: "No, Medicore Pharmacy runs on any computer with a web browser. A barcode scanner is optional but recommended for faster billing.",
  },
  {
    q: "Is my data secure?",
    a: "Yes, we use industry-standard security measures to protect your pharmacy data. All data is encrypted and backed up regularly.",
  },
  {
    q: "Can I use it offline?",
    a: "Medicore Pharmacy requires an internet connection to function. However, we're working on offline capabilities for future releases.",
  },
  {
    q: "How do I get support?",
    a: "You can reach our support team through WhatsApp, email, or by scheduling a demo. We also have video tutorials to help you learn at your own pace.",
  },
  {
    q: "Can I import my existing data?",
    a: "Yes, we can help you import your existing medicine records and customer data. Contact us to discuss your migration needs.",
  },
]

export type Tutorial = (typeof tutorials)[0]

import Link from "next/link";
import { ProfessionalTemplate } from "@/components/preview/templates/ProfessionalTemplate";
import { ExecutiveTemplate } from "@/components/preview/templates/ExecutiveTemplate";
import { CreativeTemplate } from "@/components/preview/templates/CreativeTemplate";
import { Resume } from "@/types/resume";

export const metadata = {
  title: "Resume Examples | Resume Builder",
  description:
    "Browse example resumes created with our AI-ready resume builder",
};

const EXAMPLE_RESUMES = [
  {
    id: "frontend-dev",
    name: "Sarah Chen",
    role: "Frontend Developer",
    experienceLevel: "Mid Level",
    template: "Professional",
    highlights: [
      "5+ years experience",
      "React & TypeScript expert",
      "Led 3 major projects",
    ],
    tags: ["Engineering", "Web Development", "React"],
  },
  {
    id: "product-manager",
    name: "Michael Rodriguez",
    role: "Product Manager",
    experienceLevel: "Senior",
    template: "Executive",
    highlights: [
      "8+ years PM experience",
      "Launched 10+ products",
      "Cross-functional leader",
    ],
    tags: ["Product", "Strategy", "Leadership"],
  },
  {
    id: "data-scientist",
    name: "Dr. Emily Watson",
    role: "Data Scientist",
    experienceLevel: "Senior",
    template: "Creative",
    highlights: [
      "PhD in Statistics",
      "ML model optimization",
      "Published researcher",
    ],
    tags: ["Data Science", "Machine Learning", "Analytics"],
  },
  {
    id: "ux-designer",
    name: "Alex Kim",
    role: "UX Designer",
    experienceLevel: "Mid Level",
    template: "Creative",
    highlights: [
      "4 years UX experience",
      "User-centered design",
      "Design systems expert",
    ],
    tags: ["Design", "User Experience", "Figma"],
  },
  {
    id: "devops-engineer",
    name: "James Taylor",
    role: "DevOps Engineer",
    experienceLevel: "Senior",
    template: "Professional",
    highlights: ["AWS certified", "Kubernetes expert", "CI/CD automation"],
    tags: ["DevOps", "Cloud", "Infrastructure"],
  },
  {
    id: "marketing-manager",
    name: "Lisa Anderson",
    role: "Marketing Manager",
    experienceLevel: "Mid Level",
    template: "Executive",
    highlights: [
      "Digital marketing pro",
      "ROI-driven campaigns",
      "Team leadership",
    ],
    tags: ["Marketing", "Digital", "Strategy"],
  },
];

// Sample resume data for each example
const SAMPLE_RESUMES: Record<string, Resume> = {
  "frontend-dev": {
    id: "sample-1",
    personalInfo: {
      fullName: "Sarah Chen",
      email: "sarah.chen@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      linkedIn: "linkedin.com/in/sarahchen",
      github: "github.com/sarahchen",
      portfolio: "sarahchen.dev",
      summary:
        "Passionate Frontend Developer with 5+ years of experience building responsive, user-centric web applications. Expert in React, TypeScript, and modern web technologies with a proven track record of delivering high-quality products.",
    },
    experience: [
      {
        id: "exp-1",
        company: "TechCorp Inc.",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        startDate: "Jan 2021",
        endDate: "Present",
        isCurrentRole: true,
        bulletPoints: [
          "Led development of company's main product, increasing user engagement by 45%",
          "Architected and implemented a component library used across 5 product teams",
          "Mentored 3 junior developers, improving team velocity by 30%",
          "Optimized application performance, reducing load time by 60%",
        ],
      },
      {
        id: "exp-2",
        company: "StartupXYZ",
        position: "Frontend Developer",
        location: "San Francisco, CA",
        startDate: "Jun 2019",
        endDate: "Dec 2020",
        isCurrentRole: false,
        bulletPoints: [
          "Built responsive web applications using React and Redux",
          "Collaborated with designers to implement pixel-perfect UIs",
          "Implemented automated testing, increasing code coverage to 85%",
        ],
      },
    ],
    skills: [
      { id: "s1", name: "React", category: "frameworks" },
      { id: "s2", name: "TypeScript", category: "languages" },
      { id: "s3", name: "Next.js", category: "frameworks" },
      { id: "s4", name: "Tailwind CSS", category: "frameworks" },
      { id: "s5", name: "JavaScript", category: "languages" },
      { id: "s6", name: "Git", category: "tools" },
    ],
    projects: [
      {
        id: "p1",
        name: "E-Commerce Platform Redesign",
        description:
          "Led complete frontend redesign, resulting in 50% increase in conversion rate",
        technologies: ["React", "TypeScript", "Next.js"],
        highlights: [],
      },
      {
        id: "p2",
        name: "Component Library",
        description:
          "Created reusable component library adopted by entire engineering organization",
        technologies: ["React", "Storybook", "TypeScript"],
        highlights: [],
      },
    ],
    hobbies: [
      {
        id: "h1",
        name: "Open Source Contributor",
        description: "Contributing to React ecosystem projects",
      },
      {
        id: "h2",
        name: "Tech Blogging",
        description: "Writing tutorials on modern web development",
      },
    ],
    references: [],
    metadata: {
      targetRole: "Frontend Developer",
      experienceLevel: "mid",
      template: "professional",
      lastModified: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  },
  "product-manager": {
    id: "sample-2",
    personalInfo: {
      fullName: "Michael Rodriguez",
      email: "michael.rodriguez@email.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      linkedIn: "linkedin.com/in/michaelrodriguez",
      summary:
        "Results-driven Product Manager with 8+ years of experience leading cross-functional teams to deliver innovative products. Proven ability to drive product strategy, prioritize features, and launch successful products that delight users and drive business growth.",
    },
    experience: [
      {
        id: "exp-1",
        company: "Enterprise Solutions Ltd.",
        position: "Senior Product Manager",
        location: "New York, NY",
        startDate: "Mar 2020",
        endDate: "Present",
        isCurrentRole: true,
        bulletPoints: [
          "Led product strategy for B2B SaaS platform serving 500+ enterprise clients",
          "Launched 10+ major features, increasing user retention by 35%",
          "Managed cross-functional team of 12 engineers, designers, and analysts",
          "Grew annual recurring revenue from $5M to $15M in 3 years",
        ],
      },
      {
        id: "exp-2",
        company: "Growth Startup",
        position: "Product Manager",
        location: "New York, NY",
        startDate: "Jan 2017",
        endDate: "Feb 2020",
        isCurrentRole: false,
        bulletPoints: [
          "Owned product roadmap and prioritization for consumer mobile app",
          "Conducted user research and A/B testing to validate product decisions",
          "Increased daily active users by 200% through data-driven feature development",
        ],
      },
    ],
    skills: [
      { id: "s1", name: "Product Strategy", category: "soft-skills" },
      { id: "s2", name: "User Research", category: "soft-skills" },
      { id: "s3", name: "SQL", category: "languages" },
      { id: "s4", name: "Analytics", category: "tools" },
      { id: "s5", name: "Agile/Scrum", category: "soft-skills" },
      { id: "s6", name: "Leadership", category: "soft-skills" },
    ],
    projects: [
      {
        id: "p1",
        name: "Enterprise Dashboard Launch",
        description:
          "Led development and launch of analytics dashboard, becoming top-requested feature",
        technologies: [],
        highlights: [],
      },
    ],
    hobbies: [
      {
        id: "h1",
        name: "Product Management Mentorship",
        description: "Mentoring aspiring PMs",
      },
    ],
    references: [],
    metadata: {
      targetRole: "Product Manager",
      experienceLevel: "senior",
      template: "executive",
      lastModified: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  },
  "data-scientist": {
    id: "sample-3",
    personalInfo: {
      fullName: "Dr. Emily Watson",
      email: "emily.watson@email.com",
      phone: "+1 (555) 345-6789",
      location: "Boston, MA",
      linkedIn: "linkedin.com/in/emilywatson",
      github: "github.com/emilywatson",
      summary:
        "Data Scientist with PhD in Statistics and 6+ years of industry experience. Specialized in machine learning model development, optimization, and deployment at scale. Published researcher with expertise in predictive analytics and statistical modeling.",
    },
    experience: [
      {
        id: "exp-1",
        company: "DataTech Corporation",
        position: "Senior Data Scientist",
        location: "Boston, MA",
        startDate: "Sep 2020",
        endDate: "Present",
        isCurrentRole: true,
        bulletPoints: [
          "Developed ML models improving prediction accuracy by 40%",
          "Built recommendation system serving 5M+ users daily",
          "Led team of 4 data scientists on high-impact projects",
          "Published 3 papers in peer-reviewed journals",
        ],
      },
      {
        id: "exp-2",
        company: "Analytics Firm",
        position: "Data Scientist",
        location: "Boston, MA",
        startDate: "Jun 2018",
        endDate: "Aug 2020",
        isCurrentRole: false,
        bulletPoints: [
          "Created predictive models for customer churn reduction",
          "Performed statistical analysis on large-scale datasets",
          "Collaborated with engineering teams on model deployment",
        ],
      },
    ],
    skills: [
      { id: "s1", name: "Python", category: "languages" },
      { id: "s2", name: "R", category: "languages" },
      { id: "s3", name: "TensorFlow", category: "frameworks" },
      { id: "s4", name: "SQL", category: "languages" },
      { id: "s5", name: "Machine Learning", category: "other" },
      { id: "s6", name: "Statistics", category: "other" },
    ],
    projects: [
      {
        id: "p1",
        name: "Predictive Analytics Platform",
        description:
          "Built end-to-end ML pipeline processing 10TB of data daily",
        technologies: ["Python", "TensorFlow", "AWS"],
        highlights: [],
      },
    ],
    hobbies: [
      {
        id: "h1",
        name: "Research",
        description: "Publishing papers on ML optimization",
      },
    ],
    references: [],
    metadata: {
      targetRole: "Data Scientist",
      experienceLevel: "senior",
      template: "creative",
      lastModified: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  },
  "ux-designer": {
    id: "sample-4",
    personalInfo: {
      fullName: "Alex Kim",
      email: "alex.kim@email.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      linkedIn: "linkedin.com/in/alexkim",
      portfolio: "alexkim.design",
      summary:
        "Creative UX Designer with 4+ years of experience crafting intuitive, user-centered digital experiences. Passionate about solving complex problems through thoughtful design and user research. Skilled in the entire design process from research to final implementation.",
    },
    experience: [
      {
        id: "exp-1",
        company: "Design Studio Co.",
        position: "UX Designer",
        location: "Seattle, WA",
        startDate: "Apr 2021",
        endDate: "Present",
        isCurrentRole: true,
        bulletPoints: [
          "Designed user interfaces for mobile and web applications",
          "Conducted user research and usability testing with 100+ participants",
          "Created design systems used across multiple product teams",
          "Improved key user metrics by 50% through iterative design",
        ],
      },
      {
        id: "exp-2",
        company: "Tech Startup",
        position: "Junior UX Designer",
        location: "Seattle, WA",
        startDate: "Jan 2020",
        endDate: "Mar 2021",
        isCurrentRole: false,
        bulletPoints: [
          "Created wireframes, prototypes, and high-fidelity mockups",
          "Collaborated with developers to ensure design implementation",
          "Participated in design critiques and team workshops",
        ],
      },
    ],
    skills: [
      { id: "s1", name: "Figma", category: "tools" },
      { id: "s2", name: "User Research", category: "soft-skills" },
      { id: "s3", name: "Prototyping", category: "soft-skills" },
      { id: "s4", name: "UI Design", category: "soft-skills" },
      { id: "s5", name: "Design Systems", category: "soft-skills" },
      { id: "s6", name: "Usability Testing", category: "soft-skills" },
    ],
    projects: [
      {
        id: "p1",
        name: "Mobile App Redesign",
        description:
          "Complete redesign of mobile app, increasing user satisfaction by 60%",
        technologies: ["Figma", "Prototyping"],
        highlights: [],
      },
    ],
    hobbies: [
      {
        id: "h1",
        name: "Design Community",
        description: "Organizing local design meetups",
      },
    ],
    references: [],
    metadata: {
      targetRole: "UX Designer",
      experienceLevel: "mid",
      template: "creative",
      lastModified: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  },
  "devops-engineer": {
    id: "sample-5",
    personalInfo: {
      fullName: "James Taylor",
      email: "james.taylor@email.com",
      phone: "+1 (555) 567-8901",
      location: "Austin, TX",
      linkedIn: "linkedin.com/in/jamestaylor",
      github: "github.com/jamestaylor",
      summary:
        "DevOps Engineer with 7+ years of experience building and maintaining cloud infrastructure at scale. AWS certified professional with expertise in Kubernetes, CI/CD automation, and infrastructure as code. Passionate about reliability, security, and automation.",
    },
    experience: [
      {
        id: "exp-1",
        company: "Cloud Systems Inc.",
        position: "Senior DevOps Engineer",
        location: "Austin, TX",
        startDate: "Feb 2020",
        endDate: "Present",
        isCurrentRole: true,
        bulletPoints: [
          "Architected and managed AWS infrastructure serving 10M+ requests/day",
          "Implemented Kubernetes clusters reducing deployment time by 70%",
          "Built CI/CD pipelines automating 95% of deployment processes",
          "Reduced infrastructure costs by 40% through optimization",
        ],
      },
      {
        id: "exp-2",
        company: "Enterprise Tech",
        position: "DevOps Engineer",
        location: "Austin, TX",
        startDate: "May 2017",
        endDate: "Jan 2020",
        isCurrentRole: false,
        bulletPoints: [
          "Managed Linux servers and automated deployment processes",
          "Implemented monitoring and alerting systems",
          "Collaborated with development teams on infrastructure needs",
        ],
      },
    ],
    skills: [
      { id: "s1", name: "AWS", category: "cloud" },
      { id: "s2", name: "Kubernetes", category: "tools" },
      { id: "s3", name: "Docker", category: "tools" },
      { id: "s4", name: "Terraform", category: "tools" },
      { id: "s5", name: "Python", category: "languages" },
      { id: "s6", name: "CI/CD", category: "tools" },
    ],
    projects: [
      {
        id: "p1",
        name: "Infrastructure Modernization",
        description:
          "Led migration to cloud-native architecture, improving system reliability to 99.99%",
        technologies: ["AWS", "Kubernetes", "Terraform"],
        highlights: [],
      },
    ],
    hobbies: [
      {
        id: "h1",
        name: "AWS Certification",
        description: "Maintaining multiple AWS certifications",
      },
    ],
    references: [],
    metadata: {
      targetRole: "DevOps Engineer",
      experienceLevel: "senior",
      template: "professional",
      lastModified: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  },
  "marketing-manager": {
    id: "sample-6",
    personalInfo: {
      fullName: "Lisa Anderson",
      email: "lisa.anderson@email.com",
      phone: "+1 (555) 678-9012",
      location: "Chicago, IL",
      linkedIn: "linkedin.com/in/lisaanderson",
      summary:
        "Strategic Marketing Manager with 5+ years of experience driving growth through data-driven campaigns. Expert in digital marketing, content strategy, and team leadership. Proven track record of delivering ROI-positive campaigns and building high-performing teams.",
    },
    experience: [
      {
        id: "exp-1",
        company: "Growth Marketing Co.",
        position: "Marketing Manager",
        location: "Chicago, IL",
        startDate: "Jan 2021",
        endDate: "Present",
        isCurrentRole: true,
        bulletPoints: [
          "Led digital marketing strategy generating $5M in revenue",
          "Managed team of 6 marketers and $2M annual budget",
          "Increased organic traffic by 150% through SEO and content strategy",
          "Launched campaigns achieving 300% ROI on average",
        ],
      },
      {
        id: "exp-2",
        company: "Marketing Agency",
        position: "Digital Marketing Specialist",
        location: "Chicago, IL",
        startDate: "Jun 2019",
        endDate: "Dec 2020",
        isCurrentRole: false,
        bulletPoints: [
          "Managed paid advertising campaigns across Google and Meta platforms",
          "Created content strategy for B2B clients",
          "Analyzed campaign performance and optimized for conversions",
        ],
      },
    ],
    skills: [
      { id: "s1", name: "Digital Marketing", category: "soft-skills" },
      { id: "s2", name: "SEO", category: "soft-skills" },
      { id: "s3", name: "Content Strategy", category: "soft-skills" },
      { id: "s4", name: "Google Analytics", category: "tools" },
      { id: "s5", name: "Leadership", category: "soft-skills" },
      { id: "s6", name: "Campaign Management", category: "soft-skills" },
    ],
    projects: [
      {
        id: "p1",
        name: "Product Launch Campaign",
        description:
          "Orchestrated multi-channel launch campaign generating 10K leads in 30 days",
        technologies: [],
        highlights: [],
      },
    ],
    hobbies: [
      {
        id: "h1",
        name: "Marketing Community",
        description: "Speaking at marketing conferences",
      },
    ],
    references: [],
    metadata: {
      targetRole: "Marketing Manager",
      experienceLevel: "mid",
      template: "executive",
      lastModified: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  },
};

// Helper function to render the appropriate template
function renderTemplate(resumeId: string) {
  const resume = SAMPLE_RESUMES[resumeId];
  if (!resume) return null;

  switch (resume.metadata.template) {
    case "professional":
      return <ProfessionalTemplate resume={resume} />;
    case "executive":
      return <ExecutiveTemplate resume={resume} />;
    case "creative":
      return <CreativeTemplate resume={resume} />;
    default:
      return <ProfessionalTemplate resume={resume} />;
  }
}

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Resume Builder
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Home
              </Link>
              <Link href="/builder">
                <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                  Create Resume
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              6 Professional Examples
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Resume Examples
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get inspired by professionally crafted resumes. See how our smart recommendations create compelling, ATS-friendly resumes across different roles.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                18+
              </div>
              <div className="text-sm font-medium text-gray-600">
                Job Roles Supported
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                40+
              </div>
              <div className="text-sm font-medium text-gray-600">
                Skills in Database
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-sm font-medium text-gray-600">
                Professional Templates
              </div>
            </div>
          </div>

          {/* Example Resumes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXAMPLE_RESUMES.map((resume) => (
              <div key={resume.id} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-[8.5/11] bg-gray-50 rounded-t-xl relative overflow-hidden border-b border-gray-200">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="scale-[0.46] origin-top-left w-[555%] h-[555%]">
                      {renderTemplate(resume.id)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    {resume.template}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-1">
                    {resume.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 font-medium">
                    {resume.role} • {resume.experienceLevel}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {resume.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <svg
                          className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {resume.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full px-4 py-2.5 bg-blue-50 text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-100 transition-colors border border-blue-200">
                    View Full Resume
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-12 shadow-2xl text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Create Your Own?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Start building your professional resume with smart AI-powered recommendations. No sign-up required, completely free.
              </p>
              <Link href="/builder">
                <button className="px-10 py-4 bg-white text-blue-600 text-lg font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Start Building Free
                </button>
              </Link>
              <p className="text-sm text-blue-200 mt-6">
                No credit card required • No account needed • 100% free
              </p>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Smart AI Recommendations
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get intelligent suggestions for skills, achievements, and hobbies based on your target role and experience level. One-click apply.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    100% Privacy Focused
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    All your data stays in your browser. No accounts required, no servers, no data collection. Your resume, your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Resume Builder</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Home
              </Link>
              <Link href="/builder" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Builder
              </Link>
              <Link href="/examples" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Examples
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 text-sm">Built with Next.js, TypeScript, and Tailwind CSS</p>
              <p className="text-xs text-gray-500 mt-1">No AI APIs • Privacy First • Open Source Ready</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

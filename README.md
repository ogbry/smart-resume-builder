# Resume Builder AI-Ready

A modern, intelligent resume builder built with Next.js, TypeScript, and Tailwind CSS. Features a comprehensive rule-based recommendation engine designed for future AI integration.

## Features

### Core Functionality
- **Multi-step Resume Builder**: Intuitive 5-step form flow for creating professional resumes
- **Smart Recommendations**: Rule-based AI-like suggestions for skills, bullet points, and hobbies
- **Multiple Templates**: Modern, Minimal, and ATS-friendly designs
- **Live Preview**: Real-time resume preview with template switching
- **PDF Export**: Client-side PDF generation (no server required)
- **Auto-save**: Automatic saving to browser localStorage

### Advanced Features
- **18+ Job Roles**: Comprehensive job role database with tailored recommendations
- **40+ Skills**: Extensive skill database with industry relevance scoring
- **25+ Bullet Templates**: Achievement-focused templates with impact metrics
- **25+ Hobby Suggestions**: Career-aligned activity recommendations
- **Resume Feedback**: Quality analysis with actionable suggestions
- **Examples Page**: Browse sample resumes for inspiration
- **Error Boundaries**: Graceful error handling throughout the app
- **Keyboard Shortcuts**: Productivity-enhancing keyboard navigation
- **100% Private**: All data stays in your browser, no accounts needed

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: react-pdf / jsPDF
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
├── components/                   # React components
│   ├── builder/                  # Form components
│   ├── recommendations/          # Recommendation UI
│   ├── preview/                  # Resume templates
│   └── ui/                       # Reusable UI components
├── lib/                          # Business logic
│   ├── recommendation-engine/    # Rule-based AI engine
│   ├── pdf/                      # PDF export
│   └── storage/                  # localStorage wrapper
├── types/                        # TypeScript definitions
└── constants/                    # App constants
```

## Recommendation Engine

The app uses a **rule-based recommendation system** that provides intelligent suggestions without external AI APIs:

- **Skills**: Suggests relevant skills based on job role and experience level
- **Bullet Points**: Generates achievement-focused descriptions
- **Hobbies**: Recommends activities that align with career goals
- **Feedback**: Analyzes resume completeness and quality

The engine is designed with an abstraction layer to seamlessly integrate real AI APIs in the future.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## License

MIT

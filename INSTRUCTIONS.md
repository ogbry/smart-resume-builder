# Resume Builder AI-Ready - Setup Instructions

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### 3. Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
resume-builder-ai-ready/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Landing page
│   │   └── builder/            # Resume builder page
│   │
│   ├── components/
│   │   ├── builder/            # Form step components
│   │   ├── recommendations/    # AI-like suggestion components
│   │   ├── preview/            # Resume templates
│   │   └── ui/                 # Reusable UI components
│   │
│   ├── contexts/               # React Context providers
│   │   └── ResumeContext.tsx   # Global resume state
│   │
│   ├── lib/
│   │   ├── recommendation-engine/  # Rule-based AI engine
│   │   ├── pdf/                    # PDF export utilities
│   │   ├── storage/                # localStorage wrapper
│   │   └── utils/                  # Validation, scoring, helpers
│   │
│   ├── types/                  # TypeScript type definitions
│   └── constants/              # App constants
│
├── public/                     # Static assets
└── ...config files
```

## Features

### 1. Multi-Step Form Builder
- Personal Information
- Work Experience
- Skills
- Projects (optional)
- Hobbies & Activities (optional)

### 2. Smart Recommendations (No External API)
The app uses a **rule-based recommendation engine** that provides intelligent suggestions:

- **Skill Suggestions**: Based on job role and experience level
- **Bullet Point Generation**: Achievement-focused templates
- **Hobby Recommendations**: Aligned with career goals
- **Resume Feedback**: Completeness and quality analysis

All recommendations are generated using deterministic algorithms and data mappings.

### 3. Resume Templates
- **Modern**: Bold colors and contemporary design
- **Minimal**: Clean and simple layout
- **ATS-Friendly**: Optimized for Applicant Tracking Systems

### 4. PDF Export
Client-side PDF generation using html2canvas and jsPDF. No server required.

### 5. Data Privacy
All resume data is stored in browser localStorage. No accounts, no servers, no data collection.

## How the Recommendation Engine Works

The recommendation engine is located in `src/lib/recommendation-engine/` and consists of:

### Data Layer (`data/`)
- `job-roles.ts`: 8+ job role definitions with required skills
- `skill-database.ts`: 20+ skills with metadata
- `bullet-templates.ts`: 25+ achievement templates
- `hobby-database.ts`: 25+ hobbies with professional relevance

### Logic Layer
- `skills.ts`: Skill recommendation algorithm
- `experience.ts`: Bullet point generation
- `hobbies.ts`: Hobby alignment scoring
- `feedback.ts`: Resume quality analysis

### Interface (`index.ts`)
- `RecommendationEngine`: Main interface
- `RuleBasedEngine`: Current implementation
- `AIEngine`: Placeholder for future AI integration

### Abstraction for Future AI

The engine is designed with an abstraction layer:

```typescript
interface RecommendationEngine {
  suggestSkills(context: JobContext): SkillSuggestion[];
  generateBulletPoints(experience: Experience, context: JobContext): BulletPointSuggestion[];
  recommendHobbies(context: ProfileContext): HobbySuggestion[];
  analyzeFeedback(resume: Resume): FeedbackItem[];
}
```

To integrate a real AI API in the future:

1. Implement `AIEngine` class in `src/lib/recommendation-engine/index.ts`
2. Add API keys to `.env.local`
3. Switch the engine instance in `getRecommendationEngine()`

## Customization

### Adding New Job Roles

Edit `src/lib/recommendation-engine/data/job-roles.ts`:

```typescript
export const JOB_ROLES: Record<string, JobRole> = {
  'your-role': {
    id: 'your-role',
    title: 'Your Role Title',
    category: 'engineering',
    // ... other fields
  },
};
```

### Adding New Skills

Edit `src/lib/recommendation-engine/data/skill-database.ts`:

```typescript
export const SKILLS_DATABASE: Record<string, SkillData> = {
  'YourSkill': {
    name: 'YourSkill',
    category: 'languages',
    // ... other fields
  },
};
```

### Adding New Templates

1. Create new template in `src/components/preview/templates/`
2. Add to `TEMPLATE_CONFIGS` in `src/constants/templates.ts`
3. Import and add to `LivePreview.tsx`

## Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Static Export

```bash
# Update next.config.js
output: 'export'

# Build
npm run build

# Deploy the 'out' directory
```

## Development Tips

### Type Safety
All components use TypeScript. Run type checking:

```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Component Development
Components are organized by feature. Each component is self-contained with its own props interface.

### State Management
Resume state is managed globally using React Context (`ResumeContext`). All form updates automatically save to localStorage.

## Troubleshooting

### "Module not found" errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### PDF export not working
- Ensure html2canvas and jsPDF are installed
- Check browser console for errors
- Try a different browser (Chrome/Firefox recommended)

### Recommendations not showing
- Select a target role in the header
- Ensure you have added some skills/experience
- Check browser console for errors

## Future Enhancements

- [ ] Add more job roles and skills
- [ ] Integrate real AI API (OpenAI, Anthropic)
- [ ] Add more resume templates
- [ ] Multi-language support
- [ ] Resume comparison and A/B testing
- [ ] Cover letter generator
- [ ] LinkedIn profile import

## Support

For issues or questions:
1. Check this documentation
2. Review code comments in source files
3. Open an issue on GitHub

## License

MIT License - Feel free to use this project for personal or commercial purposes.

/**
 * Template Configurations
 * Defines available resume templates and their styling
 */

import {
  TemplateConfig,
  TemplateStyle,
  ColorScheme,
  TypographyConfig,
  LayoutConfig,
} from "@/types/templates";

/**
 * Available template configurations
 */
export const TEMPLATE_CONFIGS: TemplateConfig[] = [
  {
    id: "professional",
    name: "Professional",
    description: "Modern two-column layout with categorized skills and clean design",
    features: [
      "Two-column layout",
      "Photo placeholder",
      "Categorized skills",
      "Timeline education",
    ],
    recommended: true,
  },
  {
    id: "executive",
    name: "Executive",
    description: "Premium design emphasizing leadership and achievements",
    features: [
      "Dark header banner",
      "Executive summary",
      "Achievement focus",
      "Professional typography",
    ],
    recommended: true,
  },
  {
    id: "creative",
    name: "Creative",
    description: "Modern, visually appealing design with color accents",
    features: [
      "Color sidebar",
      "Timeline experience",
      "Visual skill bars",
      "Modern aesthetic",
    ],
    recommended: true,
  },
];

/**
 * Color schemes for each template
 */
export const COLOR_SCHEMES: Record<string, ColorScheme> = {
  modern: {
    primary: "#0ea5e9",
    secondary: "#0369a1",
    accent: "#7dd3fc",
    text: "#0f172a",
    textSecondary: "#64748b",
    background: "#ffffff",
    border: "#e2e8f0",
  },
  minimal: {
    primary: "#1e293b",
    secondary: "#334155",
    accent: "#94a3b8",
    text: "#0f172a",
    textSecondary: "#64748b",
    background: "#ffffff",
    border: "#cbd5e1",
  },
  ats: {
    primary: "#000000",
    secondary: "#333333",
    accent: "#666666",
    text: "#000000",
    textSecondary: "#333333",
    background: "#ffffff",
    border: "#cccccc",
  },
};

/**
 * Typography configurations
 */
const BASE_TYPOGRAPHY: TypographyConfig = {
  fontFamily: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  fontSize: {
    name: "28px",
    heading: "18px",
    subheading: "14px",
    body: "12px",
    small: "10px",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const TYPOGRAPHY_CONFIGS: Record<string, TypographyConfig> = {
  modern: BASE_TYPOGRAPHY,
  minimal: {
    ...BASE_TYPOGRAPHY,
    fontFamily: {
      heading: "Georgia, serif",
      body: "Inter, sans-serif",
    },
  },
  ats: {
    ...BASE_TYPOGRAPHY,
    fontFamily: {
      heading: "Arial, sans-serif",
      body: "Arial, sans-serif",
    },
    fontSize: {
      name: "24px",
      heading: "16px",
      subheading: "13px",
      body: "11px",
      small: "10px",
    },
  },
};

/**
 * Layout configurations
 */
export const LAYOUT_CONFIGS: Record<string, LayoutConfig> = {
  modern: {
    spacing: {
      section: "24px",
      item: "12px",
      tight: "6px",
    },
    maxWidth: "210mm",
    padding: "20mm",
    margin: "0",
  },
  minimal: {
    spacing: {
      section: "28px",
      item: "14px",
      tight: "8px",
    },
    maxWidth: "210mm",
    padding: "25mm",
    margin: "0",
  },
  ats: {
    spacing: {
      section: "20px",
      item: "10px",
      tight: "5px",
    },
    maxWidth: "210mm",
    padding: "20mm",
    margin: "0",
  },
};

/**
 * Complete template styles
 */
export const TEMPLATE_STYLES: Record<string, TemplateStyle> = {
  modern: {
    colors: COLOR_SCHEMES.modern,
    typography: TYPOGRAPHY_CONFIGS.modern,
    layout: LAYOUT_CONFIGS.modern,
  },
  minimal: {
    colors: COLOR_SCHEMES.minimal,
    typography: TYPOGRAPHY_CONFIGS.minimal,
    layout: LAYOUT_CONFIGS.minimal,
  },
  ats: {
    colors: COLOR_SCHEMES.ats,
    typography: TYPOGRAPHY_CONFIGS.ats,
    layout: LAYOUT_CONFIGS.ats,
  },
};

/**
 * Get template configuration by ID
 */
export const getTemplateConfig = (
  templateId: string
): TemplateConfig | undefined => {
  return TEMPLATE_CONFIGS.find((config) => config.id === templateId);
};

/**
 * Get template style by ID
 */
export const getTemplateStyle = (templateId: string): TemplateStyle => {
  return TEMPLATE_STYLES[templateId] || TEMPLATE_STYLES.modern;
};

/**
 * Default template ID
 */
export const DEFAULT_TEMPLATE = "modern";

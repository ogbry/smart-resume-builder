/**
 * Template System Types
 * These types define template configurations and styling
 */

import { Resume, TemplateType } from './resume';

/**
 * Template configuration
 */
export interface TemplateConfig {
  id: TemplateType;
  name: string;
  description: string;
  thumbnail?: string;
  features: string[];
  recommended: boolean;
}

/**
 * Color scheme for templates
 */
export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  textSecondary: string;
  background: string;
  border: string;
}

/**
 * Typography configuration
 */
export interface TypographyConfig {
  fontFamily: {
    heading: string;
    body: string;
    mono?: string;
  };
  fontSize: {
    name: string;
    heading: string;
    subheading: string;
    body: string;
    small: string;
  };
  fontWeight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
}

/**
 * Layout configuration
 */
export interface LayoutConfig {
  spacing: {
    section: string;
    item: string;
    tight: string;
  };
  maxWidth: string;
  padding: string;
  margin: string;
}

/**
 * Template style configuration
 */
export interface TemplateStyle {
  colors: ColorScheme;
  typography: TypographyConfig;
  layout: LayoutConfig;
  customCSS?: string;
}

/**
 * Template component props
 */
export interface TemplateProps {
  resume: Resume;
  style?: Partial<TemplateStyle>;
  className?: string;
}

/**
 * PDF export options
 */
export interface PDFExportOptions {
  format: 'a4' | 'letter';
  orientation: 'portrait' | 'landscape';
  scale: number;
  filename?: string;
  includeMetadata: boolean;
}

/**
 * Template metadata
 */
export interface TemplateMetadata {
  author?: string;
  version: string;
  lastUpdated: string;
  tags: string[];
  atsOptimized: boolean;
}

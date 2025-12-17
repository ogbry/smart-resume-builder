/**
 * PDF Export Utilities
 * Client-side PDF generation from resume templates
 */

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Resume } from '@/types/resume';
import { PDFExportOptions } from '@/types/templates';

/**
 * Export resume to PDF
 */
export async function exportResumeToPDF(
  elementId: string,
  resume: Resume,
  options: Partial<PDFExportOptions> = {}
): Promise<void> {
  const defaultOptions: PDFExportOptions = {
    format: 'a4',
    orientation: 'portrait',
    scale: 2,
    filename: `${resume.personalInfo.fullName || 'Resume'}_Resume.pdf`,
    includeMetadata: true,
  };

  const finalOptions = { ...defaultOptions, ...options };

  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    // Generate canvas from HTML
    const canvas = await html2canvas(element, {
      scale: finalOptions.scale,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    // Calculate dimensions
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Create PDF
    const pdf = new jsPDF({
      orientation: finalOptions.orientation,
      unit: 'mm',
      format: finalOptions.format,
    });

    // Add metadata
    if (finalOptions.includeMetadata) {
      pdf.setProperties({
        title: `${resume.personalInfo.fullName} - Resume`,
        subject: 'Professional Resume',
        author: resume.personalInfo.fullName || 'Resume Builder',
        creator: 'Resume Builder AI-Ready',
      });
    }

    // Add image to PDF
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

    // Add additional pages if content is long
    let heightLeft = imgHeight - 297; // A4 height in mm
    let position = 0;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= 297;
    }

    // Save PDF
    pdf.save(finalOptions.filename);
  } catch (error) {
    console.error('Failed to export PDF:', error);
    throw new Error('Failed to export resume to PDF. Please try again.');
  }
}

/**
 * Export resume template to PNG
 */
export async function exportResumeToPNG(
  elementId: string,
  resume: Resume,
  scale: number = 2
): Promise<void> {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with id "${elementId}" not found`);
    }

    const canvas = await html2canvas(element, {
      scale,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    // Convert to blob and download
    canvas.toBlob((blob) => {
      if (!blob) {
        throw new Error('Failed to create image');
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resume.personalInfo.fullName || 'Resume'}_Resume.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  } catch (error) {
    console.error('Failed to export PNG:', error);
    throw new Error('Failed to export resume to PNG. Please try again.');
  }
}

/**
 * Print resume directly
 */
export function printResume(): void {
  window.print();
}

/**
 * Create a printable version of the resume
 */
export function createPrintableVersion(elementId: string): void {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`);
  }

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    throw new Error('Failed to open print window');
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume - Print</title>
        <style>
          @media print {
            @page {
              margin: 0;
              size: A4;
            }
            body {
              margin: 0;
              padding: 0;
            }
          }
          body {
            font-family: Arial, sans-serif;
          }
        </style>
      </head>
      <body>
        ${element.innerHTML}
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.focus();

  // Wait for content to load then print
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 250);
}

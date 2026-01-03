/**
 * Executive Template - Professional & Clean
 * Elegant layout with accent color header
 */

import React from "react";
import { TemplateProps } from "@/types/templates";

export function ExecutiveTemplate({ resume }: TemplateProps) {
  return (
    <div
      className="bg-white"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: "10pt",
        lineHeight: "1.5",
        color: "#1f2937",
      }}
    >
      {/* Header with Dark Background */}
      <header
        className="p-12 pb-10"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          color: "#ffffff",
        }}
      >
        <h1
          className="text-5xl font-bold mb-4"
          style={{ letterSpacing: "-0.5px" }}
        >
          {resume.personalInfo.fullName || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: "#cbd5e1" }}>
          {resume.personalInfo.email && <span>{resume.personalInfo.email}</span>}
          {resume.personalInfo.phone && <span>{resume.personalInfo.phone}</span>}
          {resume.personalInfo.location && <span>{resume.personalInfo.location}</span>}
        </div>

        {(resume.personalInfo.linkedIn || resume.personalInfo.github || resume.personalInfo.portfolio) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mt-3" style={{ color: "#94a3b8" }}>
            {resume.personalInfo.linkedIn && (
              <a href={resume.personalInfo.linkedIn} style={{ color: "#60a5fa" }}>
                LinkedIn
              </a>
            )}
            {resume.personalInfo.github && (
              <a href={resume.personalInfo.github} style={{ color: "#60a5fa" }}>
                GitHub
              </a>
            )}
            {resume.personalInfo.portfolio && (
              <a href={resume.personalInfo.portfolio} style={{ color: "#60a5fa" }}>
                Portfolio
              </a>
            )}
          </div>
        )}
      </header>

      <div className="px-12 py-8">
        {/* Professional Summary */}
        {resume.personalInfo.summary && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-3 pb-2 border-b-2"
              style={{ color: "#1e293b", borderColor: "#cbd5e1" }}
            >
              Executive Summary
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#4b5563" }}>
              {resume.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience Section */}
        {resume.experience.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: "#1e293b", borderColor: "#cbd5e1" }}
            >
              Professional Experience
            </h2>
            <div className="space-y-6">
              {resume.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: "#111827" }}>
                        {exp.position}
                      </h3>
                      <p className="text-sm font-semibold" style={{ color: "#475569" }}>
                        {exp.company}
                        {exp.location && <span style={{ color: "#94a3b8" }}> • {exp.location}</span>}
                      </p>
                    </div>
                    <span className="text-sm whitespace-nowrap ml-4" style={{ color: "#64748b" }}>
                      {exp.startDate} - {exp.isCurrentRole ? "Present" : exp.endDate}
                    </span>
                  </div>

                  {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                    <ul className="space-y-2 mt-3">
                      {exp.bulletPoints.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="text-sm flex items-start"
                          style={{ color: "#4b5563" }}
                        >
                          <span className="mr-2 mt-1" style={{ color: "#64748b" }}>▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {resume.skills.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: "#1e293b", borderColor: "#cbd5e1" }}
            >
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-3">
              {resume.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-4 py-2 text-sm font-medium"
                  style={{
                    backgroundColor: "#f1f5f9",
                    color: "#334155",
                    border: "1px solid #cbd5e1",
                    borderRadius: "4px",
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {resume.projects.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: "#1e293b", borderColor: "#cbd5e1" }}
            >
              Key Projects
            </h2>
            <div className="space-y-4">
              {resume.projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-base" style={{ color: "#111827" }}>
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-sm"
                        style={{ color: "#3b82f6" }}
                      >
                        View
                      </a>
                    )}
                  </div>
                  {project.description && (
                    <p className="text-sm mb-2" style={{ color: "#4b5563" }}>
                      {project.description}
                    </p>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1"
                          style={{
                            backgroundColor: "#f8fafc",
                            color: "#475569",
                            border: "1px solid #e2e8f0",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Interests */}
        {resume.hobbies.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: "#1e293b", borderColor: "#cbd5e1" }}
            >
              Interests
            </h2>
            <div className="flex flex-wrap gap-3">
              {resume.hobbies.map((hobby) => (
                <span
                  key={hobby.id}
                  className="text-sm"
                  style={{ color: "#64748b" }}
                >
                  {hobby.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* References */}
        {resume.references.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4 pb-2 border-b-2"
              style={{ color: "#1e293b", borderColor: "#cbd5e1" }}
            >
              References
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {resume.references.map((ref) => (
                <div key={ref.id}>
                  <p className="font-bold text-sm" style={{ color: "#111827" }}>
                    {ref.name}
                  </p>
                  <p className="text-sm" style={{ color: "#475569" }}>
                    {ref.position}
                  </p>
                  <p className="text-sm" style={{ color: "#475569" }}>
                    {ref.company}
                  </p>
                  {ref.email && (
                    <p className="text-sm mt-1" style={{ color: "#3b82f6" }}>
                      {ref.email}
                    </p>
                  )}
                  {ref.phone && (
                    <p className="text-sm" style={{ color: "#64748b" }}>
                      {ref.phone}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

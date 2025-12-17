/**
 * Executive Template
 * Professional design emphasizing leadership and achievements
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
      }}
    >
      {/* Header with Dark Background */}
      <div
        className="p-10 pb-8"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          color: "white"
        }}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-3" style={{ letterSpacing: "-1px" }}>
              {resume.personalInfo.fullName}
            </h1>
            <p className="text-lg mb-4" style={{ color: "#94a3b8", fontStyle: "italic" }}>
              {resume.metadata.targetRole || "Senior Professional"}
            </p>
            <div className="flex gap-6 text-sm" style={{ color: "#cbd5e1" }}>
              {resume.personalInfo.email && (
                <span>{resume.personalInfo.email}</span>
              )}
              {resume.personalInfo.phone && (
                <span>{resume.personalInfo.phone}</span>
              )}
              {resume.personalInfo.location && (
                <span>{resume.personalInfo.location}</span>
              )}
            </div>
          </div>
          <div
            className="rounded-lg overflow-hidden"
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#475569",
              border: "4px solid #64748b"
            }}
          >
            <svg
              className="w-full h-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-10 pt-8">
        {/* Executive Summary */}
        {resume.personalInfo.summary && (
          <div className="mb-8">
            <h2
              className="text-xl font-bold mb-3"
              style={{
                color: "#1e293b",
                borderBottom: "2px solid #1e293b",
                paddingBottom: "8px"
              }}
            >
              EXECUTIVE SUMMARY
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>
              {resume.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Professional Experience */}
        {resume.experience.length > 0 && (
          <div className="mb-8">
            <h2
              className="text-xl font-bold mb-4"
              style={{
                color: "#1e293b",
                borderBottom: "2px solid #1e293b",
                paddingBottom: "8px"
              }}
            >
              PROFESSIONAL EXPERIENCE
            </h2>
            {resume.experience.map((exp, idx) => (
              <div
                key={exp.id}
                className={idx < resume.experience.length - 1 ? "mb-6 pb-6" : ""}
                style={idx < resume.experience.length - 1 ? { borderBottom: "1px solid #e2e8f0" } : {}}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h3 className="text-base font-bold" style={{ color: "#0f172a" }}>
                      {exp.position}
                    </h3>
                    <p className="text-sm font-semibold" style={{ color: "#64748b" }}>
                      {exp.company} | {exp.location}
                    </p>
                  </div>
                  <div className="text-sm" style={{ color: "#94a3b8" }}>
                    {exp.startDate} - {exp.isCurrentRole ? "Present" : exp.endDate}
                  </div>
                </div>
                {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                  <ul className="space-y-2 mt-3">
                    {exp.bulletPoints.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-sm flex items-start"
                        style={{ color: "#475569", lineHeight: "1.6" }}
                      >
                        <span className="mr-3 font-bold" style={{ color: "#1e293b" }}>▪</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {/* Core Competencies */}
          {resume.skills.length > 0 && (
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{
                  color: "#1e293b",
                  borderBottom: "2px solid #1e293b",
                  paddingBottom: "8px"
                }}
              >
                CORE COMPETENCIES
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {resume.skills.map((skill) => (
                  <div key={skill.id} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#1e293b" }}
                    />
                    <span className="text-sm" style={{ color: "#334155" }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Achievements */}
          {resume.projects.length > 0 && (
            <div>
              <h2
                className="text-xl font-bold mb-4"
                style={{
                  color: "#1e293b",
                  borderBottom: "2px solid #1e293b",
                  paddingBottom: "8px"
                }}
              >
                KEY ACHIEVEMENTS
              </h2>
              <div className="space-y-3">
                {resume.projects.map((project) => (
                  <div key={project.id}>
                    <h3 className="text-sm font-bold" style={{ color: "#0f172a" }}>
                      {project.name}
                    </h3>
                    <p className="text-sm" style={{ color: "#64748b", lineHeight: "1.5" }}>
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* References */}
        {resume.references.length > 0 && (
          <div className="mt-8">
            <h2
              className="text-xl font-bold mb-4"
              style={{
                color: "#1e293b",
                borderBottom: "2px solid #1e293b",
                paddingBottom: "8px"
              }}
            >
              PROFESSIONAL REFERENCES
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {resume.references.map((ref) => (
                <div key={ref.id}>
                  <p className="text-sm font-bold" style={{ color: "#0f172a" }}>
                    {ref.name}
                  </p>
                  <p className="text-xs" style={{ color: "#64748b" }}>
                    {ref.position}
                  </p>
                  <p className="text-xs" style={{ color: "#64748b" }}>
                    {ref.company}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#1e293b" }}>
                    {ref.email}
                  </p>
                  {ref.phone && (
                    <p className="text-xs" style={{ color: "#64748b" }}>
                      {ref.phone}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

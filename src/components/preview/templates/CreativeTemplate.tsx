/**
 * Creative Template
 * Modern, visually appealing design with color accents
 */

import React from "react";
import { TemplateProps } from "@/types/templates";

export function CreativeTemplate({ resume }: TemplateProps) {
  return (
    <div
      className="bg-white flex"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "'Inter', 'Helvetica', sans-serif",
        fontSize: "9pt",
      }}
    >
      {/* Left Sidebar - Accent Color */}
      <div
        className="p-8"
        style={{
          width: "35%",
          background: "linear-gradient(180deg, #0ea5e9 0%, #0284c7 100%)",
          color: "white"
        }}
      >
        {/* Photo */}
        <div className="mb-6 flex justify-center">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              width: "140px",
              height: "140px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              border: "4px solid rgba(255, 255, 255, 0.3)"
            }}
          >
            <svg
              className="w-full h-full"
              fill="rgba(255, 255, 255, 0.6)"
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

        {/* Contact Info */}
        <div className="mb-6">
          <h3 className="text-xs font-bold mb-3" style={{ letterSpacing: "1px", opacity: 0.9 }}>
            CONTACT
          </h3>
          <div className="space-y-2 text-xs" style={{ opacity: 0.95 }}>
            {resume.personalInfo.email && (
              <div className="flex items-start gap-2">
                <span>✉</span>
                <span className="break-all">{resume.personalInfo.email}</span>
              </div>
            )}
            {resume.personalInfo.phone && (
              <div className="flex items-start gap-2">
                <span>☎</span>
                <span>{resume.personalInfo.phone}</span>
              </div>
            )}
            {resume.personalInfo.location && (
              <div className="flex items-start gap-2">
                <span>📍</span>
                <span>{resume.personalInfo.location}</span>
              </div>
            )}
            {resume.personalInfo.linkedIn && (
              <div className="flex items-start gap-2">
                <span>in</span>
                <span className="break-all">
                  {resume.personalInfo.linkedIn.replace(/^https?:\/\/(www\.)?/, '')}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        {resume.skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-bold mb-3" style={{ letterSpacing: "1px", opacity: 0.9 }}>
              SKILLS
            </h3>
            <div className="space-y-3">
              {resume.skills.slice(0, 8).map((skill, idx) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-1 text-xs" style={{ opacity: 0.95 }}>
                    <span className="font-medium">{skill.name}</span>
                    <span>{Math.max(70, 100 - idx * 5)}%</span>
                  </div>
                  <div
                    className="w-full rounded-full h-1"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  >
                    <div
                      className="h-1 rounded-full"
                      style={{
                        width: `${Math.max(70, 100 - idx * 5)}%`,
                        backgroundColor: "white"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interests */}
        {resume.hobbies.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-bold mb-3" style={{ letterSpacing: "1px", opacity: 0.9 }}>
              INTERESTS
            </h3>
            <div className="flex flex-wrap gap-2">
              {resume.hobbies.map((hobby) => (
                <span
                  key={hobby.id}
                  className="px-3 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.3)"
                  }}
                >
                  {hobby.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* References */}
        {resume.references.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xs font-bold mb-3" style={{ letterSpacing: "1px", opacity: 0.9 }}>
              REFERENCES
            </h3>
            {resume.references.slice(0, 2).map((ref) => (
              <div key={ref.id} className="mb-4 text-xs" style={{ opacity: 0.95 }}>
                <p className="font-bold">{ref.name}</p>
                <p style={{ opacity: 0.9 }}>{ref.position}</p>
                <p style={{ opacity: 0.9 }}>{ref.company}</p>
                <p className="mt-1" style={{ fontSize: "8pt" }}>{ref.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-8 pl-10">
        {/* Name and Title */}
        <div className="mb-8">
          <h1
            className="text-5xl font-bold mb-2"
            style={{ color: "#0f172a", letterSpacing: "-1px" }}
          >
            {resume.personalInfo.fullName}
          </h1>
          <div
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
              color: "white"
            }}
          >
            {resume.metadata.targetRole || "Professional"}
          </div>
        </div>

        {/* Profile Summary */}
        {resume.personalInfo.summary && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-1 rounded"
                style={{ backgroundColor: "#0ea5e9" }}
              />
              <h2 className="text-lg font-bold" style={{ color: "#0f172a" }}>
                PROFILE
              </h2>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
              {resume.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {resume.experience.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-1 rounded"
                style={{ backgroundColor: "#0ea5e9" }}
              />
              <h2 className="text-lg font-bold" style={{ color: "#0f172a" }}>
                EXPERIENCE
              </h2>
            </div>
            {resume.experience.map((exp, idx) => (
              <div key={exp.id} className="mb-6 relative pl-6">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#0ea5e9" }}
                />
                {idx < resume.experience.length - 1 && (
                  <div
                    className="absolute left-[5px] top-5 w-0.5 h-full"
                    style={{ backgroundColor: "#cbd5e1" }}
                  />
                )}
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: "#0f172a" }}>
                      {exp.position}
                    </h3>
                    <p className="text-xs font-semibold" style={{ color: "#0ea5e9" }}>
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs" style={{ color: "#94a3b8" }}>
                    {exp.startDate} - {exp.isCurrentRole ? "Present" : exp.endDate}
                  </span>
                </div>
                {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {exp.bulletPoints.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-xs flex items-start"
                        style={{ color: "#64748b", lineHeight: "1.6" }}
                      >
                        <span className="mr-2" style={{ color: "#0ea5e9" }}>▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects/Achievements */}
        {resume.projects.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-1 rounded"
                style={{ backgroundColor: "#0ea5e9" }}
              />
              <h2 className="text-lg font-bold" style={{ color: "#0f172a" }}>
                ACHIEVEMENTS
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {resume.projects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: "#f8fafc",
                    borderLeft: "3px solid #0ea5e9"
                  }}
                >
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#0f172a" }}>
                    {project.name}
                  </h3>
                  <p className="text-xs" style={{ color: "#64748b", lineHeight: "1.5" }}>
                    {project.description}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs rounded"
                          style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

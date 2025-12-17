/**
 * Professional Template (Based on Mock Design)
 * Modern two-column layout with categorized skills and timeline
 */

import React from "react";
import { TemplateProps } from "@/types/templates";

export function ProfessionalTemplate({ resume }: TemplateProps) {
  // Group skills by category
  const groupedSkills = resume.skills.reduce((acc, skill) => {
    const category = skill.category || "other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof resume.skills>);

  // Get language skills (if any marked as languages category)
  const languages = groupedSkills["languages"] || [];

  // Get technical skills
  const technicalSkills = [
    ...(groupedSkills["frameworks"] || []),
    ...(groupedSkills["tools"] || []),
    ...(groupedSkills["databases"] || []),
    ...(groupedSkills["cloud"] || []),
  ];

  return (
    <div
      className="flex bg-white"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "'Segoe UI', 'Arial', sans-serif",
        fontSize: "9pt",
        lineHeight: "1.4",
      }}
    >
      {/* Left Column - Main Content */}
      <div className="flex-1 p-8 pr-6" style={{ width: "62%" }}>
        {/* Header */}
        <div className="mb-6">
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "#1a1a1a", letterSpacing: "-0.5px" }}
          >
            {resume.personalInfo.fullName}
          </h1>
          <div className="flex gap-4 text-xs" style={{ color: "#666" }}>
            {resume.personalInfo.phone && (
              <span>{resume.personalInfo.phone}</span>
            )}
            {resume.personalInfo.email && (
              <span>{resume.personalInfo.email}</span>
            )}
            {resume.personalInfo.linkedIn && (
              <span>
                LinkedIn:{" "}
                {resume.personalInfo.linkedIn.replace(
                  /^https?:\/\/(www\.)?linkedin\.com\/(in\/)?/,
                  ""
                )}
              </span>
            )}
            {resume.personalInfo.location && (
              <span>{resume.personalInfo.location}</span>
            )}
          </div>
        </div>

        {/* Objective/Summary */}
        {resume.personalInfo.summary && (
          <div className="mb-6">
            <h2
              className="text-sm font-bold mb-2 pb-1 border-b"
              style={{
                color: "#2563eb",
                borderColor: "#2563eb",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Objective
            </h2>
            <p className="text-xs" style={{ color: "#333", lineHeight: "1.6" }}>
              {resume.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {resume.experience.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-sm font-bold mb-3 pb-1 border-b"
              style={{
                color: "#2563eb",
                borderColor: "#2563eb",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Experience
            </h2>
            {resume.experience.map((exp, idx) => (
              <div
                key={exp.id}
                className={idx < resume.experience.length - 1 ? "mb-4" : ""}
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h3
                    className="font-bold text-xs"
                    style={{ color: "#1a1a1a" }}
                  >
                    {exp.company}
                  </h3>
                  <span className="text-xs" style={{ color: "#666" }}>
                    {exp.startDate} -{" "}
                    {exp.isCurrentRole ? "Present" : exp.endDate}
                  </span>
                </div>
                <p
                  className="text-xs mb-2"
                  style={{ color: "#2563eb", fontWeight: 600 }}
                >
                  {exp.position}
                </p>
                {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                  <ul className="space-y-1">
                    {exp.bulletPoints.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-xs flex items-start"
                        style={{ color: "#444" }}
                      >
                        <span className="mr-2" style={{ color: "#2563eb" }}>
                          •
                        </span>
                        <span style={{ lineHeight: "1.5" }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects as Awards */}
        {resume.projects.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-sm font-bold mb-3 pb-1 border-b"
              style={{
                color: "#2563eb",
                borderColor: "#2563eb",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Awards & Recognitions
            </h2>
            {resume.projects.map((project) => (
              <div key={project.id} className="mb-3">
                <h3 className="font-bold text-xs" style={{ color: "#1a1a1a" }}>
                  {project.name}
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "#444", lineHeight: "1.5" }}
                >
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <p className="text-xs mt-1" style={{ color: "#666" }}>
                    <span style={{ fontWeight: 600 }}>Technologies:</span>{" "}
                    {project.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Hobbies as Additional Activities */}
        {resume.hobbies.length > 0 && (
          <div className="mb-4">
            <h2
              className="text-sm font-bold mb-3 pb-1 border-b"
              style={{
                color: "#2563eb",
                borderColor: "#2563eb",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Activities & Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {resume.hobbies.map((hobby) => (
                <span
                  key={hobby.id}
                  className="px-2 py-1 text-xs rounded"
                  style={{ backgroundColor: "#eff6ff", color: "#1e40af" }}
                >
                  {hobby.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Column - Sidebar */}
      <div
        className="p-8 pl-6"
        style={{
          width: "38%",
          backgroundColor: "#f8fafc",
          borderLeft: "3px solid #2563eb",
        }}
      >
        {/* Photo Placeholder */}
        <div className="mb-6 flex justify-center">
          <div
            className="rounded-full overflow-hidden flex items-center justify-center"
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#e2e8f0",
              border: "3px solid #2563eb",
            }}
          >
            <svg
              className="text-gray-400"
              width="60"
              height="60"
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

        {/* Objective (alternative summary for sidebar) */}
        {resume.personalInfo.summary && (
          <div className="mb-6">
            <h3
              className="text-xs font-bold mb-2 pb-1 border-b"
              style={{
                color: "#1e40af",
                borderColor: "#cbd5e1",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Objective
            </h3>
            <p
              className="text-xs"
              style={{ color: "#475569", lineHeight: "1.5" }}
            >
              {resume.personalInfo.summary.substring(0, 150)}...
            </p>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div className="mb-6">
            <h3
              className="text-xs font-bold mb-3 pb-1 border-b"
              style={{
                color: "#1e40af",
                borderColor: "#cbd5e1",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Languages
            </h3>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.id}>
                  <div className="flex justify-between mb-1">
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "#334155" }}
                    >
                      {lang.name}
                    </span>
                  </div>
                  <div className="w-full bg-white rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full"
                      style={{
                        width: "85%",
                        backgroundColor: "#2563eb",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        {technicalSkills.length > 0 && (
          <div className="mb-6">
            <h3
              className="text-xs font-bold mb-3 pb-1 border-b"
              style={{
                color: "#1e40af",
                borderColor: "#cbd5e1",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Technologies
            </h3>
            <div className="space-y-3">
              {/* Group by category */}
              {Object.entries({
                Frontend:
                  groupedSkills["frameworks"]?.filter((s) =>
                    ["react", "vue", "angular", "next.js", "tailwind"].some(
                      (tech) => s.name.toLowerCase().includes(tech)
                    )
                  ) || [],
                Backend:
                  groupedSkills["frameworks"]?.filter((s) =>
                    ["node", "express", "django", "flask", "spring"].some(
                      (tech) => s.name.toLowerCase().includes(tech)
                    )
                  ) || [],
                Tools: groupedSkills["tools"] || [],
              }).map(([category, skills]) => {
                if (skills.length === 0) return null;
                return (
                  <div key={category}>
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{ color: "#1e40af" }}
                    >
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill.id}
                          className="px-2 py-0.5 text-xs rounded"
                          style={{
                            backgroundColor: "#dbeafe",
                            color: "#1e40af",
                          }}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Education with Timeline */}
        <div className="mb-6">
          <h3
            className="text-xs font-bold mb-3 pb-1 border-b"
            style={{
              color: "#1e40af",
              borderColor: "#cbd5e1",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Education
          </h3>
          {resume.experience.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div
                  className="flex-shrink-0 rounded-full mt-1"
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#2563eb",
                  }}
                />
                <div className="flex-1">
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "#334155" }}
                  >
                    Bachelor&apos;s Degree
                  </p>
                  <p className="text-xs" style={{ color: "#64748b" }}>
                    Computer Science
                  </p>
                  <p className="text-xs" style={{ color: "#94a3b8" }}>
                    2015 - 2019
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Volunteering */}
        {resume.hobbies.slice(0, 2).length > 0 && (
          <div className="mb-6">
            <h3
              className="text-xs font-bold mb-3 pb-1 border-b"
              style={{
                color: "#1e40af",
                borderColor: "#cbd5e1",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Volunteering
            </h3>
            {resume.hobbies.slice(0, 2).map((hobby) => (
              <div key={hobby.id} className="mb-2">
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#334155" }}
                >
                  {hobby.name}
                </p>
                {hobby.description && (
                  <p
                    className="text-xs"
                    style={{ color: "#64748b", lineHeight: "1.4" }}
                  >
                    {hobby.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* References */}
        {resume.references.length > 0 && (
          <div className="mb-4">
            <h3
              className="text-xs font-bold mb-3 pb-1 border-b"
              style={{
                color: "#1e40af",
                borderColor: "#cbd5e1",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              References
            </h3>
            {resume.references.slice(0, 2).map((ref) => (
              <div key={ref.id} className="mb-3">
                <p
                  className="text-xs font-semibold"
                  style={{ color: "#334155" }}
                >
                  {ref.name}
                </p>
                <p className="text-xs" style={{ color: "#64748b" }}>
                  {ref.position}
                </p>
                <p className="text-xs" style={{ color: "#64748b" }}>
                  {ref.company}
                </p>
                <p className="text-xs" style={{ color: "#2563eb" }}>
                  {ref.email}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

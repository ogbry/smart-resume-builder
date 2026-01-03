/**
 * Professional Template - Clean & Simple Design
 * Modern single-column layout with clear sections
 */

import React from "react";
import { TemplateProps } from "@/types/templates";

export function ProfessionalTemplate({ resume }: TemplateProps) {
  return (
    <div
      className="bg-white p-12"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        fontSize: "10pt",
        lineHeight: "1.5",
        color: "#1f2937",
      }}
    >
      {/* Header Section */}
      <header className="mb-8 pb-6 border-b-2 border-gray-200">
        <h1
          className="text-4xl font-bold mb-3"
          style={{ color: "#111827", letterSpacing: "-0.5px" }}
        >
          {resume.personalInfo.fullName || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm" style={{ color: "#6b7280" }}>
          {resume.personalInfo.email && (
            <span className="flex items-center gap-1">
              <span style={{ color: "#3b82f6" }}>✉</span> {resume.personalInfo.email}
            </span>
          )}
          {resume.personalInfo.phone && (
            <span className="flex items-center gap-1">
              <span style={{ color: "#3b82f6" }}>☎</span> {resume.personalInfo.phone}
            </span>
          )}
          {resume.personalInfo.location && (
            <span className="flex items-center gap-1">
              <span style={{ color: "#3b82f6" }}>📍</span> {resume.personalInfo.location}
            </span>
          )}
        </div>

        {(resume.personalInfo.linkedIn || resume.personalInfo.github || resume.personalInfo.portfolio) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mt-2" style={{ color: "#6b7280" }}>
            {resume.personalInfo.linkedIn && (
              <a href={resume.personalInfo.linkedIn} style={{ color: "#3b82f6" }}>
                LinkedIn
              </a>
            )}
            {resume.personalInfo.github && (
              <a href={resume.personalInfo.github} style={{ color: "#3b82f6" }}>
                GitHub
              </a>
            )}
            {resume.personalInfo.portfolio && (
              <a href={resume.personalInfo.portfolio} style={{ color: "#3b82f6" }}>
                Portfolio
              </a>
            )}
          </div>
        )}
      </header>

      {/* Professional Summary */}
      {resume.personalInfo.summary && (
        <section className="mb-8">
          <h2
            className="text-xl font-bold mb-3"
            style={{ color: "#1f2937", textTransform: "uppercase", letterSpacing: "0.5px" }}
          >
            Professional Summary
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
            className="text-xl font-bold mb-4"
            style={{ color: "#1f2937", textTransform: "uppercase", letterSpacing: "0.5px" }}
          >
            Work Experience
          </h2>
          <div className="space-y-5">
            {resume.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-base" style={{ color: "#111827" }}>
                      {exp.position}
                    </h3>
                    <p className="text-sm" style={{ color: "#3b82f6", fontWeight: 600 }}>
                      {exp.company}
                      {exp.location && <span style={{ color: "#6b7280" }}> • {exp.location}</span>}
                    </p>
                  </div>
                  <span className="text-sm whitespace-nowrap ml-4" style={{ color: "#6b7280" }}>
                    {exp.startDate} - {exp.isCurrentRole ? "Present" : exp.endDate}
                  </span>
                </div>

                {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                  <ul className="space-y-1 mt-2">
                    {exp.bulletPoints.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="text-sm flex items-start"
                        style={{ color: "#4b5563" }}
                      >
                        <span className="mr-2 mt-1" style={{ color: "#3b82f6" }}>•</span>
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
            className="text-xl font-bold mb-4"
            style={{ color: "#1f2937", textTransform: "uppercase", letterSpacing: "0.5px" }}
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1.5 text-sm font-medium rounded-md"
                style={{
                  backgroundColor: "#eff6ff",
                  color: "#1e40af",
                  border: "1px solid #dbeafe",
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
            className="text-xl font-bold mb-4"
            style={{ color: "#1f2937", textTransform: "uppercase", letterSpacing: "0.5px" }}
          >
            Projects
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
                      View Project
                    </a>
                  )}
                </div>
                {project.description && (
                  <p className="text-sm mb-2" style={{ color: "#4b5563" }}>
                    {project.description}
                  </p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: "#f3f4f6",
                          color: "#374151",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm flex items-start"
                        style={{ color: "#4b5563" }}
                      >
                        <span className="mr-2" style={{ color: "#3b82f6" }}>•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Hobbies/Interests Section */}
      {resume.hobbies.length > 0 && (
        <section className="mb-8">
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "#1f2937", textTransform: "uppercase", letterSpacing: "0.5px" }}
          >
            Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.hobbies.map((hobby) => (
              <span
                key={hobby.id}
                className="text-sm"
                style={{ color: "#4b5563" }}
              >
                {hobby.name}
                {hobby !== resume.hobbies[resume.hobbies.length - 1] && " •"}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* References Section */}
      {resume.references.length > 0 && (
        <section className="mb-8">
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: "#1f2937", textTransform: "uppercase", letterSpacing: "0.5px" }}
          >
            References
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {resume.references.map((ref) => (
              <div key={ref.id}>
                <p className="font-bold text-sm" style={{ color: "#111827" }}>
                  {ref.name}
                </p>
                <p className="text-sm" style={{ color: "#4b5563" }}>
                  {ref.position}
                </p>
                <p className="text-sm" style={{ color: "#4b5563" }}>
                  {ref.company}
                </p>
                {ref.email && (
                  <p className="text-sm" style={{ color: "#3b82f6" }}>
                    {ref.email}
                  </p>
                )}
                {ref.phone && (
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    {ref.phone}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

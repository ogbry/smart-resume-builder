/**
 * Creative Template - Modern & Vibrant
 * Colorful design with gradient accents
 */

import React from "react";
import { TemplateProps } from "@/types/templates";

export function CreativeTemplate({ resume }: TemplateProps) {
  return (
    <div
      className="bg-white"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "'Poppins', 'Arial', sans-serif",
        fontSize: "10pt",
        lineHeight: "1.5",
        color: "#1f2937",
      }}
    >
      {/* Colorful Header */}
      <header
        className="p-12 pb-10"
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
          color: "#ffffff",
        }}
      >
        <h1
          className="text-5xl font-bold mb-4"
          style={{ letterSpacing: "-1px" }}
        >
          {resume.personalInfo.fullName || "Your Name"}
        </h1>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: "#e9d5ff" }}>
          {resume.personalInfo.email && (
            <span className="flex items-center gap-1.5">
              ✉ {resume.personalInfo.email}
            </span>
          )}
          {resume.personalInfo.phone && (
            <span className="flex items-center gap-1.5">
              ☎ {resume.personalInfo.phone}
            </span>
          )}
          {resume.personalInfo.location && (
            <span className="flex items-center gap-1.5">
              📍 {resume.personalInfo.location}
            </span>
          )}
        </div>

        {(resume.personalInfo.linkedIn || resume.personalInfo.github || resume.personalInfo.portfolio) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mt-3">
            {resume.personalInfo.linkedIn && (
              <a
                href={resume.personalInfo.linkedIn}
                className="underline"
                style={{ color: "#fef3c7" }}
              >
                LinkedIn
              </a>
            )}
            {resume.personalInfo.github && (
              <a
                href={resume.personalInfo.github}
                className="underline"
                style={{ color: "#fef3c7" }}
              >
                GitHub
              </a>
            )}
            {resume.personalInfo.portfolio && (
              <a
                href={resume.personalInfo.portfolio}
                className="underline"
                style={{ color: "#fef3c7" }}
              >
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
              className="text-2xl font-bold mb-3"
              style={{
                color: "#6366f1",
                borderBottom: "3px solid #6366f1",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              About Me
            </h2>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "#4b5563" }}>
              {resume.personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience Section */}
        {resume.experience.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-bold mb-4"
              style={{
                color: "#6366f1",
                borderBottom: "3px solid #6366f1",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              Experience
            </h2>
            <div className="space-y-6 mt-4">
              {resume.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: "#111827" }}>
                        {exp.position}
                      </h3>
                      <p className="text-sm font-semibold" style={{ color: "#8b5cf6" }}>
                        {exp.company}
                        {exp.location && <span style={{ color: "#9ca3af" }}> • {exp.location}</span>}
                      </p>
                    </div>
                    <span
                      className="text-sm whitespace-nowrap ml-4 px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "#f3f4f6",
                        color: "#6b7280",
                      }}
                    >
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
                          <span className="mr-2 mt-1" style={{ color: "#6366f1" }}>●</span>
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
              className="text-2xl font-bold mb-4"
              style={{
                color: "#6366f1",
                borderBottom: "3px solid #6366f1",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {resume.skills.map((skill, idx) => (
                <span
                  key={skill.id}
                  className="px-4 py-2 text-sm font-medium rounded-lg"
                  style={{
                    background:
                      idx % 3 === 0
                        ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                        : idx % 3 === 1
                        ? "linear-gradient(135deg, #8b5cf6, #d946ef)"
                        : "linear-gradient(135deg, #ec4899, #f97316)",
                    color: "#ffffff",
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
              className="text-2xl font-bold mb-4"
              style={{
                color: "#6366f1",
                borderBottom: "3px solid #6366f1",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              Projects
            </h2>
            <div className="space-y-5 mt-4">
              {resume.projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-base" style={{ color: "#111827" }}>
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-sm font-medium"
                        style={{ color: "#6366f1" }}
                      >
                        View →
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
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: "#f5f3ff",
                            color: "#7c3aed",
                            border: "1px solid #ddd6fe",
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
              className="text-2xl font-bold mb-4"
              style={{
                color: "#6366f1",
                borderBottom: "3px solid #6366f1",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              Interests
            </h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {resume.hobbies.map((hobby, idx) => (
                <span
                  key={hobby.id}
                  className="px-3 py-1.5 text-sm font-medium rounded-full"
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#ede9fe" : "#fae8ff",
                    color: idx % 2 === 0 ? "#7c3aed" : "#a855f7",
                  }}
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
              className="text-2xl font-bold mb-4"
              style={{
                color: "#6366f1",
                borderBottom: "3px solid #6366f1",
                display: "inline-block",
                paddingBottom: "4px",
              }}
            >
              References
            </h2>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {resume.references.map((ref) => (
                <div
                  key={ref.id}
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: "#f9fafb",
                    border: "2px solid #e5e7eb",
                  }}
                >
                  <p className="font-bold text-sm" style={{ color: "#111827" }}>
                    {ref.name}
                  </p>
                  <p className="text-sm" style={{ color: "#6366f1" }}>
                    {ref.position}
                  </p>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    {ref.company}
                  </p>
                  {ref.email && (
                    <p className="text-sm mt-2" style={{ color: "#8b5cf6" }}>
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
    </div>
  );
}

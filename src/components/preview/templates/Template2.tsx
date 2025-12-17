/**
 * Minimal Template
 */

import React from "react";
import { TemplateProps } from "@/types/templates";

export function Template2({ resume }: TemplateProps) {
  return (
    <div
      className="bg-white"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "Arial, sans-serif",
        fontSize: "9pt",
      }}
    >
      {/* Header with Photo and Name */}
      <div
        className="flex items-start gap-6 p-8 pb-6 border-b-4"
        style={{ borderColor: "#3498db", backgroundColor: "#f8f9fa" }}
      >
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-lg bg-gray-300 flex items-center justify-center overflow-hidden">
            <svg
              className="w-16 h-16 text-gray-400"
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

        {/* Name and Contact */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-1" style={{ color: "#2c3e50" }}>
            {resume.personalInfo.fullName}{" "}
            <span style={{ color: "#3498db" }}></span>
          </h1>
          <p className="text-sm mb-3" style={{ color: "#7f8c8d" }}>
            Senior UI/UX Developer
          </p>

          {/* Contact Icons */}
          <div className="flex gap-6 text-xs" style={{ color: "#34495e" }}>
            {resume.personalInfo.email && (
              <div className="flex items-center gap-1">
                <span style={{ color: "#3498db" }}>@</span>
                <span>{resume.personalInfo.email}</span>
              </div>
            )}
            {resume.personalInfo.location && (
              <div className="flex items-center gap-1">
                <span style={{ color: "#3498db" }}>📍</span>
                <span>{resume.personalInfo.location}</span>
              </div>
            )}
            {resume.personalInfo.linkedIn && (
              <div className="flex items-center gap-1">
                <span style={{ color: "#3498db" }}>in</span>
                <span>linkedin.com/{resume.personalInfo.linkedIn}</span>
              </div>
            )}
            {resume.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <span style={{ color: "#3498db" }}>📞</span>
                <span>{resume.personalInfo.phone}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex">
        {/* Left Column */}
        <div
          className="p-8"
          style={{ width: "35%", backgroundColor: "#f8f9fa" }}
        >
          {/* Profile */}
          {resume.personalInfo.summary && (
            <div className="mb-6">
              <h3
                className="text-sm font-bold mb-2 pb-1 border-b"
                style={{ color: "#3498db", borderColor: "#3498db" }}
              >
                PROFILE
              </h3>
              <p
                className="text-xs"
                style={{ lineHeight: "1.5", color: "#34495e" }}
              >
                {resume.personalInfo.summary}
              </p>
            </div>
          )}

          {/* Links */}
          {(resume.personalInfo.github || resume.personalInfo.portfolio) && (
            <div className="mb-6">
              <h3
                className="text-sm font-bold mb-2 pb-1 border-b"
                style={{ color: "#3498db", borderColor: "#3498db" }}
              >
                LINKS
              </h3>
              <div className="space-y-2 text-xs" style={{ color: "#34495e" }}>
                {resume.personalInfo.github && (
                  <div className="flex items-center gap-2">
                    <span style={{ color: "#3498db" }}>{}</span>
                    <a
                      href={resume.personalInfo.github}
                      style={{ color: "#3498db" }}
                    >
                      GitHub Profile
                    </a>
                  </div>
                )}
                {resume.personalInfo.portfolio && (
                  <div className="flex items-center gap-2">
                    <span style={{ color: "#3498db" }}>🌐</span>
                    <a
                      href={resume.personalInfo.portfolio}
                      style={{ color: "#3498db" }}
                    >
                      Portfolio
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Projects as Education */}
          {resume.projects.length > 0 && (
            <div className="mb-6">
              <h3
                className="text-sm font-bold mb-2 pb-1 border-b"
                style={{ color: "#3498db", borderColor: "#3498db" }}
              >
                PROJECTS
              </h3>
              {resume.projects.slice(0, 2).map((project) => (
                <div key={project.id} className="mb-3">
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "#2c3e50" }}
                  >
                    {project.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#7f8c8d", lineHeight: "1.4" }}
                  >
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="flex-1 p-8">
          {/* Work Experience */}
          {resume.experience.length > 0 && (
            <div className="mb-6">
              <h2
                className="text-base font-bold mb-4 pb-2 border-b"
                style={{ color: "#3498db", borderColor: "#3498db" }}
              >
                WORK EXPERIENCE
              </h2>
              {resume.experience.map((exp) => (
                <div key={exp.id} className="mb-5">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3
                        className="text-sm font-bold"
                        style={{ color: "#2c3e50" }}
                      >
                        {exp.position}
                      </h3>
                      <p className="text-xs" style={{ color: "#7f8c8d" }}>
                        {exp.company}, {exp.location}
                      </p>
                    </div>
                    <span className="text-xs" style={{ color: "#95a5a6" }}>
                      {exp.startDate} -{" "}
                      {exp.isCurrentRole ? "Present" : exp.endDate}
                    </span>
                  </div>
                  {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                    <p
                      className="text-xs mt-2"
                      style={{ lineHeight: "1.6", color: "#34495e" }}
                    >
                      {exp.bulletPoints[0]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {resume.skills.length > 0 && (
            <div className="mb-6">
              <h2
                className="text-base font-bold mb-4 pb-2 border-b"
                style={{ color: "#3498db", borderColor: "#3498db" }}
              >
                SKILLS
              </h2>
              <div className="space-y-3">
                {resume.skills.slice(0, 4).map((skill, idx) => {
                  const level = Math.min(95, 70 + idx * 5);
                  return (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#2c3e50" }}
                        >
                          {skill.name}
                        </span>
                        <span className="text-xs" style={{ color: "#7f8c8d" }}>
                          {level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${level}%`,
                            backgroundColor: "#3498db",
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Hobbies */}
          {resume.hobbies.length > 0 && (
            <div className="mb-6">
              <h2
                className="text-base font-bold mb-4 pb-2 border-b"
                style={{ color: "#3498db", borderColor: "#3498db" }}
              >
                INTERESTS
              </h2>
              <div className="flex flex-wrap gap-2">
                {resume.hobbies.map((hobby) => (
                  <span
                    key={hobby.id}
                    className="px-3 py-1 text-xs rounded-full"
                    style={{ backgroundColor: "#e3f2fd", color: "#2c3e50" }}
                  >
                    {hobby.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {resume.references.length > 0 && (
            <div className="mb-6">
              <h2
                className="text-base font-bold mb-4 pb-2 border-b"
                style={{ color: "#3498db", borderColor: "#3498db" }}
              >
                REFERENCES
              </h2>
              {resume.references.map((ref) => (
                <div key={ref.id} className="mb-4">
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "#2c3e50" }}
                  >
                    {ref.name}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: "#7f8c8d", lineHeight: "1.4" }}
                  >
                    {ref.position} at {ref.company}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "#7f8c8d", lineHeight: "1.4" }}
                  >
                    {ref.email}
                  </p>
                  {ref.phone && (
                    <p
                      className="text-xs"
                      style={{ color: "#7f8c8d", lineHeight: "1.4" }}
                    >
                      {ref.phone}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

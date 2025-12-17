/**
 * Modern Template
 */

import React from "react";
import { TemplateProps } from "@/types/templates";

export function Template1({ resume }: TemplateProps) {
  return (
    <div
      className="flex bg-white"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "Arial, sans-serif",
        fontSize: "10pt",
      }}
    >
      {/* Main Content - Left Side */}
      <div className="flex-1 p-8" style={{ width: "65%" }}>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "#2c3e50" }}>
            {resume.personalInfo.fullName}
          </h1>
          <div className="text-sm space-y-1" style={{ color: "#7f8c8d" }}>
            {resume.personalInfo.phone && (
              <div>{resume.personalInfo.phone}</div>
            )}
            {resume.personalInfo.email && (
              <div>{resume.personalInfo.email}</div>
            )}
            {resume.personalInfo.location && (
              <div>{resume.personalInfo.location}</div>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {resume.personalInfo.summary && (
          <div className="mb-6">
            <p style={{ lineHeight: "1.6", color: "#34495e" }}>
              {resume.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {resume.experience.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-lg font-bold mb-4 pb-2 border-b-2"
              style={{ color: "#3498db", borderColor: "#3498db" }}
            >
              MARKETING EXPERIENCE
            </h2>
            {resume.experience.map((exp) => (
              <div key={exp.id} className="mb-5">
                <h3
                  className="font-bold text-base"
                  style={{ color: "#2c3e50" }}
                >
                  {exp.position}
                </h3>
                <div className="text-sm mb-1" style={{ color: "#7f8c8d" }}>
                  {exp.company} • {exp.location}
                </div>
                <div className="text-xs mb-2" style={{ color: "#95a5a6" }}>
                  {exp.startDate} -{" "}
                  {exp.isCurrentRole ? "Present" : exp.endDate}
                </div>
                {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                  <ul className="space-y-1 ml-4">
                    {exp.bulletPoints.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="text-sm"
                        style={{
                          lineHeight: "1.5",
                          color: "#34495e",
                          listStyleType: "disc",
                        }}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects as Achievements */}
        {resume.projects.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-lg font-bold mb-4 pb-2 border-b-2"
              style={{ color: "#3498db", borderColor: "#3498db" }}
            >
              ACHIEVEMENTS
            </h2>
            {resume.projects.map((project) => (
              <div key={project.id} className="mb-3">
                <div className="flex items-start gap-2">
                  <span style={{ color: "#3498db" }}>✓</span>
                  <div>
                    <h3
                      className="font-semibold text-sm"
                      style={{ color: "#2c3e50" }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "#34495e", lineHeight: "1.5" }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hobbies as Favorite Quotes */}
        {resume.hobbies.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-lg font-bold mb-4 pb-2 border-b-2"
              style={{ color: "#3498db", borderColor: "#3498db" }}
            >
              FAVOURITE QUOTES
            </h2>
            {resume.hobbies.slice(0, 2).map((hobby) => (
              <div key={hobby.id} className="mb-3">
                <p
                  className="text-sm italic"
                  style={{ color: "#34495e", lineHeight: "1.6" }}
                >
                  "{hobby.name}
                  {hobby.description ? ": " + hobby.description : ""}"
                </p>
              </div>
            ))}
          </div>
        )}

        {/* References */}
        {resume.references.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-lg font-bold mb-4 pb-2 border-b-2"
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

      {/* Sidebar - Right Side */}
      <div className="p-8" style={{ width: "35%", backgroundColor: "#ecf0f1" }}>
        {/* Photo Placeholder */}
        <div className="mb-6 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <svg
              className="w-20 h-20 text-gray-400"
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

        {/* Tech Skills */}
        {resume.skills.length > 0 && (
          <div className="mb-6">
            <h3
              className="text-sm font-bold mb-3 pb-2 border-b"
              style={{ color: "#2c3e50", borderColor: "#bdc3c7" }}
            >
              TECH SKILLS
            </h3>
            <div className="space-y-3">
              {resume.skills.slice(0, 6).map((skill, idx) => {
                const level = Math.min(90, 60 + idx * 5);
                return (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span
                        className="text-xs font-medium"
                        style={{ color: "#2c3e50" }}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2">
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

        {/* Contact Links */}
        <div className="mb-6">
          <h3
            className="text-sm font-bold mb-3 pb-2 border-b"
            style={{ color: "#2c3e50", borderColor: "#bdc3c7" }}
          >
            CONTACT
          </h3>
          <div className="space-y-2 text-xs" style={{ color: "#34495e" }}>
            {resume.personalInfo.linkedIn && (
              <div>
                <span className="font-medium">LinkedIn:</span>
                <br />
                <a
                  href={resume.personalInfo.linkedIn}
                  style={{ color: "#3498db" }}
                >
                  {resume.personalInfo.linkedIn}
                </a>
              </div>
            )}
            {resume.personalInfo.github && (
              <div>
                <span className="font-medium">GitHub:</span>
                <br />
                <a
                  href={resume.personalInfo.github}
                  style={{ color: "#3498db" }}
                >
                  {resume.personalInfo.github}
                </a>
              </div>
            )}
            {resume.personalInfo.portfolio && (
              <div>
                <span className="font-medium">Portfolio:</span>
                <br />
                <a
                  href={resume.personalInfo.portfolio}
                  style={{ color: "#3498db" }}
                >
                  {resume.personalInfo.portfolio}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

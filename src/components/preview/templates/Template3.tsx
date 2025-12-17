/**
 * ATS-Friendly Template
 */

import React from "react";
import { TemplateProps } from "@/types/templates";

export function Template3({ resume }: TemplateProps) {
  return (
    <div
      className="bg-white p-10"
      style={{
        width: "210mm",
        minHeight: "297mm",
        fontFamily: "Arial, sans-serif",
        fontSize: "10pt",
      }}
    >
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#2c3e50" }}>
          {resume.personalInfo.fullName}
        </h1>
        <div className="flex gap-6 text-sm mb-1" style={{ color: "#34495e" }}>
          {resume.personalInfo.phone && (
            <span>{resume.personalInfo.phone}</span>
          )}
          {resume.personalInfo.email && (
            <a
              href={`mailto:${resume.personalInfo.email}`}
              style={{ color: "#3498db" }}
            >
              {resume.personalInfo.email}
            </a>
          )}
        </div>
        <div className="flex gap-6 text-sm" style={{ color: "#34495e" }}>
          {resume.personalInfo.location && (
            <span>{resume.personalInfo.location}</span>
          )}
          {resume.personalInfo.linkedIn && (
            <a href={resume.personalInfo.linkedIn} style={{ color: "#3498db" }}>
              LinkedIn
            </a>
          )}
          {resume.personalInfo.github && (
            <a href={resume.personalInfo.github} style={{ color: "#3498db" }}>
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Objective/Summary */}
      {resume.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-2" style={{ color: "#2c3e50" }}>
            Objective
          </h2>
          <p
            className="text-sm"
            style={{ lineHeight: "1.6", color: "#34495e" }}
          >
            {resume.personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3" style={{ color: "#2c3e50" }}>
            Experience
          </h2>
          {resume.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <div>
                  <h3
                    className="font-bold text-sm"
                    style={{ color: "#2c3e50" }}
                  >
                    {exp.company}
                  </h3>
                  <p className="text-sm" style={{ color: "#3498db" }}>
                    {exp.position}
                  </p>
                </div>
                <span className="text-sm" style={{ color: "#7f8c8d" }}>
                  {exp.startDate} -{" "}
                  {exp.isCurrentRole ? "Present" : exp.endDate}
                </span>
              </div>
              {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                <ul className="list-disc list-outside ml-5 mt-2 space-y-1">
                  {exp.bulletPoints.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-sm"
                      style={{ lineHeight: "1.5", color: "#34495e" }}
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

      {/* Skills */}
      {resume.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3" style={{ color: "#2c3e50" }}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1 text-sm rounded"
                style={{ backgroundColor: "#e8f4f8", color: "#2c3e50" }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects as Awards */}
      {resume.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3" style={{ color: "#2c3e50" }}>
            Awards
          </h2>
          {resume.projects.map((project) => (
            <div key={project.id} className="mb-3">
              <h3 className="font-bold text-sm" style={{ color: "#2c3e50" }}>
                {project.name}
              </h3>
              <p
                className="text-sm"
                style={{ color: "#34495e", lineHeight: "1.5" }}
              >
                {project.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Portfolio Link (LinkedIn and GitHub already in header) */}
      {resume.personalInfo.portfolio && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3" style={{ color: "#2c3e50" }}>
            Portfolio
          </h2>
          <div className="text-sm" style={{ color: "#34495e" }}>
            <a
              href={resume.personalInfo.portfolio}
              style={{ color: "#3498db" }}
            >
              {resume.personalInfo.portfolio}
            </a>
          </div>
        </div>
      )}

      {/* Interests */}
      {resume.hobbies.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3" style={{ color: "#2c3e50" }}>
            Interests
          </h2>
          <p className="text-sm" style={{ color: "#34495e" }}>
            {resume.hobbies.map((hobby) => hobby.name).join(", ")}
          </p>
        </div>
      )}

      {/* References */}
      {resume.references.length > 0 && (
        <div className="mb-6">
          <h2 className="text-base font-bold mb-3" style={{ color: "#2c3e50" }}>
            References
          </h2>
          {resume.references.map((ref) => (
            <div key={ref.id} className="mb-3">
              <h3 className="font-bold text-sm" style={{ color: "#2c3e50" }}>
                {ref.name}
              </h3>
              <p className="text-sm" style={{ color: "#34495e" }}>
                {ref.position} at {ref.company}
              </p>
              <p className="text-sm" style={{ color: "#34495e" }}>
                {ref.email}
              </p>
              {ref.phone && (
                <p className="text-sm" style={{ color: "#34495e" }}>
                  {ref.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

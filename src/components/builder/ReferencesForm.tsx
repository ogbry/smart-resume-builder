"use client";

/**
 * References Form Component
 * Step 6: Collect professional references
 */

import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Reference } from "@/types/resume";

export interface ReferencesFormProps {
  initialData?: Reference[];
  onSubmit: (data: Reference[]) => void;
  onBack?: () => void;
}

export function ReferencesForm({
  initialData,
  onSubmit,
  onBack,
}: ReferencesFormProps) {
  const [references, setReferences] = useState<Reference[]>(initialData || []);
  const [newReference, setNewReference] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleAddReference = () => {
    if (!newReference.name.trim()) {
      setError("Reference name is required");
      return;
    }
    if (!newReference.company.trim()) {
      setError("Company is required");
      return;
    }
    if (!newReference.position.trim()) {
      setError("Position is required");
      return;
    }
    if (!newReference.email.trim()) {
      setError("Email is required");
      return;
    }

    const referenceData: Reference = {
      id: `reference-${Date.now()}`,
      name: newReference.name.trim(),
      company: newReference.company.trim(),
      position: newReference.position.trim(),
      email: newReference.email.trim(),
      phone: newReference.phone.trim() || undefined,
    };

    setReferences([...references, referenceData]);
    setNewReference({
      name: "",
      company: "",
      position: "",
      email: "",
      phone: "",
    });
    setError("");
  };

  const handleRemoveReference = (id: string) => {
    setReferences(references.filter((r) => r.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(references);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          Add at least 3 professional references. References should be people
          who can speak to your work ethic, skills, and professional
          achievements.
        </p>
      </div>

      <Card variant="bordered">
        <CardContent className="space-y-4">
          <h3 className="text-lg font-semibold text-secondary-900">
            Add Reference
          </h3>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              placeholder="e.g., John Smith"
              value={newReference.name}
              onChange={(e) => {
                setNewReference({ ...newReference, name: e.target.value });
                setError("");
              }}
              required
            />

            <Input
              label="Company"
              placeholder="e.g., Tech Corp Inc."
              value={newReference.company}
              onChange={(e) => {
                setNewReference({ ...newReference, company: e.target.value });
                setError("");
              }}
              required
            />

            <Input
              label="Position"
              placeholder="e.g., Senior Manager"
              value={newReference.position}
              onChange={(e) => {
                setNewReference({ ...newReference, position: e.target.value });
                setError("");
              }}
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="e.g., john.smith@company.com"
              value={newReference.email}
              onChange={(e) => {
                setNewReference({ ...newReference, email: e.target.value });
                setError("");
              }}
              required
            />

            <Input
              label="Phone (Optional)"
              type="tel"
              placeholder="e.g., +1 (555) 123-4567"
              value={newReference.phone}
              onChange={(e) => {
                setNewReference({ ...newReference, phone: e.target.value });
              }}
            />
          </div>

          <Button
            type="button"
            variant="secondary"
            onClick={handleAddReference}
            fullWidth
          >
            Add Reference
          </Button>
        </CardContent>
      </Card>

      {references.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-secondary-900">
            Your References ({references.length})
          </h3>

          {references.map((ref) => (
            <Card key={ref.id} variant="bordered">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary-900">
                      {ref.name}
                    </h4>
                    <p className="text-sm text-secondary-600">
                      {ref.position} at {ref.company}
                    </p>
                    <p className="text-sm text-secondary-600 mt-1">
                      {ref.email}
                    </p>
                    {ref.phone && (
                      <p className="text-sm text-secondary-600">{ref.phone}</p>
                    )}
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveReference(ref.id)}
                  >
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="flex gap-4 pt-4">
        {onBack && (
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        <Button type="submit" variant="primary" fullWidth={!onBack}>
          {references.length >= 3 ? "Continue" : "Skip for Now"}
        </Button>
      </div>
    </form>
  );
}

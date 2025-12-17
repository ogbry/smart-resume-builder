"use client";

/**
 * Error Boundary Component
 * Catches and handles React errors gracefully
 */

import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./ui/Button";
import { Card, CardHeader, CardContent } from "./ui/Card";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-secondary-50 flex items-center justify-center p-4">
          <Card variant="elevated" className="max-w-2xl w-full">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900">
                    Oops! Something went wrong
                  </h2>
                  <p className="text-secondary-600 mt-1">
                    We encountered an unexpected error
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {this.state.error && (
                <div className="mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-sm font-mono text-red-900 mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    </p>
                    {process.env.NODE_ENV === "development" &&
                      this.state.errorInfo && (
                        <details className="mt-2">
                          <summary className="cursor-pointer text-sm text-red-700 hover:text-red-900">
                            Show error details
                          </summary>
                          <pre className="mt-2 text-xs text-red-800 overflow-auto max-h-64 p-2 bg-red-100 rounded">
                            {this.state.errorInfo.componentStack}
                          </pre>
                        </details>
                      )}
                  </div>

                  <div className="space-y-2 text-sm text-secondary-700">
                    <p className="font-medium">What you can try:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Refresh the page to try again</li>
                      <li>Clear your browser&apos;s localStorage</li>
                      <li>Try using a different browser</li>
                      <li>Check your internet connection</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button onClick={this.handleReset} variant="primary">
                  Try Again
                </Button>
                <Button
                  onClick={() => (window.location.href = "/")}
                  variant="outline"
                >
                  Go Home
                </Button>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                  variant="ghost"
                >
                  Clear Data & Reload
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

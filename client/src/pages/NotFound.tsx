/*
 * RENTMANIFY 404 PAGE
 * Style: Quiet Authority / Corporate Modernism
 * Minimal, professional error page
 */

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal Header */}
      <header className="py-6 border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="/" className="text-lg font-semibold tracking-tight">
              Rentmanify
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              404
            </p>
            <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Page not found
            </h1>
            <p className="mt-4 text-base text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="mt-8">
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <a href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to home
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <p className="text-sm text-muted-foreground text-center">
            Rentmanify — Built for Rentman operators
          </p>
        </div>
      </footer>
    </div>
  );
}

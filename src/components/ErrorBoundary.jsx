import { Component } from "react";
import { Button } from "@/components/Button";

/**
 * Catches render errors anywhere below it so a single broken section cannot
 * leave a visitor staring at a blank page — which, on a portfolio, is the
 * worst possible failure.
 */
export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Swap for a real reporter (Sentry, LogRocket) when one is wired up.
    console.error("Unhandled UI error:", error, errorInfo);
  }

  handleReload = () => window.location.reload();

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        role="alert"
        className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Something broke
        </p>
        <h1 className="max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">
          This section failed to load.
        </h1>
        <p className="max-w-md text-sm text-muted-foreground">
          Reloading usually fixes it. If it keeps happening, email me at{" "}
          <a
            className="text-primary underline decoration-primary/40 underline-offset-4"
            href="mailto:qasimkhan656655@gmail.com"
          >
            qasimkhan656655@gmail.com
          </a>
          .
        </p>
        <Button onClick={this.handleReload}>Reload the page</Button>
      </div>
    );
  }
}

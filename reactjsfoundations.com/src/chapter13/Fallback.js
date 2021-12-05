import ErrorBoundary from "react-error-boundary";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function BadComponentContainer() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BadComponent />
    </ErrorBoundary>
  );
}

function BadComponent() {
  throw new Error("💥 CABOOM 💥");
}

export default BadComponentContainer;

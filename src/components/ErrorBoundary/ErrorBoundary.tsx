import React, { useState, useEffect, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<React.ErrorInfo | null>(null);

  useEffect(() => {
    if (hasError) {
      // You can log the error to an error reporting service here.
      console.error(error);
      console.error(errorInfo);
    }
  }, [hasError, error, errorInfo]);

  const componentDidCatch = (error: Error, errorInfo: React.ErrorInfo) => {
    setHasError(true);
    setError(error);
    setErrorInfo(errorInfo);
  };

  if (hasError) {
    // You can render a custom error message here.
    return (
      <div>
        <h2>Something went wrong!</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error && error.toString()}
          <br />
          {errorInfo?.componentStack}
        </details>
      </div>
    );
  }

  return <>{children}</>;
}

export default ErrorBoundary;
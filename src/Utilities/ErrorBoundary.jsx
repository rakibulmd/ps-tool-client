import React, { useState } from "react";
import PropTypes from "prop-types";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  // Handle error when thrown by any child component
  const handleError = (error) => {
    console.error("Error caught by ErrorBoundary:", error);
    setHasError(true);
    // You can also log the error to a logging service here
  };

  if (hasError) {
    return <p>Something went wrong...</p>; // Customize your error message or component here
  }

  return <React.ErrorBoundary onError={handleError}>{children}</React.ErrorBoundary>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;

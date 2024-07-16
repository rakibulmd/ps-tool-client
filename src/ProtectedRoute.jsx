import { Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import PropTypes from "prop-types";
import { auth } from "./firebaseAuth";

const ProtectedRoute = ({ element, ...rest }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading</div>;
  }

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" replace />} // Redirect to login if user not authenticated
    />
  );
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  rest: PropTypes.object, // Ensure rest props are objects
};

export default ProtectedRoute;

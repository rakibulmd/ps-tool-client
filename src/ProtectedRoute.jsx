import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./firebaseAuth"; // Adjust the path as needed

const ProtectedRoute = () => {
  // const [user, loading] = useAuthState(auth);

  if (false) {
    return <p>Loading...</p>; // Show a loading indicator while checking auth state
  }

  return true ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

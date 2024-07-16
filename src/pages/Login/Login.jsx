import { Button } from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../../firebaseAuth";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User info:", user);
      // Navigate to PSBook page after successful login
      navigate("/psbook");
    } catch (error) {
      console.error("Error during Google login:", error);
      // Handle errors here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-full">
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3"
        onClick={handleGoogleLogin}
        disabled={loading} // Disable button while loading
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="Google Icon"
          className="h-6 w-6"
        />
        Continue with Google
      </Button>
      {error && <p className="text-red-500 mt-2">{error.message}</p>}
    </div>
  );
};

export default Login;

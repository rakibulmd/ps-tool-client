import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            Login Page
            <Button onClick={() =>  navigate("/")}>Home</Button>
        </div>
    );
};

export default Login;
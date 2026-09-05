import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Auth() {

    const location = useLocation();

    // default to "signup" if login and signup are not clicked on navbar
    const [mode, setMode] = useState(() => location.state?.mode || "signup");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {signUp, login} = useAuth();

    useEffect(() => {
        if (location.state?.mode){
            setMode(location.state.mode);
        }
    }, [location.state]);

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    function onSubmit(data) {
        setError(null);
        let result;
        if(mode === "signup") {
            result = signUp(data.email, data.password);
        } else {
            result = login(data.email, data.password);
        }

        if(result.success){
            navigate("/");
        } else {
            setError(result.error);
        }
    }
    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title">
                        {mode === "signup" ? "Sign Up" : "Login"}
                    </h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Field */}

                        {error && <div className="error-message">{error}</div>}
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input 
                                className="form-input" 
                                type="email" id="email" 
                                {...register("email", { required: "Email is required" })} 
                                placeholder="Enter your email" 
                            />
                            {errors.email && (
                                <span className="form-error">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <input 
                                className="form-input" 
                                type="passwords" 
                                id="password" 
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: { 
                                        value: 6, 
                                        message: "Password must be at least 6 characters" 
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: "Password cannot exceed 12 characters"
                                    }
                                })}
                                placeholder="Enter your password" 
                            />
                            {errors.password && (
                                <span className="form-error">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary btn-large">
                            {mode === "signup" ? "Sign Up" : "Login"}
                        </button>
                    </form>

                    <div className="auth-switch">
                        {mode === "signup" ? (
                            <p>
                                Already have an account? 
                                <span className="auth-link" onClick={() => setMode("login")}> Log in</span>
                            </p>
                        ) : (
                            <p>
                                Don't have an account?  
                                <span className="auth-link" onClick={() => setMode("signup")}> Sign up</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
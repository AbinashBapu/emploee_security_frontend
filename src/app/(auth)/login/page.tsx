"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize the router

  const handleGoogleLogin = () => {
    // Replace this with actual Google login logic
    alert("Google Login Clicked!");
  };
  const handleLogin = (e: any) => {
    e.preventDefault();

    const authenticate = async () => {
      const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

      const response = await fetch(`api/authenticate/login`, {
        method: "GET",
        headers: {
          Authorization: authHeader,
        },
      });

      const data = await response.json();

      if (data.statusCode == 200) {
        localStorage.setItem(
          "authToken",
          `Basic ${btoa(`${username}:${password}`)}`
        );

        router.push("/dashboard");
      }
    };

    authenticate();

    // if (!response.ok) {
    //   console.log("Unable to Authenticate");
    // }

    // const data = await response.json;
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mb-3">or</div>
        <div className="d-grid">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleGoogleLogin}
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Icon"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Login with Google
          </button>
        </div>
        <div className="text-center mt-3">
          <a href="/signup" className="text-decoration-none">
            Don't have an account? Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

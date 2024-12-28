"use client";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="mb-4">Welcome to Our App</h1>
      <div>
        <button className="btn btn-primary me-3" onClick={handleLogin}>
          Login
        </button>
        <button className="btn btn-secondary" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default HomePage;

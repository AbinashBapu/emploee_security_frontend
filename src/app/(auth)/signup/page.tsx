"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignupPage = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailAddress, setemailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    const userDetails = {
      firstName,
      lastName,
      emailAddress,
      password,
    };

    try {
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful! Redirecting to login...");
        router.push("/login");
      } else {
        alert(data.message || "Signup failed! Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              placeholder="Enter your email"
              value={emailAddress}
              onChange={(e) => setemailAddress(e.target.value)}
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
          <div className="mb-3">
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              placeholder="Confirm your password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <a href="/login" className="text-decoration-none">
            Already have an account? Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

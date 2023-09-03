import React, { useState } from "react";

const SignInSignUpModal = ({ isOpen, onClose, onSignIn }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    // Replace with your actual authentication logic here
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      setError("");
      localStorage.setItem("loggedIn", true);
      onSignIn(true); // Inform the parent component about the successful sign-in
      onClose();
    } else {
      setError("Invalid username or password");
    }
  };

  const handleSignUp = () => {
    // Replace with your actual sign-up logic here
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setError("");
    setIsSignIn(true);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay fixed inset-0 bg-gray-600 opacity-75"></div>
      <div className="modal-content bg-white w-96 p-8 rounded-lg shadow-lg relative">
        <span
          className="absolute top-2 right-2 text-gray-600 cursor-pointer"
          onClick={() => {
            setError("");
            onClose();
          }}
        >
          &times;
        </span>
        <h2 className="text-2xl font-semibold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded mb-4 text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {isSignIn ? (
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        ) : (
          <button
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            onClick={handleSignUp}
          >
            Sign up
          </button>
        )}
        <p className="text-center mt-4">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => {
              setError("");
              setIsSignIn(!isSignIn);
            }}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInSignUpModal;

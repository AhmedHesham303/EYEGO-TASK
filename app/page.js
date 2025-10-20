"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "./store/slices/authSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error } = useSelector((state) => state.admin);

  const handleLoginEvent = (e) => {
    e.preventDefault();
    const adminCredential = { email, password };
    dispatch(loginAdmin(adminCredential)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        router.push("/dashboard");
      }
    });
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-white px-4">
      <Image
        src="/eyegoai_logo.jpeg"
        alt="Logo"
        width={150}
        height={80}
        className="mb-6"
      />

      <div className="bg-blue-50 border border-blue-200 rounded-xl shadow-sm mb-6 px-6 py-4 text-center w-full max-w-sm">
        <h2 className="text-lg font-semibold text-blue-700 mb-2">
          Test Login Credentials
        </h2>
        <p className="text-sm text-gray-700">
          <strong>Email:</strong> ahmedhesham@gmail.com
        </p>
        <p className="text-sm text-gray-700">
          <strong>Password:</strong> 24700956
        </p>
      </div>

      {/* Login Form */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-200 w-full max-w-sm">
        <form
          onSubmit={handleLoginEvent}
          className="flex flex-col gap-4 text-black"
        >
          <div className="w-full">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <div className="w-full">
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 h-10 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 active:scale-95"
          >
            {loading ? "Loading..." : "Login"}
          </button>

          {error && (
            <div className="text-red-600 text-sm text-center" role="alert">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

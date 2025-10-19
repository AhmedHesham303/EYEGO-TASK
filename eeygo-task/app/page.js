"use client";
import React, { useEffect, useState } from "react";
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

  const handelLoginEvent = (e) => {
    e.preventDefault();
    let adminCredential = {
      email,
      password,
    };
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
        className="mb-4"
      />

      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100 w-1/4 mx-auto">
        <form
          onSubmit={handelLoginEvent}
          className="flex items-center justify-center text-black flex-col gap-4 w-full"
        >
          <div className="w-full">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              className="w-full px-3 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            className="h-9 px-8 py-6 flex items-center justify-center text-lg rounded-lg border border-transparent text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 active:scale-95"
            type="submit"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          {error && (
            <div className="text-red-600" role="alert">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

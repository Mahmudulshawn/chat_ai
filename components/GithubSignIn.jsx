"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";

const GithubSignIn = () => {
  return (
    <div className="border rounded-lg flex items-center justify-center">
      <button className="flex gap-2 items-center justify-center w-full h-full py-4 rounded-lg">
        <FaGithub className="text-2xl" />
        <span className="font-semibold">Continue with Github</span>
      </button>
    </div>
  );
};

export default GithubSignIn;

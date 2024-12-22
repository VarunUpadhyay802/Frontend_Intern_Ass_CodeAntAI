import { useState } from "react";
import { KeyIcon } from "@heroicons/react/16/solid";

const AuthRight = () => {
  const [isSaas, setIsSaas] = useState(true);

  const renderAuthOptions = () => {
    const saasOptions = [
      { href: "/dashboard", img: "/svg/github.svg", label: "Sign in with Github" },
      { href: "/dashboard", img: "/svg/bitbucket.svg", label: "Sign in with Bitbucket" },
      { href: "/dashboard", img: "/svg/azure-devops.svg", label: "Sign in with Azure Devops" },
      { href: "/dashboard", img: "/svg/gitlab.svg", label: "Sign in with GitLab" },
    ];

    const selfHostedOptions = [
      { href: "/dashboard", img: "/svg/gitlab.svg", label: "Sign in with GitLab" },
      { href: "/dashboard", icon: <KeyIcon className="w-5" />, label: "Sign in with SSO" },
    ];

    const options = isSaas ? saasOptions : selfHostedOptions;

    return (
      <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.href}
            className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center"
          >
            {option.img && <img src={option.img} alt={option.label} className="w-5" />}
            {option.icon && option.icon}
            {option.label}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4">
      <div className="bg-white flex flex-col rounded-xl w-full border">
        {/* Header */}
        <div className="border-b flex flex-col p-5 w-full gap-4">
          <div className="flex items-center justify-center gap-4">
            <img src="/svg/logo.svg" alt="logo" />
            <span className="font-light">CodeAnt AI</span>
          </div>
          <div className="flex justify-center text-2xl font-semibold mt-2">
            Welcome to CodeAnt AI
          </div>
          {/* Toggle Button */}
          <div className="bg-gray-100/70 border rounded-xl flex">
            <button
              className={`p-3 rounded-xl w-1/2 ${isSaas ? "bg-[#1570EF] text-white" : ""}`}
              onClick={() => setIsSaas(true)}
            >
              SAAS
            </button>
            <button
              className={`p-3 rounded-xl w-1/2 ${!isSaas ? "bg-[#1570EF] text-white" : ""}`}
              onClick={() => setIsSaas(false)}
            >
              Self Hosted
            </button>
          </div>
        </div>
        {/* Authentication Options */}
        <div className="flex flex-col p-5">
          <div className="flex items-center justify-center w-full">{renderAuthOptions()}</div>
        </div>
      </div>
      {/* Footer */}
      <div>
        <span>
          By signing up you agree to the <b>Privacy Policy.</b>
        </span>
      </div>
    </div>
  );
};

export default AuthRight;

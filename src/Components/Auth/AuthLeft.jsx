import { ArrowLongUpIcon } from "@heroicons/react/16/solid";

const AuthLeft = () => {
  return (
    <div className="hidden md:flex h-full w-1/2 bg-white border-r relative flex-col justify-center items-center">
     
      <img
        src="/png/logoFaded.png"
        alt="logo"
        className="absolute left-0 bottom-0 w-[300px] aspect-square"
      />

      {/* Card: Main Information */}
      <div className="flex rounded-xl shadowCardAuth flex-col w-full max-w-[400px]">
        {/* Header */}
        <div className="flex gap-2 items-center border-b p-4">
          <img src="/svg/logo.svg" alt="logo" className="w-6 h-6" />
          <span className="font-semibold">AI to Detect & Autofix Bad Code</span>
        </div>
        {/* Stats */}
        <div className="flex gap-4 justify-between items-center p-4">
          {[
            { value: "30+", label: "Language Support" },
            { value: "10K+", label: "Developers" },
            { value: "100K+", label: "Hours Saved" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="font-semibold">{stat.value}</span>
              <span className="text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card: Analytics */}
      <div className="flex rounded-xl shadowCardAuth flex-col gap-2 p-4 px-8 translate-x-[50%] -translate-y-[10px] bg-white">
        {/* Graph and Growth */}
        <div className="flex justify-between min-w-40">
          <img src="/svg/GraphAuth.svg" alt="graph" />
          <div className="flex flex-col">
            <div className="flex items-center text-primary">
              <ArrowLongUpIcon className="w-5" />
              <span>14%</span>
            </div>
            <div className="font-light text-xs">This week</div>
          </div>
        </div>
        {/* Issues Fixed */}
        <div className="flex flex-col">
          <span className="font-semibold">Issues Fixed</span>
          <span className="font-semibold text-2xl">500K+</span>
        </div>
      </div>
    </div>
  );
};

export default AuthLeft;

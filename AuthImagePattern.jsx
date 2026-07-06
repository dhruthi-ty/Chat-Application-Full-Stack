import React from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center p-12 border-l border-base-300 bg-base-100 h-screen">
      <div className="max-w-sm w-full ml-10">
        
        {/* Mock Chat UI */}
        <div className="space-y-5 mb-8">
          
          {/* Incoming */}
          <div className="flex items-start">
            <div className="w-10 h-10 bg-base-300 rounded-full mr-3" />
            <div className="bg-base-200 px-4 py-2 rounded-lg border border-base-300 shadow-sm max-w-[70%]">
              <p className="text-base-content/80 text-sm">
                Hey there! Welcome to yap!
              </p>
            </div>
          </div>

          {/* Outgoing */}
          <div className="flex items-start justify-end">
            <div className="bg-primary text-primary-content px-4 py-2 rounded-lg shadow-sm max-w-[70%]">
              <p className="text-sm">Thanks! Excited to join.</p>
            </div>
          </div>

          {/* Incoming */}
          <div className="flex items-start">
            <div className="w-10 h-10 bg-base-300 rounded-full mr-3" />
            <div className="bg-base-200 px-4 py-2 rounded-lg border border-base-300 shadow-sm max-w-[70%]">
              <p className="text-base-content/80 text-sm">
                You can start chatting instantly with friends!
              </p>
            </div>
          </div>
        </div>

        {/* Title + Subtitle */}
        <h2 className="text-xl font-bold text-base-content mb-2">{title}</h2>
        <p className="text-base-content/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

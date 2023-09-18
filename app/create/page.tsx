import React from "react";

export default function CreateContent() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-xl font-medium mb-8">
        What Would You Like To Create?
      </h1>

      <div className="flex space-x-8">
        <div className="flex flex-col space-y-4">
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Image
          </button>
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Video
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Tweet
          </button>
          <button className="cursor-pointer w-[200px] h-16 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-200 transform active:scale-90 flex items-center justify-center">
            Thread
          </button>
        </div>
      </div>
    </div>
  );
}

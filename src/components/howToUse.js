import React from "react";
import { motion } from "framer-motion";
// import { useTheme } from "./ThemeContext"; // Adjust the import based on your folder structure

export default function HowToUse({ theme }) {
  // const { theme } = useTheme(); // Get theme from context

  return (
    <main
      className={` flex min-h-screen flex-col flex-wrap items-center p-4 md:p-24 max-sm:m-12 ${
        theme === "dark"
          ? "bg-dark-theme text-light"
          : "bg-light-theme text-dark"
      }`}
      id="howToUse"
    >
      <div className="w-full md:w-[570px]">
        <h1 className="text-[44px] font-extrabold text-center mb-2">
          <span className="text-yellow-400">Easy steps to</span> remove an image
          background
        </h1>
        <p className="text-[16px] text-gray-500 text-center">
          Remove background from images of humans, animals or objects and
          download high-resolution images for free.
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-16 md:flex-row">
        {[1, 2, 3].map((step) => (
          <motion.div
            key={step}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.4 }}
            transition={{ type: "spring", stiffness: 200, damping: 13 }}
            className={`w-full md:w-[320px] h-[180px] rounded-2xl p-6 flex gap-5 mt-6 md:mt-0 
             bg-opacity-50 bg-gray-100  `}
          >
            <h1 className="text-yellow-400 font-extrabold text-[42px]">
              {step}
            </h1>
            <div>
              <h2 className="font-bold mt-4 mb-2">
                {step === 1
                  ? "Upload image"
                  : step === 2
                  ? "Remove background"
                  : "Download Image"}
              </h2>
              <p className="text-[14px] text-gray-700">
                {step === 1
                  ? "For best results, choose an image where the subject has clear edges with nothing overlapping."
                  : step === 2
                  ? "Upload your image to automatically remove the background in an instant."
                  : "Download your new image as a PNG file with a transparent background to save, share, or keep editing."}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import DragAndDropImage from "./DragAndDropImage";

export default function Home({ theme }) {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleChanges = () => {
    setLoading(true);
    setShowOverlay(true);
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = process.env.REACT_APP_API_URI;
    // const apiKey = "ULVe373XWqoTamTiznrayVr5";
    // const url = "https://api.remove.bg/v1.0/removebg";

    // console.log(apiKey);
    const formData = new FormData();
    formData.append("image_file", image, image.name);
    formData.append("size", "auto");

    fetch(url, {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
      },
      body: formData,
    })
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setBgRemove(reader.result);
          setLoading(false);
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = bgRemove;
    downloadLink.download = "removed_background.png";
    downloadLink.click();
    // resetImage();
  };

  const handleClose = () => {
    setShowOverlay(false);
    resetImage();
  };

  const resetImage = () => {
    setImage(null); // Reset image state
    setBgRemove(null); // Reset background removed image
    setLoading(false); // Reset loading status if necessary
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-4 md:p-24 max-sm:m-12 ${
        theme === "dark"
          ? "bg-dark-theme text-light"
          : "bg-light-theme text-dark"
      }`}
      id="home"
    >
      <div className="gap-8 items-center py-12 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-8">
        <div className="w-69 h-64 md:w-96 md:h-96 py-14 rounded-full">
          <img
            className="w-full h-auto rounded-[30px] max-w-[320px] lg:max-w-[420px]"
            src={require("../remove.bg.gif")}
            alt="bgRemoverImg"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <div className="">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-extrabold text-yellow-400"
            >
              Remove the <br />
              background from <br />
              images for free.
            </motion.h1>
            <p className="text-[14px] text-gray-500 mt-4">
              Remove background from images of humans, animals, or objects and
              <br /> download high-resolution images for free.
            </p>
            <div className="mt-12">
              <DragAndDropImage setImage={setImage} image={image} />
              {image && !bgRemove && !loading && (
                <div className="flex justify-between space-x-4">
                  <button
                    // className="px-6 py-2  text-black rounded-md cursor-pointer"
                    className="px-4 py-2  cursor-pointer bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold rounded-md shadow-md transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleChanges}
                  >
                    {loading ? "Loading..." : "Remove Background"}
                  </button>
                  <button
                    // className="px-10 py-2 ml-4 text-black rounded-md cursor-pointer"
                    className="px-10 py-2 ml-4 cursor-pointer bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white font-semibold rounded-md shadow-md transition-all duration-200"
                    onClick={resetImage}
                  >
                    Remove Image
                  </button>
                </div>
              )}
              {showOverlay && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className={`bg-white p-6 rounded-lg shadow-lg `}
                      // style={{
                      //   width: "100%",
                      //   maxWidth: "400px",
                      //   maxHeight: "400px",

                      // }}
                    >
                      {bgRemove && (
                        <motion.img
                          src={bgRemove}
                          alt="Remove Background"
                          className="rounded-lg mb-4 max-h-[400px]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        />
                      )}
                      <div
                        className={`flex justify-between space-x-4 ${
                          theme === "dark"
                            ? "bg-dark-theme text-light"
                            : "bg-light-theme text-dark"
                        }`}
                      >
                        <motion.button
                          onClick={handleDownload}
                          className="px-6 py-2 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold rounded-md shadow-md transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Download Image
                        </motion.button>
                        <motion.button
                          onClick={handleClose}
                          className="px-6 py-2 bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold rounded-md shadow-md transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Close
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
              {/* {!image && !bgRemove && !loading && (
                <p className="text-[14px] text-gray-500 mt-2">
                  Drop an image or click to upload
                </p>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

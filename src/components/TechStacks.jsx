import React, { useRef, useEffect } from "react";

const TechStacks = ({ setModalOpen, modalData, setModalData }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setModalOpen(false);
        setModalData(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setModalOpen, setModalData]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-opacity-50 backdrop-filter  backdrop-blur-lg z-40"
      ></div>

      <div className="flex  overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:-mt-0  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full  max-h-full">
          <div
            ref={overlayRef}
            className="relative bg-gradient-to-t from-sky-300 to-sky-500 m-auto md:w-[50%] opacity-100 rounded-lg "
            style={{
              boxShadow: "0 1px 80px rgba(135, 206, 250, 1)",
            }}
          >
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-lg font-semibold text-gray-950 ">
                {modalData?.title}
              </h3>
              <button
                onClick={() => {
                  setModalOpen(false);
                  setModalData(null);
                }}
                className="text-white  bg-transparent  hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center  "
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <p className="text-base font-semibold  tracking-w text-black ">
                Here are the tech stacks used in this Project.
              </p>
              <ul className="my-4 space-y-3 overflow-y-auto">
                {modalData?.stacks?.map((stack, index) => (
                  <li key={index}>
                    <span className="text-gray-950 text-lg text-center items-center font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-950 ml-3 text-center items-center font-bold ">
                      {stack}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStacks;

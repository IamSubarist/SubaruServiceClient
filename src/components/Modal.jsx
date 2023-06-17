import React from "react";

const Modal = ({ isTransitioned, remainingTime, setShowModal, title }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isTransitioned ? "visible opacity-30" : "invisible opacity-20"
        }`}
      ></div>
      <div
        className={`fixed mx-auto sm:right-1/3 top-20 w- sm:w-1/3 p-2 border-2 border-blue-900 rounded-md bg-white text-center transition-transform duration-300 ${
          isTransitioned ? "scale-1" : "scale-0"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">{title[0]}</h2>
        <p>{title[1]}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-900 text-white rounded transition-all duration-500 ease-in-out hover:bg-blue-700"
          onClick={() => setShowModal(false)}
        >
          <p>Закрыть ({remainingTime}s)</p>
        </button>
      </div>
    </>
  );
};

export default Modal;

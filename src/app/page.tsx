"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Hola mundo");

  const toggleMessage = () => {
    setMessage(message === "Hola mundo" ? "Chao mundo" : "Hola mundo");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">
          {message}
        </h1>
        <button 
          onClick={toggleMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Cambiar mensaje
        </button>
      </div>
    </div>
  );
}
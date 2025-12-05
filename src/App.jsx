import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


// import { useCallback, useEffect, useState } from "react";

function App() {
  let [password, setPassword] = useState("");
  let [passwordLength, setPasswordLength] = useState(8);

  const handleLengthIncrease = () => {
    setPasswordLength(passwordLength + 1);
  };

  const handleLengthDecrease = () => {
    if (passwordLength === 8) return;
    setPasswordLength(passwordLength - 1);
  };

  const handlePasswordGenerate = useCallback(() => {
    const chars =
      "@#%$0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";

    for (let i = 0; i < passwordLength; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pass);
  }, [passwordLength]);

  useEffect(() => {
    handlePasswordGenerate();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-white/30 text-white">

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center mb-2">
          Random String / Password Generator
        </h1>
        <p className="text-center text-white/90 mb-6">
          Generate secure random strings instantly. Adjust length and create a unique password with one click!
        </p>

        {/* Password Output */}
        <div className="mb-5">
          <input
            type="text"
            readOnly
            value={password}
            className="w-full h-12 text-center rounded-lg border border-white/40 bg-white/30 backdrop-blur-sm
                     text-black placeholder-white/70 focus:outline-none"
          />
        </div>

        {/* Length Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={handleLengthDecrease}
            className="h-10 w-10 flex items-center justify-center text-2xl font-bold bg-white/30 backdrop-blur-sm 
                       text-black rounded-lg border border-white/40 hover:bg-white/40 transition"
          >
            -
          </button>

          <input
            type="text"
            readOnly
            value={passwordLength}
            className="h-10 w-20 text-center rounded-lg border border-white/40 bg-white/30 backdrop-blur-sm 
                       text-black focus:outline-none"
          />

          <button
            onClick={handleLengthIncrease}
            className="h-10 w-10 flex items-center justify-center text-2xl font-bold bg-white/30 backdrop-blur-sm 
                       text-black rounded-lg border border-white/40 hover:bg-white/40 transition"
          >
            +
          </button>
        </div>

        {/* Generate Button */}
        <button
          onClick={handlePasswordGenerate}
          className="w-full h-12 bg-white text-indigo-700 font-bold rounded-lg shadow-md 
                     hover:bg-white/90 transition"
        >
          Generate New Password
        </button>
      </div>
    </div>
  );
}

export default App;

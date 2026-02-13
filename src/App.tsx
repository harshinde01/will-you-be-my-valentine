"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "are u sure?",
      "what if I asked really nicely?",
      "pretty please",
      "with a cherry on top",
      "well you don't like cherries",
      "with a strawberry on top?",
      "But :(",
      "why not",
      "stop",
      "just say yes",
      "no :(",
      "last chance",
      "fine I don't want to be your valentine",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/PXKZhCEfEfsAAAAi/bubu-bubu-dudu.gif" />
          <div className="my-4 text-4xl font-bold">yay mwah :)</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media.tenor.com/4bV9ylEOWpgAAAAj/bubu-dudu-sseeyall.gif"
          />
          <h1 className="my-4 text-4xl">Hi baby:) Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

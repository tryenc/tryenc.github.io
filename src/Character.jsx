import React, { useState } from "react"
import classnames from "classnames"

export const Character = ({ audioPath, character, style: parentStyle }) => {
  const [playing, setPlaying] = useState(false)
  const pronunciation = new Audio(audioPath)

  function handleClick() {
    pronunciation.play()
    setPlaying(true)
  }
  // remove this event listener
  pronunciation.addEventListener("ended", () => setPlaying(false))

  return (
    <button
      className={classnames(
        "w-full h-full bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow-md focus:outline-none",
        { "shadow-none": playing }
      )}
      style={parentStyle}
      onClick={handleClick}
    >
      {character}
    </button>
  )
}

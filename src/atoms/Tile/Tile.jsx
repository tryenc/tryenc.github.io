import React from "react"
import classnames from "classnames"

const tileClasses =
  "m-2 bg-white text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow-md"

export const Tile = ({
  children,
  className: parentClassName,
  style: parentStyle
}) => {
  return (
    <span
      className={classnames(tileClasses, parentClassName)}
      style={parentStyle}
    >
      {children}
    </span>
  )
}

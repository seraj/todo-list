import React from "react";

export const AddIcon = ({ width = 16, height = 16, color = "#fff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    width={width}
    height={height}
    enableBackground="new 0 0 32 32"
    version="1.1"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
  >
    <path d="M28 14H18V4a2 2 0 00-4 0v10H4a2 2 0 000 4h10v10a2 2 0 004 0V18h10a2 2 0 000-4z"></path>
  </svg>
);

export const EditIcon = ({ width = 16, height = 16, color = "#fff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    width={width}
    height={height}
    version="1.1"
    viewBox="0 0 64 64"
    xmlSpace="preserve"
  >
    <path d="M55.736 13.636l-4.368-4.362a2.308 2.308 0 00-1.636-.677c-.592 0-1.184.225-1.635.676l-3.494 3.484 7.639 7.626 3.494-3.483a2.305 2.305 0 000-3.264z"></path>
    <path d="M21.922 35.396L29.562 43.023 50.607 22.017 42.967 14.39z"></path>
    <path d="M20.273 37.028L18.642 46.28 27.913 44.654z"></path>
    <path d="M41.393 50.403H12.587V21.597h20.329l5.01-5H10.82a3.243 3.243 0 00-3.234 3.234V52.17a3.243 3.243 0 003.234 3.234h32.339a3.243 3.243 0 003.234-3.234V29.049l-5 4.991v16.363z"></path>
  </svg>
);

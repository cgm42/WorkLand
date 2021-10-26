import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  let left;
  if (width < 1024) {
    left = 0;
  } else {
    left = (width - 1024) / 2;
  }
  return {
    left,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

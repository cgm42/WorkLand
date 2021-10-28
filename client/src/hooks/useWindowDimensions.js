import { useEffect, useState } from 'react';

import { basemapWidth, basemapHeight, navBarHeight } from '../utils/constants';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  let left, top;
  if (width < basemapWidth) {
    left = 0;
  } else {
    left = (width - basemapWidth) / 2;
  }
  if (height < basemapHeight + navBarHeight) {
    top = navBarHeight;
  } else {
    top = (height - basemapHeight - navBarHeight) / 2 + navBarHeight;
  }
  return {
    leftMargin: left,
    topMargin: top,
    width,
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

import Iframe from 'react-iframe';
import useWindowDimensions from '../../hooks/useWindowDimensions';
function Computer() {
  const { width, height } = useWindowDimensions();
  return (
    <Iframe
      src="https://packard-belle.netlify.app/"
      width={width * 0.94}
      height={height * 0.9}
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
    />
  );
}

export default Computer;

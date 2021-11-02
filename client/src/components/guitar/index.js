import { useMemo } from 'react';
import Guitar, { getRenderFingerSpn } from 'react-guitar';
import { standard } from 'react-guitar-tunings';
import useSound from 'react-guitar-sound';
import useWindowDimensions from '../../hooks/useWindowDimensions';
function GuitarComp() {
  const strings = useMemo(() => [0, 1, 2, 2, 0, -1], []);
  const { play } = useSound({ fretting: strings, tuning: standard });
  const { width, height } = useWindowDimensions();
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: `${width * 0.9}px`,
          height: `${height * 0.9}px`,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <h3 style={{ color: 'white' }}>Play the guitar with your mouse!</h3>
        <Guitar
          strings={strings}
          renderFinger={getRenderFingerSpn(standard)}
          playOnHover
          onPlay={play}
        />
      </div>
    </>
  );
}

export default GuitarComp;

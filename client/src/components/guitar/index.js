import { useMemo } from 'react';
import Guitar, { getRenderFingerSpn } from 'react-guitar';
import { standard } from 'react-guitar-tunings';
import useSound from 'react-guitar-sound';

function GuitarComp() {
  const strings = useMemo(() => [0, 1, 2, 2, 0, -1], []);
  const { play } = useSound({ fretting: strings, tuning: standard });

  return (
    <>
      <h3>Play the guitar with your mouse!</h3>
      <Guitar
        strings={strings}
        renderFinger={getRenderFingerSpn(standard)}
        playOnHover
        onPlay={play}
      />
    </>
  );
}

export default GuitarComp;

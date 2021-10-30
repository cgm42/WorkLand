import { useMemo } from 'react';
import Guitar, { getRenderFingerSpn } from 'react-guitar';
import { standard } from 'react-guitar-tunings';
import useSound from 'react-guitar-sound';

function GuitarComp() {
  const strings = useMemo(() => [0, 1, 2, 2, 0, -1], []);
  const { play } = useSound({ fretting: strings, tuning: standard });

  return (
    <Guitar
      strings={strings}
      renderFinger={getRenderFingerSpn(standard)}
      playOnHover
      onPlay={play}
    />
  );
}

export default GuitarComp;

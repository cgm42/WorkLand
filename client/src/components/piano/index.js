import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import SoundfontProvider from './SoundfontProvider';
import './styles.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.QWERTY_ROW,
});
function PianoComp() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: 'flex',
        width: `${width * 0.9}px`,
        height: `${height * 0.9}px`,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <h1>Play some tunes!</h1>

      <div className="mt-5">
        <ResponsivePiano width={width} height={height * 0.5} />
      </div>
    </div>
  );
}

export default PianoComp;

function ResponsivePiano(props) {
  return (
    <div>
      {
        <SoundfontProvider
          instrumentName="acoustic_grand_piano"
          audioContext={audioContext}
          hostname={soundfontHostname}
          render={({ isLoading, playNote, stopNote }) => (
            <Piano
              noteRange={noteRange}
              width={props.width - 122}
              playNote={playNote}
              stopNote={stopNote}
              disabled={isLoading}
              keyboardShortcuts={keyboardShortcuts}
            />
          )}
        />
      }
    </div>
  );
}

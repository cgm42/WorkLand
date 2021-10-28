import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactGiphySearchbox from 'react-giphy-searchbox';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ANNOUNCEMENT } from '../../reducers/mapReducer';
function Chat() {
  const [chatboxShow, setChatboxShow] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const dispatch = useDispatch();
  const { width, height, topMargin, leftMargin } = useWindowDimensions();
  const onChatButtonClick = () => {
    setChatboxShow(!chatboxShow);
  };
  useEffect(() => {
    if (showGif) {
      setTimeout(() => {
        setShowGif(false);
      }, 3800);
    }
  }, [showGif]);
  return (
    <>
      <button
        onClick={onChatButtonClick}
        style={{
          zIndex: 20,
          position: 'absolute',
          left: `${width - leftMargin - 200}px`,
          top: `${height - topMargin + 100}px`,
          width: '200px',
        }}>
        Send a GIF
      </button>
      {chatboxShow && (
        <div
          className="rpgui-container framed float"
          style={{
            zIndex: 20,
            position: 'absolute',
            left: `${width / 2 + 200}px`,
            top: `${height / 2 - 100}px`,
            width: '335px',
          }}>
          <h3
            style={{
              color: 'white',
            }}>
            Send a GIF!
          </h3>
          To:{' '}
          <select
            style={{
              width: '100%',
            }}
            name="pets"
            id="pet-select">
            <option value="">Everyone</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          <ReactGiphySearchbox
            apiKey="IqdjO72Noi1ikvZCa1ehpeiKkK7atZGd"
            onSelect={(item) => {
              dispatch(ANNOUNCEMENT({ item }));
              onChatButtonClick();
              setShowGif(true);
            }}
          />
        </div>
      )}
      {showGif && (
        <div>
          <iframe
            style={{
              position: 'absolute',
              left: `${width / 2 + 200}px`,
              top: `${height / 2 - 100}px`,
              width: '235px',
            }}
            title="ok"
            src="https://giphy.com/embed/gWOnlfSwXjbl0c603K"
            width="480"
            height="480"
            frameBorder="0"
            className="giphy-embed"></iframe>
        </div>
      )}
    </>
  );
}

export default Chat;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactGiphySearchbox from 'react-giphy-searchbox';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ANNOUNCEMENT } from '../../reducers/mapReducer';
function Chat() {
  const [chatboxShow, setChatboxShow] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const dispatch = useDispatch();
  const { width, height, topMargin, leftMargin } = useWindowDimensions();
  const incomingGifState = useSelector((state) => state.incomingGif);
  const onlineUsers = useSelector((state) => state.players);

  useEffect(() => {
    if (!incomingGifState.gifObj) return;
    setShowGif(true);
    let timer;
    timer = setTimeout(() => {
      setShowGif(false);
    }, 4200);

    // return () => {
    //   clearTimeout(timer);
    // };
  }, [incomingGifState]);

  const onChatButtonClick = () => {
    setChatboxShow(!chatboxShow);
  };

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
            }}
          />
        </div>
      )}
      {showGif && (
        <div>
          <div
            style={{
              position: 'absolute',
              left: `${width / 2 + 260}px`,
              top: `${height / 2 - 50}px`,
              width: '235px',
            }}>
            <p>A GIF' from: {incomingGifState.senderName}</p>
            <iframe
              style={{
                width: '235px',
              }}
              title="ok"
              // src="https://giphy.com/embed/W2nuhlWbyVmV73jIsc"
              src={incomingGifState.gifObj.item.embed_url}
              width="320"
              height="320"
              frameBorder="0"
              className="giphy-embed"></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;

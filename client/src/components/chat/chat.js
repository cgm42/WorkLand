import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactGiphySearchbox from 'react-giphy-searchbox';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { ANNOUNCEMENT, SEND_DIRECT } from '../../reducers/mapReducer';
function Chat({ canOpen }) {
  const [chatboxShow, setChatboxShow] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [receiver, setReceiver] = useState('Everyone');
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

  const hideGifSearch = () => {
    setChatboxShow(!chatboxShow);
  };
  const userArr = [];
  for (let key in onlineUsers) {
    userArr.push(onlineUsers[key].name);
  }
  const userSelectList = userArr.map((e) => {
    return <option value={e}>{e}</option>;
  });

  return (
    <>
      {canOpen && (
        <button
          onClick={hideGifSearch}
          style={{
            zIndex: 20,
            position: 'absolute',
            left: `${width - leftMargin - 200}px`,
            top: `${height - topMargin + 100}px`,
            width: '200px',
          }}>
          Send a GIF
        </button>
      )}
      {chatboxShow && canOpen && (
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
            id="pet-select"
            onChange={(event) => setReceiver(event.target.value)}>
            <option value="">Everyone</option>
            {userSelectList}
          </select>
          <ReactGiphySearchbox
            apiKey="IqdjO72Noi1ikvZCa1ehpeiKkK7atZGd"
            onSelect={(item) => {
              hideGifSearch();
              if (receiver === 'Everyone') {
                return dispatch(ANNOUNCEMENT({ gifObj: item }));
              }
              dispatch(SEND_DIRECT({ gifObj: item, receiverName: receiver }));
              setReceiver('Everyone');
            }}
          />
        </div>
      )}
      {showGif && canOpen && (
        <div>
          <div
            style={{
              position: 'absolute',
              left: `${width / 2 + 260}px`, //260 to center the GIF within walls on the map
              top: `${height / 2 - 50}px`,
              width: '235px',
            }}>
            <p>
              A GIF' from: {incomingGifState.senderName} to{' '}
              {incomingGifState.receiverName === null
                ? 'everyone'
                : `${incomingGifState.receiverName}`}
            </p>
            <iframe
              style={{
                width: '235px',
              }}
              title="ok"
              src={incomingGifState.gifObj.embed_url}
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

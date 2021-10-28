import { useState } from 'react';
import ReactGiphySearchbox from 'react-giphy-searchbox';
import useWindowDimensions from '../../hooks/useWindowDimensions';
function Chat() {
  const [chatboxShow, setChatboxShow] = useState(false);
  const { width, height, topMargin, leftMargin } = useWindowDimensions();
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
            left: `${width / 2}px`,
            top: `${height / 2}px`,
            width: '335px',
          }}>
          <h3
            style={{
              color: 'white',
            }}>
            Send a GIF!
          </h3>
          <ReactGiphySearchbox
            apiKey="IqdjO72Noi1ikvZCa1ehpeiKkK7atZGd"
            onSelect={(item) => console.log(item)}
          />
        </div>
      )}
    </>
  );
}

export default Chat;

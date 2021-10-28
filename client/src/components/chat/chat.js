import { useState } from 'react';
function Chat() {
  const [chatboxShow, setChatboxShow] = useState(false);
  const onChatButtonClick = () => {
    setChatboxShow(!chatboxShow);
  };
  return (
    <>
      <button onClick={onChatButtonClick}>chat</button>
      {chatboxShow && (
        <div>
          chatbox!<input></input>
          <button>send!</button>
        </div>
      )}
    </>
  );
}

export default Chat;

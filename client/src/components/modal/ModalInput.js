import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { avatarSkinArr } from "../../utils/constants";
import { SELECT_AVATAR } from "../../reducers/globalReducer";
import "./modal.css";
function ModalInput({ isOpen }) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const dispatch = useDispatch();

  const onAvatarClick = (skin) => {
    dispatch(SELECT_AVATAR({ skin }));
    setModalIsOpen(false);
  };

  const imgAvatarArr = avatarSkinArr.map((skin) => (
    <div key={skin} className="Character Character--walk-down">
      <img
        className="PixelArtImage Character_shawdow Character_sprite-sheet active Character--walk-down"
        src={process.env.PUBLIC_URL + `/sprites/skins/${skin}.png`}
        alt={`avatar-${skin}`}
        onClick={() => onAvatarClick(skin)}
        onMouseOver={(e) => {
          e.currentTarget.style.opacity = 1;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.opacity = 0.7;
        }}
      />
    </div>
  ));

  return (
    <>
      <Modal isOpen={modalIsOpen} ariaHideApp={false}>
        <h3>Choose An Avatar</h3>

        {imgAvatarArr}
      </Modal>
    </>
  );
}
export default ModalInput;

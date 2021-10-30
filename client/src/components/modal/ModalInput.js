import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { avatarSkinArr } from '../../utils/constants';
import { SELECT_AVATAR } from '../../reducers/mapReducer';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './modal.css';
function ModalInput({ isOpen }) {
  const { topMargin } = useWindowDimensions();
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

  const avatarArr1 = imgAvatarArr.slice(0, 6);
  const avatarArr2 = imgAvatarArr.slice(6, 12);
  const avatarArr3 = imgAvatarArr.slice(12).reverse();
  const style = {
    display: 'flex',
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} ariaHideApp={false}>
        <div
          className="nes-container with-title is-centered is-rounded"
          style={{ top: `${topMargin}px` }}>
          <h3 className="title">Choose An Avatar</h3>
          <div style={style}>{avatarArr1}</div>
          <div style={style}>{avatarArr2}</div>
          <div style={style}>{avatarArr3}</div>
        </div>
      </Modal>
    </>
  );
}
export default ModalInput;

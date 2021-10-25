import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
const Container = styled.div`
  padding: 30px;
  dispaly: absolute;
  height: 200px;
  width: 300px;
  margin: auto;
`;

const StyledVideo = styled.video`
  height: 40%;
  width: 50%;
`;

function Video(props) {
  const ref = useRef();

  useEffect(() => {
    props.peer.on('stream', (stream) => (ref.current.srcObject = stream));
  }, []);
  return <StyledVideo playsInline autoPlay ref={ref} />;
}

function VideoContainer() {
  const [peers, setPeers] = useState([]);
  const userVideo = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream;
        dispatch(JOIN_VIDEO());
      });
  });
  return <></>;
}

export default VideoContainer;

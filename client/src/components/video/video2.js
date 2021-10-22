import React, { useEffect, useState, useRef } from "react";
import Peer from "simple-peer";
//This is an example file from simple-peer. For reference only
function Video2() {
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        var peer1 = new Peer({ initiator: true, stream: stream });
        var peer2 = new Peer();

        peer1.on("signal", (data) => {
          peer2.signal(data);
        });

        peer2.on("signal", (data) => {
          // peer1.signal(data);
        });

        peer2.on("stream", (stream) => {
          // got remote video stream, now let's show it in a video tag
          var video = videoRef.current;

          if ("srcObject" in video) {
            video.srcObject = stream;
          } else {
            video.src = window.URL.createObjectURL(stream); // for older browsers
          }

          video.play();
        });
      });
  }, []);

  return <video ref={videoRef}></video>;
}

export default Video2;

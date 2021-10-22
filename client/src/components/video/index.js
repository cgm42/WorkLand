import Peer from "simple-peer";

import { INITCALL, ACCEPTCALL } from "../../reducers/userReducer";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useRef, useState } from "react";

function Video({ stream, otherId }) {
  const [peerConnectionToOther, setPeerConnectionToOther] = useState(null);
  const [peerConnectionFromOther, setPeerConnectionFromOther] = useState(null);
  const [streamToShow, setStreamToShow] = useState();
  const dispatch = useDispatch();
  const videoRef = useRef();
  const connectionRef = useRef();
  const callerSignalState = useSelector((state) => {
    return state.chat.callerSignal;
  });
  const calleeSignalState = useSelector((state) => {
    return state.chat.calleeSignal;
  });

  useEffect(() => {
    /**
     * Set up peer connection to the other player
     */
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });
    setPeerConnectionToOther(peer);

    // stream.getTracks().forEach((t) => peer.addTrack(t, stream));

    peer.on("signal", (data) => {
      dispatch(INITCALL({ data, otherId }));
    });
  }, []);

  /**
   * Set up Peer connection to receive video/audio from the other player
   */

  useEffect(() => {
    const peer = new Peer({});
    peer.on("signal", (data) => {
      dispatch(ACCEPTCALL({ data, callAccepted: true }));
    });
    peer.on("stream", (stream) => {
      setStreamToShow(stream);
    });

    connectionRef.current = peer;
    setPeerConnectionFromOther(peer);
  }, [otherId]);

  useEffect(() => {
    if (!callerSignalState || !peerConnectionFromOther) {
      return;
    }
    peerConnectionFromOther.signal(callerSignalState);
  }, [callerSignalState, peerConnectionFromOther]);

  useEffect(() => {
    if (!calleeSignalState || !peerConnectionToOther) {
      return;
    }
    peerConnectionToOther.signal(calleeSignalState);
  }, [calleeSignalState, peerConnectionToOther]);

  useEffect(() => {
    const func = async () => {
      if (!videoRef | !streamToShow) {
        return;
      }
      videoRef.current.srcObject = streamToShow;
      await videoRef.current.play();
    };

    func();
  }, [videoRef, streamToShow]);

  // useEffect(() => {
  //   if (!videoRef) {
  //     return;
  //   }
  //   videoRef.current.srcObject = stream;
  // }, [videoRef]);

  // if (!otherId || !peer) {
  //   return (
  //     <h3> no Peer yet</h1>
  //   );
  // }

  return (
    <div className="video" style={{ marginTop: "100px" }}>
      {stream && (
        <video
          // playsInline
          muted={true}
          ref={videoRef}
          autoPlay={true}
          style={{
            border: "solid 1px black",

            width: "300px",
          }}
        />
      )}
    </div>
  );
}

export default Video;

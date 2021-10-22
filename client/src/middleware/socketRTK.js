import { wsEndpoint } from "../constants/constants";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import {
  INITCALLACCEPTED,
  RECEIVECALL,
  SETSOCKETID,
  ACCEPTCALL,
} from "../reducers/userReducer";
export const socketRTK = (url) => {
  return (storeAPI) => {
    const socket = io(wsEndpoint);
    // socket.on("getId", (id) => {
    //   storeAPI.dispatch(SETSOCKETID({ id }));
    // });
    socket.on("callUser", (data) => {
      console.log("call user recevied at B", data);
      storeAPI.dispatch(
        RECEIVECALL({
          receivingCall: true,
          caller: data.from,
          name: data.name,
          callerSignal: data.signal,
        })
      );
    });
    socket.on("callAccepted", (signal) => {
      storeAPI.dispatch(INITCALLACCEPTED({ callAccepted: true, signal }));
    });
    socket.on("movementMessage", (arg) => {
      // console.log("MW on message payload :>> ", arg);
      //receives an update from server
      storeAPI.dispatch(JSON.parse(arg)); //type:UPDATE_OTHERS
    });

    let lastSent = new Date().getTime();

    return (next) => (action) => {
      const newState = next(action);
      if (action.type === "WALK") {
        console.log("storeAPI.getState() :>> ", storeAPI.getState());
        //throttle to optimize performance
        let currentTime = new Date().getTime();
        if (currentTime - lastSent > 100) {
          socket.emit(
            "movementMessage",
            JSON.stringify({
              type: "UPDATE_OTHERS",
              payload: storeAPI.getState().players[action.payload.id],
            })
          );
          lastSent = currentTime;
        }
      }

      if (action.type === "INITCALL") {
        console.log("middleware init call");
        socket.emit("callUser", {
          userToCall: action.payload.otherId,
          signalData: action.payload.data,
          from: storeAPI.getState().localId,
          // name: name,
        });
      }
      if (action.type === "ACCEPTCALL") {
        console.log("sending call acceptance");
        socket.emit("answerCall", {
          signal: action.payload.data,
          to: storeAPI.getState().chat.caller,
        });
      }
      return newState;
    };
  };
};

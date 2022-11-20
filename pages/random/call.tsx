import React, { useEffect, useRef, useState } from "react";
import { socket } from "../../utils/constants";

const RandomCallPage = () => {
  const [peerId, setPeerId] = useState<string | null>(null);
  const userVideo = useRef<HTMLVideoElement>(null);
  const otherUserVideo = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    import("peerjs").then(({ default: Peer }) => {
      const peer = new Peer();
      // on open event
      peer.on("open", (id) => {
        setPeerId(id);
        socket.connect();
        socket.emit("join_random_call", id);
        socket.emit("connect_random_call_user", id);
      });

      // connect to the new user and set up their cam
      const connectToNewUser = (userId: string, stream: any) => {
        const call = peer.call(userId, stream);
        // add other users video
        call.on("stream", (userVideoStream) => {
          if (otherUserVideo.current) {
            otherUserVideo.current.srcObject = userVideoStream as MediaStream;
            otherUserVideo.current.play();
          }
        });
        call.on("close", () => {
          if (otherUserVideo.current) {
            otherUserVideo.current.remove();
          }
        });
      };

      const getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      getUserMedia(
        { video: true, audio: false },
        (stream: any) => {
          // listen to call
          socket.on("call", (data) => {
            console.log("soclket", data);
            connectToNewUser(data, stream);
          });

          // listen to peer call
          peer.on("call", (call) => {
            // answer the call
            call.answer(stream);
            // add other users video
            call.on("stream", (userVideoStream) => {
              if (otherUserVideo.current) {
                otherUserVideo.current.srcObject =
                  userVideoStream as MediaStream;
                otherUserVideo.current.play();
              }
            });
            call.on("close", () => {
              if (otherUserVideo.current) {
                otherUserVideo.current.remove();
              }
            });
          });
          if (userVideo.current) {
            userVideo.current.srcObject = stream as MediaProvider;
            userVideo.current.play();
          }
        },
        function (err: any) {
          console.log("Failed to get local stream", err);
        }
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div>
      <h1>random call</h1>
      <video ref={userVideo} />
      <video ref={otherUserVideo} />
    </div>
  );
};

export default RandomCallPage;

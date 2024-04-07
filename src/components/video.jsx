import React from "react";
import video from "../assets/video/video.mp4";

function VideoPlayer() {
  return (
    <div>
      <video width={1200} controls autoPlay>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;

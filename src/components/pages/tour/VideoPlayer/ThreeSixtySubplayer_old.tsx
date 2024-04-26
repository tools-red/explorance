/* eslint-disable */
// @ts-nocheck
import React, { useEffect } from "react";

interface AFrameSceneProps {
  videoFile: string;
}

const AFrameScene = ({ videoFile }: AFrameSceneProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("aframe");
    }
  }, []);

  return (
    <div id="aframe-scene">
      <a-scene>
        <a-video
          src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_PUBLIC_URL}${videoFile}`}
          autoPlay
          loop
        />
      </a-scene>
    </div>
  );
};

export default AFrameScene;

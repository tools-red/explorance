import React from "react";
import { Canvas } from "@react-three/fiber";
import { useVideoTexture, Sphere } from "@react-three/drei";

// Define a type for the component's props
interface ThreeSixtySubplayerProps {
  videoSrc: string; // Ensure videoSrc is strictly typed as a string
}

// This component uses R3F hooks and should be a child of <Canvas>
const VideoSphere: React.FC<ThreeSixtySubplayerProps> = ({ videoSrc }) => {
  const texture = useVideoTexture(videoSrc, {
    muted: true,
    loop: true,
    crossOrigin: "anonymous",
  });

  return (
    <Sphere args={[500, 60, 40]}>
      <meshBasicMaterial map={texture} toneMapped={false} />
    </Sphere>
  );
};

const ThreeSixtySubplayer: React.FC<ThreeSixtySubplayerProps> = ({
  videoSrc,
}) => {
  return (
    <Canvas>
      <VideoSphere videoSrc={videoSrc} />
    </Canvas>
  );
};

export default ThreeSixtySubplayer;

import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { useVideoPlayStateAtom } from "~/lib/atom";

interface VideoPlayerProps {
  videoFile: string | undefined;
  volume: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoFile, volume }) => {
  const [{ paused }] = useVideoPlayStateAtom();
  const [calcWidth, setCalcWidth] = useState<number | null>(null);

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    // const aspectRatio = 16 / 9;
    const aspectRatio = 3840 / 1776;

    const newCalcWidth = viewportHeight * aspectRatio;
    setCalcWidth(newCalcWidth);
  }, []);

  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
      overflow="hidden"
      borderRadius="22px"
    >
      {calcWidth && (
        <ReactPlayer
          volume={volume}
          loop={true}
          playing={paused}
          width={calcWidth}
          // controls={true}
          height="100%"
          url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_PUBLIC_URL}${videoFile}`}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
        />
      )}
    </Box>
  );
};

export default VideoPlayer;

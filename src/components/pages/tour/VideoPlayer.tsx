import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoFile: string | undefined;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoFile }) => {
  return (
    <Box width="100%" height="100%" position="relative" overflow="hidden">
      <ReactPlayer
        loop={true}
        playing={true}
        width="100%"
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
    </Box>
  );
};

export default VideoPlayer;

import ReactPlayer from "react-player";

interface AiVideoPlayerProps {
  videoFile: string | undefined | null;
}

const AiVideoPlayer: React.FC<AiVideoPlayerProps> = ({ videoFile }) => {
  return (
    <ReactPlayer
      playing={true}
      width="100%"
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
  );
};

export default AiVideoPlayer;

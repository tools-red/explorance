import ReactPlayer from "react-player";

interface IntroductionPlayerProps {
  videoFile: string;
  setIntroEnd: (input: boolean) => void;
}

const IntroductionPlayer: React.FC<IntroductionPlayerProps> = ({
  videoFile,
  setIntroEnd,
}) => {
  return (
    <ReactPlayer
      playing={true}
      width="100%"
      onEnded={() => {
        setIntroEnd;
      }}
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

export default IntroductionPlayer;

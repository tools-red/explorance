import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { useVideoPlayStateAtom } from "~/lib/atom";

import ThreeSixtySubplayer from "./ThreeSixtySubplayer";

// import dynamic from 'next/dynamic';

// const AFrameScene = dynamic(() => import('./ThreeSixtySubplayer'), {
//   ssr: false,
//  });

interface VideoPlayerProps {
  videoFile: string | undefined;
  volume: number;
  showCaptions: boolean;
  captionsFile: string;
  is360: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoFile,
  volume,
  showCaptions,
  captionsFile,
  is360 = true,
}) => {
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
      <style
        dangerouslySetInnerHTML={{
          __html: `
            video::cue {
              visibility: ${showCaptions ? "visible" : "hidden"};
              font-family: sans-serif;
              font-weight: normal;
              font-size: 2vmin;
              color: white;
              background: rgba(0,0,0,.4);
              padding: 2vmin;
              border-radius: 4vmin;
            }
          `,
        }}
      ></style>
      {calcWidth && (
        <>
          {is360 ? (
            <ThreeSixtySubplayer
              // TODO: Make 360 video source dynamic
              // videoSrc={`${process.env.NEXT_PUBLIC_CLOUDFLARE_PUBLIC_URL}sarc_360_4k.mp4`}
              videoSrc="/test-videos/sarc_360_4k.mp4"
            />
          ) : (
            // <AFrameScene videoFile="" />
            <ReactPlayer
              config={{
                file: {
                  attributes: { crossOrigin: "true" },
                  tracks: [
                    {
                      default: true,
                      kind: "captions",
                      srcLang: "en",
                      src: `/api/util/vtt-rewriter?url=${process.env.NEXT_PUBLIC_CLOUDFLARE_PUBLIC_URL}${captionsFile}`,
                      label: "English",
                    },
                  ],
                },
              }}
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
        </>
      )}
    </Box>
  );
};

export default VideoPlayer;

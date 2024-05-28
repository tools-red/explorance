import { useState, useEffect, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import View360, { StereoEquiProjection } from "@egjs/react-view360";
import { useVideoPlayStateAtom } from "~/lib/atom";

import "@egjs/react-view360/css/view360.min.css";

interface ThreeSixtyVideoPlayerProps {
  videoFile: string | undefined;
  volume: number;
  showCaptions: boolean;
  captionsFile: string;
}

const ThreeSixtyVideoPlayer: React.FC<ThreeSixtyVideoPlayerProps> = ({
  videoFile,
  volume,
  showCaptions,
  captionsFile,
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

  const projection = useMemo(
    () =>
      new StereoEquiProjection({
        src: `${process.env.NEXT_PUBLIC_CLOUDFLARE_PUBLIC_URL}SARC_FoodCourt_360.mp4`,
        mode: "top_bottom",
        video: {
          autoplay: true,
          loop: true,
        },
        // url={`${process.env.NEXT_PUBLIC_CLOUDFLARE_PUBLIC_URL}${videoFile}`}
      }),
    []
  );

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
          <View360 className="is-16by9" projection={projection} />
        </>
      )}
    </Box>
  );
};

export default ThreeSixtyVideoPlayer;

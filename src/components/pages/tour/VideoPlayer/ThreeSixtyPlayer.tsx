import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'videojs-vr';

interface ThreeSixtyPlayerProps {
  src: string;
}

interface VideoJSPlayer {
  mediainfo?: {
    projection?: string;
  };
  vr(options: { projection: string; debug: boolean; forceCardboard: boolean }): void;
}

const ThreeSixtyPlayer: React.FC<ThreeSixtyPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = videojs(videoRef.current, {
        controls: true,
        autoplay: true,
        preload: 'auto',
        sources: [{
          src: src,
          type: 'video/mp4'
        }]
      }, function onPlayerReady(this: VideoJSPlayer) {
        console.log('onPlayerReady', this);
        this.mediainfo = this.mediainfo ?? {};
        this.mediainfo.projection = '360';
        this.vr({
          projection: 'AUTO',
          debug: true,
          forceCardboard: false
        });
      });

      return () => {
        if (player) {
          player.dispose();
        }
      };
    }
  }, [src]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" crossOrigin="anonymous" />
    </div>
  );
};

export default ThreeSixtyPlayer;
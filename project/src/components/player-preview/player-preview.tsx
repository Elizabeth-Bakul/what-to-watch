import { useEffect, useRef } from 'react';

type PlayerPreviewProps = {
  src: string;
  poster: string;
  isActive: boolean;
};

function PlayerPreview({
  src,
  poster,
  isActive,
}: PlayerPreviewProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isActive) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isActive]);

  return (
    <video
      src={src}
      className="player__video"
      poster={poster}
      width="280"
      height="175"
      ref={videoRef}
      muted
    />
  );
}

export default PlayerPreview;

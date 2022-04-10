/* eslint-disable jsx-a11y/anchor-is-valid */
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { HOUR_IN_MINUTES } from '../../consts';
import { getFilmById } from '../../services/api';
import { FilmDes } from '../../types/film';
import LoadingScreen from '../loading-screen/loading-screen';
function PlayerPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<FilmDes | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [playing, setPlaying] = useState(false);
  const [videoFullTime, setVideoTime] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const player = useRef() as MutableRefObject<HTMLVideoElement>;

  useEffect(() => {
    getFilmById(Number(id)).then((data) => {
      setFilm(data);
      setLoading(false);
    });
  }, [id]);

  const handeClickPause = () => {
    player.current.pause();
    setPlaying(false);
  };

  const handeClickPlay = () => {
    player.current.play();
    setPlaying(true);
  };

  if (player.current) {
    player.current.ontimeupdate = () => {
      setVideoCurrentTime(player.current?.currentTime);
      setVideoProgress((player.current?.currentTime / videoFullTime) * 100);
    };
  }

  useEffect(() => {
    if (player.current) {
      setVideoTime(player.current.duration);
    }
  }, [playing]);
  const getVideoTimeLeft = (fullTime: number, currentTime: number) => {
    const timeLeft = fullTime - currentTime;
    return `${Math.floor(timeLeft / HOUR_IN_MINUTES)}:${`0${Math.floor(
      timeLeft % HOUR_IN_MINUTES,
    )}`.slice(-2)}`;
  };

  const handeClickFullScreen = () => {
    player.current.requestFullscreen();
  };

  const handeClickExitPlayer = () => {
    player.current.pause();
    navigate(-1);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (film === null) {
    return <Navigate to="/404" />;
  }
  return (
    <div className="player">
      <video
        ref={player}
        src={film?.videoLink}
        id="video"
        className="player__video"
        poster={film?.posterImage}
      >
      </video>

      <button type="button" className="player__exit" onClick={handeClickExitPlayer}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={videoProgress}
              max="100"
            >
            </progress>
            <div
              className="player__toggler"
              style={{ left: `${videoProgress}%` }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {' '}
            {videoFullTime && videoCurrentTime
              ? getVideoTimeLeft(videoFullTime, videoCurrentTime)
              : '0:00:00'}
          </div>
        </div>

        <div className="player__controls-row">
          {playing ? (
            <button
              type="button"
              className="player__play"
              onClick={handeClickPause}
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button
              type="button"
              className="player__play"
              onClick={handeClickPlay}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}

          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={handeClickFullScreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;

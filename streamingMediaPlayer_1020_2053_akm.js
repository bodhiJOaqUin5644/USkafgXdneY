// 代码生成时间: 2025-10-20 20:53:23
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StreamingMediaPlayer = ({ src, title }) => {
  // State for managing the player
  const [media, setMedia] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Effect for setting up the media player
  useEffect(() => {
    setMedia(new Audio(src));
    setMedia(m => {
      m.addEventListener('timeupdate', () => {
        setCurrentTime(m.currentTime);
      });
      m.addEventListener('loadedmetadata', () => {
        setDuration(m.duration);
      });
      return m;
    });
  }, [src]);

  // Play or pause the media
  const togglePlay = () => {
    setPlaying(!playing);
    media && (media.paused ? media.play() : media.pause());
  };

  // Render the media player UI
  return (
    <div className="media-player">
      <audio src={src} ref={media ? (el) => el?.src = media.src : null} controls />
      <div className="media-controls">
        <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'}</button>
        <span>
          {currentTime} / {duration}
        </span>
      </div>
    </div>
  );
};

// PropTypes for type checking
StreamingMediaPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default StreamingMediaPlayer;
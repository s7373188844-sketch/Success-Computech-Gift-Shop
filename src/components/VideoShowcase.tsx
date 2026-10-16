import React, { useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { SHOWCASE_VIDEOS } from '../data/giftsData';
import type { ShowcaseVideo } from '../types';

/** Click-to-play clip. Nothing downloads until the visitor presses play. */
const VideoCard: React.FC<{ video: ShowcaseVideo }> = ({ video }) => {
  const { lang } = useApp();
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const title = lang === 'ta' ? video.title_ta : video.title_en;
  return (
    <figure className="video-card">
      <div className="video-card__frame">
        {playing ? (
          <video ref={ref} controls autoPlay muted playsInline poster={video.poster} preload="none">
            {video.webm ? <source src={video.webm} type="video/webm" /> : null}
            {video.mp4 ? <source src={video.mp4} type="video/mp4" /> : null}
          </video>
        ) : (
          <button type="button" className="video-card__poster" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`}>
            {video.poster ? <img src={video.poster} alt="" loading="lazy" decoding="async" /> : null}
            <span className="video-card__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
            </span>
          </button>
        )}
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
};

export const VideoShowcase: React.FC<{ title: string }> = ({ title }) => {
  const ready = SHOWCASE_VIDEOS.filter((v) => v.mp4 || v.webm);
  if (!ready.length) return null;
  return (
    <section className="section" aria-labelledby="videos-title">
      <div className="container">
        <h2 id="videos-title" className="section-title">
          {title}
        </h2>
        <div className="video-grid">
          {ready.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
};


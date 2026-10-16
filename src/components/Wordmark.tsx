import React from 'react';
import { Link } from '../router';

/** Type-based wordmark: stays sharp at every size, unlike the detailed badge logo. */
export const Wordmark: React.FC<{ compact?: boolean }> = ({ compact }) => (
  <Link to="/" className={`wordmark ${compact ? 'wordmark--compact' : ''}`} aria-label="Success Computech & Gift Shop, home">
    <span className="wordmark__mark" aria-hidden="true">
      SC
    </span>
    <span className="wordmark__text">
      <span className="wordmark__name">Success Computech</span>
      <span className="wordmark__sub">&amp; Gift Shop, Tiruppur</span>
    </span>
  </Link>
);

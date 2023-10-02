import { useMemo } from 'react';
import randomColor from 'randomcolor';

import './style.css';

type Props = {
  x: number;
  y: number;
};

export const Cursor = ({ x, y }: Props) => {
  const fill = useMemo(() => randomColor(), []);

  return (
    <div
      className="cursor-container"
      style={{
        top: y,
        left: x,
      }}
    >
      <svg
        fill={fill}
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.2607 12.4008C19.3774 11.2626 20.4357 10.6935 20.7035 10.0084C20.9359 9.41393 20.8705 8.74423 20.5276 8.20587C20.1324 7.58551 18.984 7.23176 16.6872 6.52425L8.00612 3.85014C6.06819 3.25318 5.09923 2.95471 4.45846 3.19669C3.90068 3.40733 3.46597 3.85584 3.27285 4.41993C3.051 5.06794 3.3796 6.02711 4.03681 7.94545L6.94793 16.4429C7.75632 18.8025 8.16052 19.9824 8.80519 20.3574C9.36428 20.6826 10.0461 20.7174 10.6354 20.4507C11.3149 20.1432 11.837 19.0106 12.8813 16.7454L13.6528 15.0719C13.819 14.7113 13.9021 14.531 14.0159 14.3736C14.1168 14.2338 14.2354 14.1078 14.3686 13.9984C14.5188 13.8752 14.6936 13.7812 15.0433 13.5932L17.2607 12.4008Z" />
      </svg>
    </div>
  );
};

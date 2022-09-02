import { useRef, useEffect } from 'react';

import Experience from '../artwork/Experience';

function Art() {
  const inputEl = useRef(null);

  useEffect(() => {
    const experience = new Experience(inputEl.current, true);

    return () => {
      experience.destroy();
    };
  }, []);

  return <canvas ref={inputEl}></canvas>;
}

export default Art;

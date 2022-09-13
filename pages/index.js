import { memo, useRef } from "react";
import dynamic from "next/dynamic";
import classnames from "classnames";
import styles from "../styles/index.module.scss";

import data from "../data/data.json";

export const isBrowser = typeof window !== "undefined";

const ArtCanvas = dynamic(() => import("../components/Art/Art"), {
  ssr: false,
});

function Artwork({ className }) {
  const containerRef = useRef(null);
  return (
    <main className={classnames(styles.Artwork, className)} ref={containerRef}>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.art}>{isBrowser && <ArtCanvas></ArtCanvas>}</div>
    </main>
  );
}

export default memo(Artwork);

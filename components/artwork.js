import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { Fog } from "three";
import classnames from "classnames";
import "dino-color-picker";

import styles from "../styles/index.module.scss";

import Experience from "../artwork/Experience";
import data from "../data/data.json";

// TODO: Possible refactors

function Art() {
  const inputEl = useRef(null);
  const ref = useRef();
  const [hidden, setHidden] = useState(true);
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(data.colors.fogColor);

  const onColorChange = (event) => {
    const experience = new Experience();
    experience.scene.fog = new Fog(event.target.value, 10, 40);
  };

  useLayoutEffect(() => {
    ref.current.addEventListener("change", onColorChange);
  }, [ref]);

  useEffect(() => {
    const experience = new Experience(inputEl.current, true);
    const picker = document.querySelector("dino-color-picker");
    picker.value = data.colors.fogColor;

    return () => {
      experience.destroy();
    };
  }, []);

  return (
    <>
      <div
        className={classnames(
          styles.controlsContainer,
          hidden && styles.hidden
        )}
        id="controls-container"
      >
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.controls}>
          <div
            className={classnames(styles.button, styles.createMeshButton)}
            id="create-mesh"
          >
            {data.buttons.create}
          </div>
          <div className={styles.button} id="animate">
            {data.buttons.animateOn}
          </div>
          <div className={styles.button} id="color-type">
            {data.buttons.colorTypeOff}
          </div>
          <div className={styles.beadTypeButton}>
            {data.buttons.beadType}
            <select id="bead-type">
              {Object.values(data.beadType).map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.button} id="reset-mesh">
            {data.buttons.reset}
          </div>
          <div className={styles.button} id="rotate-toggle">
            {data.buttons.autoRotateOn}
          </div>
          <div className={styles.colorButton} id="color-button">
            {data.buttons.backgroundColor}
            <div
              onClick={() => setShowPicker(true)}
              style={{ backgroundColor: color }}
            ></div>
          </div>
          <div className={styles.fileUpload}>
            <input type="file" id="file-upload" hidden />
            <label htmlFor="file-upload"> {data.buttons.fileUpload}</label>
          </div>
        </div>
      </div>
      <div
        className={styles.hideControls}
        onClick={() => setHidden(!hidden)}
        id="hide-controls"
      >
        {hidden ? data.buttons.show : data.buttons.hide}
      </div>
      <div
        className={styles.colorPicker}
        style={{ display: !showPicker ? "none" : "block" }}
      >
        <div
          className={styles.closeButton}
          onClick={() => {
            setColor(document.querySelector("dino-color-picker").value);
            setShowPicker(false);
          }}
        >
          X
        </div>
        <dino-color-picker
          ref={ref}
          onChange={onColorChange}
        ></dino-color-picker>
      </div>
      <canvas ref={inputEl}></canvas>
    </>
  );
}

export default Art;

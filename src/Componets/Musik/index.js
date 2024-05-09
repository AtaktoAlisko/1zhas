import React, { useState } from "react";
import styles from "./musik.module.scss";
import muz from "../../assets/muz.mp3";
import proigr from "../../images/proigr.png";

function Musik() {
  const [audio] = useState(new Audio(muz));
  const [isPlaying, setIsPlaying] = useState(false);

  function play(event) {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
    event.target.classList.toggle("rotate-image");
  }

  return (
    <button
      className={`${styles.muzik} ${isPlaying ? "rotate-image" : ""}`}
      onClick={play}
    >
      <img height={25} width={25} src={proigr} alt="musik" />
    </button>
  );
}

export default Musik;

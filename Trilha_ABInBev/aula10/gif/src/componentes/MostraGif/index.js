import React, { useState } from "react";
import "./style.css";

function MostraGif() {
  const [showGif, setShowGif] = useState(false);

  const showgif = () => {
    setShowGif(true);
  };

  const deletegif = () => {
    setShowGif(false);
  };

  return (
    <>
      <p className="button">
        <button onClick={showgif}> clik for see the meme </button>
      </p>

      <p className="nazare-image">
        {showGif && (
          <img
            src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif"
            alt="Gif da nazare confusa "
            onClick={deletegif}
          />
        )}
      </p>
    </>
  );
}

export default MostraGif;

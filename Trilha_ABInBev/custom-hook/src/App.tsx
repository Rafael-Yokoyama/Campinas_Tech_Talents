/* eslint-disable react/jsx-no-undef */

import React from "react";
import ReactDOM from "react-dom";
import useKeyPress from "./use-key-press";
import "./styles.css";
function App() {
  const aPress = useKeyPress("a");
  const bPress = useKeyPress("b");
  const cPress = useKeyPress("c");
  const dPress = useKeyPress("d");
  const ePress = useKeyPress("e");
  const fPress = useKeyPress("f");
  const gPress = useKeyPress("g");
  const hPress = useKeyPress("h");
  const iPress = useKeyPress("i");
  const jPress = useKeyPress("j");
  const kPress = useKeyPress("k");
  const lPress = useKeyPress("l");
  const mPress = useKeyPress("m");
  const nPress = useKeyPress("n");
  const oPress = useKeyPress("o");
  const pPress = useKeyPress("p");
  const qPress = useKeyPress("q");
  const rPress = useKeyPress("r");
  const sPress = useKeyPress("s");
  const tPress = useKeyPress("t");
  const uPress = useKeyPress("u");
  const vPress = useKeyPress("v");
  const wPress = useKeyPress("w");
  const xPress = useKeyPress("x");
  const yPress = useKeyPress("y");
  const zPress = useKeyPress("z");

  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <p>Pressione as letras e veja um emogi</p>

      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>

      <div
        style={{
          fontSize: "200px",
          width: "100%",
          minHeight: "280px",
          backgroundColor: "#e6f5f8",
        }}
      >
        {aPress && "❤"}
        {bPress && "🍌"}
        {cPress && "🍺"}
        {dPress && "🐉"}
        {ePress && "🐘"}
        {fPress && "🦊"}
        {gPress && "🐱"}
        {hPress && "🦛"}
        {iPress && "🧲"}
        {jPress && "🐊"}
        {kPress && "K"}
        {lPress && "🍋"}
        {mPress && "🍉"}
        {nPress && "🛳"}
        {oPress && "🍳"}
        {pPress && "🦚"}
        {qPress && "🧀 "}
        {rPress && "🤖"}
        {sPress && " 🐍"}
        {tPress && "📲"}
        {uPress && "🍇"}
        {vPress && "🎻"}
        {wPress && "🧇"}
        {xPress && "🎻"}
        {yPress && "Y"}
        {zPress && "🦓"}
      </div>
    </div>
  );
}

export default App;

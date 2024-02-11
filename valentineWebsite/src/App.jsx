import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import img from "./assets/cats-cat-with-flower.gif";
import kratos from "./assets/zacxion-zacxiometro.gif";
import Button from "@mui/material/Button";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function App() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [defaultImage, setNewImage] = useState(img);
  useEffect(() => {
    let timer;
    if (showConfetti) {
      timer = setTimeout(() => {
        setShowConfetti(false);
      }, 8000);
    }
    return () => clearTimeout(timer);
  }, [showConfetti]);
  return (
    <>
      {showConfetti && <Confetti width={width} height={height} />}
      <div className="container">
        <div className="imageContainer">
          <img src={defaultImage}></img>
        </div>
        <div className="TextContainer">Will you be my valentine ?</div>
        <span>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={() => {
              setShowConfetti(true);
              setNewImage(img);
            }}
          >
            Yes !
          </Button>
          <Button
            onClick={() => {
              setNewImage(kratos);
              setShowConfetti(false);
            }}
            variant="contained"
            sx={{ margin: "5px" }}
          >
            No 😭
          </Button>
        </span>
      </div>
    </>
  );
}

export default App;

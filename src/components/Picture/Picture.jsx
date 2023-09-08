import { useEffect, useState } from "react";
import "./Picture.css";

const Picture = () => {
  const [image, setImage] = useState("https://picsum.photos/200");
  const [canChange, setCanChange] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [image, canChange]);

  const changeImage = () => {
    if (canChange) {
      fetch("https://picsum.photos/200").then((response)=>{
        setImage(response.url)
      })
    }
  };

  return (
    <div className="picture">
      <div>
        <h3 className="picture_title">Picture</h3>
      </div>
      <div>
        <img src={image} alt="image" />
      </div>
      <div>
        <button
          className="button"
          onClick={() => {
            setCanChange(!canChange);
            changeImage();
          }}
        >
          {canChange ? "Stop" : "Go!"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Picture;

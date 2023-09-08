import { useEffect, useState } from "react";

const Picture = () => {
  const [image, setImage] = useState("https://picsum.photos/200");
  const [canChange, setCanChange] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      clearImage();
      changeImage();
      clearInterval(interval);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const clearImage = () => {
    setImage(null);
  };

  const changeImage = () => {
    setImage("https://picsum.photos/200");
  };

  return (
    <div>
      <h3>Picture</h3>
      <img src={image} alt="image" />
      <button
        onClick={() => {
          setCanChange(!canChange);
        }}
      >
        {canChange ? "Stop" : "Go!"}{" "}
      </button>
    </div>
  );
};

export default Picture;

'use client'
import { SLIDER_MESSAGES } from "@/lib/constants/constants";
import { useState, useEffect } from "react";
import Button from "../atoms/Button";

export default function Carousel() {

  const [selectedImage, setSelectedImage] = useState(1);
  const [message, setMessage] = useState(SLIDER_MESSAGES[selectedImage - 1]);
  useEffect(() => {
    setMessage(SLIDER_MESSAGES[selectedImage - 1]);
  }, [selectedImage]);
  const handleBackImage = () => {
    if (selectedImage === 1) {
      setSelectedImage(6);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  }
  const handleNextImage = () => {
    if (selectedImage === 6) {
      setSelectedImage(1);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  }
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      handleBackImage();
    }
    if (event.key === "ArrowRight") {
      handleNextImage();
    }
  }

  return (
    <section className="carousel" onKeyDown={handleKeyDown}>
      <section className="home-slider">
        <h2 className="slider-message">{message}</h2>
        <ul className="items">
          <picture className="slider-image">
            <img src={`/Images/Bus-${selectedImage === 1 ? 6 : selectedImage - 1}.png`} alt="" />
          </picture>
          <picture className="slider-image selected">
            <img src={`/Images/Bus-${selectedImage}.png`} alt="" />
          </picture>
          <picture className="slider-image">
            <img src={`/Images/Bus-${selectedImage === 6 ? 1 : selectedImage + 1}.png`} alt="" />
          </picture>
        </ul>
      </section>
      <Button action={handleBackImage} content="<⬅" className="slider-button left" />
      <Button action={handleNextImage} content="➡>" className="slider-button right" />
    </section>
  )

}
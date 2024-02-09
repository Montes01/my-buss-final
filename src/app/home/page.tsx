"use client"
import { PRINCIPAL_MESSAGE, PROJECT_NAME, SLIDER_MESSAGES, Services } from "@/lib/constants/constants";
import ServiceCard from "@/system-design/molecules/ServiceCard";
import Button from "@/system-design/atoms/Button";
import { useEffect, useState } from "react";
export default function Home() {

  const [selectedImage, setSelectedImage] = useState(1);
  const [message, setMessage] = useState(SLIDER_MESSAGES[selectedImage-1]);
  useEffect(() => {
    setMessage(SLIDER_MESSAGES[selectedImage-1]);
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
  return (

    <>
      <main className="main-home">

        <section className="home-main">
          <section className="home-text">

            <section className="text-wrapper">

              <h1>Bienvenido a <br />{PROJECT_NAME.split("", 2)}<span>{PROJECT_NAME.split("").slice(2)}</span></h1>
              <p className="home-message">{PRINCIPAL_MESSAGE}</p>
              <Button content="Conoce mas" />
            </section>

          </section>
        </section>

      </main>
      <section className="carousel">
        <section className="home-slider">
          <h2 className="slider-message">{message}</h2>
          <ul className="items">
            <picture className="slider-image">
              <img src={`/Images/bus${selectedImage === 1 ? 6 : selectedImage - 1}.jpeg`} alt="" />
            </picture>
            <picture className="slider-image selected">
              <img src={`/Images/bus${selectedImage}.jpeg`} alt="" />
            </picture>
            <picture className="slider-image">
              <img src={`/Images/bus${selectedImage === 6 ? 1 : selectedImage + 1}.jpeg`} alt="" />
            </picture>
          </ul>
          <section className="slider-buttons">
            <Button action={handleBackImage} content="⬅" className="slider-button"/>
            <Button action={handleNextImage} content="➡" className="slider-button"/>
          </section>
        </section>
      </section>
      <section className="info-part">
        {Services.map(({ description, image, href, title }, index) => (
          <ServiceCard
            key={index}
            description={description}
            image={image}
            href={href}
            title={title}
          />
        ))}
      </section>
    </>
  )
}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { burgerToggle, themeChange } from "../../store/actions";
import { ThemeIco } from "../ThemeIco";

const heroSecImages = [
  "../assets/images/heroImg1.jpg",
  "../assets/images/heroImg2.jpg",
  "../assets/images/heroImg3.jpg",
];

export const HeroSec = () => {
  const dispatch = useDispatch();

  const burgerOpen = () => {
    dispatch(burgerToggle());
  };

  const { burger, theme } = useSelector((state) => state);

  if (burger.visibility) {
    document.documentElement.classList.add("scroll-active");
  }

  const themeToggle = () => {
    dispatch(themeChange());
  };

  useEffect(() => {
    document.body.dataset.theme = theme.theme;
  }, [theme]);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__body">
          <div className="hero-section__upItems">
            <p className="hero-sec__title">
              Anton <br />
              Reva
            </p>
            <p className="hero-sec__subTitle">
              React Frontend developer <br />
            </p>
            <div className="hero-sec__theme-changer" onClick={themeToggle}>
              {theme.theme === "dark" ? (
                <ThemeIco theme="dark" />
              ) : (
                <ThemeIco theme="light" />
              )}{" "}
              {theme.theme} mode
            </div>
            <div
              data-open={burger.visibility}
              className="hero-sec__burgerOpen-hidden-btn"
              onClick={burgerOpen}
            >
              <span className="hero-sec__burgerOpen-hidden-btn__bar"></span>
              <span className="hero-sec__burgerOpen-hidden-btn__bar"></span>
              <span className="hero-sec__burgerOpen-hidden-btn__bar"></span>
              <span className="hero-sec__burgerOpen-hidden-btn__bar"></span>
            </div>
          </div>
          <div className="hero-section__prtf-gallery">
            {heroSecImages.map((item, ind) => (
              <div
                key={ind}
                data-id={ind + 1}
                className="hero-section__prtf-gallery__item"
              >
                <img src={item} alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

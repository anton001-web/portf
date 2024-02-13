import React from "react";
import { projects } from "./projects";
import { PetPListItem } from "./PetPListItem";

export const PortfolioSec = () => {
  return (
    <section color="portfolio-section" id="portf">
      <div className="container">
        <div className="portfolio-section__body">
          <h1 className="portfolio-section__title">Projects I developed</h1>
          <div className="portfolio-section__pet-projects__list">
            {projects.map((item, ind) => (
              <PetPListItem key={ind} item={item} />
            ))}
          </div>
          <p className="portfolio-section__pet-projects__text">
            Here is my
            <a
              href="https://github.com/anton001-web"
              target="_blank"
              className="prtf-gt__link"
            >
              github
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

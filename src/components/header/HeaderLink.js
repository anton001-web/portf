import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { burgerToggle } from "../../store/actions";

export const HeaderLink = ({ link, to }) => {
  const dispatch = useDispatch();

  const closeBurger = () => {
    dispatch(burgerToggle());
  };

  const { visibility } = useSelector((store) => store.burger);

  if (!visibility) {
    document.documentElement.classList.remove("scroll-active");
  }

  return (
    <li className="header-link__list-item" data-close={link.link === "Home"}>
      <a className="header-link__list-item-link" href={to}>
        {link.link}
      </a>
      {link.link === "Home" && (
        <div onClick={closeBurger} className="header-burger__list-closeBtn">
          <span className="header-burger__list-closeBtn__bar"></span>
          <span className="header-burger__list-closeBtn__bar"></span>
        </div>
      )}
    </li>
  );
};

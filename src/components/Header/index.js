import React from "react";
import { SITE_TITLE, BG_COLOR } from "./../../const";
import "./index.css";

const Header = ({ className = "" }) => (
  <div
    style={{
      background: BG_COLOR,
      marginBottom: "1.45rem"
    }}
  >
    <div className={className + " header"}>
      <h1 style={{ margin: 0 }}>
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          {SITE_TITLE}
        </a>
      </h1>
    </div>
    <nav className={className + " header__nav"}>
      <a href="/writing/" className="nav__link">
        Writing
      </a>
      <a href="/travels/" className="nav__link">
        Roaming
      </a>
      <a href="/family/" className="nav__link">
        Family
      </a>
    </nav>
  </div>
);

export default Header;

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "./../Header";
import { SITE_DESCRIPTION, SITE_THUMB, SITE_TITLE } from "./../../const";
import "./index.css";

const getLocalTitle = function(path) {
  if (path.indexOf("family/") > -1) {
    return "Family tree -";
  } else if (path.indexOf("writing/") > -1) {
    return "Writing - ";
  } else if (path.indexOf("travels/") > -1) {
    return "Travelling - ";
  } else {
    return "";
  }
};
const Layout = ({ children, location }) => (
  <div>
    <Helmet
      title={getLocalTitle(location.pathname) + SITE_TITLE}
      meta={[
        {
          name: "google-site-verification",
          content: "KsGrYwiBz9gOEq0kFbloZIzd5hW8lWrdBotKwULp-jQ"
        },
        { name: "description", content: SITE_DESCRIPTION },
        { name: "og:description", content: SITE_DESCRIPTION },
        { name: "keywords", content: "sample, something" },
        { name: "og:image", content: SITE_THUMB }
      ]}
    />
    <Header className="container" />
    <div className="container">{children}</div>
  </div>
);
export default Layout;

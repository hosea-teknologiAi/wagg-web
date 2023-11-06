import React from "react";
import LayoutError from "../../layouts/NotFound";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <LayoutError>
      <section className="error-page">
        <div className="container">
          <h1>Error 404</h1>
          <p>Woops. Looks like this page doesn't exist</p>
          <Link to="/home" className="btn btn--rounded btn--yellow">
            Go to home
          </Link>
        </div>
      </section>
    </LayoutError>
  );
};

export default NotFound;

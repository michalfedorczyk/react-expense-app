import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <h1>
      404! - <Link to="/dashboard">Go to Homepage</Link>
    </h1>
  </div>
);

export default NotFoundPage;

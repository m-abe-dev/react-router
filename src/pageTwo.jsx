import { Link } from "react-router-dom";

export const PageTwo = () => {
  return (
    <div>
      <h1>page two</h1>
      <Link to="/pageTwo/100">URL Parameter</Link>
    </div>
  );
};

import { Link } from "react-router-dom";

export const PageOne = () => {
  return (
    <div>
      <h1>page one</h1>
      <Link to="/pageOne/detailA">Detail A</Link>
      <br />
      <Link to="/pageOne/detailB">Detail B</Link>
    </div>
  );
};

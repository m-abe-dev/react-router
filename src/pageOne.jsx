import { Link, useHistory } from "react-router-dom";

export const PageOne = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  const history = useHistory();
  const onClickDetailA = () => {
    history.push("/pageOne/detailA");
  };
  return (
    <div>
      <h1>page one</h1>
      <Link to={{ pathname: "/pageOne/detailA", state: arr }}>Detail A</Link>
      <br />
      <Link to="/pageOne/detailB">Detail B</Link>
      <br />
      <button onClick={onClickDetailA}>Detail A</button>
    </div>
  );
};

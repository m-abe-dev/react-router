import { useLocation, useHistory } from "react-router-dom";

export const PageOneDetailA = () => {
  const { state } = useLocation();
  console.log(state);
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>page one Detail A</h1>
      <button onClick={onClickBack}>back</button>
    </div>
  );
};

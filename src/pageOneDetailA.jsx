import { useLocation } from "react-router-dom";

export const PageOneDetailA = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>page one Detail A</h1>
    </div>
  );
};

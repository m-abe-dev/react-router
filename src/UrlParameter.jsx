import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameter</h1>
      <p>このパラメーターは{id}です</p>
      <p>このクエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};

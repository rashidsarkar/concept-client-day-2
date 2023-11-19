import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

/* eslint-disable react/prop-types */
function CategoryBox({ categoryBox, selected }) {
  const { label, icon: Icon } = categoryBox;
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  params.get("category");
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
      const upDatedQuery = { ...currentQuery, category: label };
      const url = queryString.stringifyUrl({
        url: "/",
        query: upDatedQuery,
      });
      navigate(url);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected ? "border-b-neutral-800 text-neutral-800" : ""
      }`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
}

export default CategoryBox;

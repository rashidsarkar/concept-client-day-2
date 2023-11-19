import { useSearchParams } from "react-router-dom";

import { categories } from "./CategorisData";
import CategoryBox from "./CategoryBox";
import Container from "../Shared/Container";

function Categories() {
  const [params, setParams] = useSearchParams();
  const categoryParams = params.get("category");
  // console.log(categoryParams);
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((category, idx) => {
          return (
            <CategoryBox
              key={idx}
              selected={categoryParams === category.label}
              categoryBox={category}
            ></CategoryBox>
          );
        })}
      </div>
    </Container>
  );
}

export default Categories;

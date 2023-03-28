import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import data from "../../public/data/data.json";
import Card from "../../components/Card";


const CategoryPage = () => {
  const [filters, setFilters] = useState([])
  const router = useRouter();

  const { category } = router.query;

  // const resultCategory = category.toLowerCase();
  console.log(category);
  const filteredData = () => {
    const getData = data.filter((item) => item.category === category);
    setFilters(getData)
  }
  useEffect(() => {
    filteredData()
  }, [category])
  
  console.log(filters);
  return (
    <div className="grid lg:grid-cols-3 gap-6 px-3 py-3">
      {filters.map((product) => {

        return (
          <Card key={product.id} product={product} />
        )
      })}
    </div>
  )
}

export default CategoryPage;

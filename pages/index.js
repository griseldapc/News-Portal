import data from "../public/data/data.json";
import Card from "../components/Card";
import MainCard from "../components/MainCard";
import Link from "next/link";
export default function Home() {
  const filteredProducts = data.filter((product) => product.type === "best");
  const sameCategoryProducts = data.filter(
    (product) => product.category === filteredProducts[0].category
  );

  return (
    <div className="sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="w-full p-5 flex flex-col md:flex-row gap-5">
        {filteredProducts.map((product) => (
          <MainCard key={product.id} product={product} />
        ))}

        <div className="mx-3 max-w-1/4">
          {sameCategoryProducts.map((product) => {
            return (
              <li className="hover:underline my-4" key={product.id}>
                <Link href={`/products/${product.id}`}>{product.title}</Link>
              </li>
            );
          })}
          <h2 className="mt-4 text-black-200 font-bold text-xl">Iklan</h2>
          <h3>Suplemen Protein untuk Anda yang sedang Bulking</h3>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 px-3 py-3">
        {data.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
      
    </div>
  );
}

import ProductCard from "./components/ProductCard";
import { getProducts } from "../api-endpoints";

export default async function Home() {
  const data = await getProducts();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {
          data?.products.map((eachProduct) => (
            <ProductCard
              key={eachProduct.id}
              data={eachProduct}
            />
          ))
        }

      </div>

    </div>
  );
}
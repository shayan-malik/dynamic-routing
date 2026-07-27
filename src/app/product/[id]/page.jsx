import { getSigleProduct } from "@/api-endpoints";
import ProductDetail from "@/app/components/ProductDetail";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  const { id } = await params;

  const data = await getSigleProduct(id);

  if (!data) {
    notFound();
  }

  return <ProductDetail product={data} />;
};

export default Page;
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="group max-w-sm overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-yellow-500/20">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-zinc-800">
        <img
          src={data.images[0]}
          alt={data.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-yellow-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
          {data.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">

        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-white">
          {data.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
          {data.body}
        </p>

        {/* Price & Rating */}
        <div className="mt-6 flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Price
            </p>

            <span className="text-2xl font-bold text-yellow-400">
              ${data.price}
            </span>
          </div>

          <div className="rounded-xl bg-yellow-500/20 px-3 py-2 text-sm font-semibold text-yellow-400">
            ⭐ {data.rating}
          </div>

        </div>

        {/* Button */}
        <Link
          href={`/product/${data.id}`}
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-yellow-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-yellow-700"
        >
          View Product →
        </Link>

      </div>

    </div>
  );
};

export default ProductCard;
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
    return (
        <div className="group max-w-sm overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

    {/* Product Image */}
    <div className="relative overflow-hidden">
        <img
            src={data.images[0]}
            alt="Product"
            className="h-74 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-blue-600 shadow">
            {data.category}
        </span>
    </div>


    {/* Card Content */}
    <div className="p-6">

        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
            {data.title}
        </h2>


        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
            {data.body}
        </p>


        {/* Price & Rating */}
        <div className="mt-6 flex items-center justify-between">

            <div>
                <p className="text-sm text-gray-400">
                    Price
                </p>

                <span className="text-2xl font-semibold text-blue-600">
                    ${data.price}
                </span>
            </div>


            <div className="rounded-xl bg-yellow-50 px-3 py-2 text-sm font-semibold text-yellow-600">
                ⭐{data.rating}
            </div>

        </div>


        {/* View Button */}
        <Link
            href={`/product/${data.id}`}
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-800 py-3 font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
        >
            View Product →
        </Link>

    </div>

</div>
    );
};

export default ProductCard;
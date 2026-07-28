"use client";

import React, { useState } from "react";

const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);

  return (
    <section className="min-h-screen bg-zinc-950 py-12 px-4">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">

        {/* PRODUCT MAIN */}
        <div className="grid gap-8 p-5 md:p-8 lg:grid-cols-2">

          {/* IMAGE AREA */}
          <div>
            <div className="relative flex h-[420px] items-center justify-center rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-6">

              <img
                src={selectedImage}
                alt={product.title}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-5 top-5 rounded-full bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                {product.category}
              </span>
            </div>

            {/* Thumbnails */}

            <div className="mt-6 flex flex-wrap gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-xl border-2 p-1 transition ${
                    selectedImage === image
                      ? "border-yellow-500 shadow-lg shadow-yellow-500/30"
                      : "border-zinc-700 hover:border-yellow-500"
                  }`}
                >
                  <img
                    src={image}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* DETAILS */}

          <div className="flex flex-col justify-center">

            <h1 className="text-4xl font-bold leading-tight text-white">
              {product.title}
            </h1>

            <div className="mt-3 text-zinc-400">
              Brand :
              <span className="ml-2 font-semibold text-white">
                {product.brand}
              </span>
            </div>

            {/* Rating */}

            <div className="mt-6 flex items-center gap-4">

              <div className="rounded-xl bg-yellow-500/20 px-4 py-2 font-bold text-yellow-400">
                ⭐ {product.rating}
              </div>

              <span className="text-zinc-400">
                Verified Reviews
              </span>

            </div>

            {/* Price */}

            <div className="mt-8 flex items-center gap-5">

              <h2 className="text-5xl font-extrabold text-yellow-400">
                ${product.price}
              </h2>

              <span className="rounded-full bg-red-400/20 px-4 py-2 font-bold text-red-400">
                {product.discountPercentage}% OFF
              </span>

            </div>

            {/* Description */}

            <p className="mt-6 leading-8 text-zinc-400">
              {product.description}
            </p>

            {/* INFO */}

            <div className="mt-8 grid gap-4 rounded-2xl bg-zinc-800 p-5 md:grid-cols-2">

              <InfoCard title="Stock" value={`${product.stock} Items`} />

              <InfoCard title="SKU" value={product.sku} />

              <InfoCard title="Weight" value={`${product.weight} kg`} />

              <InfoCard
                title="Warranty"
                value={product.warrantyInformation}
              />

              <InfoCard
                title="Shipping"
                value={product.shippingInformation}
              />

              <InfoCard
                title="Status"
                value={product.availabilityStatus}
              />

            </div>

            {/* Buttons */}

            <div className="mt-10 flex gap-4">

              <button className="flex-1 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-800/50 py-3 font-bold text-white transition hover:scale-105">
                Add To Cart
              </button>

              <button className="flex-1 rounded-2xl border border-zinc-600 py-3 font-bold text-white transition hover:bg-white hover:text-black">
                Buy Now
              </button>

            </div>

          </div>

        </div>

        {/* TAGS */}

        <div className="border-t border-zinc-800 bg-zinc-800 p-8">

          <h2 className="text-2xl font-bold text-white">
            Product Tags
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">

            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-700 px-5 py-2 text-sm font-medium text-zinc-200"
              >
                #{tag}
              </span>
            ))}

          </div>

        </div>

        {/* REVIEWS */}

        <div className="p-8">

          <h2 className="mb-8 text-3xl font-bold text-white">
            Customer Reviews
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6 transition hover:border-yellow-500 hover:shadow-lg"
              >

                <div className="flex justify-between">

                  <h3 className="font-bold text-white">
                    {review.reviewerName}
                  </h3>

                  <span className="text-yellow-400">
                    ⭐ {review.rating}
                  </span>

                </div>

                <p className="mt-4 text-zinc-400">
                  {review.comment}
                </p>

                <p className="mt-3 text-sm text-zinc-500">
                  {new Date(review.date).toLocaleDateString()}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-4 transition hover:border-yellow-500 hover:bg-zinc-800">
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="mt-1 font-bold text-white">{value}</p>
    </div>
  );
}

export default ProductDetail;
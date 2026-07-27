"use client";

import React, { useState } from "react";

const ProductDetail = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product.thumbnail);

    return (
        <section className="min-h-screen bg-slate-100 py-12 px-4">

            <div className="mx-auto max-w-6xl rounded-2xl bg-white shadow-xl overflow-hidden">

                {/* PRODUCT MAIN */}

                <div className="grid lg:grid-cols-2 gap-8 p-5 md:p-7">


                    {/* IMAGE AREA */}

                    <div>

                    <div className="relative flex h-[380px] items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-200 p-4">

                            <img
                                src={selectedImage}
                                alt={product.title}
                                className="h-full w-full object-contain transition duration-500 hover:scale-105"
                            />

                            <span className="absolute top-5 left-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow">
                                {product.category}
                            </span>

                        </div>



                        {/* thumbnails */}

                        <div className="mt-6 flex flex-wrap gap-4">

                            {product.images.map((image,index)=>(

                                <button
                                    key={index}
                                    onClick={()=>setSelectedImage(image)}
                                    className={`rounded-xl border-2 p-1 transition
                                    ${
                                        selectedImage === image
                                        ? "border-blue-600 shadow-lg"
                                        : "border-gray-200 hover:border-blue-400"
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


                    <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                            {product.title}
                        </h1>


                        <div className="mt-3 text-gray-500">

                            Brand:
                            <span className="ml-2 font-bold text-gray-900">
                                {product.brand}
                            </span>

                        </div>



                        {/* rating */}

                        <div className="mt-6 flex items-center gap-3">

                            <div className="rounded-xl bg-yellow-100 px-4 py-2 font-bold text-yellow-700">
                                ⭐ {product.rating}
                            </div>

                            <span className="text-gray-500">
                                Verified Reviews
                            </span>

                        </div>





                        {/* PRICE */}

                        <div className="mt-8 flex items-center gap-5">

                        <h2 className="text-4xl font-extrabold text-blue-600">
                                ${product.price}
                            </h2>


                            <span className="rounded-full bg-red-100 px-4 py-2 font-bold text-red-600">
                                {product.discountPercentage}% OFF
                            </span>

                        </div>





                        <p className="mt-5 text-base leading-7 text-gray-600">
                            {product.description}
                        </p>





                        {/* INFO */}

                        <div className="rounded-xl bg-gray-50 p-3 transition hover:bg-blue-50">


                            <InfoCard
                                title="Stock"
                                value={`${product.stock} Items`}
                            />


                            <InfoCard
                                title="SKU"
                                value={product.sku}
                            />


                            <InfoCard
                                title="Weight"
                                value={`${product.weight} kg`}
                            />


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





                        {/* BUTTONS */}

                        <div className="mt-10 flex gap-4">


                            <button
                                className="flex-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                Add To Cart
                            </button>


                            <button
                                className="flex-1 rounded-2xl border-2 border-blue-600 py-3 font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                            >
                                Buy Now
                            </button>


                        </div>



                    </div>


                </div>





                {/* TAGS */}

                <div className="border-t bg-gray-50 p-8">

                    <h2 className="text-2xl font-bold text-black">
                        Product Tags
                    </h2>


                    <div className="mt-4 flex flex-wrap gap-3">

                        {product.tags.map(tag=>(

                            <span
                                key={tag}
                                className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow text-black"
                            >
                                #{tag}
                            </span>

                        ))}

                    </div>

                </div>





                {/* REVIEWS */}

                <div className="p-8">

                    <h2 className="mb-8 text-3xl font-bold text-black">
                        Customer Reviews
                    </h2>


                    <div className="grid gap-6 md:grid-cols-2">


                    {
                        product.reviews.map((review,index)=>(

                            <div
                                key={index}
                                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg text-black"
                            >

                                <div className="flex justify-between">

                                    <h3 className="font-bold">
                                        {review.reviewerName}
                                    </h3>


                                    <span>
                                        ⭐ {review.rating}
                                    </span>

                                </div>


                                <p className="mt-4 text-gray-600">
                                    {review.comment}
                                </p>


                                <p className="mt-3 text-sm text-gray-400">
                                    {new Date(review.date).toLocaleDateString()}
                                </p>


                            </div>

                        ))
                    }


                    </div>


                </div>


            </div>


        </section>
    );
};



function InfoCard({title,value}){

    return (

        <div className="rounded-2xl bg-gray-50 p-4 transition hover:bg-blue-50">

            <p className="text-sm text-gray-500">
                {title}
            </p>

            <p className="mt-1 font-bold text-gray-900">
                {value}
            </p>

        </div>

    )

}


export default ProductDetail;
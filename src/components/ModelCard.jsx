import { useState } from "react";


const ModelCard = ({model}) => {

    const [isBuyNow,setIsBuyNow]=useState(false)

    const handleBuyNow=()=>{
        setIsBuyNow(true)
    }

    return (
        <div
                        key={model.id}
                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

                        <div className="flex justify-between items-start mb-4">

                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <img
                                    src={model.icon}
                                    alt="icon"
                                    className="w-6 h-6"
                                />
                            </div>
                            <span
                                className={`text-xs px-3 py-1 rounded-full ${model.tagType === "best-seller" ? "bg-orange-100 text-orange-600" : model.tagType === "popular" ? "bg-purple-100 text-purple-600" : "bg-green-100 text-green-600"
                                    }`}
                            > {model.tag}
                            </span>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            {model.name}
                        </h2>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                            {model.description}
                        </p>
                        <div className="mt-4">
                            <span className="text-2xl font-bold">${model.price}</span>
                            <span className="text-gray-500 text-sm">/{model.period}</span>
                        </div>
                        <ul className="mt-4 space-y-2">
                            {model.features.map((f, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-2 text-sm text-gray-600"
                                >
                                    <span className="text-green-500">*</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleBuyNow} className="w-full mt-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition">
                            {isBuyNow ? "Added to Cart":"Buy Now"}
                        </button>

                    </div>
    );
};

export default ModelCard;
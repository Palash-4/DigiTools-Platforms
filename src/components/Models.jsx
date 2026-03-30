import { use } from "react";


const Models = ({ modelPromise }) => {
    const models = use(modelPromise);

    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {models.map((model) => (
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
                        <button className="w-full mt-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition">
                            Buy Now
                        </button>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default Models;
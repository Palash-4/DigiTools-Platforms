import { use } from "react";
import ModelCard from "./ModelCard";


const Models = ({ modelPromise }) => {
    const models = use(modelPromise);
    


    return (
        <div className="py-20 px-6 max-w-7xl mx-auto">
            

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {models.map((model) => (
                    <ModelCard key={model.id} model={model}></ModelCard>
                ))}

            </div>
        </div>
    );
};

export default Models;
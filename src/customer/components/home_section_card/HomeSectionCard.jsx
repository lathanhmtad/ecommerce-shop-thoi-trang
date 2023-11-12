import React from "react";

const HomeSectionCard = ({index}) => {
    return (
        <div 
            className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black"
        >
            <div className="h-[13rem] w-[10rem]">
                <img 
                    className="object-cover object-top w-full h-full"
                    alt=""
                    src=""/>
            </div>

            <div className="p-4">
                <h2>{index}</h2>
                <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
                <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default HomeSectionCard
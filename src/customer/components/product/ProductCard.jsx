import React from "react";
import './ProductCard.css'

const ProductCard = ({product}) => {
    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem]">
                <img 
                    className="h-full w-full object-cover object-left-top" 
                    src="https://bizweb.dktcdn.net/thumb/large/100/438/408/products/akm5037-cam-2.jpg?v=1690163735137" 
                    alt=""
                />
            </div>
            <div className="textPart bg-white p-3">
                <div>
                    <p className="font-bold opacity-60">QJN3076-XAH</p>
                    <p>Quần Jeans Nữ Baggy Co Giãn Cạp Liền</p>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold">359.100đ</p>
                    <p className="line-through opacity-50">399.000đ</p>
                    <p className="text-green-600 font-semibold">- 10%</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
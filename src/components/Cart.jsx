import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    // console.log(carts);

    const handleRemove = (id) => {
        const updated = carts.filter(item => item.id !== id);
        setCarts(updated);
        toast.success("Item remove Successfully!")
    };

    const total = carts.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = () => {
        setCarts([]);
        toast.success("Payment Successfully!")
    }
    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-2xl shadow-sm bg-white">

            <h1 className="text-xl font-semibold mb-6">Your Cart</h1>

            {
                carts.length === 0 ? <p className='text-center font-bold p-7'>Cart is Empty! </p> :
                    <>

                        <div className="space-y-4">

                            {carts.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between bg-gray-50 p-4 rounded-xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                            <img src={item.icon} alt="" className="w-5 h-5" />
                                        </div>

                                        <div>
                                            <h2 className="font-medium">{item.name}</h2>
                                            <p className="text-sm text-gray-500">${item.price}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="btn text-sm text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}

                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <span className="text-gray-500">Total:</span>
                            <span className="text-lg font-bold">${total}</span>
                        </div>

                        <button onClick={handlePayment} className="w-full mt-6 py-3 rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition">
                            Proceed To Checkout
                        </button>

                    </>
            }



        </div>
    );
};

export default Cart;
import { useState } from 'react';

function ShoppingCart() {
    const [total, setTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0);



    const products = [
        {
            id: 1,
            name: "Egg",
            price: 1,
            image: "https://via.placeholder.com/100x100?text=Egg",

        },
        {
            id: 2,
            name: "Milk",
            price: 2,
            image: "https://via.placeholder.com/100x100?text=Milk",

        },
        {
            id: 3,
            name: "Bread",
            price: 1,
            image: "https://via.placeholder.com/100x100?text=Bread",
        },
        {
            id: 4,
            name: "Tea",
            price: 3,
            image: "https://via.placeholder.com/100x100?text=Tea",
        },
    ];


    return (
        <div className="mt-8 text-center">
            <ul className="space-y-4">
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} className="mx-auto mb-2" />
                        <p>{product.name}: ${product.price}</p>
                        <div className="flex justify-center gap-4 mt-2">
                            <AddButton onClick={() => {
                                setTotal(total + product.price);
                                setItemCount(itemCount + 1);
                            }} />
                            <RemoveButton onClick={() => {
                                if (itemCount > 0) {
                                    setTotal(total - product.price);
                                    setItemCount(itemCount - 1);
                                }
                            }} />
                        </div>
                    </li>
                ))}
            </ul>
            <CartSummary total={total} itemCount={itemCount} />
        </div>

    );



    function AddButton({ onClick }) {

        return (
            <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add To Cart
            </button>
        );
    }

    function CartSummary({ total, itemCount }) {
        return (
            <div className="mt-6">
                <p>Total items: {itemCount}</p>
                <p>Total price: ${total}</p>
            </div>
        );
    }

    function RemoveButton({ onClick }) {
        return (
            <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
                Remove Item
            </button>
        );
    }

};


export default ShoppingCart;
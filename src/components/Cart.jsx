import React, { useEffect } from "react";
import { useCartStore } from "../states/useCartStore";
import { toast } from "react-toastify";
import { ShoppingCart } from "lucide-react";
import useUserStore from "../states/useUserStore";

function Cart() {
  const { cart, fetchCart, removeFromCart, updateCartItem, checkout, error } =
    useCartStore();

  // const { token } = useUserStore();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, [token]);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <button
        className="btn btn-ghost text-[18px]"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <ShoppingCart /> Cart ({cart?.books?.length || 0})
      </button>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h1 className="font-bold text-lg">Cart Items</h1>

          {cart?.books?.length > 0 ? (
            <div>
              {cart.books.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between p-2 border-b"
                >
                  <div>
                    <p className="font-semibold">{item.book.title}</p>
                    <p>Author: {item.book.author}</p>
                    <p>Price: ${item.price}</p>
                    <p>
                      Quantity:
                      <button
                        className="btn btn-xs mx-2"
                        // disabled={item.count <= 1}
                        onClick={() => updateCartItem(item.id, item.count - 1)}
                      >
                        -
                      </button>
                      {item.count}
                      <button
                        className="btn btn-xs mx-2"
                        onClick={() => updateCartItem(item.id, item.count + 1)}
                      >
                        +
                      </button>
                    </p>
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}

          <div className="mt-4">
            <p className="font-light text-[14px]">
              Subtotal: ${cart?.cartTotal || 0}
            </p>
            <p className="font-bold text-[18px] mt-2">
              Total: ${cart?.cartTotal || 0}
            </p>
          </div>

          <div className="flex justify-end mt-4">
            <button
              className="btn bg-zinc-500 text-white"
              onClick={async () => {
                await checkout();
              }}
            >
              Checkout
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Cart;

import React from "react";

function Cart() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-ghost text-[18px]"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Cart
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box ">
          <div className="max-h-screen ">
            <h1 className="font-bold text-lg">Cart (จำนวน) </h1>
            <div className="flex justify-evenly">
              <div className="flex-1 p-4">
                <div>สินค้า 1</div>
                <div>สินค้า 2</div>
                <div>สินค้า 3</div>
                <div>สินค้า 3</div>
                <div>สินค้า 3</div>
                <div>สินค้า 3</div>
                <div>สินค้า 3</div>
              </div>

              <div className="bg-slate-200 flex-1 rounded-md p-4">
                <p className="font-light text-[14px]">Subtotal :</p>
                <p className="font-light text-[14px]">Discount :</p>
                <p className="font-bold text-[18px] mt-4">Total</p>
              </div>
            </div>
            <div className=" flex justify-end mt-2">
              <button className="btn bg-zinc-500 text-white rounded-md shadow-none border-none">Checkout</button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Cart;

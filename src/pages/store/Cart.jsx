// import React, { useState } from "react";
// import { create } from "zustand";

// ////// Test Zustand //////
// // สร้างสโตร์ด้วยฟังก์ชัน set
// const useStore = create((set) => ({
//   fName: "Sittakarn",
//   lName: "Maidee",
//   setName: (newValue) => set((state) => ({ fName: newValue })),
// }));

// function Cart() {
//   const [text, setText] = useState("");

//   const fName = useStore((state) => state.fName);
//   const lName = useStore((state) => state.lName);
//   const setName = useStore((state) => state.setName);

//   const handleSetName = () => {
//     setName(text);
//   };

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Test zustand</h1>
//       <p>
//         use : {fName} {lName}
//       </p>
//       <input type='text' onChange={handleChange}/>
//       <button onClick={handleSetName}>Set name</button>
//     </div>
//   );
// }

// export default Cart;

////////////////////////////////////////////////////////////////////////

import React from 'react'

function Cart() {
  return (
    <div>Cart</div>
  )
}

export default Cart

///////////////////////////////////////////////////////////////////////////

// import React, { useEffect } from "react";
// import { useCartStore } from "../../states/useCartStore";

// function Cart() {
//   const { cart, fetchCart, removeFromCart, updateCartItem, checkout, error } =
//     useCartStore();

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <div>
//       <button
//         className="btn btn-ghost text-[18px]"
//         onClick={() => document.getElementById("my_modal_2").showModal()}
//       >
//         Cart ({cart?.books?.length || 0})
//       </button>

//       <dialog id="my_modal_2" className="modal">
//         <div className="modal-box">
//           <h1 className="font-bold text-lg">Cart Items</h1>

//           {cart?.books?.length > 0 ? (
//             <div>
//               {cart.books.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex justify-between p-2 border-b"
//                 >
//                   <div>
//                     <p className="font-semibold">{item.book.title}</p>
//                     <p>Author: {item.book.author}</p>
//                     <p>Price: ${item.price}</p>
//                     <p>Quantity: {item.count}</p>
//                   </div>
//                   <div>
//                     <button
//                       className="btn btn-sm btn-error"
//                       onClick={() => removeFromCart(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500">Your cart is empty.</p>
//           )}

//           <div className="mt-4">
//             <p className="font-light text-[14px]">
//               Subtotal: ${cart?.cartTotal || 0}
//             </p>
//             <p className="font-bold text-[18px] mt-2">
//               Total: ${cart?.cartTotal || 0}
//             </p>
//           </div>

//           <div className="flex justify-end mt-4">
//             <button className="btn bg-zinc-500 text-white" onClick={checkout}>
//               Checkout
//             </button>
//           </div>
//         </div>

//         <form method="dialog" className="modal-backdrop">
//           <button>Close</button>
//         </form>
//       </dialog>
//     </div>
//   );
// }

// export default Cart;

////////////////////////////////

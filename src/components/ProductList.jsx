function ProductTest() {
    const products = [
      { id: 1, name: "MacBook", price: 1400, image: "https://picsum.photos/id/180/300" },
      { id: 2, name: "Old Car", price: 2400, image: "https://picsum.photos/id/111/300" },
      { id: 3, name: "Shoes", price: 1000, image: "https://picsum.photos/id/21/300" },
      { id: 4, name: "Castle", price: 10000, image: "https://picsum.photos/id/1040/300" },
      { id: 5, name: "Lychee", price: 500, image: "https://picsum.photos/id/1080/300" },
      { id: 6, name: "Skate Board", price: 3500, image: "https://picsum.photos/id/157/300" },
      { id: 7, name: "Alarm Clock", price: 1500, image: "https://picsum.photos/id/175/300" },
      { id: 8, name: "Book", price: 800, image: "https://picsum.photos/id/24/300" }
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Product List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-700">Price: ${product.price}</p>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductTest;
  
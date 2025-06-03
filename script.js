const products = {
  "ayam-geprek": {
    name: "Ayam Geprek",
    price: "Rp14.000",
    stock: 78,
    description: "Ayam geprek untuk menemani anda selama kosmu dibersihkan",
    image: "img/ayam-geprek.jpg"
  },
  "sikat": {
    name: "Sikat",
    price: "Rp8.000",
    stock: 78,
    description: "Sikat multifungsi untuk kebersihan maksimal",
    image: "sikat.webg"
  }
};

// Ambil parameter dari URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Tampilkan detail jika produk ditemukan
if (productId && products[productId]) {
  const data = products[productId];
  const container = document.getElementById("product-detail");

  container.innerHTML = `
    <img src="${data.image}" alt="${data.name}">
    <h2>${data.name}</h2>
    <p class="price">${data.price}</p>
    <p class="stock">Stok : ${data.stock}</p>
    <p class="description">${data.description}</p>
    <button class="add-to-cart">Tambah keranjang</button>
  `;
} else {
  document.getElementById("product-detail").innerHTML = "<p>Produk tidak ditemukan.</p>";
}


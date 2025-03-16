import { products } from './menproducts.js';

const productContainer = document.getElementById("product-container");
let selectedCategory = "";

// Function to display products
function displayProducts(filteredProducts) {
  productContainer.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      ${product.sale ? '<div class="badge">SALE</div>' : ''}
      ${product.new ? '<div class="badge">NEW</div>' : ''}
      ${product.bestSeller ? '<div class="badge">BEST SELLER</div>' : ''}
      ${product.membersExclusive ? '<div class="badge">MEMBERS DISCOUNT</div>' : ''}
      <div class="product-tumb">
        <img src="${product.image}" alt="" onmouseover="this.src='${product.imagehover}';" onmouseout="this.src='${product.image}';">
      </div>
      <div class="product-details">
        <span class="product-catagory">${product.category.join(", ")}</span>
        <h4><a href="">${product.name}</a></h4>
        <p>${product.bio}</p>
        <div class="product-bottom-details">
          <div class="product-price">
            ${product.priceOld !== undefined 
              ? `<small>£${product.priceOld.toFixed(2)}</small>`
              : ''} 
            £${product.price.toFixed(2)}
          </div>
          <div class="product-links">
            <a href=""><i class="fa fa-heart"></i></a>
            <a href=""><i class="fa fa-shopping-cart"></i></a>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// Function to filter products based link clicked
function filterProducts() {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  selectedCategory = urlParams.get("category");

  // Filter products based on the selected category
  let filtered = products.filter(function(product) {
    return selectedCategory === "" || product.category.includes(selectedCategory);
  });

  // Display the filtered products
  displayProducts(filtered);
}

// Initial Display
filterProducts();
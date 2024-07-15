// Product Content Lake Queries
const fetchAllProducts: string = `*[_type == "product"]{
productId,
  productTitle,
  productPrice,
  "slug": slug.current,
  productDescription,
  "ImageURL" : productImage.asset->url,
}`;

export { fetchAllProducts };

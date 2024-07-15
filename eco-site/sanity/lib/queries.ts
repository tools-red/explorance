// Product Content Lake Queries
const fetchAllProductsQuery: string = `*[_type == "product"]{
productId,
  productTitle,
  productPrice,
  "slug": slug.current,
  productDescription,
  "ImageURL" : productImage.asset->url,
}`;

const fetchAllFeaturedProductsQuery: string = `*[_type == "featuredProducts"] {
productId,
  productTitle,
  productPrice,
  "slug": slug.current,
  productDescription,
  "ImageURL" : productImage.asset->url,
}`;

export { fetchAllProductsQuery, fetchAllFeaturedProductsQuery };

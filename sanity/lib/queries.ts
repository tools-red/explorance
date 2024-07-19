// Product Content Lake Queries
const fetchAllProductsQuery: string = `*[_type == "product"]{
  productId,
  productTitle,
  productPrice,
  stockCount,
  "slug": slug.current,
  productDescription,
  "ImageURL" : productImage.asset->url,
  "patchId": _id,
}`;

const fetchAllFeaturedProductsQuery: string = `*[_type == "featuredProducts"] {
productId,
  productTitle,
  productPrice,
  productType,
  "slug": slug.current,
  productDescription,
  "ImageURL" : productImage.asset->url,
}`;

export { fetchAllProductsQuery, fetchAllFeaturedProductsQuery };

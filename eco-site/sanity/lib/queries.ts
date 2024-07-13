// Product Content Lake Queries
const fetchAllProducts: string = `*[_type == "product"]{
  productTitle,
  productPrice,
  "slug": slug.current,
  productDescription
}`;

export { fetchAllProducts };

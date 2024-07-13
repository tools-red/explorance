import { type SchemaTypeDefinition, StringSchemaType } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "product",
      title: "Product",
      type: "document",
      fields: [
        {
          name: "productTitle",
          title: "Product Title",
          type: "string",
        },
        {
          name: "productPrice",
          title: "Product Price",
          type: "number",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: { source: "name" },
        },
        {
          name: "productDescription",
          title: "Product Description",
          type: "string",
        },
      ],
    },
  ],
};

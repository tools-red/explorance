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
          options: {
            // Corrected property: source: "productTitle"
            source: "productTitle", // Use "productTitle" as the source for slug generation
          },
        },
        {
          name: "productDescription",
          title: "Product Description",
          type: "string",
        },
        {
          name: "productType",
          title: "Product Type",
          type: "string",
          options: {
            list: [
              { title: "Caffine", value: "caffine" },
              { title: "Medicine", value: "medecine" },
            ],
          },
        },
      ],
    },
  ],
};

import { type SchemaTypeDefinition } from "sanity";
import { uuid } from "uuidv4";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "featuredProducts",
      title: "Featured Products",
      type: "document",
      fields: [
        {
          name: "productTitle",
          title: "Product Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "productImage",
          title: "Product Image",
          type: "image",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "productId",
          title: "Product ID",
          type: "string",
          // Leverage server-side generation for unique, human-readable IDs
          initialValue: uuid(), // Customize prefix as needed
          validation: (Rule) => Rule.required(),
        },
        {
          name: "productPrice",
          title: "Product Price",
          type: "number",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "productTitle", // Use "productTitle" as the source for slug generation
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "productDescription",
          title: "Product Description",
          type: "text", // Use "text" for multi-line descriptions (optional)
          validation: (Rule) => Rule.required(),
        },
        {
          name: "productType",
          title: "Product Type",
          type: "string",
          options: {
            list: [
              { title: "Coconut Oil", value: "coconutOil" },
              { title: "Honey", value: "honey" },
              { title: "Tea", value: "tea" },
              { title: "Jaggery", value: "jaggery" },
              { title: "Special filter coffee", value: "specialFilterCoffee" },
            ],
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "product",
      title: "Product",
      type: "document",
      fields: [
        {
          name: "productTitle",
          title: "Product Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "productImage",
          title: "Product Image",
          type: "image",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "productId",
          title: "Product ID",
          type: "string",
          // Leverage server-side generation for unique, human-readable IDs
          initialValue: uuid(), // Customize prefix as needed
          validation: (Rule) => Rule.required(),
        },
        {
          name: "productPrice",
          title: "Product Price",
          type: "number",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "productTitle", // Use "productTitle" as the source for slug generation
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "productDescription",
          title: "Product Description",
          type: "text", // Use "text" for multi-line descriptions (optional)
          validation: (Rule) => Rule.required(),
        },
        {
          name: "productType",
          title: "Product Type",
          type: "string",
          options: {
            list: [
              { title: "Coconut Oil", value: "coconutOil" },
              { title: "Honey", value: "honey" },
              { title: "Tea", value: "tea" },
              { title: "Jaggery", value: "jaggery" },
              { title: "Special filter coffee", value: "specialFilterCoffee" },
            ],
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};

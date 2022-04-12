import { BiCategory } from "@sanity/icons";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: BiCategory,

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};

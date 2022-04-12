import { BiBed } from "react-icons/bi";


export default {
  name: "beds",
  title: "Number of Beds",
  type: "document",
  icon: BiBed,

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};

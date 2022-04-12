import { AiOutlineTags } from "react-icons/ai";

export default {
  name: "listingtags",
  title: "Tags",
  type: "document",
  icon: AiOutlineTags,

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

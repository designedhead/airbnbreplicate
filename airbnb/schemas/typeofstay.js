import { MdHomeWork } from "react-icons/md";
export default {
  name: "typeofstay",
  title: "Type of Stay",
  type: "document",
  icon: MdHomeWork,

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

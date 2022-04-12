import { RocketIcon } from "@sanity/icons";

export default {
  name: "listing",
  title: "Listing",
  type: "document",
  icon: RocketIcon,

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "This will be the main name displayed.",
    },
    {
      name: "subtitle",
      title: "Sub-Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "listingtags" },
            { type: "typeofstay" },
            { type: "beds" },
          ],
        },
      ],
    },
    {
      title: "Images",
      name: "listingImages",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      title: "Location",
      name: "location",
      type: "geopoint",
    },
    {
      title: "Rating",
      name: "rating",
      description: "Must be between 0.1 and 5. Decimal points welcomed.",
      type: "number",
      validation: (Rule) => Rule.required().min(0.1).max(5),
    },
    {
      title: "Number of Reviews",
      name: "numberOfReviews",
      description: "How many people have reviewed this place",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      title: "Price per night",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    select: { title: "name", subtitle: "subtitle", media: "images" },
  },
};

import { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      label: "Forfatter",
      required: true,
      hasMany: false,
    },
    {
      name: "subtitle",
      type: "text",
      label: "Undertext",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: "kontekst(innhold)",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Kort beskrivelse",
      required: false,
    },
    {
      name: "image",
      type: "upload",
      label: "Bildet",
      relationTo: "media",
      required: false,
    },
    {
      name: "publishedDate",
      type: "date",
      label: "PublishDato",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug-URL",
      required: true,
      unique: true,
    },
  ],
};

import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      label: "Navn",
      required: false,
    },
    {
      name: "image",
      type: "relationship",
      relationTo: "media",
      label: "Profilbilde",
      required: false,
    },
  ],
};

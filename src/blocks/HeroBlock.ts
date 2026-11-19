import type { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  fields: [
    {
      name: "title",
      type: "text",
      label: "Overskrift",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      label: "Undertitle",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Beskrivelse",
      required: true,
    },

    {
      name: "image",
      type: "upload",
      label: "Bildet",
      relationTo: "media",
      required: true,
    },
    {
      name: "button",
      type: "text",
      label: "Button",
      required: true,
    },
    {
      name: "link",
      type: "text",
      label: "Link",
      required: true,
    },
  ],
};

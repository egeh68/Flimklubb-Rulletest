import { HeroBlock } from "@/blocks/HeroBlock";
import type { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "homepage",
  label: "Forside",
  fields: [
    {
      name: "content",
      type: "blocks",
      blocks: [HeroBlock],
    },
  ],
};

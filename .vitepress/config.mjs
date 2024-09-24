import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Will Hannon",
  description: "Computational biologist and data scientist.",
  appearance: false,
  ignoreDeadLinks: true,
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "Will Hannon, William Hannon, William W. Hannon, Fred Hutch Cancer Center, Deep Mutational Scanning, Virus Evolution, Computational Biology, Data Science",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/icon.png",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
      },
    ],
  ],
});

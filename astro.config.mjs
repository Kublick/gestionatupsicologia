import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    partytown({
      config: {
        resolveUrl: function (url, location, type) {
          if (url.hostname === "connect.facebook.net") {
            const proxyUrl = new URL(
              "https://cdn.builder.codes/api/v1/js-proxy"
            );
            proxyUrl.searchParams.append("url", url.href);
            proxyUrl.searchParams.append(
              "apiKey",
              abfebca9fdcf4536ac17a116edb9e66b
            );
            console.log(proxyUrl.href);
            return proxyUrl;
          }

          return url;
        },
        forward: ["fbq"],
      },
    }),
  ],
});

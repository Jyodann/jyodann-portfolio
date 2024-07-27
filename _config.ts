import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import inline from "lume/plugins/inline.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import metas from "lume/plugins/metas.ts";
import favicon from "lume/plugins/favicon.ts";
import readInfo from "lume/plugins/reading_info.ts";
import terser from "lume/plugins/terser.ts";
import postcss from "lume/plugins/postcss.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import robots from "lume/plugins/robots.ts";
import feed from "lume/plugins/feed.ts";
import { globToRegExp } from "lume/deps/path.ts";
import { path } from "https://deno.land/x/vento@v0.10.2/deps.ts";
import { expandGlob, expandGlobSync } from "lume/deps/fs.ts";
import FS from "lume/core/fs.ts";

const site = lume({
  src: "./src",
  dest: "./output",
  location: new URL("https://jyodann.com"),
});

site.use(
  feed({
    output: ["/posts.rss"],
    query: "blog",
    info: {
      title: "=site.title",
      description: "=site.description",
    },
    items: {
      title: "=title",
      description: "=description",
    },
  })
);

site.use(
  feed({
    output: ["/projects.rss"],
    query: "project",
    info: {
      title: "=site.title",
      description: "=site.description",
    },
    items: {
      title: "=title",
      description: "=description",
    },
  })
);

// Optimize and transform imgs:
site.use(picture());
site.use(transformImages());

// Inline SVG Assets
site.use(inline());

// Tailwind Implmentation
site.use(
  tailwindcss({
    options: {
      darkMode: "selector",
      theme: {
        extend: {
          fontFamily: {
            outfit: ["Outfit", "sans-serif"],
          },
        },
      },
    },
  })
);

// Required by Tailwind
site.use(postcss());

// Minify CSS
site.use(lightningCss());

// Add Meta Tags
site.use(metas());

// Favicon:
site.use(
  favicon({
    input: "./assets/img/favicon.png",
  })
);

// Reading Length:
site.use(readInfo());

//Minify Js
site.use(terser(/* Options */));

// Robots.txt
site.use(
  robots({
    allow: ["Googlebot", "Bingbot"],
  })
);

site.copy("/assets/svg/hello.svg");

site.addEventListener("afterBuild", async (updates) => {
  console.log("Build Finished");
  console.log(Deno.cwd());
  const glob = await expandGlob("./output/*.rss", {
    root: Deno.cwd(),
  });
  for await (const filePath of glob) {
    let fileContents = await Deno.readTextFile(filePath.path);
    fileContents = fileContents.replaceAll(".png", "-1000w.webp");
    await Deno.writeTextFile(filePath.path, fileContents);
  }
});
export default site;

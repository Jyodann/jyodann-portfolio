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

const site = lume(
    {
        src: "./src",
        dest: "./output"
    }
);

// Optimize and transform imgs:
site.use(picture());
site.use(transformImages());

// Inline SVG Assets
site.use(inline());

// Tailwind Implmentation
site.use(tailwindcss({
    options : {
        darkMode: 'selector',
        theme: {
            extend: {
            fontFamily : {
                outfit : ['Outfit', 'sans-serif'], 
            },
           }
        }
    }
}
));

// Required by Tailwind
site.use(postcss());

// Minify CSS
site.use(lightningCss());

// Add Meta Tags
site.use(metas());

// Favicon:
site.use(favicon(
    {
        input: "./assets/img/favicon.png"
    }
));

// Reading Length:
site.use(readInfo());

//Minify Js
site.use(terser(/* Options */));

// Robots.txt
site.use(robots({
  allow: ["Googlebot", "Bingbot"],
}));

export default site;

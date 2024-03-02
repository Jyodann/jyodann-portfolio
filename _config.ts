import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import inline from "lume/plugins/inline.ts";
import minifyHTML from "lume/plugins/minify_html.ts";


const site = lume(
    {
        src: "./src",
        dest: "./output"
    }
);
site.use(inline())
site.use(minifyHTML())
site.use(tailwindcss())
site.use(postcss())
site.copy("./assets/img", "./assets/img")
export default site;

import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume(
    {
        src: "./src",
        dest: "./output"
    }
);

site.use(tailwindcss())
site.use(postcss())
site.copy("./assets", ".")
export default site;

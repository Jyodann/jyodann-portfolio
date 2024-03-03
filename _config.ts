import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import inline from "lume/plugins/inline.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import metas from "lume/plugins/metas.ts";
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
site.use(picture());
site.use(transformImages());
site.use(metas());
export default site;

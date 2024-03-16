import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import inline from "lume/plugins/inline.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import favicon from "lume/plugins/favicon.ts";
const site = lume(
    {
        src: "./src",
        dest: "./output"
    }
);

site.use(inline())
site.use(minifyHTML())
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
))
site.use(postcss());
site.use(nav(/* Options */));
site.use(picture());
site.use(transformImages());
site.use(metas());
site.use(codeHighlight());
site.use(favicon(
    {
        input: "./assets/img/favicon.png"
    }
));
export default site;

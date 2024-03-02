export default function (title) {
  const slug = title.replace(/\s+/g, "-").toLowerCase();

  return {
    path: `./content/projects/${slug}.vto`,
    content: {
      layout: "post.vto",
      top_img: "",
      title: title,
      content: "Page content",
    },
  };
}
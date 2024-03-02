export default function (title) {
  const slug = title.replace(/\s+/g, "-").toLowerCase();

  return {
    path: `./${slug}.vto`,
    content: {
      title: title,
      nav_label: title,
      content: "Page content",
      type: "toplevel",
      templateEngine: ["vto", "md"]
    },
  };
}
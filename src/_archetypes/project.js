export default function (title, date) {
  const slug = title.replace(/\s+/g, "-").toLowerCase();
  const checked_date = new Date(date)
  return {
    path: `./content/projects/${checked_date.getFullYear()}/${slug}.vto`,
    content: {
      layout: "post.vto",
      thumbnail: "",
      title: title,
      content: "Page content",
      date: date,
    },
  };
}
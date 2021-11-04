export default async (req, res) => {
  const { alias } = req.query;
  const result = await fetch("http://localhost:8787/retrieve", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ short_url: alias }),
  }).then((res) => res.json());
  return res.redirect(result.data);
};

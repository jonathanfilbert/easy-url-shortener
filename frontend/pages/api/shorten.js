export default async (req, res) => {
  if (req.method === "POST") {
    const { shortUrl, longUrl } = req.body;
    const result = await fetch("http://localhost:8787/shorten", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ short_url: shortUrl, long_url: longUrl }),
    }).then((res) => res.json());
    return res.status(200).json(result);
  }
};

import React, { useState } from "react";

export default function Home() {
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");

  const handleSubmitUrl = () => {
    fetch("/api/shorten", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ shortUrl, longUrl }),
    }).then((res) => {
      alert(
        `http://localhost:3000/api/${shortUrl} berhasil copy ke clipboard!`
      );
      setShortUrl("");
      setLongUrl("");
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-bold text-center">EASY URL SHORTENER</h1>
      <input
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        className="px-2 py-1 outline-none"
        placeholder="Enter your long url"
      />
      <input
        value={shortUrl}
        onChange={(e) => setShortUrl(e.target.value)}
        className="px-2 py-1 outline-none"
        placeholder="Enter your short url"
      />
      <button
        onClick={() => handleSubmitUrl()}
        className="bg-black text-white py-1 px-3 rounded-sm"
      >
        Shorten
      </button>
    </div>
  );
}

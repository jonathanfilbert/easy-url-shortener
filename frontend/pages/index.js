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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">
      <h1 className="font-bold text-center">DEFINETELY NOT RISTEK.LINK 👋</h1>
      <em className="absolute top-5 left-2 rotate-2 text-blue-500">
        Oh wow, best tool of the century
      </em>
      <em className="absolute top-5 right-2 -rotate-3 text-blue-500">
        10/10 would reach 1 million in 3 months
      </em>
      <em className="absolute bottom-5 right-2 rotate-3 text-blue-500">
        No paid? No capitalism.
      </em>
      <em className="absolute bottom-10 left-3 rotate-3 text-blue-500">
        13/10 would use again
      </em>
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

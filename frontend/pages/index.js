import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-bold text-center">EASY URL SHORTENER</h1>
      <input
        className="px-2 py-1 outline-none"
        placeholder="Enter your long url"
      />
      <input
        className="px-2 py-1 outline-none"
        placeholder="Enter your short url"
      />
      <button className="bg-black text-white py-1 px-3 rounded-sm">
        Shorten
      </button>
    </div>
  );
}

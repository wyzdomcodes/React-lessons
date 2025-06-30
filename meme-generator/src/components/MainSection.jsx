import { useState } from "react";

export default function MainSection() {
  const [meme, setMeme] = useState({
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  function handleChange(event) {
    const {value, name} = event.currentTarget
    setMeme({...meme, [name]: value})
  }
  return (
    <main className="px-40 py-8 flex flex-col">
      <div className="flex flex-col justify-between pb-4">
        <div className="flex justify-between pb-5">
          <label>
            Top Text
            <input
              className="block outline-none border border-gray-200 px-2 py-1 my-1.5 rounded"
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={handleChange}
              value={meme.topText}
            />
          </label>

          <label>
            Bottom Text
            <input
              className="block outline-none border border-gray-200 px-2 py-1 my-1.5 rounded"
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
               onChange={handleChange}
              value={meme.bottomText}
            />
          </label>
        </div>
        <button className="bg-purple-700 text-white px-4 py-3 rounded cursor-pointer">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative">
        <img src={meme.imageUrl} />
        <span className="absolute top-3 left-11 right-11 px-4 text-4xl font-bold text-white">
          {meme.topText}
        </span>
        <span className="absolute bottom-3 left-11 right-11 px-4 text-4xl font-bold text-white">
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
}

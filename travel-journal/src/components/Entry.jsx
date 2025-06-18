import mountFuji from "../assets/mount-fuji-9.jpg";

export default function Entry({img, cityName, link, name, date, text}) {
  return (
    <main className="flex gap-3.5 pt-20 px-16">
      <div className="">
        <img
          src={img.src}
          alt={img.alt}
          className="rounded w-[250px] h-[250px]"
        />
      </div>
      <div className="py-8 max-w-[600px]">
        <div className="flex items-center content-center">
          <h3 className="font-inter font-bold text-sm pr-6">
            {cityName}
          </h3>
          <a href="http://" className="text-sm underline text-gray-600">
            {link}
          </a>
        </div>

        <h2 className="pt-2 pb-4 font-bold font-inter text-3xl">
          {name}
        </h2>
        <span className="font-bold font-inter pb-2 block text-sm">
          {date}
        </span>
        <p className="font-inter text-sm">{text}</p>
      </div>
    </main>
  );
}

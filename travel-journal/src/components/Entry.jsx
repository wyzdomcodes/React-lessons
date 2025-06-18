export default function Entry({img, country, googleMapsLink, title, dates, text}) {
  return (
    <main className="flex gap-3.5 pt-20 px-16">
      <div className="">
        <img
          src={img.src}
          alt={img.alt}
          className="rounded w-[170px] h-[200px]"
        />
      </div>
      <div className="py-8 max-w-[600px]">
        <div className="flex items-center content-center">
          <h3 className="font-inter font-bold text-sm pr-6">
            {country}
          </h3>
          <a href={googleMapsLink} className="text-sm underline text-gray-600">
            View on Google Map
          </a>
        </div>

        <h2 className="pt-2 pb-4 font-bold font-inter text-3xl">
          {title}
        </h2>
        <span className="font-bold font-inter pb-2 block text-sm">
          {dates}
        </span>
        <p className="font-inter text-sm">{text}</p>
      </div>
    </main>
  );
}

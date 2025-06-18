import Header from "./components/Header";
import Entry from "./components/Entry";
import mountFuji from "./assets/mount-fuji-9.jpg";
import RenderJokes from "./components/RenderJokes"


export default function App() {
  return (
    <>
      <Header />  
      <RenderJokes />
      <Entry
        img={{src:mountFuji, alt: "Mount Fuji"}}
        cityName="JAPAN"
        link="View on google maps"
        name="Mount Fuji"
        date="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most popular tourist site in Japan,
                    for both Japanese and foreign tourists."
      />
      <Entry
        img={{src:mountFuji, alt: "Mount Fuji"}}
        cityName="JAPAN"
        link="View on google maps"
        name="Mount Fuji"
        date="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most popular tourist site in Japan,
                    for both Japanese and foreign tourists."
      />
      <Entry
        img={{src:mountFuji, alt: "Mount Fuji"}}
        cityName="JAPAN"
        link="View on google maps"
        name="Mount Fuji"
        date="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most popular tourist site in Japan,
                    for both Japanese and foreign tourists."
      />
    </>
  );
}

import Header from "./components/Header";
import Entry from "./components/Entry";
import mountFuji from "./assets/mount-fuji-9.jpg";
// import RenderJokes from "./components/RenderJokes"
import data from "./components/data";


export default function App() {
  const dataElements = data.map(entry => {
    return <Entry
        key={entry.id}
        {...entry}
        // img={d.img}
        // cityName={d.country}
        // link={d.googleMapsLink}
        // name={d.title}
        // date={d.dates}
        // text={d.text}
      />
  })
  return (
    <>
      <Header />  
      {/* <RenderJokes /> */}
      {dataElements}
    </>
  );
}

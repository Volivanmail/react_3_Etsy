import etsy from "./components/etsy.json";
import Listing from "./components/Listing";

export default function App() {


  return (
    <>
      <Listing items={etsy}/>
    </>
  )
}

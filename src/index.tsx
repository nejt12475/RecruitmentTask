import React, {useMemo} from 'react';
import {useState} from "react";
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import Filter from './Components/Filter';
import Product_Card_List from "./Components/Product_Card_List";
import data from "./Data/Data.json";
interface ProductData {
    volume: string;
    size: string;
    name: string;
    price: number;
    image: string;
    functions: string;
    energy_class: string;
}
const dataset: ProductData[] = data as ProductData[];
let sort: string[]=["Wszystkie","Cena","Pojemność","Popularność"];
let functions: string[]=["Wszystkie","Drzwi AddWash","Panel AI Control", "Silnik inwerterowy", "Wyświetlacz elektroniczny"];
let energy_class: string[]=["Wszystkie","A","B","C","D","E"];
let volume: string[]=["Wszystkie","9kg","8kg","10.5kg"];

const App = () => {
    const [filterSort, setSort] = useState("Wszystkie");
    const [filterFunc, setFilterFunc] = useState("Wszystkie");
    const [filterEnergy, setFilterEnergy] = useState("Wszystkie");
    const [filterVolume, setFilterVolume] = useState("Wszystkie");
    const [searchTerm, setSearchTerm] = useState("");

    const filters = useMemo(() => {
        return dataset.filter( (item)=>{
                const func = filterFunc === "Wszystkie" || item.functions.includes(filterFunc);
            const energy = filterEnergy === "Wszystkie" || filterEnergy === item.energy_class;
            const v = filterVolume === "Wszystkie" || filterVolume === item.volume;
            const search = item.name.toUpperCase().includes(searchTerm.toUpperCase()) || item.volume.includes(searchTerm) || item.functions.toUpperCase().includes(searchTerm.toUpperCase());
            return func && v && energy && search;
        });
    }, [filterEnergy, filterFunc, filterVolume, searchTerm]);

    const Sort = useMemo(() => {
        if(filterSort === "Cena") {
            filters.sort((a, b) => a.price - b.price);
        }
        if(filterSort === "Pojemność") {
            filters.sort((a, b) => parseInt(a.volume) - parseInt(b.volume));
        }
        if(filterSort ==="Wszystkie") {
            filters.sort();
        }

    }, [filterSort]);

function Search(e: React.ChangeEvent<HTMLInputElement>) {
     const searchbar= (e.currentTarget.value.toString());
     setSearchTerm(searchbar);
     return searchbar;
}


return (
  <React.StrictMode><>
      <h1 className="head">Wybierz urządzenie</h1>
      <div className="center"><input placeholder="Search..." className="mainsearch" onChange={Search}/></div>
<div className="container">
      <div className="center">
          <Filter
          title={"Sortuj po:"}
          options={sort}
          cursel={filterSort}
          f={setSort}
      /></div>

      <div className="center">
          <Filter
              title={"Funkcje:"}
              options={functions}
              cursel={filterFunc}
              f={setFilterFunc}
          /></div>
    <div className="center">
        <Filter
            title={"Klasa energetyczna:"}
            options={energy_class}
            cursel={filterEnergy}
            f={setFilterEnergy}
        /></div>
    <div className="center">
        <Filter
            title={"Pojemność:"}
            options={volume}
            cursel={filterVolume}
            f={setFilterVolume}

        /></div>
</div>


      <p className="count" id="count">Liczba wyników: {filters.length}</p>
      <Product_Card_List datas={filters}/>

  </>
  </React.StrictMode>
);
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(<App />);
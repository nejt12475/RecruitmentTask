import React, {useState} from 'react';
import '../Styles/Product_Card.css';


function energy(energy_class: string) {
    if (energy_class=="A") {
        return(
            <img className="energy" src="/url/a.svg"></img>
        );
    }else if(energy_class=="B") {
        return(
            <img className="energy" src="/url/b.svg"></img>
        );
    }else if(energy_class=="C") {
        return(
            <img className="energy" src="/url/c.svg"></img>
        );
    }else if(energy_class=="D") {
        return(
            <img className="energy" src="/url/d.svg"></img>
        );
    }else if(energy_class=="E") {
        return(
            <img className="energy" src="/url/e.svg"></img>
        );
    }

}

interface Product_CardProps {
    name: string,
    price: number,
    image: string,
    volume: string,
    size: string,
    functions: string,
    energy_class: string

}

const Product_Card = function ({name, price, image, volume, size, functions, energy_class}: Product_CardProps) {
    const [text, setText]=useState("WYBIERZ");
    const [chosen, setChosen] = useState(false);
    const Click =()=>{
            if(chosen==true){
                setChosen(false);
                setText("WYBIERZ");
            }else
            {
                setChosen(true);
                setText("WYBRANE");

            }

        return(
            <button type="button" className="${chosen ? 'button active' : 'button'}" onClick={Click}>{text}</button>

        );
    }
    return (

        <div className="product">
            <img src={`/url/${image}`}/>
            <div className="product-info">
            <h2>{name}</h2>

                <div className="description">
                    <p className="desc">Pojemność (kg): <span className="value">{volume.slice(0,volume.length-2)}</span></p>
                    <p className="desc">Wymiary (GxSxW): <span className="value">{size.replace(".",",")}</span></p>
                    <p className="desc">Funkcje: <span className="value">{functions}</span></p>
                    <p className="desc cent">Klasa energetyczna: {energy(energy_class)}</p>
                    <p className="desc">Cena obowiązuje: 15.09.2022 - 21.09.2022</p>
                </div>

                <p className="price_container">
                    <p className="price">{price.toFixed(0)}</p>
                    <p>{price.toFixed(2).slice(price.toFixed(2).toString().length-2, price.toFixed(2).toString().length)}</p>
                    <p>zł</p>
                </p>
            <br/>
                <p className="desc">{(price/60).toFixed(2).toString().replace(/[.]/, ",")} zł x 60 rat</p>
            </div>
            <button type="button" onClick={Click} className={chosen ? 'button active' : 'button'}>{text}</button>

        </div>
    );
};
export default Product_Card;
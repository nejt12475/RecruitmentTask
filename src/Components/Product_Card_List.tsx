import Product_Card from "../Components/Product_Card";
import {useState} from "react";
interface Product {
    volume: string;
    size: string;
    name: string;
    price: number;
    image: string;
    functions: string;
    energy_class: string;
}

interface ProductCardListProps {
    datas: Product[];
}
const ProductCardList: React.FC<ProductCardListProps> = ({ datas }) => {
    const [visible, setVisible] = useState(6);
    const showMore = () => {
        setVisible((prev) => prev + 6);
    };

    return (
        <>
            <div className="grid_container">{

                datas.slice(0, visible).map((item) => (
                    <Product_Card
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        volume={item.volume}
                        size={item.size}
                        functions={item.functions}
                        energy_class={item.energy_class}
                    />))}</div>

            {visible < datas.length && (
                <div className="center" style={{margin: '20px'}}>
                    <button className="more" onClick={showMore}>Pokaż więcej</button>
                </div>)}</>
    );
};

export default ProductCardList;
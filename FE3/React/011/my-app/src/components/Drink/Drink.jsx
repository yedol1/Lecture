import { DrinkWrapper } from "./styled";
const Drink = ({ drinkData }) => {
    const { image, price, title } = drinkData;
    return (
        <DrinkWrapper>
            <img src={image} alt="콜라이미지" />
            <p>{title}</p>
            <p>{price}원</p>
        </DrinkWrapper>
    );
};
export default Drink;

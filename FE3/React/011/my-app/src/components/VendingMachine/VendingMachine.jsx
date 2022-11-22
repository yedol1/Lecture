import Drink from "../Drink/Drink";
import { VendingMachinWrapper } from "./styled";

const VendingMachine = ({ drinkData }) => {
    return (
        <>
            <VendingMachinWrapper>
                <ul>
                    {drinkData.map((item) => (
                        <Drink drinkData={item} />
                    ))}
                </ul>
            </VendingMachinWrapper>
        </>
    );
};
export default VendingMachine;

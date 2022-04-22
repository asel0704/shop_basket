import {styled} from "@mui/material";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { deleteProduct, localStorageGet, counterPlus,counterMinus } from "../store/actions/shopActions";

const Wrapper = styled('div')`
  position: fixed;
  right: 20px;
  top: 80px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .2s;
  ${({ expanded }) => (expanded && `
    width: 400px;
    height: 600px;
    background: white;
    border: 1px solid red;
    border-radius: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px;
  `)}
`

const BasketIcon = styled('span')`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    ${({ expanded }) => (expanded && `
        background:none;
        width:40px;
        height:40px;
  `)}
`

const BasketItemWrapper = styled('div')`
    margin-bottom:12px;
    margin-top:12px;
    border-bottom:1px solid #000;
    width:100%;
    padding-bottom:25px;
    button{
        font-size: 14px;
        color: #FFFFFF;
        line-height:22px;
        background: #624DE3;
        border-radius: 200px;
        padding: 5px 20px;
        outline:none;
        border:none;
    }
` 

const BasketItemInfo = styled('div')`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
`;

const BasketCounter = styled('div')`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-top:20px;
    button{
        font-size:20px;
    }
`

const BasketItemImage = styled('div')`
    text-align:center;
    img{
        width:80px; 
    }
`

export function BasketItem({ product }) {
    const dispatch = useDispatch();

    const deleteProductHandler  = () => {
        dispatch(deleteProduct(product));
    } 

    return (
        <BasketItemWrapper>
            
            <BasketItemInfo>
                <BasketItemImage >
                    <img src={product.image} alt="" />
                </BasketItemImage>
                <div>   
                    {product.title}
                </div>  
                <button onClick={deleteProductHandler}>
                    Delete
                </button>
            </BasketItemInfo>
            <BasketCounter>
                <button onClick={() => dispatch(counterMinus(product))}>
                    -
                </button>
                <div>
                    {product.counter}
                </div>
                <button onClick={() => dispatch(counterPlus(product))}>
                    +
                </button>
            </BasketCounter>
        </BasketItemWrapper>
    )
}

export function Basket() {
    const [expanded, setExpanded] = useState(false)
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.shop.basket);

    const [basketData, setBasketData] = useState(basket);

    useEffect(() => {
        setBasketData(basket);
    }, [basket])
 

    useEffect(() => {
        if ((localStorage.getItem('basket'))){
            setBasketData(JSON.parse(localStorage.getItem('basket')));
            dispatch(localStorageGet(JSON.parse(localStorage.getItem('basket'))))
        }
    }, [])

    return (
        <Wrapper expanded={expanded}>
            <BasketIcon onClick={() => setExpanded(!expanded)} expanded={expanded}>🪣</BasketIcon>
            { expanded && basketData.map((product) => (
                <BasketItem product={product} key={product.id} />
            ))}
        </Wrapper>
    )
}

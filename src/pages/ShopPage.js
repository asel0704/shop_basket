import {Container, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {addToBasket, fetchProducts} from "../store/actions/shopActions";
import {ProductBlock} from "../components/ProductBlock";
import {Basket} from "../components/Basket";

export function ShopPage() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.shop.products)
    const basket = useSelector((state) => state.shop.basket);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const handleAddToBasket = (product) => {
        let find = basket.find(function(item, index) {
            console.log(item.id);
            console.log(product.id);
            if(item.id === product.id)
                return true;
        });    

        if (find){
            alert("Product in basket already!")
        }else{
            dispatch(addToBasket({...product, counter: 1}))
        }
    }

    return (
        <Container>
            <Grid container spacing={2}>    
                {products.map((product) => (
                    <Grid item xs={3} key={product.id}>
                        <ProductBlock product={product} onAddToBasket={() => handleAddToBasket(product)} />
                    </Grid>
                ))}
            </Grid>
            <Basket />
        </Container>
    )
}

import {Button, styled,  Rating} from "@mui/material";

const Box = styled('div')`
  padding: 16px 16px 12px 16px;
  box-sizing: border-box;
  border-radius: 8px;
  transition: .2s;
  &:hover {
    box-shadow: 0 10px 15px 0 rgba(0,0,0,.1);
  }
`
const Image = styled('img')`
  width: 240px;
  height: 260px;
  object-fit: contain;
`
const Title = styled('h3')`
  font-size: 16px;
  font-weight: normal;
  color: #19191D;
  margin-top: 12px;
`
const Price = styled('h3')`
  font-size: 24px;
  color: #19191D;
  margin-top: 12px;
`

export function ProductBlock({ product, onAddToBasket }) {
    return (
        <Box>
            <Image src={product.image} alt="" />
            <Title>{product.title}</Title>
            <Price>{product.price}$</Price>
            <Rating name="half-rating" defaultValue={product.rating.rate} precision={0.1  } readOnly />
            <Button onClick={onAddToBasket}>Add to Basket</Button>
        </Box>
    )
}

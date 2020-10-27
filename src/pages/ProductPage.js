import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Text, Div, Button, Row, Col, Container } from 'atomize'

const ProductPage = () => {

    let {id} = useParams();

    const { addItemToCheckout, fetchProductWithId, product, openCart } = useContext(ShopContext);

    useEffect(() => {
        fetchProductWithId(id);
        return () => {

        }
    }, [fetchProductWithId,id])

    if(!product.title) return <div>loading</div>

    return (
        <Container>
            <Row>
                <Col>
                    <Div bgImg = {product.images[0].src} bgSize = "cover" bgPos = "center center"
                        h="40rem"/>
                </Col>
                <Col>
                    <Text>{product.title}</Text>
                    <Text>${product.variants[0].price}</Text>
                    <Text tag="p" textSize="paragraph" textColor="gray900" textWeight="200">{product.description}</Text>
                    <Button rounded="0" shadow="3" bg="black500" m={{ y: '2rem' }} 
                    onClick = { () => addItemToCheckout(product.variants[0].id, 1)}>
                    Add To Cart</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage

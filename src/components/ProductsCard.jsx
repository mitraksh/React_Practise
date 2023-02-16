import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'


function ProductsCard(props){
    const title = props.title;
    const image = props.image;
    const desc = props.desc;
    const [count, setCount] = useState(0)

    return (
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image}/>
            <Card.Body>
        <Card.Title><h4>{title}</h4></Card.Title>
        <Card.Text>
        Description: {desc}
        </Card.Text>
        <Button variant="primary" onClick={() => setCount((count) => count + 1)}>+</Button>
        <p>{count}</p>
        <Button variant="primary" onClick={() => setCount((count) => count - 1)}>-</Button>

        </Card.Body>
        </Card>
    )
}

export default ProductsCard
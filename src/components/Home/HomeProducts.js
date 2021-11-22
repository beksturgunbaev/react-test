import React from 'react'
import CardItem from './Card'
import './styles/home.css'

const HomeProducts = () => {

    const products = [
        {
            name: "Lorem1 ipsum dolor, sit amet consectetur adipisicing elit",
            cost: 200
        },
        {
            name: "Lorem2 ipsum dolor, sit amet consectetur adipisicing elit",
            cost: 300
        },
        {
            name: "Lorem3 ipsum dolor, sit amet consectetur adipisicing elit",
            cost: 400
        },
        {
            name: "Lorem4 ipsum dolor, sit amet consectetur adipisicing elit",
            cost: 500
        },
        {
            name: "Lorem5 ipsum dolor, sit amet consectetur adipisicing elit",
            cost: 600
        },
        {
            name: "Lorem6 ipsum dolor, sit amet consectetur adipisicing elit",
            cost: 700
        }
    ]

    return (
        <>
            <section className="home-products">
                <div className="container">
                    <div className="products-container">
                        <h1>Lorem ipsum dolor sit</h1>
                        <div className="row">
                            {products.map((product) => (
                                <CardItem name={product.name} cost={product.cost} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeProducts;
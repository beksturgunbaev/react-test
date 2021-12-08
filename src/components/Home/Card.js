import React from 'react'

const CardItem = (props) => {
    return (
        <div className="card-item col-xl-3 col-md-3 col-sm-2">
            <div className="card-img">
                <img src="https://www.watchshopping.com/media/catalog/product/cache/cc52d4544dc2a22d8afd441e1323c25a/2/1/215.30.40.20.01.001_1575391269.jpg" alt="" />
            </div>
            <h4>{props.name}</h4>
            <p>{props.cost}$</p>
            <button className="btn btn-primary">Add to card</button>
        </div>
    );
}

export default CardItem;
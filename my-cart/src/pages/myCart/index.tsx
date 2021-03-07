import React from 'react';
import CardItem from '../../core/components/cardItem';
import './styles.scss';

const MyCart = () => {
    return (
        <section className="my-cart-container">
            <h1>Meu Carrinho</h1>
            <div className="list-itens">
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
            <div className="value-total">
                <h1>Total</h1>
                <h1>R$ 13,31</h1>
            </div>
            <div className="free-frete">
                <h1>Parabéns, sua compra tem frete grátis !</h1>
            </div>
            <div className="btn-container">
                <button>Finalizar compra</button>
            </div>
        </section>
    );
}

export default MyCart;
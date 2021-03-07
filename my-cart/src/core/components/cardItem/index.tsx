import React from 'react';
import './styles.scss';

const CardItem = () => {
    return (
        <div className="card-item-container">
            <div className="card-image">
                <img
                    src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000"
                    alt="product"
                    className="product-image"
                />
            </div>
            <div className="card-info">
                <h1>Trufa Meio Amargo</h1>
                <h3>R$ 1,23</h3>
                <h2>R$ 1,23</h2>
            </div>
        </div >
    )
}

export default CardItem;
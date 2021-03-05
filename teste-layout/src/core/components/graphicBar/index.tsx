import React from 'react';
import './styles.scss';

type Props = {
    height: string;
    hour: string;
}

const GraphicBar = ({ height = "100", hour }: Props) => {

    return (
        <div className="graphic-container">
            <div className="graphic-top">
                <h1>${height}</h1>
                <h2>{hour} + hours</h2>
            </div>
            <div className="graphic-body" style={{ height: height + "px" }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
    );

}

export default GraphicBar;
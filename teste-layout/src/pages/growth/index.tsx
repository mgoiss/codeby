import React from 'react';
import GraphicBar from '../../core/components/graphicBar';
import './styles.scss';

const Growth = () => (
    <section className="section-growth">
        <div className="growth-container">
            <div>
                <h1>growth plans</h1>
                <h3>take your business to the next level</h3>
            </div>
            <div className="growth-graphic">
                <GraphicBar height="100" hour="100" />
                <GraphicBar height="150" hour="180" />
                <GraphicBar height="200" hour="260" />
                <GraphicBar height="250" hour="380" />
                <GraphicBar height="300" hour="420" />
                <GraphicBar height="350" hour="520" />
            </div>
        </div>
    </section>
)

export default Growth;
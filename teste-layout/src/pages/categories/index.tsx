import React from 'react';
import './stylesFlex.scss';


const Categorie = () => (
    <section className="section-categorie">
        <div>
            <h1>categories</h1>
            <h3>discover new possibilities to help you today</h3>
        </div>
        <div className="categorie">
            <div className="categorie-item">
                <h1>nature</h1>
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
            <div className="categorie-item">
                <h1>daily</h1>
                <h3>Praesent tincidunt consectetur diam</h3>
            </div>
            <div className="break"></div>
            <div className="categorie-item">
                <h1>together</h1>
                <h3>Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum</h3>
            </div>
            <div className="break"></div>
            <div className="categorie-item">
                <h1>analysis</h1>
                <h3>Duis sollicitudin mauris vitae venenatis aliquet</h3>
            </div>
            <div className="categorie-item">
                <h1>picture</h1>
                <h3>Quisque eu nisl purus</h3>
            </div>
        </div>
    </section>
)

export default Categorie;
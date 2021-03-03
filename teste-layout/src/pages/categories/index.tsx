import React from 'react';
import './styles.scss';
// import img1 from "../../core/images/img1.png";
// import img2 from "../../core/images/img2.png"
// import img3 from "../../core/images/img3.png"
// import img4 from "../../core/images/img4.png"
// import img5 from "../../core/images/img5.png"


const Categorie = () => (
    <section className="section-categorie">
        <div>
            <h1>categories</h1>
            <h3>discover new possibilities to help you today</h3>
        </div>
        <div className="categorie">
            <div className="categorie-item">
                {/* <img src={img1} alt="img1" /> */}
                <h1>nature</h1>
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
            <div className="categorie-item">
                {/* <img src={img2} alt="img2" /> */}
                <h1>daily</h1>
                <h3>Praesent tincidunt consectetur diam</h3>
            </div>
            <div className="categorie-item">
                {/* <img src={img3} alt="img3" /> */}
                <h1>together</h1>
                <h3>Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum</h3>
            </div>
            <div className="categorie-item">
                {/* <img src={img4} alt="img4" /> */}
                <h1>analysis</h1>
                <h3>Duis sollicitudin mauris vitae venenatis aliquet</h3>
            </div>
            <div className="categorie-item">
                {/* <img src={img5} alt="img5" /> */}
                <h1>picture</h1>
                <h3>Quisque eu nisl purus</h3>
            </div>
        </div>
    </section>
)

export default Categorie;
import React from 'react';
import './styles.scss';
import { ReactComponent as ImgLogo } from '../../core/images/logo.svg';

const HeaderBlue = () => (
    <header className="header">
        <div className="header-top">
            <ImgLogo className="header-img" />
            <h1 className="header-title"> we have ideas to growth your business </h1>
        </div>
        <button className="header-btn">SEE NOW</button>
    </header>
)

export default HeaderBlue;
import React from "react";
import s from './TopMenu.module.scss';
import { Link } from 'react-router-dom';

const TopMenu = () => {
    return (
        <div className={s.bodyTopMenu}>
            <Link to = '/'>Home</Link>
            <Link to = '/friends'>Friends</Link>
            <Link to = '/test'>Test</Link>
        </div>
    )
}

export default TopMenu;
import React from "react";
import s from './Layout.module.scss';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className={s.bodyLayout}>
        
            <header className={s.bodyTopMenu}>
                <Link to='/'>Home</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/test'>Test</Link>
            </header>
            <main className={s.container}>
                <Outlet/>
            </main>
            
            <footer>
                <div>
                  2022  
                </div>
                
            </footer>
 
        </div>
        
    )
}

export default Layout;
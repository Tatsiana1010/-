import React from 'react';
import './index.css';



export default function Form(){
    return(
        <div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
</style>
<header className="header">
<div className="container">
    <div className="Headerinner">
        <a href='/'className="logo">
            <img src ='/logo.png'></img>

        </a>
        <nav className="menu">
            <ul>
            <li className="menu__item">
                    <a href='/Opis' className="menu__link">Описание
</a></li>
<li className="menu__item">
                    <a href='/Charactes'  className="menu__link" >Характеристики
</a></li>
<li className="menu__item">
                    <a href='/Chaing' className="menu__link" >Стоимость
</a>



                </li>
            </ul>
        </nav>

    </div>
</div>
    </header>
</div>
    );
}
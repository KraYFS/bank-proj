import React from 'react';
import Card from '../../UI/Card/Card';
import style from './MyCards.module.css'

const MyCardsSection = () => {
    return (
        <section className={style.MyCardsSection}>
            <Card />
        </section>
    );
}

export default MyCardsSection;

import React from 'react';

import './Home.css';

const Home = () => (
    <div className="Home">
        <div className="Home_Box">
            <h1>#trampei</h1>
            <h2>Já que é pra trampar, #trampei.</h2>
            <p>     A #trampei é uma plataforma que visa unir 
                quem procura um trampo com quem tem um trampo 
                para oferecer. Isso mesmo, um trampo, um bico. 
                Precisa daqueles 100 reais extras para ir em 
                uma festa, comprar uma brusinha ou ajudar com
                o aluguel? Se sim, saiba que esse site foi 
                pensado para você.
            </p>
            <p>
                    Aqui, você terá a oportunidade de encontrar seu 
                match de bico perfeito de forma simples, fácil e 
                rápida. Oferecemos toda a flexibilidade e facilidade 
                necessária para você encaixar em sua rotina um tempo 
                para esse dinheirinho que você precisa! No #trampei, 
                você poderá procurar ou oferecer um trampo, seja ele 
                contratar pessoas para seviço de garçom, ajudar no bar 
                festa de uma rep, consertar um chuveiro ou ensinar cálculo! 
                E aí? Bora Trampar?
            </p>
            <div className="Home_Buttons">
                <button>Ache seu trampo!</button>
                <button>Ofereça um trampo!</button>
            </div>
        </div>
    </div>
);

export default Home;
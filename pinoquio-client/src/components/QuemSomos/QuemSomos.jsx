import React from 'react';

import './QuemSomos.css';

import friendsPic from './Happy-Friends.jpg';

const QuemSomos = () => (
    <div className="QuemSomos">
        <div className="QuemSomos_details">
            <div className="QuemSomos_details_text">
                <h1>Quem somos</h1>
                <p>
                    A #trampei foi criada por universitários, e, principamente,
                    para universitários. Nossa ideia nasceu com o intuito de apresentar
                    uma nova forma de encontrar um bico rápido nesse mundo que cobra
                    rapidez e que grita por flexibilidade.
                </p>
                <p>
                    Conduzido por um grupo de alunos de Ciência da Computação da
                    USP de São Carlos, esta iniciativa garante eficiência,
                    qualidade, segurança e ganho de tempo para quem precisa de dinheiro
                    rápido, mas não faz ideia por onde começar. Porém, como bons computeiros,
                    somos especialistas em apresentar uma solução simples 
                    para problemas complexos.
                </p>
                <p>
                    Assim, nossa plataforma visa apresentar trabalhos flexíveis e de curta
                    duração para quem precisa de uma graninha. Buscamos criar
                    um produto que ajude os dois lados da moeda, empregadores e empregados.
                    Por isso, investimos principalmente em uma interface acessível, clara,
                    fácil e direta.
                </p>
                <p>
                    Nascemos em abril de 2018 com o objetivo de ajudar.
                    Somos a #trampei e melhoramos a vida de gente como a gente.
                    Nosso trampo é fazer você trampar.
                </p>
                <h2>E, já que é pra trampar, #trampei.</h2>
            </div>
            <div className="QuemSomos_details_img">
                <img src={friendsPic} alt="Friends"/>
            </div>
        </div>
    </div>
);

export default QuemSomos;
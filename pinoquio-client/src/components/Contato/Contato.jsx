import React from 'react';

import './Contato.css';

const Contato = () => (
    <div className="Contato content-container">
        <div className="Contato_Box">
            <h1>Fale conosco</h1>
            <p>
                Não possuímos uma sede física, porém pode falar com a gente
                por e-mail! Responderemos sua mensagem dentro de uma semana :)
            </p>
            <form>
                <label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Insira seu E-mail"
                    />
                    <input
                        type="text"
                        name="assunto"
                        placeholder="Assunto"
                    />
                    <input
                        className="Contato_mensagem"
                        type="text"
                        name="mensagem"
                        placeholder="Escreva sua mensagem"
                    />
                </label>
                <input
                    className="Contato_submit"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    </div>
);

export default Contato;

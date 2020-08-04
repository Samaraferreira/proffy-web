import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/51099911?s=460&u=98a67ad897a2cd5658e5b128401ef549634ae66b&v=4"
          alt="Samara"
        />
        <div>
          <strong>Samara Ferreira</strong>
          <span>Programação web</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;

import React, { useCallback, useState } from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';
import subjects from '../../assets/data/subjects.json';
import week from '../../assets/data/week_days.json';

import './styles.css';

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([]);

  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select name="subject" label="Matéria" options={subjects} />
          <Input name="cost" label="Custo da sua aula por hora" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>

          {scheduleItems.map((item) => (
            <div className="schedule-item">
              <Select name="week_day" label="Dia da Semana" options={week} />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;

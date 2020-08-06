import React from 'react';

import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import subjects from '../../assets/data/subjects.json';
import week from '../../assets/data/week_days.json';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
          <Select name="subject" label="Matéria" options={subjects} />
          <Select name="week_day" label="Dia da Semana" options={week} />
          <Input type="time" name="time" label="Hora" />
        </form>
      </Header>

      <main>
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;

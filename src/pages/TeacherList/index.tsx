import React, { useState, FormEvent } from 'react';

import Header from '../../components/Header';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import subjects from '../../assets/data/subjects.json';
import week from '../../assets/data/week_days.json';

import api from '../../services/api';

import './styles.css';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Esses são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={subjects}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            options={week}
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </Header>

      <main>
        {teachers.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;

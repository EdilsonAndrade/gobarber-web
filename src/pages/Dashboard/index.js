import React, {useState, useMemo} from 'react';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { format, addDays, subDays} from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import {Container, Head,Time, Appointments, Appointment} from './styles.js'
export default function Dashboard() {
  // api.get('/appointments?page=1&limit=5');
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    ()=> format(date, "d 'de' MMMM", {locale: pt})
  ,[date]);

  const handleDatePrevious =() =>{
    setDate(subDays(date, 1));
  }

  const handleDateNext =() =>{
    setDate(addDays(date, 1));
  }
  return (
    <Container>
      <Head>
        <button type="button" onClick={handleDatePrevious}><MdKeyboardArrowLeft size={30} color="#fff"></MdKeyboardArrowLeft></button>
        <Time>{dateFormatted}</Time>
        <button onClick={handleDateNext}><MdKeyboardArrowRight size={30} color="#fff"></MdKeyboardArrowRight></button>
      </Head>
        <Appointments>
          <Appointment hasAppointment>
            <strong>08:00</strong>
          <span>Edilson Andrade</span>
          </Appointment>
          <Appointment>
            <strong>09:00</strong>
          <span>Disponível</span>
          </Appointment>
          <Appointment>
            <strong>10:00</strong>
          <span>Disponível</span>
          </Appointment>
          <Appointment>
            <strong>11:00</strong>
          <span>Disponível</span>
          </Appointment>
        </Appointments>
      
    </Container>
  );
}

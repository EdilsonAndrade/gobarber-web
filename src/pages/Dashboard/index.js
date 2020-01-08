import React, { useState, useMemo, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { utcToZonedTime } from 'date-fns-tz';
import {
  format,
  addDays,
  subDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
  setMilliseconds,
} from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  Head,
  Time,
  Appointments,
  Appointment,
  Scroll,
} from './styles.js';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
export default function Dashboard() {
  // api.get('/appointments?page=1&limit=5');
  const [date, setDate] = useState(new Date());

  const [appointmentsDate, setAppointmentsDate] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedules() {
      const response = await api.get('/schedule', { params: { date } });
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const schedule = range.map(hour => {
        const checkDate = setMilliseconds(
          setSeconds(setMinutes(setHours(date, hour), 0), 0),
          0
        );
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          hasAppointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });
      setAppointmentsDate(schedule);
    }

    loadSchedules();
  }, [date]);
  const handleDatePrevious = () => {
    setDate(subDays(date, 1));
  };

  const handleDateNext = () => {
    setDate(addDays(date, 1));
  };
  return (
    <Container>
      <Head>
        <button type="button" onClick={handleDatePrevious}>
          <MdKeyboardArrowLeft size={30} color="#fff" />
        </button>
        <Time>{dateFormatted}</Time>
        <button type="button" onClick={handleDateNext}>
          <MdKeyboardArrowRight size={30} color="#fff" />
        </button>
      </Head>
      <Scroll>
        <Appointments>
          {appointmentsDate.map(a => {
            return (
              <Appointment
                key={a.time}
                past={a.past}
                hasAppointment={!a.hasAppointment}
              >
                <strong>{a.time}</strong>
                <span>
                  {a.hasAppointment ? a.hasAppointment.user.name : 'Em aberto'}
                </span>
              </Appointment>
            );
          })}
        </Appointments>
      </Scroll>
    </Container>
  );
}

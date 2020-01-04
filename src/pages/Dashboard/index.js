import React from 'react';
import api from '~/services/api';

export default function Dashboard() {
  api.get('/appointments?page=1&limit=5');
  return (
    <h1>Dashboard</h1>
  );
}

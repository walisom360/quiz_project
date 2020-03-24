import React from 'react';
import { Radar } from 'react-chartjs-2';

import { Container ,Background } from './styles';

import img from '../../assets/pone.png';

export default function RadarChart() {
  const data = {
    labels: [
      'Focado',
      'Competitivo',
      'Empreendedor',
      'Sociável',
      'Conciliador',
      'Paciente',
      'Reservado',
      'Analítico',
    ],
    datasets: [
      {
        label: 'Percentual Comportamental',
        borderColor: '#fff',

        data: [80, 100, 40, 20, 30, 40, 50, 70],
      },
    ],
    options: { 
      legend: {
        display: true,
          labels: {
              fontColor: "#fff",
              fontSize: 132
          }
      },
    }
  };

  return (
    <Container>
      <Background banner={img}  />

      <h2>Seu perfil Comportamental é:Competitivo</h2>
      <Radar data={data} />
    </Container>
  );
}

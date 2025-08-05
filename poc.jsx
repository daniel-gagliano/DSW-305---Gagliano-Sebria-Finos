// src/components/Formulario.jsx
import { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim()) {
      setEnviado(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button type="submit">Enviar</button>
      {enviado && <p>Gracias, {nombre}!</p>}
    </form>
  );
}


// tests/Formulario.enzyme.test.jsx
import React from 'react';
import { mount } from 'enzyme';
import Formulario from '../src/components/Formulario';

describe('Formulario (Enzyme)', () => {
  it('muestra mensaje después del submit', () => {
    const wrapper = mount(<Formulario />);

    wrapper.find('input').simulate('change', {
      target: { value: 'Daniel' }
    });

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    expect(wrapper.text()).toContain('Gracias, Daniel!');
  });
});



// tests/Formulario.rtl.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from '../src/components/Formulario';

test('muestra mensaje después del submit (RTL)', async () => {
  render(<Formulario />);
  
  const input = screen.getByPlaceholderText('Tu nombre');
  const boton = screen.getByRole('button', { name: /enviar/i });

  await userEvent.type(input, 'Daniel');
  await userEvent.click(boton);

  expect(screen.getByText('Gracias, Daniel!')).toBeInTheDocument();
});

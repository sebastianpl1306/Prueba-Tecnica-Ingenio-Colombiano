import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

React.Component;
describe('Pruebas en App', () => {
    test('Debe mostrar el componente por defecto', () => {
        render(
          <App/>
        )

        expect(screen.getByText('Usuarios')).toBeTruthy();
    });
})
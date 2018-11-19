import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Home from '../../components/Home.page';
import Form from '../../components/Form';
import Listado from '../../components/Listado';
import Edicion from '../../components/Edicion';
import { FormErrors } from '../../components/FormErrors';

describe('components > Form.jsx', () => {
    test('Comprobamos que se renderiza bien nuestro componente Form', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<Form />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    }),

    test('Comprobamos que se renderiza el formulario y todos los campos', () => {

    })
});

describe('components > Home.page.jsx', () => {
    test('Comprobamos que se renderiza bien nuestro componente Home', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<Home />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
})

describe('components > FormErrors.jsx', ()=> {
    test('Comprobamos que se renderiza bien nuestro componente FormErrors', () => {
        var formErrors =  { imagen: '', grad: '', nombre: '', tipo: '', ingr: '', precio: '' };
        const renderer = new ReactShallowRenderer();
        renderer.render(<FormErrors formErrors={''}/>);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('div');
    })
})

describe('components > Listado.jsx', () => {
    test('Comprobamos que se renderiza bien nuestro componente Listado', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<Listado />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
})

describe('components > Edicion.jsx', () => {
    test('Comprobamos que se renderiza bien nuestro componente Edicion', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<Edicion />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
})

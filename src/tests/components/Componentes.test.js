import React from 'react';
//import { shallow } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Home from '../../components/Home.page';
import Form from '../../components/Form';
import Listado from '../../components/Listado';
import Edicion from '../../components/Edicion';
import Borrado from '../../components/Borrado';

import { FormErrors } from '../../components/FormErrors';


describe('components > Form.jsx', () => {
    test('Deberia renderizar el formulario con ReactShallowRenderer', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<Form />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});

describe('components > Home.page.jsx', () => {
    test('Debería renderizar el formulario con ReactShallowRenderer', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<Home />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
})

describe('components > FormErrors.jsx', ()=> {
    test('Debería renderizar el formulario con ReactShallowRenderer', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<FormErrors />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
})

describe('components > Listado.jsx', () => {
    test('Debería renderizar el formulario con ReactShallowRenderer', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<Listado />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
})

describe('components > Edicion.jsx', () => {
    test('Debería renderizar el formulario con ReactShallowRenderer', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<Edicion />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
})

describe('components > Borrado.jsx', () => {
    test('Debería renderizar el formulario con ReactShallowRenderer', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<Borrado />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    })
})

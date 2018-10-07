import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Form from '../../components/Form';
import { localStorage_mock} from '../testData/localStorage';
import validateForm from '../../components/Form';
import { validForm, invalidForm } from '../testData/validationData';

describe('validateForm', () => {
    test('Comprobamos que la funcion devuelve el valor correcto cuando todos los campos son ok', () => {
        expect(validateForm).toThrow('');
    })

})
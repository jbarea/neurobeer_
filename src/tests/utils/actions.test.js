import { ordenarPor } from '../../utils/actions';

var localStorage_mock = [];
describe('ordenarPor', () => {
    test('Comprobamos que la funcion de ordenacion funciona correctamente', () => {
        expect(localStorage_mock.sort(ordenarPor('nombre', true))).toBe(Object);
    })
})
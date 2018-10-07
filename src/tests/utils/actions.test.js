import { ordenarPor } from '../../utils/actions';
//import '../testData/localStorage';
var localStorage_mock = [];
describe('ordenarPor', () => {
    test('Comprobamos que la funcion de ordenacion funciona correctamente', () => {
        expect(localStorage_mock.sort(ordenarPor('nombre', true))).toBe(Object);
    })
})
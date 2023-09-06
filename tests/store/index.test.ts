import { store } from '../../src/store/index';

describe('Pruebas en store/index.ts', () => {
    test('Debe estar configurado correctamente el store', () => {
        expect(store.dispatch).toBeTruthy();
    })
})
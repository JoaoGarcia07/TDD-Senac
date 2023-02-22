const { describe, expect, it } = require('@jest/globals')
const calculadora = require('../src/operacoes')

describe('Teste da calculadora', () => {

    it('Operação de soma', () => {
        let resultado = calculadora.sum(1, 2);
        expect(resultado).toEqual(3)

        resultado = calculadora.sum(-1, 2);
        expect(resultado).toEqual(1)

        resultado = calculadora.sum(2, 2);
        expect(resultado).toEqual(4)

        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.sum(2, "a");
        expect(resultado).toThrow("Não é um número");
    })

    it('Operação de subtração', () => {
        let resultado = calculadora.sub(1, 2);
        expect(resultado).toEqual(-1)

        resultado = calculadora.sub(4, 2);
        expect(resultado).toEqual(2)

        resultado = calculadora.sub(6, 2);
        expect(resultado).toEqual(4)

        resultado = () => calculadora.sub("a", -2);
        expect(resultado).toThrow("Não é um número");

        resultado = () => calculadora.sub(-2, "a");
        expect(resultado).toThrow("Não é um número");
    })

    it('Operação de divisão ' , () => {
        let resultado = calculadora.div(2, 2);
        expect(resultado).toEqual(1)

        resultado = calculadora.div(4, 2);
        expect(resultado).toEqual(2)

        resultado = calculadora.div(8, 2);
        expect(resultado).toEqual(4)

        resultado = calculadora.div(10, 2);
        expect(resultado).toEqual(5)

        resultado = calculadora.div(20, 2);
        expect(resultado).toEqual(10)

        resultado = calculadora.div(30, 2);
        expect(resultado).toEqual(15)

        resultado = calculadora.div(40, 2);
        expect(resultado).toEqual(20)
        
        resultado = calculadora.div(50, 2);
        expect(resultado).toEqual(25)

        resultado = calculadora.div(100, 2);
        expect(resultado).toEqual(50)
    })

    it('Operação de multiplicação' , () => {
        let resultado = calculadora.mult(1, 2);
        expect(resultado).toEqual(2)

        resultado = calculadora.mult(2, 2);
        expect(resultado).toEqual(4)

        resultado = calculadora.mult(3, 2);
        expect(resultado).toEqual(6)

        resultado = calculadora.mult(4, 2);
        expect(resultado).toEqual(8)

        resultado = calculadora.mult(5, 2);
        expect(resultado).toEqual(10)

        resultado = calculadora.mult(6, 2);
        expect(resultado).toEqual(12)

        resultado = calculadora.mult(7, 2);
        expect(resultado).toEqual(14)

        resultado = calculadora.mult(8, 2);
        expect(resultado).toEqual(16)
    })

    
    it('Operação de raiz' , () => {
        let resultado = calculadora.raiz(4, 1 / 2);
        expect(resultado).toEqual(2)

        resultado = calculadora.raiz(144, 1 / 2);
        expect(resultado).toEqual(12)

        resultado = calculadora.raiz(9, 1 / 2);
        expect(resultado).toEqual(3)

        resultado = calculadora.raiz(49, 1 / 2);
        expect(resultado).toEqual(7)

        resultado = calculadora.raiz(64, 1 / 2);
        expect(resultado).toEqual(8)

        resultado = calculadora.raiz(36, 1 / 2);
        expect(resultado).toEqual(6)

        resultado = calculadora.raiz(81, 1 / 2);
        expect(resultado).toEqual(9)

        resultado = calculadora.raiz(9, 1 / 2);
        expect(resultado).toEqual(3)

        resultado = calculadora.raiz(16, 1 / 2);
        expect(resultado).toEqual(4)

    })

      
    it('Operação de potencia' , () => {
        let resultado = calculadora.pot(4, 2);
        expect(resultado).toEqual(16)

        resultado = calculadora.pot(2, 3);
        expect(resultado).toEqual(8)

        resultado = calculadora.pot(3, 4);
        expect(resultado).toEqual(81)

        resultado = calculadora.pot(6, 5);
        expect(resultado).toEqual(7776)

        resultado = calculadora.pot(8, 6);
        expect(resultado).toEqual(262144)

        resultado = calculadora.pot(2, 7);
        expect(resultado).toEqual(128)

        resultado = calculadora.pot(9, 9);
        expect(resultado).toEqual(387420489)

        resultado = calculadora.pot(0, 9);
        expect(resultado).toEqual(0)

        resultado = calculadora.pot(2, 2);
        expect(resultado).toEqual(4)

    })
    
    


// Math.sqrt raiz
// Math.pow potencia
})
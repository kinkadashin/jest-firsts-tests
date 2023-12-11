const saudacao = require('./saudacao')

describe('Teste para saudação', () => {
    test('Deverá retornar Olá, Maria', () => {
        const olaMaria = saudacao.dizOla('Maria')
        expect(olaMaria).toBe('Olá, Maria')
        expect(true).toBeTruthy()
        expect(false).toBeFalsy()
        expect(olaMaria).toContain(',')
        expect([1,2,3,4,5]).toHaveLength(5)
    })
})
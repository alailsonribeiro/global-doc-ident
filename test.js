/**
 * @ Author: Aailson Barbosa Ribeiro <ribeiro@alailson.com.br>
 * @ Create Time: 2020-12-23 13:20:41
 * @ I love do this ♡ Enlightened by God
 * @ Modified by: Your name
 * @ Modified time: 2021-01-13 15:06:32
 */

const DocIdent = require('./index')

let test = {
    cpf: DocIdent('000.000.001-91'),
    cnpj: DocIdent('00.000.001/0001-36')
}

console.log(test)

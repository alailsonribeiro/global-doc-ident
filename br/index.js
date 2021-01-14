/**
 * @ Author: Aailson Barbosa Ribeiro <ribeiro@alailson.com.br>
 * @ Create Time: 2020-12-23 13:20:41
 * @ I love do this ♡ Enlightened by God
 * @ Modified by: Your name
 * @ Modified time: 2021-01-14 13:21:30
 */
/*
 cpf.cnpj.js Verifica se é CPF ou CNPJ 
 */

module.exports = (doc) => {

    doc = doc.toString().replace(/\D/g, '')

    switch (doc.length) {
        case 11: return {
            type: 'CPF',
            number: doc,
            masked: doc.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
            valid: valid = require('./CPF')(doc)
        }
        case 14: return {
            type: 'CNPJ',
            number: doc,
            masked: doc.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"),
            valid: valid = require('./CNPJ')(doc)
        }
        default: return {
            type: 'UNKNOW',
            number: doc,
            masked: '?'.repeat(doc.length),
            valid: false
        }
    }

}



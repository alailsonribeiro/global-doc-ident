/**
 * @ Author: Aailson Barbosa Ribeiro <ribeiro@alailson.com.br>
 * @ Create Time: 2020-12-23 13:20:41
 * @ I love do this ♡ Enlightened by God
 * @ Modified by: Your name
 * @ Modified time: 2021-01-13 13:53:06
 */
/*
JavaScript identifier and validator for the number of Brazilian documents such as CPF and CNPJ returned in object as formatted version
 */

'use strict';

/**
 * 
 * @param (country) tow letters iso code of country in wolrd
 * @param (docnumber) string or number of doc to identify and validate verifirer digit 
 * @return {object} defutl is use module for br
 * 
 */

const countries = require('./countries.json')

module.exports = (docnumber, country = 'br') => {

    country = country.replace(/[0-9]/g, '').substring(0, 2).toLowerCase()

    if (country.length === 2) {

        try {
            return Object.assign(require('./' + country + '/index')(docnumber), {
                country: countries[country.toUpperCase()], module: 'Used for ' + country
            })
        } catch (error) {
            return Object.assign(require('./br/index')(docnumber), {
                country: countries[country.toUpperCase()],
                module: 'Used standard br for Brazil!',
                error: error.message
            })
        }
    } else {
        return Object.assign(require('./br/index')(docnumber), {
            country: countries[country.toUpperCase()], module: 'Used standard br for Brazil!'
        })
    }
}


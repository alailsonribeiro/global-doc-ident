/**
 * @ Author: Aailson Barbosa Ribeiro <ribeiro@alailson.com.br>
 * @ Create Time: 2020-12-23 13:20:41
 * @ I love do this ♡ Enlightened by God
 * @ Modified by: Your name
 * @ Modified time: 2021-01-13 10:51:00
 */
/*
 CPF.js Verifica se é CPF  */

module.exports = (cpf) => {

    cpf = cpf.replace(/[^\d]+/g, '');

    let calc = 0, diff;

    if (cpf == "00000000000") return false;

    for (i = 1; i <= 9; i++) calc = calc + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    diff = (calc * 10) % 11;

    if ((diff == 10) || (diff == 11)) diff = 0;
    if (diff != parseInt(cpf.substring(9, 10))) return false;

    calc = 0;
    for (i = 1; i <= 10; i++) calc = calc + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    diff = (calc * 10) % 11;

    if ((diff == 10) || (diff == 11)) diff = 0;
    if (diff != parseInt(cpf.substring(10, 11))) return false;

    return true

}



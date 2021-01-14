# br-doc-identfier

JavaScript identifier and validator for the number of Brazilian documents such as CPF and CNPJ returned in object as formatted version.

Identificador JavaScript e validador da quantidade de documentos brasileiros como CPF e CNPJ devolvidos no objeto como versão formatada.

Identificador y validador de JavaScript para el número de documentos brasileños como CPF y CNPJ devueltos en el objeto como versión formateada.


**Default use for Brazil Docs (CPF and CNPJ)

*How to use:
```
const DocIdent = require('global-doc-ident')

console.log(DocIdent('000.000.001-91')) //CPF Default Brazil
console.log(DocIdent('000.000.001-91', 'br')) //CPF informing code of countrie
console.log(DocIdent('00.000.001/0001-36')) //CNPJ Default Brazil
console.log(DocIdent('00.000.001/0001-36', 'br')) //CNPJ informing code of countrie

```
**Return default Brazil

```
{
  type: 'CPF',
  doc: '00000000191',
  msk: '000.000.001-91',
  valid: true,
  country: 'Brazil',
  module: 'Used for br'
}
{
  type: 'CPF',
  doc: '00000000191',
  msk: '000.000.001-91',
  valid: true,
  country: 'Brazil',
  module: 'Used for br'
}
{
  type: 'CNPJ',
  doc: '00000001000136',
  msk: '00.000.001/0001-36',
  valid: true,
  country: 'Brazil',
  module: 'Used for br'
}
{
  type: 'CNPJ',
  doc: '00000001000136',
  msk: '00.000.001/0001-36',
  valid: true,
  country: 'Brazil',
  module: 'Used for br'
}
```


**Return from npm test

```
/global-doc-ident (main) $ npm test

> br-doc-identfier@1.0.0 test
> node test.js

{
  cpf: {
    type: 'CPF',
    doc: '00000000191',
    msk: '000.000.001-91',
    valid: true,
    country: 'Brazil',
    module: 'Used for br'
  },
  cnpj: {
    type: 'CNPJ',
    doc: '00000001000136',
    msk: '00.000.001/0001-36',
    valid: true,
    country: 'Brazil',
    module: 'Used for br'
  }
}

```

**Join this Project

If you are interested in contributing with new checks for other types of documents related to Brazil and/or other countries please contact GitHub, to find out how to get involved in the project.

Se você tem interesse em contribuir com novos cheques para outros tipos de documentos relacionados ao Brasil e/ou outros países, entre em contato com o GitHub, para saber como se envolver no projeto.

Si está interesado en aportar nuevos cheques a otro tipo de documentos relacionados con Brasil y/u otros países, comuníquese con GitHub, para averiguar cómo involucrarse en el proyecto.

Si vous souhaitez contribuer de nouveaux contrôles à d'autres types de documents liés au Brésil et/ou à d'autres pays, contactez GitHub, pour savoir comment vous impliquer dans le projet.

Wenn Sie neue Schecks für andere Arten von Dokumenten in Bezug auf Brasilien und/oder andere Länder einreichen möchten, wenden Sie sich an GitHub, um herauszufinden, wie Sie sich an dem Projekt beteiligen können.

About Creator: [Alailson Barbosa Ribeiro](https://www.alailson.com.br)
=============
![alt text](https://secure.gravatar.com/avatar/f4a6fbf1b704b29c4236d964f5f5280c "Alailson Barbosa Ribeiro")

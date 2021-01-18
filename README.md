# global-doc-ident

JavaScript identifier and validator for the number of Brazilian documents such as CPF and CNPJ returned in object as formatted version.

Identificador JavaScript e validador da quantidade de documentos brasileiros como CPF e CNPJ devolvidos no objeto como versão formatada.

Identificador y validador de JavaScript para el número de documentos brasileños como CPF y CNPJ devueltos en el objeto como versión formateada.


##Default use for Brazil Docs (CPF and CNPJ)

#How to use:
```
const DocIdent = require('global-doc-ident')

console.log(DocIdent('000.000.001-91')) //CPF Default Brazil
console.log(DocIdent('000.000.001-91', 'br')) //CPF informing code of countrie
console.log(DocIdent('00.000.001/0001-36')) //CNPJ Default Brazil
console.log(DocIdent('00.000.001/0001-36', 'br')) //CNPJ informing code of countrie

```
##Return default Brazil

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


##Return from npm test

```
$ npm test

> global-doc-ident@1.0.0 test
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

##Join here -> Project at **GitHub** 

If you are interested in contributing with new checkups for other types of documents related to Brazil and / or other countries, contact us by clicking on [New Issue] at link https://github.com/alailsonribeiro/global-doc-ident/issues of **GitHub**, for know how to get involved in the project.

Se você tiver interesse em contribuir com novos checkups para outros tipos de documentos relacionados ao Brasil e / ou outros países, entre em contato conosco clicando em [New Issue] no link https://github.com/alailsonribeiro/global-doc-ident/issues of **GitHub**, para saber como se envolver no projeto.

Si está interesado en contribuir con nuevos chequeos para otro tipo de documentos relacionados con Brasil y / u otros países, contáctenos haciendo clic en [New Issue] en el enlace https://github.com/alailsonribeiro/global-doc-ident/issues de **GitHub** , para aprender a involucrarse en el proyecto.

Si vous souhaitez contribuer à de nouveaux contrôles pour d'autres types de documents liés au Brésil et / ou à d'autres pays, contactez-nous en cliquant sur [Nouveau numéro] sur le lien https://github.com/alailsonribeiro/global-doc-ident/issues de **GitHub** , pour apprendre à s'impliquer dans le projet.

Wenn Sie daran interessiert sind, neue Überprüfungen für andere Arten von Dokumenten in Bezug auf Brasilien und / oder andere Länder durchzuführen, kontaktieren Sie uns, indem Sie unter dem Link https://github.com/alailsonribeiro/global-doc-ident/issues von **GitHub** auf [Neue Ausgabe] klicken , um zu lernen, wie man sich an dem Projekt beteiligt.

如果您有兴趣对巴西和/或其他国家/地区的其他类型的文档进行新的检查，请在此处与Pojects **GitHub**联系，以了解如何参与该项目。

إذا كنت مهتمًا بالمساهمة في عمليات فحص جديدة لأنواع أخرى من المستندات المتعلقة بالبرازيل و / أو دول أخرى ، فاتصل بنا من خلال النقر على [إصدار جديد] على الرابط https://github.com/alailsonribeiro/global-doc-ident/issues of **GitHub** لتعلم كيفية المشاركة في المشروع.

ブラジルや他の国に関連する他の種類のドキュメントの新しい検査に貢献することに興味がある場合は、リンクhttps://github.com/alailsonribeiro/global-doc-ident/issues of**GitHub**の[NewIssue]をクリックしてお問い合わせください。 、プロジェクトに参加する方法を学びます。



About Creator: [Alailson Barbosa Ribeiro](https://www.alailson.com.br)
=============
![alt text](https://secure.gravatar.com/avatar/f4a6fbf1b704b29c4236d964f5f5280c "Alailson Barbosa Ribeiro")

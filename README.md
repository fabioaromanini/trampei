# Trampei

Plataforma online desenvolvida em node, express e react. A versão estável mais atual pode ser acessada no servidor de [homologação](http://trampei.herokuapp.com).

Para rodar o repositório localmente, é necessário
 configurar um arquivo JSON com o nome **local.json** no diretório "/config/crendtials/. O json deve conter a seguinte estrutura:


    {
      "google": {
        "clientID":
          "Client ID gerado pela API Google",
        "clientSecret": "Client Secret gerado pela API Google",
      },
      "mongo": {
        "uri": "uri para a instância do MongoDB"
      },
      "cookieKey": "String aleatória"
    }

* [Instância remota e gratuíta de MongoDB](https://mlab.com)
* [Como criar Client ID para OAuth 2.0 com Google](https://developers.google.com/identity/protocols/OAuth2)
**ATENÇÃO:** ao configurar as credenciais, as chaves devem autorizar o redirecionamento para "http://localhost:5000/auth/google/callback" e "http://localhost:3000/auth/google/callback", e aceitar como origem "http://localhost:5000".

# Trampei backend

A trampei é uma plataforma online voltada para divulgação de trampos rápidos e informais. A versão estável mais atual pode ser acessada no servidor de [testes](http://trampei.herokuapp.com).

Desenvolvido utilizando: nodejs, express, docker, mongo e react.

Para **rodar o repositório localmente**, é necessário
configurar um arquivo JSON com o nome **local.json** no diretório "/config/credentials/. O json deve conter a seguinte estrutura:

    {
      "google": {
        "clientID":
          "Client ID gerado pela API Google",
        "clientSecret": "Client Secret gerado pela API Google",
      },
      "mongo": {
        "uri": "uri para a instância do MongoDB"
      },
      "cookieKey": "String aleatória usada no hash do cookie"
    }


Para **gerar uma imagem docker**, é necessário
configurar um script com o nome **entrypoint.sh** no diretório principal da aplicação. O script deve conter a seguinte estrutura:

    #!/bin/sh

    export GOOGLE_CLIENT_ID="Client ID gerado pela API Google"
    export GOOGLE_CLIENT_SECRET="Client Secret gerado pela API Google"
    export MONGO_URI="uri para a instância do MongoDB"
    export COOKIE_KEY="String aleatória usada no hash do cookie"

    npm start


### Informações uteis

* O script ```npm run dev``` executa simultaneamente o back e o frontend, ambos com hot reloading, para fins de desenvolvimento.
* [Instância remota e gratuíta de MongoDB](https://mlab.com)
* [Como criar Client ID para OAuth 2.0 com Google](https://developers.google.com/identity/protocols/OAuth2)
**ATENÇÃO:** ao configurar as credenciais para o ambiente local, as chaves devem autorizar o redirecionamento para "http://localhost:5000/auth/google/callback" e "http://localhost:3000/auth/google/callback", e aceitar como origem "http://localhost:5000".

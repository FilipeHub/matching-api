define({ "api": [
  {
    "type": "post",
    "url": "/gravacao",
    "title": "Create a new Gravacao",
    "name": "CreateGravacao",
    "group": "Gravacoes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "Number",
            "description": "<p>Gravacao id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telefone",
            "description": "<p>Gravacao telefone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ramal",
            "description": "<p>Gravacao ramal</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "dataGravacao",
            "description": "<p>Gravacao dataGravacao</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreateGravacaoFailed",
            "description": "<p>an unexpected error occurs in the storage of the Gravacao in the data base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error creating a new Gravacao\n\n{\n   error: \"Save Gravacao failed\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/GravacaoController.js",
    "groupTitle": "Gravacoes"
  },
  {
    "type": "get",
    "url": "/matches",
    "title": "Return all the matches of the database",
    "name": "ReadAllMatches",
    "group": "Matches",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>Match id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gravacaoId",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tabulacaoId",
            "description": "<p>User email.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReadAllMatchesFailed",
            "description": "<p>an unexpected error occurs in the read of all Matches in the database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error reading all matches\n\n{\n   error: \"Read all matches failed\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/MatchController.js",
    "groupTitle": "Matches"
  },
  {
    "type": "post",
    "url": "/tabulacao",
    "title": "Create a new Tabulacao",
    "name": "CreateTabulacao",
    "group": "Tabulacoes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "Number",
            "description": "<p>Tabulacao id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nomeCliente",
            "description": "<p>Tabulacao nomeCliente</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "protocolo",
            "description": "<p>Tabulacao protocolo</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "dataAtendimento",
            "description": "<p>Tabulacao dataAtendimento</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numeroBinado",
            "description": "<p>Tabulacao numeroBinado</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "numeroAcesso",
            "description": "<p>Tabulacao numeroAcesso</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CreateTabulacaoFailed",
            "description": "<p>an unexpected error occurs in the storage of the Tabulacao in the data base</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-response",
          "content": "HTTP/1.1 400 Error creating a new Tabulacao\n\n{\n   error: \"Save Tabulacao failed\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "./src/controllers/TabulacaoController.js",
    "groupTitle": "Tabulacoes"
  }
] });

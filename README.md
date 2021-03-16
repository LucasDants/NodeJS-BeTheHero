

    
<h1 align="center">
:trophy: BeTheHero API :trophy:
</h1>

<p align="center">BeTheHero is a Restfull API of <a href="https://github.com/Luksdantas/ReactJS-BeTheHero">BeTheHero Web</a> and <a href="https://github.com/Luksdantas/ReactNative-BeTheHero">BeTheHero Mobile</a> </p>


<p align="center">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-BeTheHero/express" alt="Express Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-BeTheHero/cors" alt="Cors Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-BeTheHero/knex" alt="Knex Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/Luksdantas/NodeJS-BeTheHero/sqlite3" alt="Sqlite3 Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/Luksdantas/NodeJS-BeTheHero/celebrate" alt="Celebrate Version">
 <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-BeTheHero/dev/typescript" alt="Typescript Version">
  <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-BeTheHero/dev/jest" alt="Jest Version">
   <img  src="https://img.shields.io/github/package-json/dependency-version/LuksDantas/NodeJS-BeTheHero/dev/supertest" alt="Supertest Version">
</p>

<h1>:memo:About</h1>
<p>BeTheHero API is a project developed during the <a href="https://rocketseat.com.br/">Semana Omnistack 11</a> presented by <a href="https://www.linkedin.com/school/rocketseat/">Rockeseat</a>.</p>
<p>WEB: <a href="https://github.com/Luksdantas/ReactJS-BeTheHero">BeTheHero Web</a></p>
<p>API: <a href="https://github.com/Luksdantas/ReactNative-BeTheHero">BeTheHero Mobile</a></p>

<h1>:rocket: Getting started</h1>

```bash

# Clone this repository
$ git clone https://github.com/Luksdantas/NodeJS-BeTheHero.git

# Access the project folder cmd/terminal
$ cd NodeJS-NPS

# install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The application will open on the port: 3333 - go to http://localhost:3333

```

<h1>🛠 BeTheHero API</h1>
<a href="https://github.com/Luksdantas/NodeJS-BeTheHero/blob/main/Insomnia_2021-03-13.json">Insomnia document</a>

<h2>POST Create Ong</h2>
<h3>Request</h3>

`POST /ongs`

```
{
	"name": "Example Ong",
	"email": "example@example.com",
	"whatsapp": "85900000000",
	"city": "São Paulo",
	 "uf": "SP"
}
```

<h3>Response</h3>

```
{
  "id": "8035bc1a"
}
```

<h2>GET Ongs</h2>
<h3>Request</h3>

`GET /ongs`

<h3>Response</h3>

```
[
  {
    "id": "8035bc1a",
    "name": "Example Ong",
    "email": "example@example.com",
    "whatsapp": "85900000000",
    "city": "São Paulo",
    "uf": "SP"
  }
]
```

<h2>POST Login</h2>
<h3>Request</h3>

`POST /sessions`

```
{
	"id": "8035bc1a"
}
```

<h3>Response</h3>

```
{
  "name": "Example Ong"
}
```

<h2>GET Ong Profile</h2>
<h3>Request</h3>

`GET /profile headers: {authorization: 8035bc1a}`

<h3>Response</h3>

```
[
  {
    "id": 3,
    "title": "Example incident",
    "description": "Example description incident",
    "value": 10,
    "ong_id": "8035bc1a"
  }
]
```

<h2>GET Incidents</h2>
<h3>Request</h3>

`GET /incidents`

<h3>Response</h3>

```
[
  {
    "id": 3,
    "title": "Example incident",
    "description": "Example description incident",
    "value": 10,
    "ong_id": "8035bc1a",
    "name": "Example Ong",
    "email": "example@example.com",
    "whatsapp": "85900000000",
    "city": "São Paulo",
    "uf": "SP"
  }
]
```

<h2>POST Create Incident</h2>
<h3>Request</h3>

`POST /incidents headers: {authorization: 8035bc1a}`

```
{
	"title": "Example incident",
	"description": "Example description incident",
	"value": 10.00
}
```

<h3>Response</h3>

```
{
  "id": 3
}
```

<h2>Delete Incident</h2>
<h3>Request</h3>

`DELETE /incidents/:id`

<h3>Response</h3>

```
```

<h1>:bookmark_tabs: License</h1>
 <img  src="https://img.shields.io/github/license/Luksdantas/NodeJS-BeTheHero" alt="License">
 
 <p>Made with :heart: by Lucas Dantas 👋🏽 <a href="https://www.linkedin.com/in/luksdantas/">Get in Touch!</a></p>

# Rebase Labs

## About

This project was made during the Rebase Labs, by [Rebase](https://www.rebase.com.br/). <br>
As me and others came from a training/selection process that our core <br>
framework was Rails, Rebase proposed a project without the usage of Rails. <br>

The project is simple: reading from a CSV File we should create: a table on a database,<br>
an api that expose some endpoints and a application that consumes those endpoints, <br>
a frontend application that an user can interact with. Furthermore, the user should <br>
be able to insert a CSV file into the database through the webapp application, and this <br>
should be done using an async job. To end it all, all of that must integrated with Docker.

Here's a peek of the Docker container structure to achieve the project goals:

- postgres_db
- rebase_api - api made with Sinatra
- rebase_test - test container using Ruby Rspec framework
- rebase_webapp - Frontend webapp in Javascript, using parcel bundler
- rebase_sidekiq - container setup to use sidekiq for async jobs
- rebase_redis - container to enqueue jobs coming from rebase_sidekiq

## TechStack

![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-000?style=for-the-badge&logo=postgresql) <br>
![Bootstrap](https://img.shields.io/badge/-boostrap-0D1117?style=for-the-badge&logo=bootstrap&labelColor=0D1117)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)

## Project Setup

Considering you already have Docker installed, on the root of this application: <br>

`docker-compose up -d`

This will create all containers necessary for the application to work. <br>
Wait for a couple seconds for Docker to setup everything. <br>

You can access the web application on this URL: `http://localhost:1234`

## Tests

The API application is tested, both with model and requests tests. <br>
To view the test results simply run `docker logs rebase_test`

# Rebase API

## Introduction

Welcome to the Reabase API!. This documentation will guide you throught our API and its available resources and how to consume them with HTTP requests.

## Authentication

Rebase API is a completely open API. No authentication is required to query and get data.

## Resources

### Exams

An exam contains the all the information about an specific exam.

## GET /exams

### Example request:

`http http://localhost:3000/exams`

### Example response:

```json
[
  {
    "exam_id": "1",
    "cpf": "048.973.170-88",
    "patient_name": "Emilly Batista Neto",
    "patient_mail": "gerald.crona@ebert-quigley.com",
    "patient_birthdate": "2001-03-11 00:00:00",
    "patient_adress": "165 Rua Rafaela",
    "patient_city": "Ituverava",
    "patient_state": "Alagoas",
    "medic_crm": "B000BJ20J4",
    "medic_crm_state": "PI",
    "medic_name": "Maria Luiza Pires",
    "medic_mail": "denna@wisozk.biz",
    "exam_token": "IQCZ17",
    "exam_date": "2021-08-05 00:00:00",
    "exam_type": "hemácias",
    "exam_type_range": "45-52",
    "exam_result": "97"
  },
  {
    "exam_id": "2",
    "cpf": "048.973.170-88",
    "patient_name": "Emilly Batista Neto",
    "patient_mail": "gerald.crona@ebert-quigley.com",
    "patient_birthdate": "2001-03-11 00:00:00",
    "patient_adress": "165 Rua Rafaela",
    "patient_city": "Ituverava",
    "patient_state": "Alagoas",
    "medic_crm": "B000BJ20J4",
    "medic_crm_state": "PI",
    "medic_name": "Maria Luiza Pires",
    "medic_mail": "denna@wisozk.biz",
    "exam_token": "IQCZ17",
    "exam_date": "2021-08-05 00:00:00",
    "exam_type": "leucócitos",
    "exam_type_range": "9-61",
    "exam_result": "89"
  },...
]
```

## GET /exams?token=:token

Given a valid token, this will return all information and exams <br>
under that token.

### Example request:

`http http://localhost:3000/exams?token=IQCZ17`

### Example response:

```json
{
  "exam_token": "IQCZ17",
  "exam_date": "2021-08-05 00:00:00",
  "cpf": "048.973.170-88",
  "patient_name": "Emilly Batista Neto",
  "patient_mail": "gerald.crona@ebert-quigley.com",
  "patient_birthdate": "2001-03-11 00:00:00",
  "medic": {
    "medic_crm": "B000BJ20J4",
    "medic_crm_state": "PI",
    "medic_name": "Maria Luiza Pires"
  },
  "exams": [
    {
      "exam_type": "hemácias",
      "exam_type_range": "45-52",
      "exam_result": "97"
    },
    {
      "exam_type": "leucócitos",
      "exam_type_range": "9-61",
      "exam_result": "89"
    },
    {
      "exam_type": "plaquetas",
      "exam_type_range": "11-93",
      "exam_result": "97"
    },
    {
      "exam_type": "hdl",
      "exam_type_range": "19-75",
      "exam_result": "0"
    },
    {
      "exam_type": "ldl",
      "exam_type_range": "45-54",
      "exam_result": "80"
    },
    {
      "exam_type": "vldl",
      "exam_type_range": "48-72",
      "exam_result": "82"
    },
    {
      "exam_type": "glicemia",
      "exam_type_range": "25-83",
      "exam_result": "98"
    },
    {
      "exam_type": "tgo",
      "exam_type_range": "50-84",
      "exam_result": "87"
    },
    {
      "exam_type": "tgp",
      "exam_type_range": "38-63",
      "exam_result": "9"
    },
    {
      "exam_type": "eletrólitos",
      "exam_type_range": "2-68",
      "exam_result": "85"
    },
    {
      "exam_type": "tsh",
      "exam_type_range": "25-80",
      "exam_result": "65"
    },
    {
      "exam_type": "t4-livre",
      "exam_type_range": "34-60",
      "exam_result": "94"
    },
    {
      "exam_type": "ácido úrico",
      "exam_type_range": "15-61",
      "exam_result": "2"
    }
  ]
}
```

## POST /exams

This endpoint requires a CSV file in the right format.<br>
To see the valid format look into <code>./spec/support/data.csv</code><br>
on this project root.

### Example request

To upload a CSV file, you'll need to send a POST request with the file included as form data under the key <code>file</code>.

### Using curl

```bash
curl -X POST http://localhost:3000/exams \
     -H "Content-Type: multipart/form-data" \
     -F "file=@path/to/your/file.csv"
```

### Example success response:

```json
{
  "message": "Success"
}
```

### Example invalid file response (status 415):

```json
{
  "error": "O arquivo deve ser no formato .csv"
}
```

### Example no file response (status 400):

```json
{
  "error": "Nenhum arquivo foi enviado"
}
```

### Example invalid content from csv response (status 422):

```json
{
  "error": "O arquivo deve conter dados válidos"
}
```

# Rebase WebApp
The Rebase WebApp is a front-end application that consumes from <br>
the Rebase API in order to allow users to consult and add exams <br>
from and to the database.

## App pages and it's functionalities

### Homepage
![image](https://github.com/user-attachments/assets/2ef3246d-43fd-492d-a675-dabb4e43b9eb)
Here the user can see a peek of all exams, and access to it's token <br>
in order to use the detailed exams functionality.

### Detailed Exams
![image](https://github.com/user-attachments/assets/53d97537-b789-4ca1-b007-f37686f6e37a)
By inserting a valid token on the homepage search bar, the user <br>
can see all details from all exams linked to the token provided.

### Insert Exams
![image](https://github.com/user-attachments/assets/b4d502b0-f6d8-4107-92b8-c99f105bd4dd)
In this page, the user can insert exams. 

### Success feedback
![image](https://github.com/user-attachments/assets/563868b0-42b1-4a34-b121-fd0271b4c8ed)
If the user inserted valid CSV data, the Webapp will inform him.

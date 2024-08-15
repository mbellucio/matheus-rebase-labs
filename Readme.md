# Rebase Labs

## About
This project was made during the Rebase Labs, by the Rebase company. <br>
As me and others came from a training/selection process that our core <br>
framework was Rails, Rebase proposed a project without the usage of Rails. <br>

The project is simple:  reading from a CSV File we should create: a table on a database,<br>
an api that expose some endpoints and a application that consumes those endpoints, <br>
a frontend application that an user can interact with. Furthermore, the user should <br>
be able to insert a CSV file into the database through the webapp application, and this <br>
should be done using an async job. To end it all, all of that must be made using Docker.

Here's a peek of the Docker container setup to achieve the project goals: <br>

- postgres_db
- rebase_api - api made with Sinatra
- rebase_test - test container using Ruby Rspec framework
- rebase_webapp - Frontend webapp in Javascript, using parcel bundler
- rebase_sidekiq - container setup to use sidekiq for async jobs
- redis - container to enqueue jobs coming from rebase_sidekiq


## TechStack
![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-000?style=for-the-badge&logo=postgresql)
![Bootstrap](https://img.shields.io/badge/-boostrap-0D1117?style=for-the-badge&logo=bootstrap&labelColor=0D1117)

## Project Setup
Considering you already have Docker installed, on the root of this application: <br>

```docker-compose up -d```

This will create all containers necessary for the application to work. <br>

You can access the web application on this URL: ```https://localhost:1234```

## Tests
The API application is tested, both with model and requests tests. <br>
To view the test results simply run ```docker logs rebase_test```

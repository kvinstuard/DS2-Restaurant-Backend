# Restaurant-Backend
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/eiscdev2023/DS2-Restaurant-Backend) [![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg)](https://pypi.python.org/pypi/ansicolortags/) 

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

##About
This is a project developed for the DS2 classes, we've use different tools and strategies related to DevOps philosophy.
This is an a administrations KanBan for a restaurant.

###Built With
-  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 

- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 

- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

- ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

- ![SonarQube](https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD)
- ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) 

##Diseño del Sistema: 
![](images/pipeline.png)

- Control version (git) - git and gitflow as strategy for work flow.
- Build code (build) - Creation and code compilation using diferent tools.
- Unit test - Integration test
- Release - App ready for deployment
- Deploy - release to a production env with vercel

##Getting started
### Installation

_Below are there the steps to be follow in order to install and execute the app._

1. Clone the repo
   ```sh
   git clone https://github.com/eiscdev2023/DS2-Restaurant-Backend.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create an .env file like this.

 ```sh
  PG_HOST='your_host' 
  PG_PORT='5432'
  PG_USER='your_user'
  PG_PASSWORD='your_password'
  PG_DATABASE='your_db'
  PG_POOL_CONNECTION_LIMIT=10 
  PG_POOL_IDLE_TIMEOUT=30000 
```
  
  ##CI/CD
*build.yml - This action run on every push and pull request to the feature_* and develop branches it runs several jobs and a Postgres service use for testing.
- Slack notification (starting): this job send a slack notification of starting execution to a Slack channel. 
- Lint - It runs eslint to check if there are any linting errors.
- Test - It runs the unit and integration tests using jest.
- Sonar - It runs SonarCloud analysis. This uses SonarCloud to analyze the code and find bugs, vulnerabilities, code smells, etc
- Slack notification (succes): this job send a slack notification of succes execution to a Slack channel. 

*main.yml - This action run on every push and pull request to the main branch it runs several jobs.
- Slack notification (starting): this job send a slack notification of starting execution to a Slack channel. 
- Deploy: ...
- Docker: This job create a docker image of the project and publish it on docker_hub.
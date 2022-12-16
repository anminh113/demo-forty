# Getting started

- Download the repository

- Create .env file based on .env.example file

- Run the project
```
docker-compose up
sudo docker exec tiger-app ./node_modules/node-pg-migrate/bin/node-pg-migrate up
```
Finally, navigate to `http://localhost:3000` and you should see the template being served and rendered locally!

### Run migrate
Run `sudo docker exec tiger-app ./node_modules/node-pg-migrate/bin/node-pg-migrate create my first migration`. It will create file `xxx_my-first-migration.js` in migrations folder.
Run `sudo docker exec tiger-app ./node_modules/node-pg-migrate/bin/node-pg-migrate up` to install.
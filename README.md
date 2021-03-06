# cray-api

Edit the volume path in `kubernetes/development-local.yml` to a local folder

Start database using kubernetes
```bash
kubectl create -f kubernetes/development-local.yml
```

Copy .env.sample to .env with updated configuration
```bash
cp .env.sample .env
```

Start Application with
```bash
npm run develop
```

Prerequisites
- docker for mac (https://www.docker.com/products/docker-desktop) with kubernetes installed
- https://github.com/creationix/nvm
- use db-migrate to update the database or use `npm run db:update`

```bash
npm install db-migrate -g
```

Creating Migrations
```bash
db-migrate create [migration_name] --sql-file
```
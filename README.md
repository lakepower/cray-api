# cray-api

Edit the volume path in `kubernetes/mysql-local.yml` to a local folder

Start database using kubernetes
```bash
kubectl create -f kubernetes/mysql-local.yml
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

# cray-api

Start database using kubernetes

Edit the volume path to a local folder
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
### Frontend Assignment

**Project Structure**

1. API gateway: run on port 5000 written in NodeJS with expressJS
2. React web application: run on port 3000, use middle proxy middleware to call API
3. Json server: run on port 9000

**How to run the project in development (without build react app)**

npm install will install all dependencies of all services, and npm run start will also start all services.

***Note** You can access web application on port 3000

```
npm install
npm run start
```

---

**How to run the project in production (build react app)**

I use nodeJS to serve static file of react app

***Note** You can access web application on port 5000

```
npm install
npm run build
npm run prod
```

> Created by Thanaphon Sombunkaeo
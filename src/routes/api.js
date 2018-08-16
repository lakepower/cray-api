const express = require('express');

const router = express.Router();
const cardStore = require('../store/card');

const spec = {
  openapi: '3.0.0',
  // servers: [{
  //   description: 'Cray API Auto Mocking',
  //   url: ''
  // }],
  info: {
    description: 'Description',
    version: '0.0.1',
    title: 'Cray Project',
    termsOfService: '',
    contact: {
      email: ''
    }
  },
  paths: {
    '/card': {
      get: {
        func: (req, res) => {
          return cardStore.get()
            .then((resultRows) => {
              return res.json(resultRows);
            });
        },
        middleware: [],
        tags: ['card'],
        summary: 'Query cards in a store',
        operationId: 'getCard',
        requestBody: {
          $ref: '#/components/requestBodies/card'
        }
      },
      post: {
        func: (req, res) => res.json({ card: 1 }),
        middleware: [],
        tags: ['card'],
        summary: 'Add a new card to the store',
        operationId: 'addCard',
        responses: {
          405: {
            description: 'Invalid input'
          }
        },
        requestBody: {
          $ref: '#/components/requestBodies/card'
        }
      },
    }
  }
};

// API endpoints
Object.keys(spec.paths).forEach((path) => {
  Object.keys(spec.paths[path]).forEach((verb) => {
    const { middleware, func } = spec.paths[path][verb];
    // Replace OpenAPI path with express route path
    const expressPath = path.replace(/\{([^}]+)\}/, (substr, match) => `: ${match}`);
    if (middleware) {
      router[verb](expressPath, middleware, func);
    } else {
      router[verb](expressPath, [], func);
    }
  });
});

// Expose OpenAPI Spec
router.get('/', (req, res) => {
  res.status(200).json(spec);
});

// Handle Errors
router.use((err, req, res, next) => {
  if (err) {
    res.status(err.status || 500)
      .json({
        message: err.message,
        error: err
      });
  } else {
    next();
  }
});

// Not Found
router.use((req, res) => {
  const err = new Error('Not Found');
  err.status = 404;

  res.status(err.status || 500).json({
    message: err.message,
    status: err.status
  });
});

module.exports = router;

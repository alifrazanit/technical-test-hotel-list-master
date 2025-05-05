module.exports = {
    apps: [
      {
        name: 'technical-test-hotel-list-master-development',
        script: 'dist/main.js',
        instances: 1,
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'development',
          PORT: 3001,
        },
      },
    ],
  };
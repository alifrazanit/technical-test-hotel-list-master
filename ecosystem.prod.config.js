module.exports = {
    apps: [
      {
        name: 'technical-test-hotel-list-master-production',
        script: 'dist/main.js',
        instances: 1,
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'production',
          PORT: 3000,
        },
      },
    ],
  };
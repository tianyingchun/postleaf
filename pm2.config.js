module.exports = {
  apps: [
    {
      name: 'post-leaf',
      script: './app.js',
      watch: false,
      env: {
        PORT: 3000,
        NODE_ENV: 'development'
      }
    }
  ]
};

module.exports = {
  apps: [
    {
      name: 'postleaf',
      script: './app.js',
      watch: false,
      env: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    }
  ]
};

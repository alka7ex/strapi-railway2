module.exports = {
  apps: [
    {
      name: 'strapi-dev',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'develop',
      },
      exp_backoff_restart_delay: 100,
    },
  ],
};

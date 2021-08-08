module.exports = {
  apps : [{
    name: 'EKI-INDRADI-CLUSTER',
    script: 'cluster.app.local.js',
    instances: "MAX",
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    exec_mode:"cluster",
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};

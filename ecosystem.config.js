module.exports = {
  apps: [{
    name: 'annaparera',
    script: 'npm',
    args: 'start',
    cwd: '/home/libertyai/annaparera',
    env: {
      NODE_ENV: 'production',
      PORT: 3987,
      HOST: '0.0.0.0'
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    error_file: '/tmp/annaparera-error.log',
    out_file: '/tmp/annaparera-out.log',
    time: true,
    exp_backoff_restart_delay: 100,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};

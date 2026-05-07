# Shabaky Production Monitoring Setup

## Auto-Restart Configuration

The Shabaky production server is now configured for **high availability** with automatic restart and health monitoring.

### Systemd Service Configuration

**Location:** `/etc/systemd/system/shabaky-production.service`

**Key Features:**
- ✅ Auto-restart on failure (unlimited attempts)
- ✅ 5-second delay between restart attempts
- ✅ Graceful shutdown handling
- ✅ Automatic start on server boot
- ✅ Logging to `/var/log/shabaky-production.log`

**Service Controls:**
```bash
# Check status
sudo systemctl status shabaky-production

# Start service
sudo systemctl start shabaky-production

# Stop service
sudo systemctl stop shabaky-production

# Restart service
sudo systemctl restart shabaky-production

# View logs
tail -f /var/log/shabaky-production.log
```

### Health Check Script (Manual Use Only)

**Script Location:** `/usr/local/bin/shabaky-healthcheck.sh`

**Manual Health Check:**
```bash
sudo /usr/local/bin/shabaky-healthcheck.sh
```

**View Health Check Logs:**
```bash
tail -f /var/log/shabaky-healthcheck.log
```

**Note:** Automated health checks via cron are **not configured**. The systemd service auto-restart is sufficient for high availability.

## Server Details

- **Port:** 5162 (internal)
- **Public URL:** https://shabaky.libertygulf.com
- **Nginx Proxy:** Configured
- **SSL:** Auto-renewing via Let's Encrypt

## Reliability Features

1. **Systemd Auto-Restart**
   - Service automatically restarts on crashes
   - No limit on restart attempts
   - 5-second cooldown between restarts

2. **Boot Persistence**
   - Service enabled to start on system boot
   - Survives server reboots

3. **Logging**
   - Production logs: `/var/log/shabaky-production.log`
   - Manual health check logs: `/var/log/shabaky-healthcheck.log`

## Troubleshooting

### Site Not Loading

1. Check service status:
   ```bash
   sudo systemctl status shabaky-production
   ```

2. Check server logs:
   ```bash
   tail -50 /var/log/shabaky-production.log
   ```

3. Verify port is listening:
   ```bash
   sudo netstat -tlnp | grep 5162
   ```

4. Test local access:
   ```bash
   curl http://localhost:5162
   ```

5. Restart service manually:
   ```bash
   sudo systemctl restart shabaky-production
   ```

### Health Check Not Working

1. View health check logs:
   ```bash
   tail -50 /var/log/shabaky-healthcheck.log
   ```

2. Run manual health check:
   ```bash
   sudo /usr/local/bin/shabaky-healthcheck.sh
   ```

3. Verify cron job:
   ```bash
   sudo crontab -l | grep shabaky
   ```

## Last Updated

2026-05-04 11:24 GMT+3

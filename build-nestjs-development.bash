#!/bin/bash

APP_NAME="technical-test-hotel-list-master-dev"

# Tarik perubahan terbaru dari Git dan build ulang
git pull origin main
npm install
npm run build:dev

# Cek apakah aplikasi sudah dikelola oleh PM2
if pm2 describe "$APP_NAME" > /dev/null; then
  echo "App already running under PM2. Restarting..."
  pm2 restart "$APP_NAME"
else
  echo "App not running. Starting new instance..."
  pm2 start dist/main.js --name "$APP_NAME"
fi

# Simpan konfigurasi PM2 dan restart Nginx
pm2 save
sudo systemctl restart nginx

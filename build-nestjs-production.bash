#!/bin/bash

APP_NAME="technical-test-hotel-list-master-prod"

# Tarik update dari Git dan build project
git pull origin main
npm install
npm run build:prod

# Cek apakah aplikasi sudah berjalan di PM2
if pm2 describe "$APP_NAME" > /dev/null; then
  echo "App '$APP_NAME' sudah ada. Melakukan restart..."
  pm2 restart "$APP_NAME"
else
  echo "App '$APP_NAME' belum ada. Menjalankan instance baru..."
  pm2 start dist/main.js --name "$APP_NAME"
fi

# Simpan konfigurasi PM2 dan restart Nginx
pm2 save
sudo systemctl restart nginx

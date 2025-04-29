git pull origin main
npm install
npm run build:dev
pm2 stop technical-test-hotel-list-master-dev
pm2 restart technical-test-hotel-list-master-dev
pm2 save
sudo systemctl restart nginx
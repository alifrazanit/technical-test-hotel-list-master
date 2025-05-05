git pull origin main
npm install
npm run build:prod
pm2 start dist/main.js --name technical-test-hotel-list-master-prod
pm2 stop technical-test-hotel-list-master-prod
pm2 restart technical-test-hotel-list-master-prod
pm2 save
sudo systemctl restart nginx

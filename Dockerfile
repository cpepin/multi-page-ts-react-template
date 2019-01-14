# Pull from nginx
FROM nginx:stable

# Move static files to html directory
ADD dist /usr/share/nginx/html

# Add custom nginx.conf
ADD config/nginx.conf /etc/nginx/nginx.conf

#Add correct config file and start the server
CMD nginx -g 'daemon off;'
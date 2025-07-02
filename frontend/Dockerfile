FROM nginx:alpine

# Copy all frontend files directly to nginx html folder
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

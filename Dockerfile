# Use a lightweight web server as the base image
FROM nginx:latest
COPY . /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start the Nginx web server when the container starts
CMD ["nginx", "-g", "daemon off;"]

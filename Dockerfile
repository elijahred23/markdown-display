FROM node

WORKDIR /app

COPY package.json .
COPY start-services.sh . 
RUN npm i

COPY . .


# Add these lines to install the api packages
RUN npm i
RUN chmod +x /app/start-services.sh

WORKDIR /app

EXPOSE 5173

CMD ["/app/start-services.sh"]
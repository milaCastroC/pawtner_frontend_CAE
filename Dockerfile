# Etapa 1: Construcción del proyecto Angular
FROM node:22-alpine AS build

# Establece directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia todo el proyecto
COPY . .

# Compila la aplicación Angular
RUN npm run build

# Etapa 2: Servir la app usando Nginx
FROM nginx:alpine

# Copia archivos compilados desde la etapa anterior
COPY --from=build app/dist/pawtner-frontend/browser /usr/share/nginx/html

# Copia configuración personalizada de Nginx (opcional)
#COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]

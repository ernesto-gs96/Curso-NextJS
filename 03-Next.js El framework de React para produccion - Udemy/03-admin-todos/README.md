# Development
Pasos para levantar la app en desarrollo

1. Levantar la base de datos
```
docker compose up -d
```

2. Crear una copoa de .env.template y renombrar a .env
3. Remmplazar las variables de entorno
4. Ejecutar el comando ``` npm install ```
5. Ejecutar el comando ``` npm run dev ```
6. Ejecutar estos comands de prisma 
``` 
npx prisma migrate dev
npx prisma generate
```
7. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

## Nota: Usuario por defecto
__usuario:__ ernesto_gs96@outlook.com
__contrasena:__ 1Qwertyu

# Prima commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```


# Prod




# Stage
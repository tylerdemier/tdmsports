# TDM SPORTS
TDM Sports es un proyecto de la asignatura desarrollo avanzado de web de datos.

## Prerequisites
Para que funcione correctamente, debe tener los siguientes programas:
1. [Python](https://www.python.org/downloads/)
2. [NodeJS](https://nodejs.org/en/download/)

## Installation
Necesitas instalar las dependencias tanto de NodeJS como de Python:

**Python**
1. Abrir un cmd.
2. Dirigirte a la siguiente dirección: `.\TDMSports\tdmsportsMain\app`
```
cd TDMSports/tdmsportsMain/app
```
3. Ejecutar el siguiente comando:
```
pip install -r requirements.txt
```

**NodeJS**
1. Abrir un cmd.
2. Dirigirte a la siguiente dirección: `\TDMSports\tdmsportsLogin`
```
cd TDMSports/tdmsportsLogin
```
3. Ejecutar el siguiente comando:
```
npm install
```

## Usage
Para ejecutar los servidores debes seguir los siguientes pasos:

**Python** 
1. Abrir un cmd.
2. Dirigirte a la siguiente dirección: `.\TDMSports\tdmsportsMain\app`
```
cd TDMSports/tdmsportsMain/app
```
3. Ejecutar el siguiente comando:
```
python main.py
```

**NodeJS** 
1. Abrir un cmd.
2. Dirigirte a la siguiente dirección: `\TDMSports\tdmsportsLogin`
```
cd TDMSports/tdmsportsLogin
```
3. Ejecutar el siguiente comando:
```
npm start
```
## Check
Deberia aparecer lo siguiente en consola:

**Python**
```
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 530-975-925
```

**NodeJS**
```
> tdmsports@1.0.0 start
> node src/server.js

(node:1756) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongo
ose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
server on port 3000
MongoDB Connection -- Ready state is: 1
```

## Enjoy
Para empezar usar esta aplicación dirígete a **http://127.0.0.1:3000**

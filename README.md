# TDM SPORTS
TDM Sports is a project for the _Desarrollo Avanzado de Software para la Web de Datos_ course.

## Prerequisites
For proper functioning, it should have the following programs:
1. [Python](https://www.python.org/downloads/)
2. [NodeJS](https://nodejs.org/en/download/)

## Installation
You need to install both NodeJS and Python dependencies:

**Python**
1. Open a cmd as administrator.
2. Navigate to the following directory: `.\tdmsportsMain`
```
cd tdmsportsMain
```
3. Run the following command:
```
pip install -r requirements.txt
```

**NodeJS**
1. Open a cmd.
2. Navigate to the following directory: `tdmsportsLogin`
```
cd tdmsportsLogin
```
3. Run the following command:
```
npm install
```

## Usage
To run the servers, you should follow these steps:

**Python** 
1. Open a cmd.
2. Navigate to the following directory: `.tdmsportsMain\app`
```
cd tdmsportsMain/app
```
3. Run the following command:
```
python main.py
```

**NodeJS** 
1. Open a cmd.
2. Navigate to the following directory: `tdmsportsLogin`
```
cd tdmsportsLogin
```
3. Run the following command:
```
npm start
```
## Check
The following should appear in the console:

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
To start using this application, navigate to **http://127.0.0.1:3000**

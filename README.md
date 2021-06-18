# MusicController
 
## Setup Instructions

### Install Required Python Modules

```bash
pip install -r requirements.txt
```
### Start Web Server

To start the web server you need to run the following sequence of commands.

First cd into your desired tutorial folder (replace x with tutorial number).
```bash 
cd music_controller
```
Next run the django web server.
```bash
python manage.py runserver
```

### [Install Node.js](https://nodejs.org/en/)

### Install Node Modules

First cd into the ```frontend``` folder.
```bash
cd frontend
```
Next install all dependicies.
```bash
npm i
```

### Compile the Front-End

Run the production compile script
```bash
npm run build
```
or for development:
```bash
npm run dev
```

### Important: 
I have not uploaded my credentials.py for obvious reasons. So create a new file inside spotify folder with the name credentials.py, and inside of it write 3 variables
* CLIENT_ID
* CLIENT_SECRET
* REDIRECT_URI

All these values you will get when you create a developer account on spotify and start a new app or use an existing one and also try to use the same variable name, so that you don't have to worry about changing the name in other files as well


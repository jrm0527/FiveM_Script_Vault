# FiveM_Script_Vault

The requirement of this project was to build a Fullstack minimum viable product. I have done a lot of development work in the FiveM community and wanted to create a website where I can show the scripts I have made, allow people to download them, and also link the GitHub repo for each script. On the frontend, I used React to create the UI. I also started creating an authentication area to use full CRUD functionality. For the authentication, I used bcrypt to hash and store the user's password. I also had to use RESTful API calls with an Express server and a PostgreSQL database for the backend.


## Installation

- Fork and clone this repo to your local computer (https://github.com/jrm0527/fivem_script_vault)
- open clone in VS Code
- in the terminal run npm install to download all dependencies for the server and database.

```bash
  npm install
```

- Run Docker container and copy the seed and migration files from /sql to docker.
- Create a Database in your docker container
- Initialize the migration and seed file into the database created

- Start the server in one terminal using npm run serverStart
- Star the client in another terminal using npm run dev

```bash 
npm run serverStart
npm run dev
```

- From there you will be directed to the loading site at http://localhost:5173
- You can login with the following credentials:
- email: admin@admin.com
- password: Admin!18

## Tech Stack

**Client:** 
![My Skills](https://skillicons.dev/icons?i=js,html,css,react,vscode,vite&theme=dark)

**Server:** 
![My Skills](https://skillicons.dev/icons?i=postgres,nodejs,git,express,docker&theme=dark)

**Connection:** 
![My Skills](https://skillicons.dev/icons?i=discord&theme=dark)

## Screenshots

![alt text](https://github.com/jrm0527/fivem_script_vault/blob/main/Screenshots/Screenshot_1_fivem.png?raw=true)
![alt text](https://github.com/jrm0527/fivem_script_vault/blob/main/Screenshots/Screenshot_2_fivem.png?raw=true)
![alt text](https://github.com/jrm0527/fivem_script_vault/blob/main/Screenshots/Screenshot_3_fivem.png?raw=true)
![alt text](https://github.com/jrm0527/fivem_script_vault/blob/main/Screenshots/Screenshot_4_fivem.png?raw=true)
![alt text](https://github.com/jrm0527/fivem_script_vault/blob/main/Screenshots/Screenshot_5_fivem.png?raw=true)
![alt text](https://github.com/jrm0527/fivem_script_vault/blob/main/Screenshots/Screenshot_6_fivem.png?raw=true)

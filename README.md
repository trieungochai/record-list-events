### 1. Getting Started with Create React App

`npx create-react-app record-list-events --template typescript`

---

### 2. Setting Up a Fake Server

`npm install -D json-server`

`npm install -D concurrently`

- Start JSON Server: `npx json-server --watch json-server/db.json --port 3001`
- Let’s make a request using curl for calling an HTTPS endpoint: `curl http://localhost:3001/events`
- Using concurrently to run both the create-react-app and the fake-sever together for development: `npx concurrently -k "json-server --watch json-server/db.json port 3001" "npm start"`

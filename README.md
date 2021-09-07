### 1. Getting Started with Create React App

`npx create-react-app record-list-events --template typescript`

---

### 2. Setting Up a Fake Server

`npm install -D json-server`

`npm install -D concurrently`

- Start JSON Server: `npx json-server --watch json-server/db.json --port 3001`
- Let’s make a request using curl for calling an HTTPS endpoint: `curl http://localhost:3001/events`
- Using concurrently to run both the create-react-app and the fake-sever together for development: `npx concurrently -k "json-server --watch json-server/db.json port 3001" "npm start"`

---

### 3. Setting Up Redux

`npm install --save-exact @types/react-redux@7.1.15 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0`

---

### 4. A simple JavaScript utility for conditionally joining classNames together

`npm install -S classnames`

`npm install -S @types/classnames`

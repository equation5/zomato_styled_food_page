Setup (Windows)

1) Backend
- Install Node.js LTS.
- Open PowerShell in `project_final`.
- Create `.env` in `project_final` with:
  MONGO_URI=mongodb://127.0.0.1:27017/nexus_auth
  JWT_SECRET=change_this_secret
  PORT=4000
- Run: `npm install`
- Start: `npm run dev`

2) MongoDB
- Use local MongoDB (MongoDB Community) or Atlas.
- Update `MONGO_URI` if using Atlas.

3) Frontend
- Open `index.html` directly in a browser, or serve statically (e.g., VSCode Live Server).
- Sign in/register at `signin.html`. The app expects backend at `http://localhost:4000`.

API
- POST /api/auth/register { name, email, password }
- POST /api/auth/login { email, password }

Notes
- Auth token is stored in localStorage; nav shows Sign In/Logout.
- To change API base, set localStorage key `API_BASE`.



# Dialysis Session Tracker

## Tech Stack
- Backend: Node.js, Express, MongoDB
- Frontend: React, TypeScript
- API: REST

---

##  Features
- Add dialysis session
- View all sessions
- Detect anomalies:
  - Abnormal duration (<120 or >300 mins)
  - High BP (>180)
  - Weight gain (post > pre)

---

##  Clinical Assumptions
- Normal dialysis duration: 120–300 mins
- High BP threshold: >180
- Post weight should be less than pre weight

---

##  API Endpoints

### GET /sessions
Fetch all sessions

### POST /sessions
Create a session

Example:
```json
{
  "patientId": "P001",
  "preWeight": 70,
  "postWeight": 68,
  "systolicBP": 120,
  "duration": 240
}

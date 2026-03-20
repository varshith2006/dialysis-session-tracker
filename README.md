#  Dialysis Session Monitoring System

##  Project Description

This application is a full-stack solution designed to manage and monitor dialysis sessions.  
It enables healthcare staff (especially nurses) to:

- Record session data  
- Track patient vitals  
- Automatically detect abnormal conditions during treatment  

The system focuses on simplicity while ensuring that clinically significant deviations are clearly highlighted for faster decision-making.

---

##  Technology Stack

- **Frontend:** React + TypeScript  
- **Backend:** Node.js + Express (TypeScript)  
- **Database:** MongoDB Atlas  

---

##  System Design Overview

### Frontend (React)

- Interactive dashboard for session monitoring  
- Forms to add patients and record sessions  
- Visual indicators to highlight anomalies  
- Filter option to view only abnormal sessions  

---

###  Backend (Express API)

- RESTful APIs for patients and sessions  
- Business logic for anomaly detection  
- Aggregates patient and session data for insights  

---

### Database (MongoDB)

- **patients collection** → stores patient details  
- **sessions collection** → stores dialysis session records  

---

## 🔄 Application Workflow

```text
User Interface → API Requests → Business Logic → Database → Response → UI Update

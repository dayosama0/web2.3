# web2.3
# GEvidence MongoDB CRUD API
This project is a backend + minimal frontend implementation for **Assignment 3**.  
It evolves the previous JSON-based Express API into a **MongoDB Atlas–powered CRUD application**.
The project is based on the concept of **GEvidence** — a system for managing ESG / sustainability **Verification Cases** with structured evidence, metrics, and methodologies.

---
## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **express-validator**
- **dotenv**
- **cors**
- **nodemon**
- **HTML + Vanilla JavaScript (simple frontend)**
---
## Project Structure
gevidence-mongo-api/
│
├── src/
│ ├── config/
│ │ └── db.js # MongoDB connection
│ │
│ ├── models/
│ │ └── Case.js # Mongoose schema
│ │
│ ├── controllers/
│ │ └── cases.controller.js # Business logic
│ │
│ ├── routes/
│ │ └── cases.routes.js # API routes
│ │
│ ├── middleware/
│ │ └── errorHandler.js # Centralized error handling
│ │
│ ├── public/
│ │ └── index.html # Simple frontend UI
│ │
│ ├── app.js # Express app configuration
│ └── server.js # Server entry point
│
├── .env # Environment variables
├── package.json
└── README.md
---
## Domain Model
### Primary Object: **Verification Case**
A verification case represents an ESG verification process for an organization.
### Required Fields:
- `title` — case title
- `orgId` — organization identifier
- `site.country`
- `site.city`
- `metric.key`
- `metric.unit`
- `period.from`
- `period.to`
- `methodology.standard`
- `methodology.approach`
- `status` (draft / in_review / verified / rejected)
- `createdAt`
- `updatedAt`
MongoDB automatically generates `_id` for each document.
---
### Secondary Object: Evidence Artifact
In addition to verification cases, the system supports Evidence Artifacts.
An evidence artifact represents a piece of data or proof (e.g., IoT readings, documents, anomaly reports) that supports a verification case.
### Key Characteristics:
Each artifact is linked to a Verification Case
Stored as a separate MongoDB collection
Used to represent verification evidence and detected issues
Designed for future extensibility (audit trails, cryptographic proofs, blockchain anchoring)
### Typical Fields:
- caseId — reference to the verification case
- type — evidence type (IoT, document, anomaly, report)
= description
- data
- createdAt
This secondary object improves data normalization and reflects a real-world ESG verification workflow.
## API Endpoints
Base URL: `http://localhost:3000`
### Create a case
POST /cases
### Get all cases
GET /cases
### Get case by ID
GET /cases/:id
### Update case (partial update supported)
PUT /cases/:id
### Delete case
DELETE /cases/:id

---
## Validation & Error Handling
- All **POST** requests require mandatory fields
- **PUT** requests support partial updates
- Invalid data returns `400 Bad Request`
- Non-existing resources return `404 Not Found`
- Centralized error handler is used
---
## Testing (Postman)
All endpoints were manually tested using **Postman**:
- Create case
- Retrieve all cases
- Retrieve case by ID
- Update case fields
- Delete case
- Validation error scenarios
Appropriate HTTP status codes are returned.
---
## Simple Frontend Interface
A minimal HTML interface is included:
- View existing verification cases
- Create a new case using a form
- Data is fetched from the backend API
Access it at:
http://localhost:3000
## Setup Instructions
### 1. Clone the repository
git clone <repository-url>
cd gevidence-mongo-api
### 2. Install dependencies
npm install
### 3. Configure environment variables
Create .env file:
env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/GEvidence
### 4. Run the server
npm run dev
Server will start at:
http://localhost:3000

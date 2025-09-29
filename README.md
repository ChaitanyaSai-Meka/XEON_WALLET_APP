# XEON Wallet App  

XEON Wallet is a modern, secure, and scalable full-stack mobile wallet application.  
Built with a React Native frontend and a Node.js + Express backend, it delivers fast and reliable wallet management for a seamless user experience.  

---

## Features  

- Secure Authentication – User accounts protected with Clerk authentication.  
- Fast & Scalable Backend – Node.js and Express power the API for rapid server responses.  
- Transaction Management – Securely store and manage wallet and transaction data in PostgreSQL.  
- Rate Limiting – Redis (Upstash) middleware prevents abuse and ensures fair usage.  
- Scheduled Automations – Automated wallet updates & notifications powered by node-cron.  
- Cross-Platform Frontend – Built with React Native for both Android & iOS.  
- API-Driven Design – Modular backend with controllers, middleware, and routes.  
- APK Deployment – Ready for Android builds and installs.  

---

## Tech Stack  

### Frontend  
- React Native  
- JavaScript (ES6+, JSX)  
- CSS  

### Backend  
- Node.js  
- Express.js  
- Clerk (Authentication)  
- PostgreSQL (Database)  
- Redis (Upstash – Rate Limiting)  
- node-cron (Scheduled Jobs)  
- CORS (Security)  

---

## Getting Started  

### Prerequisites  
- Node.js >= 16.x  
- npm >= 8.x or yarn >= 1.x  
- PostgreSQL database  
- Redis account (Upstash recommended)  
- Clerk account for authentication  

### Installation  

#### Backend  
```bash
cd Backend

npm install
# Fill in .env with database, Clerk, and Redis keys
npm start
```

#### Frontend
```bash
Copy code
cd Frontend
npm install
# For Android APK builds and emulation:
npm run android
```

### API Overview

/api/transactions – GET, POST, PUT endpoints for wallet transactions

/api/wallet – Retrieve and manage wallet data

Authentication required for all private endpoints

### License
ISC License


# Digital Notra Register 📒

## **A Full-Stack Solution for Traditional Gift Management**

## 📝 Project Overview

> "The Digital Notra Register is a localized digital solution built to replace manual, paper-based gift logging systems. It provides a secure, searchable, and efficient platform for hosts to record, manage, and retrieve gift details (Notra) in real-time, featuring multi-language support to cater to diverse user groups."

---

### Why this project?

In many traditional ceremonies, managing paper registers is chaotic. This project solves that by:
***Digitizing Records:** No more lost pages or ink stains.
***Instant Search:** Find any guest's gift history in seconds.
***Localization:** Supports Hindi and Hinglish for non-tech-savvy users.

## 👨‍💻 Author Information

* **Name:** Rajesh Soyeda
* **Institution:** Madhav Institute of Technology and Science (MITS) Deemed University, Gwalior
* **Branch:** Computer Science Engineering (3rd Year)
* **Github:** @rajeshsoyeda-hash

---

### 🚀 Project Overview

Digital Notra Register is a localized web application built to digitize the traditional "Notra" (gift-tracking) system used in community functions. It replaces manual paper logs with a searchable, secure, and multi-language digital platform.

### 🛠️ Technical Stack

* **Frontend:** React.js (Component-based UI)
* **Backend:** Node.js & Express.js (RESTful APIs)
* **Database:** PostgreSQL (Relational Data Management)
* **Tools:** Git/GitHub for Version Control, VS Code

### ✨ Key Features

* **🌍 Multi-Language Support:** Interface available in English, Hindi, and Hinglish.
* **🔍 Real-time Search:** Instantly filter records by Guest Name or Village.
* **📱 Responsive Design:** Fully optimized for mobile devices (iPhone/Android).
* **📊 Data Integrity:** Securely handles entry, storage, and retrieval of gift records.

---

### 📂 Project Structure

**`/frontend`: React.js source code and UI components.
**`/backend`: Node.js server, API routes, and DB connection.
**`server.js`: Main entry point for the backend.

### 🚀 Getting Started

Follow these steps to get the project running on your local machine:

#### **1. Prerequisites**

* Node.js installed.
* PostgreSQL database setup.

#### **2. Installation & Setup**

```bash
# Clone the repository
git clone [https://github.com/rajeshsoyeda-hash/notra_app.git](https://github.com/rajeshsoyeda-hash/notra_app.git)

cd notra_app

# Install Backend dependencies
npm install
node server.js

# Install Frontend dependencies
cd frontend
npm install
npm start

### The app will available

Frontend: http://localhost:3000


📡 API Reference
base url http://localhost:5000

📥 Request Body & 📤 Responses

{
  "name": "Rajesh Soyeda",       // Guest ka naam
  "village": "Gwalior",          // Guest ka gaon
  "cash": 1100,                  // Kitna cash mila
  "return_amt": 1200,            // Wapsi kitni deni hai (Calculated)
  "type": "Normal",              // Entry type (Normal/Special)
  "gift_desc": "Silver Coin"      // Agar koi tohfa hai
}

Success Respons

{
  "message": "Entry saved successfully!",
  "id": 105
}

support languages
English (latin)
Hindi (Devanagari)
hinglish (Latin)

📄 License Information

License Type,Usage,Permissions
MIT License,Open Source,"Commercial use, Modification, Distribution."
Copyright,© 2026 Rajesh Soyeda,Private use is always allowed.

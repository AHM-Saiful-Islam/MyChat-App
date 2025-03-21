
---

## **Chat Application**  

A simple real-time chat application built with **HTML, Bootstrap, jQuery, and Socket.io**. This project allows users to send and receive messages instantly.

---

### **Features**  
✅ Real-time messaging using **Socket.io**  
✅ Bootstrap for responsive UI  
✅ REST API integration for fetching and posting messages  
✅ jQuery for event handling and AJAX requests  
✅ Hosted API at [mechat.adaptable.app](https://mechat.adaptable.app)  

---

### **Technologies Used**  
- **Frontend:** HTML, CSS (Bootstrap), JavaScript (jQuery)  
- **Backend:** Node.js, Express, Socket.io  
- **Database:** MongoDB (via Adaptable.io backend)  
- **Deployment:** Adaptable.io  

---

## **Installation & Setup**  

### **1. Clone the Repository**  
```bash
git clone https://github.com/yourusername/chat-application.git
cd chat-application
```

### **2. Install Dependencies**  
```bash
npm install
```

### **3. Run the Server**  
```bash
node server.js
```

### **4. Open in Browser**  
Navigate to:  
```
http://localhost:3000
```

---

## **How It Works**  

### **1. User Input & Sending Messages**  
- Users enter their **name** and **message**.  
- Clicking the "Send" button triggers a **POST request** to the API.  
- The message is sent to all connected clients via **Socket.io**.  

### **2. Receiving Messages**  
- The client fetches messages from:  
  ```
  https://mechat.adaptable.app/messages
  ```
- Messages are displayed dynamically in the chat UI.  

---

## **API Endpoints**  

### **1. Get All Messages**  
```http
GET /messages
```
📌 **Response:** List of all messages (JSON format).  

### **2. Post a New Message**  
```http
POST /messages
Content-Type: application/json
```
📌 **Body Example:**  
```json
{
  "name": "John",
  "message": "Hello, world!"
}
```

---

## **Project Structure**  
```
/chat-application
│── index.html         # Frontend UI
│── server.js          # Node.js server (not included here)
│── package.json       # Dependencies
└── README.md          # Documentation
```

---

## **Future Improvements**  
🚀 User authentication (Login/Register)  
🚀 Store messages in a database (MongoDB)  
🚀 Private chat rooms  

---

## **Contributing**  
Pull requests are welcome! Please follow these steps:  
1. Fork the repository.  
2. Create a new branch (`feature-branch`).  
3. Commit your changes (`git commit -m "Add new feature"`).  
4. Push to the branch (`git push origin feature-branch`).  
5. Open a **Pull Request**.  

---

## **License**  
📜 MIT License  

Would you like me to help set up a **backend (server.js) file** for this? 🚀

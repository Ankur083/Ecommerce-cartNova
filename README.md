# 🛍️ CartNova – Ecommerce Platform

CartNova is a modern full-stack eCommerce web application built using the MERN stack. It provides a seamless shopping experience with a user-friendly interface and a powerful admin dashboard for managing products and platform data.

---

## 🚀 Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Cloud Storage:** Cloudinary
* **Authentication:** JWT (JSON Web Tokens)
* **Admin Dashboard:** React.js (separate admin frontend)

---

## ✨ Features

### 🛍️ User Features

* 🔐 User Authentication (Register/Login)
* 🛒 Add to Cart & Manage Cart
* 🛍️ Browse Products (Latest, Bestseller)
* 📱 Fully Responsive UI
* ⚡ Fast and smooth user experience

---

### 👨‍💼 Admin Features

* ➕ Add / Update / Delete Products
* 🖼️ Upload product images using Cloudinary
* 📦 Manage product listings
* 📊 Admin dashboard for full control
* 🔄 Real-time updates

---

### ⚙️ System Features

* ⚡ Full-stack MERN architecture
* 🔑 Secure authentication using JWT
* ☁️ Cloudinary integration for image storage
* 📁 Clean MVC folder structure

---

## 📂 Project Structure

```bash
CartNova/
│── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│
│── .env
│── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-cartNova.git
cd ecommerce-cartNova
```

---

### 2️⃣ Install dependencies

#### Backend

```bash
cd Backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file in the Backend folder and add:

```env
PORT=8001
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### 4️⃣ Run the project

#### Backend

```bash
npm start
```

#### Frontend

```bash
npm run dev
```

---

## 🌐 API Endpoints (Example)

* `POST /api/users` → Register/Login
* `POST /api/quiz` → Generate Data / Logic
* `POST /api/result` → Submit Results

---

## 📸 Screenshots

*Add screenshots of your UI and Admin dashboard here*

---

## 🧠 Future Improvements

* 💳 Payment Integration (Stripe / Razorpay)
* ⭐ Product Reviews & Ratings
* 📦 Order Tracking System
* 🔍 Advanced Search & Filters

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Ankur**
GitHub: https://github.com/Ankur083

---

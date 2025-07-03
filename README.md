# 🧠 Backend - SkillSync Server

The backend handles all logic for quizzes, interviews, feedback, user auth, and AI integration.

## 🔗 Quick Links

- ⚙️ Live API: [https://skillsync-api.onrender.com](https://skillsync-api.onrender.com)
- 🧠 Backend Repo: [https://github.com/stine-ri/skillsync-backend](https://github.com/stine-ri/skillsync-backend)
- 🌐 Frontend: [https://skillsync.vercel.app](https://skillsync.vercel.app)
- 💻 Frontend Repo: [https://github.com/stine-ri/skillsync-frontend](https://github.com/stine-ri/skillsync-frontend)

## 🧠 Features

- JWT Authentication (Login/Register)
- Quiz logic and result saving
- Mock interview with AI feedback
- Progress tracker per user
- Windsurf topic AI recommendations

## ⚙️ Tech Stack

| Tech         | Purpose                  |
|--------------|---------------------------|
| Node.js      | Server runtime            |
| Express.js   | API routes                |
| MongoDB      | Database                  |
| Mongoose     | ODM                       |
| JWT          | Auth                      |

## 📁 Structure

```
/coding-hackathon backend
├── controllers/
├── models/
├── routes/
├── middleware/
└── server.js
```

## 🛠 Setup

```bash
git clone https://github.com/stine-ri/skillsync-backend
cd skillsync-backend
pnpm install
pnpm run dev
```

## 🔐 .env

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
WINDSURF_API_KEY=your_windsurf_api_key
```

## 📡 Routes

| Method | Route              | Functionality             |
|--------|--------------------|---------------------------|
| POST   | /api/auth/register | Register new users        |
| POST   | /api/auth/login    | Login + JWT               |
| POST   | /api/quiz/submit   | Save quiz results         |
| GET    | /api/quiz/history  | Fetch user quiz history   |
| POST   | /api/interview     | Submit interview answers  |
| GET    | /api/progress      | Get learning streak/data  |
| POST   | /api/ai/recommend  | AI suggestion via Windsurf|

---

## 🏆 Project Highlights

- 🎯 Built for the Vibe Coding Hackathon 2.0
- 🤖 Real AI integration (Windsurf, Chatbase)
- 📱 Mobile-first responsive UI
- 🧪 Clean backend logic for extensibility
- 🧠 Feedback, goal tracking, and personalization
- 💬 Chatbot, resume, quizzes — all in one

---

## 👩🏽‍💻 Developer

**Christine Nyambwari**  
Full-Stack Developer | Hackathon Enthusiast  
📫 [christinenyambwari@gmail.com](mailto:christinenyambwari@gmail.com)  
🌐 [Portfolio](https://christine-portfolio-red.vercel.app)  
🐙 [GitHub](https://github.com/stine-ri)  
💼 [LinkedIn](https://www.linkedin.com/in/christine-nyambwari-8b465b2a9/)

---
## 💖 Special Thanks

To mentors, hackathon organizers, and the Open Source tools like  Chatbase, TailwindCSS, and Vercel that helped shape this project.

> 💬 “Learning is hard, but SkillSync makes it smart.” 🚀

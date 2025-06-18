const express = require('express');
const cors = require('cors');
const admin = require('./firebase/firebaseAdmin');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const mongoose = require('mongoose');


const verifyJWT = require('./middleware/authMiddleware');

const Profile = require('./models/Profile');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// 🔐 POST /api/auth/login
app.post('/api/auth/login', async (req, res) => {
  const { idToken } = req.body;

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const email = decoded.email;

    // Create JWT with payload
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.json({ jwt: token });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'Invalid Firebase ID token' });
  }
});

// Test protected route
app.get('/api/protected', verifyJWT, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}` });
});

const profileRoutes = require('./routes/profileRoutes');
app.use('/api/profile', profileRoutes);

const educationRoutes = require('./routes/educationRoutes');
app.use('/api/education', educationRoutes);

const experienceRoutes = require('./routes/experienceRoutes');
app.use('/api/experience', experienceRoutes);

const courseRoutes = require('./routes/courseRoutes');
app.use('/api/courses', courseRoutes);

const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin-roles', adminRoutes);

const membershipRoutes = require('./routes/membershipRoutes');
app.use('/api/memberships', membershipRoutes);

const publicationRoutes = require('./routes/publicationRoutes');
app.use('/api/publications', publicationRoutes);

const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);

app.use('/api/skills', require('./routes/skills'));

const uploadRoute = require('./routes/upload');
app.use('/api/upload', uploadRoute);








mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

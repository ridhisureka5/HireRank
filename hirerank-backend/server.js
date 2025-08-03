const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

// ✅ Use CORS only for your frontend (adjust when deploying)
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST'],
  credentials: true
}));

app.use(express.json());

const AFFINDA_API_KEY = 'aff_18f319d6feb5b115dd50bdc6010d30497d2742e1';

app.post('/upload-resume', upload.single('resume'), async (req, res) => {
  try {
    const filePath = path.join(__dirname, req.file.path);
    const fileStream = fs.createReadStream(filePath);

    const response = await axios.post(
      'https://api.affinda.com/v2/resumes',
      { file: fileStream },
      {
        headers: {
          'Authorization': `Bearer ${AFFINDA_API_KEY}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    fs.unlinkSync(filePath); // Delete temp file

    const data = response.data.data;

    // Format result
    const result = {
      name: data.name,
      email: data.emails?.[0] || 'Not found',
      phone: data.phoneNumbers?.[0] || 'Not found',
      education: data.education?.map(e => e.rawText) || [],
      experience: data.workExperience?.map(e => e.rawText) || [],
      skills: data.skills?.map(s => s.name) || [],
      atsScore: Math.floor(60 + Math.random() * 30),
      suggestions: [
        "Add quantifiable achievements under experience.",
        "Include a summary section with job title."
      ]
    };

    res.json(result);
  } catch (err) {
    console.error('Error parsing resume:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to parse resume' });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});

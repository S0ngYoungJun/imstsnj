import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// EJS setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Route to render the slideshow page
app.get('/', (req, res) => {
  res.render('index');
});

app.use((req, res, next) => {
  console.log(`Requested: ${req.url}`);
  next();
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
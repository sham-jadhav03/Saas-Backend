import app from './app.js';
import { env } from './configs/config.js';
import connectDB from './configs/db.js';

connectDB();
const PORT = env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// server.js - Entry point untuk json-server di Railway
import { create, router as _router, defaults } from 'json-server'; // 💡 Ubah bagian ini
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = create(); // 💡 Langsung panggil fungsinya
const router = _router(join(__dirname, 'db.json'));
const middlewares = defaults({
  cors: true,
  readOnly: false,
});

// CORS headers manual agar lebih eksplisit
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server berjalan di port ${PORT}`);
});
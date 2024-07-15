import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export default async function handler(req, res) {
    const jsonFilePath = path.join(process.cwd(), 'src/app/assets');
    const jsonData = await fs.readFile(jsonFilePath + 'psicologos.json', 'utf8');
    const data = JSON.parse(jsonData)
    res.status(200).json(JSON.parse(data));
};
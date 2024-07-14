import { promises as fs } from 'fs';
import path from 'path';

export default async (req, res) => {
    const jsonFilePath = path.join(process.cwd(), 'assets', 'data.json');
    const jsonData = await fs.readFile(jsonFilePath, 'utf8');
    res.status(200).json(JSON.parse(jsonData));
};
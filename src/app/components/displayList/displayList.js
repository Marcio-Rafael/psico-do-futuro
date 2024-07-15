// components/PsychologistsList.js
import Widget from '../widget/widget';
import fs from 'fs';
import path from 'path';

async function fetchPsychologists() {
  const filePath = path.join(
    process.cwd(),
    'src/app/assets',
    'psicologos.json'
  );
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export default async function DisplayList() {
  const psychologists = await fetchPsychologists();
  return (
    <div className="flex flex-wrap gap-7 justify-center lg:justify-start">
      {psychologists.map((item, index) => (
        <Widget data={item} index={index}></Widget>
      ))}
    </div>
  );
}

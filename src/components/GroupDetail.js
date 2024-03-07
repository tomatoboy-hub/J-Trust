import React from 'react'
import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const progressData = [
    // ここに進捗データを挿入...
    { name: 'Chapter 1', progress: 40 },
    { name: 'Chapter 2', progress: 60 },
    { name: 'Chapter 3', progress: 80 },
    // 他のチャプターのデータ...
  ];

  const materialsData = [
    {
      chapter: 'Chapter 1',
      materials: [
        { id: 1, title: '教材A', description: '教材Aの説明' },
        { id: 2, title: '教材B', description: '教材Bの説明' },
      ],
    },
    {
      chapter: 'Chapter 2',
      materials: [
        { id: 3, title: '教材C', description: '教材Cの説明' },
      ],
    },
    // 他のチャプターの教材...
  ];

function GroupDetail() {
    let { groupId } = useParams();
    return (
      <div>
        <h2>学生団体 {groupId} の進捗</h2>
        <BarChart
          width={500}
          height={300}
          data={progressData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="progress" fill="#8884d8" />
        </BarChart>
        <div style={{ marginTop: '20px' }}>
        {materialsData.map((chapter) => (
          <div key={chapter.chapter}>
            <h3>{chapter.chapter}</h3>
            {chapter.materials.map((material) => (
              <div key={material.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
                <h4>{material.title}</h4>
                <p>{material.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
      );
}

export default GroupDetail
import React from 'react'
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const progressData = [
    // ここに進捗データを挿入...
    { name: 'Chapter 1', progress: 40 },
    { name: 'Chapter 2', progress: 60 },
    { name: 'Chapter 3', progress: 80 },
    // 他のチャプターのデータ...
  ];

function GroupDetail() {
    let { groupId } = useParams();
    return (
        <div>
          <h2>学生団体 {groupId} の進捗</h2>
          <LineChart width={400} height={400} data={progressData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="progress" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
      );
}

export default GroupDetail
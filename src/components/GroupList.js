import React from 'react'
import { Link } from "react-router-dom";

const groups = [
    { id: 1, name: "団体A" },
    { id: 2, name: "団体B" },
    // 他の団体のデータを追加...
  ];

function GroupList() {
  return (
    <div>
      <h2>学生団体一覧</h2>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            <Link to={`/group/${group.id}`}>{group.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GroupList
import React from 'react'
import { Link } from "react-router-dom";
import styles from '../styles/GroupList.module.css';
import Consultants_image from '../assets/consultant.jpg';
import SES_image from '../assets/SES.jpg';
const groups = [
  { id: 1, name: "団体A", description: "団体Aの説明...", imageUrl: Consultants_image },
  { id: 2, name: "団体B", description: "団体Bの説明...", imageUrl: SES_image },
    // 他の団体のデータを追加...
  ];

function GroupList() {
  return (
    <div className={styles.container}>
      {groups.map(group => (
        <div key={group.id} className={styles.card}>
           <Link to={`/group/${group.id}`}>
          <img src={group.imageUrl} alt={group.name} className={styles.cardImage} />
          </Link>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{group.name}</h3>
            <p className={styles.cardDescription}>{group.description}</p>
          </div>
        </div>
        
      ))}
    </div>
  )
}

export default GroupList
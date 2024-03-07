import React from 'react'

function Home() {
    const homeStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: '#333',
        textShadow: '1px 1px 0px #FFF',
        padding: '20px',
      };
    
      const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '20px',
      };
    
      const subTitleStyle = {
        fontSize: '1.5rem',
        marginBottom: '15px',
      };
    
      const listStyle = {
        listStyleType: 'none',
        textAlign: 'left',
      };
    
      const listItemStyle = {
        fontSize: '1.2rem',
        marginBottom: '10px',
      };
    
      const contentStyle = {
        maxWidth: '600px',
        textAlign: 'justify',
        lineHeight: '1.6',
        fontSize: '1.1rem',
      };
    
      return (
        <div style={homeStyle}>
          <h1 style={titleStyle}>J-TRUST〜学生職業精鋭サークル〜</h1>
          <h2 style={subTitleStyle}>様々な職業のボランティアサークル</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>・コンサルティング</li>
            <li style={listItemStyle}>・受託開発</li>
            <li style={listItemStyle}>等々</li>
          </ul>
          <div style={contentStyle}>
            <p>・主体性をもって職業経験を積むことを第一目的とした学生主導で運営するサークル</p>
            <p>・学生のみが参加可能</p>
            <p>・業界の大手企業が監修・講義する本格的な研修がある</p>
            <p>・自身のスキルアップのために、対等にお互いに切磋琢磨し業務に取り組む</p>
            <p>・毎年度新規生を募集する</p>
            <p>・1年を通してボランティア業務に従事して、自身の職業スキルを磨く</p>
            <p>企業と学生をサークルを通して繋ぐ</p>
            <p>カリキュラムとかは大手企業に作ってもらう</p>
            <p>学生が主体的に業務を行ってもらう</p>
          </div>
        </div>
      );
}

export default Home
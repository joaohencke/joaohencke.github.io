import React from 'react';
import Card from 'ui/Card';

const skill = (name, time, tip) => ({ name, time, tip });

const skills = [
  skill('JavaScript', 5, 'ReactJS, React Native, VueJS, NodeJS'),
  skill('Java', 5, 'Spring, Struts'),
  skill('SQL', 5, 'PLSQL, TSQL, PSQL'),
  skill('NoSQL', 5, 'Google Datastore, MongoDB, Firebase'),
  skill('GraphQL', 1, 'Apollo'),
  skill('Docker', 1),
];

export default function Skills() {
  return (
    <Card dark style={{ height: '100%' }}>
      <Card.Body>
        <Card.Title>Skills</Card.Title>
        <p>Since 2011 working with development, I was able to work with:</p>
        <ul className="list-group">
          {skills.map(({ name, time, tip }) => (
            <li key={name} className="list-group-item bg-dark d-flex justify-content-between align-items-center">
              <span>
                {name}
                &nbsp;
                {tip && <small>({tip})</small> /* eslint-disable-line */} 
              </span>
              <span className="badge badge-primary badge-pill">{`${time}+ years`}</span>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

import React from 'react';
import Progress from 'ui/Progress';
import Card from 'ui/Card';

const skill = (name, time) => ({ name, time });

const skills = [
  skill('JavaScript', 4.5),
  skill('ReactJS', 4),
  skill('NodeJS', 4),
  skill('React Native', 3.5),
  skill('AngularJS', 3),
  skill('Java', 3),
];

export default function Skills() {
  return (
    <Card dark style={{ height: '100%' }}>
      <Card.Body>
        <Card.Title>Skills</Card.Title>
        {skills.map(({ name, time }) => (
          <div key={name} style={{ margin: 2 }}>
            {name}
            <Progress>
              <Progress.Bar style={{ width: `${(time * 100) / 5.0}%` }} />
            </Progress>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

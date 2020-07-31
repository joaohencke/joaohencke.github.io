import React from 'react';
import Card from 'ui/Card';

export default function Profile() {
  return (
    <Card dark style={{ height: '100%' }}>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <p>Hello there!</p>
        <p>
          My name is&nbsp;
          <span className="font-weight-bold">João Hencke</span>
          ,&nbsp;I am 28 years old.
        </p>
        <p>
          I am an application developer / software engineer interested in technology, challenges and magic (how it
          works???).
        </p>
        <p>
          In&nbsp;
          <span className="text-danger font-weight-bold">♡</span>
          &nbsp;with what I do!
        </p>
        <p>Currently working at Kiper, in Florianópolis - Santa Catarina.</p>
        <p>Already worked at Gennera, Indra, Todo & Shift Code.</p>
      </Card.Body>
    </Card>
  );
}

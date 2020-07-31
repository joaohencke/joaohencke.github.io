import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaDev } from 'react-icons/fa';
import Navbar from 'ui/Nav';

export default function Nav() {
  return (
    <Navbar className="justify-content-between">
      <Navbar.Brand>{`</>`}</Navbar.Brand>
      <Navbar.Items>
        <Navbar.Item>
          <Navbar.Link href="mailto:joao.hencke@gmail.com">
            <FaEnvelope />
          </Navbar.Link>
        </Navbar.Item>
        <Navbar.Item active>
          <Navbar.Link href="//github.com/joaohencke" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link href="//www.linkedin.com/in/joaohencke/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link href="//dev.to/joaohencke" target="_blank" rel="noopener noreferrer">
            <FaDev />
          </Navbar.Link>
        </Navbar.Item>
      </Navbar.Items>
    </Navbar>
  );
}

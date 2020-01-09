import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import ge from "../images/ge-logo.svg"
import { FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaMediumM } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from 'react-bootstrap/Nav'

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`Matt Cotter`, `Web Developer`, `Dayton, OH`, `Cincinnati, OH`, `Columbus, OH`, `Vue Developer`, `React Developer`, `Freelance`]} />
    <Container fluid="true">
      <Row>
        <Col xl="4" md>
          <h1>Hey! <span role="img" aria-label="Wave Emoji">👋</span></h1>
          <h2>My name is <span>Matt Cotter.</span></h2>
          <p>
            I live in Dayton, OH and I'm a Lead Front End Developer at 
            <span className="work-work-work"><img className="ge-logo" src={ge} alt="General Electric Logo" />GE Aviation.</span>
          </p>
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link className="pl-0" href="https://twitter.com/virt">
                <FaTwitter />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="https://instagram.com/mattcotter">
                <FaInstagram />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="https://github.com/mattcotter">
                <FaGithub />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://medium.com/@virt">
                <FaMediumM />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="mailto:cotter.m@gmail.com">
                <FaEnvelope />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Row, Col, Container } from 'react-bootstrap'
import logo from "../images/matt-cotter-design.svg"

const Header = ({ siteTitle }) => (
  <header>
    <Container fluid="true">
      <Row>
        <Col md="8">
            <Link to="/">
              <img src={ logo } alt="Matt Cotter's Logo" className="logo" />
            </Link>
        </Col>
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Matt Cotter`,
}

export default Header

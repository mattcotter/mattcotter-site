/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container fluid="true" noGutters>
        <Row noGutters>
          <Col lg="11">
            <Container fluid className="px-0 main">
              <Row noGutters>
                <Col>
                  <Header siteTitle={data.site.siteMetadata.title} />
                </Col>
              </Row>
            </Container>
            <Container fluid="true">
              <Navbar pageInfo={pageInfo} />
              <Row noGutters>
                <Col>
                  <main>{children}</main>
                </Col>
              </Row>
            </Container>
            <Container fluid className="px-0">
              <Row noGutters>
                <Col className="footer-col">
                  <footer>
                  
                  </footer>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    )}
  />
)

export default Layout

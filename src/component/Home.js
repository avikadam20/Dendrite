import React from 'react'
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import "../Style/Home.css";


export default function Home() {
  return (
    <>
    <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect=""
            >
                <div className="sidebar-sticky"></div>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Home
                </Nav.Link>
            </Nav.Item>
            <br/><br/>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Search
                </Nav.Link>
            </Nav.Item>
            <br/><br/>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Favourites
                </Nav.Link>
            </Nav.Item>
            <br/><br/>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Playlist
                </Nav.Link>
            </Nav.Item>
            </Nav>
    </>
  )
}

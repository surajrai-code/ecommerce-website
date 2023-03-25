import React from "react";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import classes from "./Header.module.css";
function Home() {
  return (
    <div>
      <header>
        <div className={classes.headerforabout}>
          <h1>The Generics</h1>
          <div className="d-grid gap-2">
            <Button variant="outline" size="lg">
              Get Our Latest Album
            </Button>
            
            <i className="bi bi-play-btn"></i>
           
          </div>
        </div>
      </header>
      <main>
        <h1 style={{ fontFamily: "Comic Sans MS", textAlign: "center" }}>
          TOURS
        </h1>
        <div className="a">
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>JUL16</td>
                <td>DETROIT, MI</td>
                <td>DTE ENERGY MUSIC THEATRE</td>
                <td>
                  <Button variant="info">BUY TICKETS</Button>
                </td>
              </tr>
              <tr>
                <td>JUL19</td>
                <td>TORONTO,ON</td>
                <td>BUDWEISER STAGE</td>
                <td>
                  <Button variant="info">BUY TICKETS</Button>
                </td>
              </tr>
              <tr>
                <td>JUL 22</td>
                <td>BRISTOW, VA</td>
                <td>JIGGY LUBE LIVE</td>
                <td>
                  <Button variant="info">BUY TICKETS</Button>
                </td>
              </tr>
              <tr>
                <td>JUL 22</td>
                <td>BRISTOW, VA</td>
                <td>JIGGY LUBE LIVE</td>
                <td>
                  <Button variant="info">BUY TICKETS</Button>
                </td>
              </tr>
              <tr>
                <td>AUG 2</td>
                <td>LAS VEGAS, NV</td>
                <td>T-MOBILE ARENA</td>
                <td>
                  <Button variant="info">BUY TICKETS</Button>
                </td>
              </tr>
              <tr>
                <td>AUG 7</td>
                <td>BRISTOW, VA</td>
                <td>JIGGY LUBE LIVE</td>
                <td>
                  <Button variant="info">BUY TICKETS</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </main>
    </div>
  );
}

export default Home;

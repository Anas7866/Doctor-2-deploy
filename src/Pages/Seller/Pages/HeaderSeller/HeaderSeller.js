import Container from "react-bootstrap/Container";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./HeaderSeller.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {useHistory } from "react-router-dom";
import Dropdown from "./Dropdown.tsx"

function HeaderSeller() {
  const dispatch = useDispatch();
  const [userSetting, setUserSetting] = useState(false);
  let history = useHistory();






  return (
    <div className="col-sm-12 pb-2 pt-1 border_bottom_header">
      <Navbar bg="" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/Dashboard-Admin">
            <div
              
            className="col-sm-12">
              <img src="../images/logo.png" className="img-fluid " />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-md-auto my-2 my-lg-0 pt-2"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
             
            </Nav>
            <div class="dropdown dropleft ">
              {/* <button
                className="btn btn-primary rounded-circle button_header_profile button_profile"
                type="button"
                id="Popover1"
              >
                A
              </button> */}
              <Dropdown />
              {/* <Popover
                trigger="legacy"
                placement="bottom-start"
                isOpen={userSetting}
                target="Popover1"
                className="profileSettingPopover"
                toggle={() => setUserSetting(!userSetting)}
                onClick={() => setUserSetting(!userSetting)}
              >
                <PopoverBody>
                  <ul className="dropdown-user-menu p-0">
                    <Link
                      to="# "
                      onClick={() => dispatch(logout())}
                      className="navbarTextColorChange"
                    >
                      <li className="setting-dropdown text-primary">
                        Sign Out
                      </li>
                    </Link>
                    
                  </ul>
                </PopoverBody>
              </Popover> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderSeller;

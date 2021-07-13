import React, { Component } from "react";
import {
  Sidenav,
  Nav,
  Dropdown,
  Icon,
  Toggle,
  Sidebar,
  Navbar,
  Footer,
} from "rsuite";

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#34c3ff",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.expanded,
      activeKey: "1",
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleToggle() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const { expand } = this.state;

    return (
      <div>
        <Sidenav.Header>
          <div style={headerStyles}>
            <Icon
              icon="logo-analytics"
              size="lg"
              style={{ verticalAlign: 0 }}
            />
            <span style={{ marginLeft: 12 }}> BRAND</span>
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
              User Group
            </Nav.Item>
            <Dropdown
              eventKey="3"
              trigger="hover"
              title="Advanced"
              icon={<Icon icon="magic" />}
              placement="rightStart"
            >
              <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
              <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
              <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
              <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
              <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
            </Dropdown>
            <Dropdown
              eventKey="4"
              trigger="hover"
              title="Settings"
              icon={<Icon icon="gear-circle" />}
              placement="rightStart"
            >
              <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
              <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
              <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </div>
    );
  }
}

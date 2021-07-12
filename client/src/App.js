import React, { Component } from 'react';
import ChatContainer from './components/chatContainer';
import Navigation from './components/navigation';
import logo from './logo.svg';
import 'rsuite/lib/styles/themes/dark/index.less';
import './App.css';

import {
  Container, Header, Content, Footer, Sidebar,
  Navbar, Nav, Dropdown, Icon, Sidenav
} from 'rsuite';


const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: '56px',
  textAlign: 'center'
};


const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
          <Nav>

            <Dropdown
              placement="topStart"
              trigger="click"
              renderTitle={children => {
                return <Icon style={iconStyles} icon="cog" />;
              }}
            >
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            <Icon icon={expand ? 'angle-left' : 'angle-right'} />
          </Nav.Item>
          </Nav>

      </Navbar.Body>
    </Navbar>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand
    });
  }
  render() {
    const { expand } = this.state;
    return (
      <div className="show-fake-browser sidebar-page rs-theme-dark">
        <Container>
          <Sidebar
            style={{ display: 'flex', flexDirection: 'column' }}
            width={expand ? 260 : 100}
            collapsible
          >
            <Sidenav expanded={expand} defaultOpenKeys={['3']}  >
              <Navigation expanded={this.state.expand} />
            </Sidenav>
            <NavToggle expand={expand} onChange={this.handleToggle} />
          </Sidebar>

          <Container>
            <Header>
              <h2>Page Title</h2>
            </Header>
            <Content>Content</Content>
          </Container>
        </Container>
      </div>
    );
  }
}



// function App() {
//   return (
//     <div>
//       <Container className="App">
//         <Sidebar>
//           <Navigation />
//         </Sidebar>
//         <Container>
//           <h4>Header</h4>
//           <Content>
//             <p>content</p>
//             <ChatContainer/>
//           </Content>
//           <Footer>Footer</Footer>
//         </Container>
//       </Container>

//       <div className="App">
//         <div>
//           <h2>header</h2>
//           <p>paragraph</p>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default App;




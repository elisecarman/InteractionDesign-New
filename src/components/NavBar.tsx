import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';



function NavBar() {

    return(
        // <Navbar className={isDarkMode ? 'navbar-dark dark-navbar fixed-top' : 'navbar fixed-top'}>
        <Navbar className={'fixed-top'}>
            {/* <Navbar.Brand className={isDarkMode ? "dark-navbar-items" : "navbar-items"} as={Link} to='/InteractionDesign-New/AccessibleComponent'> */}
            <Navbar.Brand className={"navbar-items"} as={Link} to='/InteractionDesign-New/AccessibleComponent'>
            {/* Home */}
            </Navbar.Brand>
            <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/InteractionDesign-New/AccessibleComponent'>
                    Accessible Components
                </Nav.Link>
                <Nav.Link as={Link} to = '/InteractionDesign-New/PersonasStoryboarding'>
                    Personas & Storyboarding
                </Nav.Link>
                <Nav.Link as={Link} to = '/InteractionDesign-New/ResponsiveRedesign'>
                    Responsive Redesign
                </Nav.Link>
                <a href={`${import.meta.env.BASE_URL}beesthai.html`} target="_blank" rel="noopener noreferrer">
                Open Beesthai Page
                </a>
            </Nav>


        </Navbar>
    )
    
}

export default NavBar

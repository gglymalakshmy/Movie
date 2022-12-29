import React,{ useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Navbar() {
  
const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
    <div>
       <ml>
      <MDBNavbar expand='lg' dark bgColor='dark'> 
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><Link to='/Navbar'>Navbar</Link></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColorSecond(!showNavColorSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><Link to='/popularmovies'>Popular Movie</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><Link to='/latestmovies'>Latest Movies</Link></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><Link to='/comedymovies'>Comedy Movies</Link></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    
    </MDBNavbar>
    </ml>
    <br />
      </div>
  )
}

export default Navbar
    
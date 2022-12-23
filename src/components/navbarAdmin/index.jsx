import React, { useEffect, useState } from 'react';
import {
  Container, Navbar, OverlayTrigger, Popover, Stack,
} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './navbarAdmin.css';
import { deleteAllCookies, getCookie } from '../../utils/setCookies.js';

function NavbarAdmin() {
  // const navigate = useNavigate();
const [navbarName, setNavbarName] = useState('');
    useEffect(() => {
    setNavbarName(getCookie('navName'));
});

const handleLogout = async () => {
    await deleteAllCookies();
    // navigate('/');
};

const profilePopover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3" className="text-center">Profile</Popover.Header>
        <Popover.Body className="w-100">
        <div className="d-grid gap-2 w-100">
            <button type="button" className="btn btn-light w-100 d-flex align-items-center border-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person me-2" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            <span>
                <a href="/admin/profile" className="text-decoration-none">My Profile</a>
            </span>
            </button>
            <button type="button" className="btn btn-danger w-100 d-flex align-items-center border-0" onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left me-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
            </svg>
            <p className="m-0">Sign out</p>
            </button>
        </div>
        </Popover.Body>
    </Popover>
);

return (
    <Navbar expand="xxl" className="navbar-admin">
        <Container fluid className="m-0 px-5">
        <div>
            <h3 className="text-green">C-13 AEROPLANE</h3>
        </div>
        <Navbar.Brand className="fs-2 fw-bolder">{navbarName}</Navbar.Brand>
        <Stack direction="horizontal" gap={4}>  
            <div>
                <h5 className="pt-2 fw-bold">I'm Admin</h5>
            </div>
            <OverlayTrigger trigger="click" placement="bottom" overlay={profilePopover}>
            <div className="userIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#6C72A7" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
            </div>
            </OverlayTrigger>
        </Stack>
        </Container>
    </Navbar>
    );
}

export default NavbarAdmin;

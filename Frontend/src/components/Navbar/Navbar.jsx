import * as React from 'react'
import { useState , useEffect} from 'react'
import './Navbar.css'
import logo from '../../logo.svg'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from '@mui/material/Button'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import Stack from '@mui/material/Stack'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'


/* ----------------------ESTO ES PARA LA BARRA DE BUSQUEDA-------------------------- */
const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
   },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '0ch',
         '&:focus': {
            width: '20ch',
         },
      },
   },
}))

function SearchAppBar() {
   return (
      <Search>
         <SearchIconWrapper>
            <SearchIcon />
         </SearchIconWrapper>
         <StyledInputBase placeholder="Busca un producto..." inputProps={{ 'aria-label': 'search' }} />
      </Search>
   )
}
/* ----------------------\ESTO ES PARA LA BARRA DE BUSQUEDA-------------------------- */
/* ----------------------ESTO ES LA APP EN SI-------------------------- */

function barra_navegacion() {
   const [show, setShow] = useState(false)
   const controlNavbar = () => {
      if (window.scrollY > 100) {
         setShow( true )
      } else {
         setShow( false )
      }
   }
   useEffect(() => {
      window.addEventListener('scroll',
      controlNavbar)
      return () => {
         window.removeEventListener('scroll',
         controlNavbar)
      }
   },[]) 
   return (
      //<Navbar expand="lg" className='NavContainer'>
      <Navbar expand="lg" fixed='top' className={`NavContainer   mostrar-navbar ${show && 'ocultar-navbar'}`} >
         <Container className="contenedor-nav">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <a href="/">
                  <img alt="Logo de El Buen Sabor" src={logo}></img>
               </a>
               <Nav className="me-auto centro-navbar">
                  <Nav.Link href="/" className="centro-navbar-item">
                     Inicio
                  </Nav.Link>
                  <NavDropdown title="Categorias" id="basic-nav-dropdown" className="centro-navbar-item">
                     <NavDropdown.Item href="/#">Hamburguesas</NavDropdown.Item>
                     <NavDropdown.Item href="/#">Pollo Frito</NavDropdown.Item>
                     <NavDropdown.Item href="/#">Panchos</NavDropdown.Item>
                     <NavDropdown.Item href="/#">Bebidas</NavDropdown.Item>
                     <NavDropdown.Item href="/#">Donas</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/Promos" className="centro-navbar-item">
                     Promos
                  </Nav.Link>
                  {/* -------------Btn de Favoritos SOLO CUANDO INICIO SESION //Falta esa parte------------- */}
                  <Stack direction="row" spacing={1}>
                     <Button
                        className="favoritos"
                        variant="text"
                        startIcon={<FavoriteBorderOutlinedIcon />}
                        href="/Favoritos"
                     >
                        Favoritos
                     </Button>
                  </Stack>
                  {/* -------------Barra de Busqueda------------- */}
                  <SearchAppBar className='centro-navbar-item' />
               </Nav>
               <Stack direction="row" spacing={2} className='derecha-navbar'>
                  <Button variant="contained" startIcon={<LocalGroceryStoreOutlinedIcon />} href="/Carrito">
                     Mis Compras
                  </Button>
                  <Button
                     variant="outlined"
                     startIcon={<AccountCircleSharpIcon />}
                     className="btn-usuario"
                     href="/Login"
                  >
                     Ingresar
                  </Button>
               </Stack>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}export default barra_navegacion;






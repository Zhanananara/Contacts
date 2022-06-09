import * as React from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
// import LiveSearch from "../LiveSearch/LiveSearch";
// import "./Navbar.css";
import { useAuth } from "../../context/AuthContextProvider";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { currentUser, logOutUser } = useAuth();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ fontFamily: "Libre Caslon Display" }}
    >
      {currentUser?.isLogged && (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            logOutUser();
          }}
        >
          Log Out
        </MenuItem>
      )}

      {currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>{currentUser?.user}</MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="mobile-link" to="/register">
            Register
          </NavLink>
        </MenuItem>
      )}

      {!currentUser?.isLogged && (
        <MenuItem onClick={handleMenuClose}>
          <NavLink className="mobile-link" to="/login">
            Login
          </NavLink>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/*===> here is my items */}
      <MenuItem>
        <NavLink to="/about" className="mobile-link">
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
          >
            <ImportContactsIcon />
          </IconButton>
          <p>Главная</p>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/products" className="mobile-link">
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
          >
            <LocalOfferIcon />
          </IconButton>
          <p></p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/specialist" className="mobile-link">
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
          >
            <LocalOfferIcon />
          </IconButton>
          <p>специалисты</p>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/add" className="mobile-link">
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
          >
            <PersonIcon />
          </IconButton>
          <p>Admin</p>
        </NavLink>
      </MenuItem>

      {/* end of my items */}

      {/* material */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          sx={{
            color: currentUser?.isLogged ? "green" : "black",
          }}
        >
          {currentUser?.isLogged ? <PersonIcon /> : <AccountCircle />}
        </IconButton>
        <p
          style={{
            color: currentUser?.isLogged ? "green" : "black",
          }}
        >
          Profile
        </p>
      </MenuItem>
      {/* <LiveSearch /> */}
    </Menu>
  );

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        right: 0,
        left: 0,
        zIndex: "1",
      }}
    >
      <AppBar position="static" className="navbar-container">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "#f0e7d1",
                display: "block",
                fontSize: "16px",
                fontFamily: "Libre Caslon Display",
              }}
              component={NavLink}
              to="/about"
            >
              Главная
            </Button>
            {/* <Button
              sx={{
                my: 2,
                color: "#f0e7d1",
                display: "block",
                fontSize: "16px",
                fontFamily: "Libre Caslon Display",
              }}
              component={NavLink}
              to="/products"
            >
              Информация
            </Button> */}
            <Button
              sx={{
                my: 2,
                color: "#f0e7d1",
                display: "block",
                fontSize: "16px",
                fontFamily: "Libre Caslon Display",
              }}
              component={NavLink}
              to="/specialist"
            >
              Специалисты{" "}
            </Button>
            <Button
              sx={{
                my: 2,
                color: "#f0e7d1",
                display: "block",
                fontSize: "16px",
                fontFamily: "Libre Caslon Display",
              }}
              component={NavLink}
              to="/add
              "
            >
              ADMIN
            </Button>
            )
          </Box>

          {/* logo */}
          <Typography
            className="mui-link"
            variant="h6"
            noWrap
            to="/"
            component={RouterLink}
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "flex",
                mx: "auto",
              },
              width: "100%",
              justifyContent: "center",

              fontSize: "3rem",
              fontWeight: "500",
              textTransform: "uppercase",
              fontFamily: "Sigmar One",
              color: "#f0e7d1",
            }}
          >
            <img
              width="5%"
              src="https://papik.pro/uploads/posts/2021-11/thumbs/1636178666_15-papik-pro-p-logotip-meditsini-foto-15.png"
              alt=""
            />
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {/* Живой поиск */}
            {/* <LiveSearch /> */}
            {/* Живой поиск */}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{
                color: currentUser?.isLogged ? "lightgreen" : "white",
              }}
            >
              {currentUser?.isAdmin ? (
                <AdminPanelSettingsIcon />
              ) : currentUser?.isLogged ? (
                <PersonIcon />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

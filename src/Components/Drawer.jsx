import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import home from "../assets/home.svg";
import invoice from "../assets/invoice.svg";
import logout from "../assets/logout.svg";
import store from "../assets/store.svg";
import product from "../assets/product.svg";

const Drawer = () => {
  return (
    <Sidebar
      className="sidebar"
      style={{
        backgroundColor: "#fff",
        height: "100vh",
        width: "auto",
        position: "fixed",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Menu
        style={{
          backgroundColor: "#fff",
        }}
      >
        <MenuItem>
          <img src={home} alt="home"/> Dashboard
        </MenuItem>
        <MenuItem>
          <img src={product} alt="product"/> Product
        </MenuItem>
        <MenuItem>
          <img src={invoice} alt="invoice"/> Invoice{" "}
        </MenuItem>
        <MenuItem>
          <img src={store} alt="store"/> My Store{" "}
        </MenuItem>{" "}
        <MenuItem>
          <img src={logout} alt="logout"/> Logout{" "}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Drawer;

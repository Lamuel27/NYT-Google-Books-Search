import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="nav-wrapper">
        <Link className="brand-logo" to="/">
          Google Books
        </Link>
        <div>
          <ul className="right hide-on-med-and-down">
            <li className="badges.html">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="badges.html">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;

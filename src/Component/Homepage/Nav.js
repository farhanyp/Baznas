import React from "react";

// import navigation data
import { navigation } from "../../data";

// import Link
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="flex space-x-14 capitalize text-lg">
        {navigation.map((item, index) => {
          return (
            <li
              className="cursor-pointer text-secondary hover:underline"
              key={index}
            >
              <NavLink
                to={item.href}
                activeClass="active"
                spy={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;

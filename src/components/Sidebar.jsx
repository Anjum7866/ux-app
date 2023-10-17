import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaUser, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { BiCog, BiAnalyse, BiSearch } from "react-icons/bi";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome size={20} />,
  },
  {
    path: "/user",
    name: "User",
    icon: <FaUser size={20} />,
  },
  {
    path: "/courses",
    name: "Courses",
    icon: <BiAnalyse size={20} />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage size={20} />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog size={20} />,
  },
];
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    show: {
      width: "140px",
      opacity: 1,
      padding: "15px 10px",
      transition: {
        duration: 1,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div className="main-container">
      <motion.div
        animate={{
          width: isOpen ? "250px" : "70px",
          transition: {
            duration: 0.5,
            damping: 11,
            type: "spring",
          },
        }}
        className="sidebar"
      >
        <div className="top-section">
          {isOpen && (
            <motion.h1
              variants={showAnimation}
              initial="hidden"
              whileHover={{ scale: 1.3 }}
              animate="show"
              exit="hidden"
              className="logo"
            >
              GoBig
            </motion.h1>
          )}
          <motion.div
            className="bar"
            initial={{ scale: 0 }}
            whileTap={{ scale: 1.2, rotate: 180, borderRadius: "100%" }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            {isOpen ? (
              <AiFillCloseCircle size={28} onClick={toggle} />
            ) : (
              <FaBars size={52} onClick={toggle} />
            )}
          </motion.div>
        </div>

        <div className="search">
          <div className="search-icon">
            <BiSearch size={20} className="s_icon" />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                variants={inputAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                placeholder="Search ..."
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((route) => (
            <NavLink
              activeClassName="active"
              to={route.path}
              key={route.name}
              className="link"
            >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>

      <main> {children}</main>
    </div>
  );
};

export default Sidebar;

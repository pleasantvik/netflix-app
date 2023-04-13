import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export const Navbar = ({ username }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };
  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleShowDropDown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image
              src={"/static/netflix.svg"}
              height={30}
              width={111}
              alt="Netflix Logo"
            />
          </div>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropDown}>
              <p className={styles.username}>{username}</p>
              {/* ExpandMore ICon  */}
              <Image
                src={"/static/expand_more.svg"}
                height={32}
                width={32}
                alt="Expand Dropdown"
              />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login" className={styles.linkName}>
                    Sign Out
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

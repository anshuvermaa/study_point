import { useEffect, useState } from "react";
import styles from "./nav.module.css";
import cls from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";


const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [username, setUsername] = useState("");
  const [didToken, setDidToken] = useState("");
  const router = useRouter();

  

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickCollegeReviews = (e) => {
    e.preventDefault();
    router.push("/videos");
  };
  const handleOnClickBlogPosts = (e) => {
    e.preventDefault();
    router.push("/browse/blogposts");
  };
  const handleOnClickNotes = (e) => {
    e.preventDefault();
    router.push("/browse/notes");
  };
  const handleOnClickVideoNotes = (e) => {
    e.preventDefault();
    router.push("/browse/videosnotes");
  };

  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleSignout = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${didToken}`,
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();
    } catch (error) {
      console.error("Error logging out", error);
      router.push("/login");
    }
  };

  return (



   
    <nav className={styles.navbar}>
        <div className={cls(styles.navbarContainer, styles.container) }>
            <input type="checkbox" name="" id=""/>
            <div className={styles.hamburgerLines}>
                <span className={cls(styles.line, styles.line1) }></span>
                <span className={cls(styles.line, styles.line2) }></span>
                <span className={cls(styles.line, styles.line3) }></span>
            </div>
            <ul className={styles.menuItems}>
                <li><a onClick={handleOnClickHome} >Home</a></li>
                <li><a onClick={handleOnClickCollegeReviews}>College reviews</a></li>
                <li><a onClick={handleOnClickBlogPosts}>blogPosts</a></li>
                <li><a onClick={handleOnClickNotes}>Notes</a></li>
                <li><a onClick={handleOnClickVideoNotes}>Video Notes</a></li>

                {showDropdown && (
              <div className={styles.navDropdown}>
               
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>
                 </div>
              
           )}
            </ul>
            
            <h1 className={styles.logo}>StudyPoint</h1>
        </div>
    </nav>











/* 
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <a>
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128px"
                height="34px"
              />
            </div>
          </a>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
    //          {/** Expand more icon */
    //           <Image
    //             src={"/static/expand_more.svg"}
    //             alt="Expand dropdown"
    //             width="24px"
    //             height="24px"
    //           />
    //         </button>

    //         {showDropdown && (
    //           <div className={styles.navDropdown}>
    //             <div>
    //               <a className={styles.linkName} onClick={handleSignout}>
    //                 Sign out
    //               </a>
    //               <div className={styles.lineWrapper}></div>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </nav>
    //   </div>
    // </div> */}
  );
};

export default NavBar;

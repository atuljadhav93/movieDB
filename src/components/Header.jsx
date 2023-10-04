import { useEffect, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import { FaSearch } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [query, setQuery] = useState("");
  const [backgrondColor, setBackgroundColor] = useState(" bg-transparent ");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const openMobileMenu = () => {
    setMobileMenu(true);
    setSearchBar(false);
  };

  const openSearchBar = () => {
    setMobileMenu(false);
    setSearchBar(true);
  };

  const handleNavigation = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }

    setMobileMenu(false);
  };

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setSearchBar(false);
    }
  };

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setBackgroundColor(" bg-[#469193] ");
    } else {
      setBackgroundColor(" bg-transparent ");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <header
      className={`w-full flex flex-col items-center fixed z-40 h-[60px] ${backgrondColor} transform duration-100  ${
        (mobileMenu || searchBar) && "bg-[#469193]"
      }`}
    >
      <ContentWrapper>
        <div className="flex justify-between items-center  ">
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <p className="text-transparent text-2xl font-semibold text-[#ffffff] hover:text-[#0072B1]">
              MovieDB
            </p>
          </div>

          <div>
            <ul className="flex h-[60px] items-center">
              <li
                className="text-lg mr-[30px] font-semibold text-white hidden md:block hover:text-[#0072B1] transform duration-200 cursor-pointer"
                onClick={() => {
                  handleNavigation("movie");
                }}
              >
                Movies
              </li>

              <li
                className="text-lg mr-[30px] font-semibold text-white hidden md:block hover:text-[#0072B1] transform duration-200 cursor-pointer"
                onClick={() => {
                  handleNavigation("tv");
                }}
              >
                TV Shows
              </li>

              <li
                className="text-white text-lg mr-[30px] md:mr-0 hover:text-[#0072B1] transform duration-200 cursor-pointer"
                onClick={openSearchBar}
              >
                <FaSearch />
              </li>

              <li className="text-white text-lg mr-[30px] md:mr-0 md:hidden hover:text-[#0072B1] transform duration-200 cursor-pointer">
                {mobileMenu ? (
                  <RiCloseFill
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  />
                ) : (
                  <HiMenu onClick={openMobileMenu} />
                )}
              </li>
            </ul>
          </div>
        </div>
      </ContentWrapper>

      <div
        className={`  bg-transparent backdrop-blur-[1.5px] w-full translate-y-[-140px] ${
          mobileMenu && "translate-y-[0px]"
        } transform duration-300 shadow-xl md:hidden`}
      >
        <ContentWrapper>
          <ul className="flex flex-col justify-center mx-auto items-center">
            <li
              className="text-lg mt-[5px] font-semibold text-white hover:text-pink-500 transform duration-200 cursor-pointer"
              onClick={() => {
                handleNavigation("movie");
              }}
            >
              Movies
            </li>

            <li
              className="text-lg my-[5px] font-semibold text-white  hover:text-pink-500 transform duration-200 cursor-pointer"
              onClick={() => {
                handleNavigation("tv");
              }}
            >
              TV Shows
            </li>
          </ul>
        </ContentWrapper>
      </div>

      <div
        className={`w-full  transform duration-300 shadow-xl h-[60px] bg-transparent backdrop-blur-[1.5px]  translate-y-[-200px] md:translate-y-[-120px] ${
          searchBar && "translate-y-[-70px] md:translate-y-[0px]"
        } -z-40  `}
      >
        <ContentWrapper>
          <div className="flex items-center">
            <input
              className=" px-4 py-1 w-full text-2xl text-white font-semibold bg-transparent backdrop-blur-[1.5px] outline-none placeholder:text-xl placeholder:font-semibold "
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />

            <RiCloseFill
              className="text-2xl font-semibold text-white cursor-pointer"
              onClick={() => {
                setSearchBar(false);
              }}
            />
          </div>
        </ContentWrapper>
      </div>
    </header>
  );
};

export default Header;

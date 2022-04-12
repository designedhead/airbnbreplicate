import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/img/logo-white.png";
import LogoRed from "../../public/img/logo-red.png";
import { GlobeAltIcon, MenuIcon } from "@heroicons/react/outline";
import {
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
  UserIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 60) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    document.addEventListener("scroll", changeBackground);

    return () => {
      // Cleanup the event listener
      document.addEventListener("scroll", changeBackground);
    };
  }, []);

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header id="header">
      {(navbar === false && (
        <div className="header">
          <Image src={Logo} objectFit="contain" height={80} width={90} />
          <div className="search__input_basic" id="bar">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              name="search"
              id="search"
              placeholder="Start your search..."
              autoComplete="off"
            />
            <div className="searchbt">
              <SearchIcon className="search__input__icon" />
            </div>
          </div>
          <div className="rightflex">
            <a className="becomehost">Become a host</a>
            <GlobeAltIcon className="globeicon" />
            <div className="rightmenu">
              <MenuIcon className="rightsideicons" />
              <UserCircleIcon className="rightsideicons" />
            </div>
          </div>
        </div>
      )) || (
        <div className="header__active__container animate__animated animate__slideInDown">
          <div className="header__active">
            <Image src={LogoRed} objectFit="contain" height={80} width={90} />
            <div className="search__input" id="bar">
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                name="search"
                id="search"
                placeholder="Start your search..."
                autoComplete="off"
              />
              <div className="searchbt">
                <SearchIcon className="search__input__icon" />
              </div>
            </div>
            <div className="rightflex">
              <a className="becomehost__sticky">Become a host</a>
              <GlobeAltIcon className="globeicon__sticky" />
              <div className="rightmenu">
                <MenuIcon className="rightsideicons" />
                <UserCircleIcon className="rightsideicons" />
              </div>
            </div>
          </div>
          {searchInput && (
            <div className="datepicker" id="datepicker">
              <div className="pickerround">
                <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={["#FD5B61"]}
                  onChange={handleSelect}
                />
                <div className="guests">
                  <p>Number of Guests</p>
                  <div className="usersflex">
                    <UsersIcon className="usericon" />
                    <input className="inputnumber" type="number" min="1" />
                  </div>
                </div>
                <div className="actionbt" id="actionbt">
                  <button className="cancelbt" onClick={resetInput}>
                    Cancel
                  </button>
                  <button className="searchbt">Search</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {searchInput && (
        <div className="datepicker" id="datepicker">
          <div className="pickerround">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="guests">
              <p>Number of Guests</p>
              <div className="usersflex">
                <UsersIcon className="usericon" />
                <input className="inputnumber" type="number" min="1" />
              </div>
            </div>
            <div className="actionbt" id="actionbt">
              <button className="cancelbt" onClick={resetInput}>
                Cancel
              </button>
              <button className="searchbt">Search</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

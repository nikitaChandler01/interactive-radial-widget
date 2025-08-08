import { useState } from "react";
import "./Header.scss";

import { Link } from "react-router-dom";

import { Button, Flex } from "@chakra-ui/react";
import { VakioLogo } from "@shared/ui/logo/VakioLogo";
import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaRegUser, FaXTwitter } from "react-icons/fa6";
import { FiHeart, FiSearch } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu2Line, RiShoppingBagLine } from "react-icons/ri";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <Flex
            className="header-root"
            w={"100%"}
            flexDir={"column"}
            flex={"0 0 fit-content"}
        >
            <Flex
                align={"center"}
                css={{
                    bg: {
                        _dark: "colorPalette.500",
                        _light: "colorPalette.500",
                    },
                }}
                className="header"
                grow={1}
                justify={"space-between"}
            >
                <Flex className="header__logo-links" align={"center"}>
                    <Flex
                        className="header__logo"
                        justify={"center"}
                        align={"center"}
                        bg={{
                            _dark: "none",
                            _light: "none",
                            // _light: "colorPalette.contrast"
                        }}
                        style={{
                            verticalAlign: "middle",
                            height: 48,
                            padding: "0 8px",
                            boxSizing: "border-box",
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                    >
                        <Link to="/" onClick={scrollToTop}>
                            <VakioLogo />
                        </Link>
                    </Flex>
                    <Flex className="header__links" align={"center"}>
                        <ul className="header__links-list">
                            <li className="header__links-item">
                                <Link to="/" onClick={scrollToTop}>
                                    <Button
                                        css={{ color: "colorPalette.contrast" }}
                                        className="header__link-button"
                                        size={"xl"}
                                        variant={"plain"}
                                    >
                                        ГЛАВНАЯ
                                    </Button>
                                </Link>
                            </li>
                            <li className="header__links-item">
                                <Link to="/shop" onClick={scrollToTop}>
                                    <Button
                                        css={{ color: "colorPalette.contrast" }}
                                        className="header__link-button"
                                        size={"xl"}
                                        variant={"plain"}
                                    >
                                        КАТАЛОГ
                                    </Button>
                                </Link>
                            </li>
                            <li className="header__links-item">
                                <Link to="/blog" onClick={scrollToTop}>
                                    <Button
                                        css={{ color: "colorPalette.contrast" }}
                                        className="header__link-button"
                                        size={"xl"}
                                        variant={"plain"}
                                    >
                                        НАШИ ПАРТНЕРЫ
                                    </Button>
                                </Link>
                            </li>
                            <li className="header__links-item">
                                <Link to="/about" onClick={scrollToTop}>
                                    <Button
                                        css={{ color: "colorPalette.contrast" }}
                                        className="header__link-button"
                                        size={"xl"}
                                        variant={"plain"}
                                    >
                                        О НАС
                                    </Button>
                                </Link>
                            </li>
                            <li className="header__links-item">
                                <Link to="/contact" onClick={scrollToTop}>
                                    <Button
                                        css={{ color: "colorPalette.contrast" }}
                                        className="header__link-button"
                                        size={"xl"}
                                        variant={"plain"}
                                    >
                                        КОНТАКТЫ
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </Flex>
                </Flex>
                <Flex className="header__icons" spaceX={4}>
                    <Button css={{ color: "colorPalette.contrast" }} variant={"plain"}>
                        <FiSearch onClick={scrollToTop} />
                    </Button>
                    <Button css={{ color: "colorPalette.contrast" }} variant={"plain"}>
                        <Link to="/profile" onClick={scrollToTop}>
                            <FaRegUser />
                        </Link>
                    </Button>
                    <Button css={{ color: "colorPalette.contrast" }} variant={"plain"}>
                        <Link to="/wishlist" onClick={scrollToTop}>
                            <FiHeart />
                        </Link>
                    </Button>
                    <Button css={{ color: "colorPalette.contrast" }} variant={"plain"}>
                        <Link to="/cart" onClick={scrollToTop}>
                            <RiShoppingBagLine />
                        </Link>
                    </Button>
                </Flex>
            </Flex>

            {/* Mobile Menu */}
            <Flex width={"full"} justify="space-between">
                <Flex
                    width={"full"}
                    className="header__mobile-nav"
                    justify={"space-between"}
                >
                    {mobileMenuOpen ? (
                        <MdOutlineClose size={18} onClick={toggleMobileMenu} />
                    ) : (
                        <RiMenu2Line size={18} onClick={toggleMobileMenu} />
                    )}
                    <Flex
                        className="header__logo"
                        justify={"center"}
                        align={"center"}
                        borderRadius={"3xl"}
                        bg={{
                            _dark: "none",
                            _light: "none",
                        }}
                        style={{
                            verticalAlign: "middle",
                            height: 48,
                            padding: "0 8px",
                            boxSizing: "border-box",
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                    >
                        <Link to="/" onClick={scrollToTop}>
                            <VakioLogo
                                width={140}
                                height={20}
                                color="var(--chakra-colors-color-palette-500)"
                            />
                        </Link>
                    </Flex>
                    <Button variant={"plain"}>
                        <Link to="/cart" onClick={scrollToTop}>
                            <RiShoppingBagLine />
                        </Link>
                    </Button>
                </Flex>
                <Flex
                    flexDir={"column"}
                    className={`header__mobile-menu${mobileMenuOpen ? " header__mobile-menu--open" : ""}`}
                >
                    <Flex flexDir={"column"} className="header__mobile-menu-top">
                        <Flex className="header__mobile-menu-search">
                            <div className="header__mobile-menu-search-container">
                                <input type="text" placeholder="Search products" />
                                <Link to="/shop">
                                    <FiSearch size={18} onClick={toggleMobileMenu} />
                                </Link>
                            </div>
                        </Flex>
                        <Flex
                            width={"full"}
                            flexDir={"column"}
                            className="header__mobile-menu-list"
                        >
                            <ul className="header__mobile-menu-list-ul">
                                <li className="header__mobile-menu-list-item">
                                    <Link to="/" onClick={toggleMobileMenu}>
                                        ГЛАВНАЯ
                                    </Link>
                                </li>
                                <li className="header__mobile-menu-list-item">
                                    <Link to="/shop" onClick={toggleMobileMenu}>
                                        КАТАЛОГ
                                    </Link>
                                </li>
                                <li className="header__mobile-menu-list-item">
                                    <Link to="/blog" onClick={toggleMobileMenu}>
                                        НАШИ ПАРТНЕРЫ
                                    </Link>
                                </li>
                                <li className="header__mobile-menu-list-item">
                                    <Link to="/about" onClick={toggleMobileMenu}>
                                        О НАС
                                    </Link>
                                </li>
                                <li className="header__mobile-menu-list-item">
                                    <Link to="/contact" onClick={toggleMobileMenu}>
                                        КОНТАКТЫ
                                    </Link>
                                </li>
                            </ul>
                        </Flex>
                    </Flex>

                    <Flex className="header__mobile-menu-footer" flexDir={"column"}>
                        <Flex className="header__icons" spaceX={4}>
                            <Button variant={"plain"}>
                                <FiSearch onClick={scrollToTop} />
                            </Button>
                            <Button variant={"plain"}>
                                <Link to="/profile" onClick={scrollToTop}>
                                    <FaRegUser />
                                </Link>
                            </Button>
                            <Button variant={"plain"}>
                                <Link to="/wishlist" onClick={scrollToTop}>
                                    <FiHeart />
                                </Link>
                            </Button>
                            <Button variant={"plain"}>
                                <Link to="/cart" onClick={scrollToTop}>
                                    <RiShoppingBagLine />
                                </Link>
                            </Button>
                        </Flex>
                        <Flex
                            className="header__mobile-menu-footer-lang-currency"
                            flexDir={"column"}
                        >
                            <Flex className="header__mobile-menu-footer-lang">
                                <p>Language</p>
                                <select name="language" id="language">
                                    <option value="english">
                                        United States | English
                                    </option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Germany">Germany</option>
                                    <option value="French">French</option>
                                </select>
                            </Flex>
                            <Flex className="header__mobile-menu-footer-currency">
                                <p>Currency</p>
                                <select name="currency" id="currency">
                                    <option value="USD">$ USD</option>
                                    <option value="INR">₹ INR</option>
                                    <option value="EUR">€ EUR</option>
                                    <option value="GBP">£ GBP</option>
                                </select>
                            </Flex>
                        </Flex>
                        <div className="header__mobile-menu-social">
                            <FaFacebookF />
                            <FaXTwitter />
                            <FaInstagram />
                            <FaYoutube />
                            <FaPinterest />
                        </div>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
export default Header;

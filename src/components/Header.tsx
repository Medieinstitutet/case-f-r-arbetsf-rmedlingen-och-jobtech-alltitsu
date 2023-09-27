import {
  DigiIconGlobe,
  DigiIconHome,
  DigiIconSearch,
  DigiNavigationSidebar,
  DigiNavigationSidebarButton,
  DigiNavigationVerticalMenu,
  DigiNavigationVerticalMenuItem,
} from '@digi/arbetsformedlingen-react';
import logo from '../assets/logo.png';
import { HeaderWrapper } from './styled/Wrappers';
import {
  NavigationSidebarPosition,
  NavigationSidebarVariation,
  NavigationVerticalMenuVariation,
} from '@digi/arbetsformedlingen';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../hooks/useMediaQuery';
import '../styles/Alltitsu.scss';
import '../styles/Header.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [endpoint, setEndpoint] = useState(window.location.pathname);
  const isBreakpoint = useMediaQuery(1020);
  const location = useLocation();

  useEffect(() => {
    setEndpoint(window.location.pathname);
  }, [location]);

  const mobileNav = (
    <DigiNavigationSidebarButton afText="Meny" onClick={() => setMenuOpen(!menuOpen)}>
      <DigiNavigationSidebar
        afActive={menuOpen}
        afStickyHeader={true}
        afBackdrop={true}
        afPosition={NavigationSidebarPosition.END}
        afVariation={NavigationSidebarVariation.OVER}
        afCloseButtonText="Stäng"
        onAfOnClose={() => setMenuOpen(!menuOpen)}
      >
        <DigiNavigationVerticalMenu afVariation={NavigationVerticalMenuVariation.PRIMARY}>
          <ul>
            <li>
              <Link to="/">
                <DigiNavigationVerticalMenuItem
                  afText="Hem"
                  afActive={endpoint === '/' ? true : false}
                >
                  <DigiIconHome slot="icon" />
                </DigiNavigationVerticalMenuItem>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <DigiNavigationVerticalMenuItem
                  afText="Sök"
                  afActive={endpoint === '/search' ? true : false}
                >
                  <DigiIconSearch slot="icon" />
                </DigiNavigationVerticalMenuItem>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <DigiNavigationVerticalMenuItem
                  afText="Kontakt"
                  afActive={endpoint === '/contact' ? true : false}
                >
                  <DigiIconGlobe slot="icon" />
                </DigiNavigationVerticalMenuItem>
              </Link>
            </li>
          </ul>
        </DigiNavigationVerticalMenu>
      </DigiNavigationSidebar>
    </DigiNavigationSidebarButton>
  );

  const desktopNav = (
    <DigiNavigationVerticalMenu afVariation={NavigationVerticalMenuVariation.PRIMARY}>
      <ul>
        <li>
          <Link to="/">
            <DigiNavigationVerticalMenuItem
              afText="Hem"
              afActive={endpoint === '/' ? true : false}
            >
              <DigiIconHome slot="icon" />
            </DigiNavigationVerticalMenuItem>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <DigiNavigationVerticalMenuItem
              afHref="/search"
              afText="Sök"
              afActive={endpoint === '/search' ? true : false}
            >
              <DigiIconSearch slot="icon" />
            </DigiNavigationVerticalMenuItem>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <DigiNavigationVerticalMenuItem
              afHref="/contact"
              afText="Kontakt"

              afActive={endpoint === '/contact' ? true : false}
            >
              <DigiIconGlobe slot="icon" />
            </DigiNavigationVerticalMenuItem>
          </Link>
        </li>
      </ul>
    </DigiNavigationVerticalMenu>
  );

  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <img className="logo" src={logo} alt="Alltisu logo." width={100} height={100} />
        </Link>
        {isBreakpoint ? mobileNav : desktopNav}
      </HeaderWrapper>
    </>
  );
};

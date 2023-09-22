import {
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
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Alltitsu.scss';
import { useMediaQuery } from '../hooks/useMediaQuery';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isBreakpoint = useMediaQuery(768);

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
        className="alltitsuStyling"
      >
        <DigiNavigationVerticalMenu afVariation={NavigationVerticalMenuVariation.PRIMARY}>
          <ul>
            <li>
              <Link to="/">
                <DigiNavigationVerticalMenuItem
                  afText="Hem"
                  afActive={true}
                  className="alltitsuStyling"
                ></DigiNavigationVerticalMenuItem>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <DigiNavigationVerticalMenuItem
                  afText="Sök"
                  afActive={true}
                  className="alltitsuStyling"
                ></DigiNavigationVerticalMenuItem>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <DigiNavigationVerticalMenuItem
                  afText="Kontakt"
                  afActive={true}
                  className="alltitsuStyling"
                ></DigiNavigationVerticalMenuItem>
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
          <Link to={'/'}>
            <DigiNavigationVerticalMenuItem
              afText="Hem"
              afActive={true}
              className="alltitsuStyling"
            ></DigiNavigationVerticalMenuItem>
          </Link>
        </li>
        <li>
          <Link to={'/search'}>
            <DigiNavigationVerticalMenuItem
              afText="Sök"
              afActive={true}
              className="alltitsuStyling"
            ></DigiNavigationVerticalMenuItem>
          </Link>
        </li>
        <li>
          <Link to={'/contact'}>
            <DigiNavigationVerticalMenuItem
              afText="Kontakt"
              afActive={true}
              className="alltitsuStyling"
            ></DigiNavigationVerticalMenuItem>
          </Link>
        </li>
      </ul>
    </DigiNavigationVerticalMenu>
  );

  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="Alltisu logo." width={100} height={100} />
        </Link>
        {isBreakpoint ? mobileNav : desktopNav}
      </HeaderWrapper>
    </>
  );
};

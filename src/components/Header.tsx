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
import "./Alltitsu.scss";


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="Alltisu logo." width={100} height={100} />
        </Link>
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
                      style={{ background: 'var(--digi--navigation-vertical-menu-item--active-indicator-background-color)' }} // Apply custom CSS style
                      className="alltitsuStyling" 
                    ></DigiNavigationVerticalMenuItem>
                  </Link>
                </li>
                <li>
                  <Link to="/search">
                    <DigiNavigationVerticalMenuItem
                      afText="Sök"
                      afActive={true}
                      style={{ background: 'var(--digi--navigation-vertical-menu-item--active-indicator-background-color)' }} // Apply custom CSS style
                      className="alltitsuStyling" 
                    ></DigiNavigationVerticalMenuItem>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <DigiNavigationVerticalMenuItem
                      afText="Kontakt"
                      afActive={true}
                      style={{ background: 'var(--digi--navigation-vertical-menu-item--active-indicator-background-color)' }} // Apply custom CSS style
                      className="alltitsuStyling" 
                    ></DigiNavigationVerticalMenuItem>
                  </Link>
                </li>
              </ul>
            </DigiNavigationVerticalMenu>
          </DigiNavigationSidebar>
        </DigiNavigationSidebarButton>
      </HeaderWrapper>
    </>
  );
};

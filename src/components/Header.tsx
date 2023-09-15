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

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <img src={logo} alt="Alltisu logo." width={100} height={100} />
        <DigiNavigationSidebarButton afText="Meny" onClick={() => setMenuOpen(!menuOpen)} />
        <DigiNavigationSidebar
          afActive={menuOpen}
          afStickyHeader={true}
          afBackdrop={true}
          afPosition={NavigationSidebarPosition.END}
          afVariation={NavigationSidebarVariation.OVER}
          afCloseButtonText="Close"
          onAfOnClose={() => setMenuOpen(!menuOpen)}
        >
          <DigiNavigationVerticalMenu afVariation={NavigationVerticalMenuVariation.PRIMARY}>
            <ul>
              <li>
                <DigiNavigationVerticalMenuItem
                  afText="Home"
                  afActive={true}
                  af-href={'/'}
                ></DigiNavigationVerticalMenuItem>
              </li>
              <li>
                <DigiNavigationVerticalMenuItem
                  afText="Search"
                  afActive={true}
                  af-href={'/search'}
                ></DigiNavigationVerticalMenuItem>
              </li>
              <li>
                <DigiNavigationVerticalMenuItem
                  afText="Contact"
                  afActive={true}
                  af-href={'/contact'}
                ></DigiNavigationVerticalMenuItem>
              </li>
            </ul>
          </DigiNavigationVerticalMenu>
        </DigiNavigationSidebar>
      </HeaderWrapper>
    </>
  );
};

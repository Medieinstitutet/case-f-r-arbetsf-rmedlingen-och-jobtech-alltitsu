import { DigiNavigationSidebarButton } from "@digi/arbetsformedlingen-react"
import logo from "../assets/logo.png"
import { HeaderWrapper } from "./styled/Wrappers"

export const Header = () => {

  return <>
    <HeaderWrapper>
      <img src={logo} alt="Alltisu logo." width={100} height={100} />
      <DigiNavigationSidebarButton afText="Meny" />
    </HeaderWrapper>
  </>
}
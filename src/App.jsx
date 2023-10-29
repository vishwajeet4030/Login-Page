import { StyledLogin } from "./Login/Login.style";
import { AppContainer } from "./components/AppContainer.style";
import { StyledLogo } from "./logo/Logo.style";

function App({className}) {
  return (
      <AppContainer>
        <StyledLogo />
        <StyledLogin />
      </AppContainer>
  );
}

export default App;


import styled from 'styled-components';
import Logo from '../components/shared/Logo';
import ScreenLanding from '../components/landing/ScreenLanding';



function LandingPage() {
    

    return (
      
        <ScreenContainer>
            <Logo />
            <ScreenLanding />
        </ScreenContainer>
      
    );
  }
  
  export default LandingPage;
  
  const ScreenContainer = styled.div`
  background-color: #D0F2F8;
  width: 100%;
  min-height: 98vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
}
`
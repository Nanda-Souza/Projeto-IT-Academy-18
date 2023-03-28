import styled from 'styled-components';
import Logo from '../components/shared/Logo';
import ScreenHome from '../components/home/ScreenHome';



function HomePage() {
    

    return (
      
        <ScreenContainer>
            <Logo />
            <ScreenHome />
        </ScreenContainer>
      
    );
  }
  
  export default HomePage;
  
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
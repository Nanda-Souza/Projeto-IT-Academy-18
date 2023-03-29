import styled from 'styled-components';
import ScreenRegister from '../components/register/ScreenRegister';
import Header from '../components/shared/Header';



function RegisterPage() {
    

    return (
      
        <ScreenContainer>
            
            <Header/>
            <ScreenRegister/>
            
        </ScreenContainer>
      
    );
  }
  
  export default RegisterPage;
  
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
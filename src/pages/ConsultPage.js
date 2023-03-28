import styled from 'styled-components';
import ScreenConsult from '../components/consult/ScreenConsult';
import Header from '../components/shared/Header';



function ConsultPage() {
    

    return (
      
        <ScreenContainer>
            
            <Header/>
            <ScreenConsult/>
            
        </ScreenContainer>
      
    );
  }
  
  export default ConsultPage;
  
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
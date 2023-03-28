import styled from "styled-components";


export default function ScreenLanding(){
    
    return (
    
    
            <Entrar >
               
                    <p
                        id="button" 
                        className="button-log">Entrar</p>

            
            </Entrar>
    )
}


const Entrar = styled.button` 
        width: 250px;
        height: 45px;
        background-color: #5E17EB;
        border: 10px solid #5E17EB;
        border-radius: 5px;  
        margin-bottom: 6px;  
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
             
        `
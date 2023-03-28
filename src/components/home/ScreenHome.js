import styled from "styled-components";


export default function ScreenLanding(){
    
    return (
    
    
        <Buttons>
        <button className="trecho">
        Consultar trechos x Modalidade
        </button>
        <button className="cadastro">
        Cadastrar Transporte
        </button>
        <button className="dados">
        Dados Estatísticos
        </button>
        <button className="sair">
        Sair
        </button>
        
      </Buttons>
    )
}

const Buttons = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
button {
        width: 250px;
        height: 50px;
        background-color: #5E17EB;
        border: 10px solid #5E17EB;
        border-radius: 5px;  
        margin-bottom: 10px;  
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
            
        `
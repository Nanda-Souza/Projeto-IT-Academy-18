import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();

    function homePage(){
        navigate("/home");
    
    }

    function exit(){
        navigate("/");
    
    }

    return (
        <HeaderGeneral >
            <img src="assets/voltar.png" onClick={homePage} />
            <img src="assets/itlogo.png" />
            <img src="assets/exit.png" onClick={exit} />

        </HeaderGeneral>
    )
}

const HeaderGeneral = styled.div`
    width: 100%;
    height: 60px;
    background-color: #C3A7FA;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Playball';
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;
    padding: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    img {
        height: 55px;
        margin-left: 16px;
        margin-right: 16px;
    }
    `
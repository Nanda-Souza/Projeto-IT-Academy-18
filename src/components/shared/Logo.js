import styled from "styled-components"

export default function Logo(){
    
    return (
        <LogoContainer>
            <img src="assets/DelyLogo.png" />

        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 150px 0 20px 0;
    img {
        width: 350px;
    }
`
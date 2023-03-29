import styled from "styled-components";
//importei use state e context do react para manipular estados
import { useState, useContext } from "react";
import { DataContext } from "../../contexts/dataContext";



export default function ScreenConsult(){
    //1.1 - objetos de estado do form
    const [form, setForm] = useState({
        cityOrigin: "",
        cityDestination: "",
        size: ""
      });
    const { cities } = useContext(DataContext)
    const { distance } = useContext(DataContext)
    
    //1.2 - função para calular distancia com base no input do usuario
    //1.8 - mudança do nome calculateDistance para subitForm pois aqui é para validar os dados inseridos no front
    function submitForm(e){
        // 1.5 confirma se os campos estão vazios
        if (
            !form.cityOrigin ||
            !form.cityDestination ||
            !form.size
          ) {
            alert('Favor preencher e selecionar todos os campos!');
            return;
          }
        // 1.6 - conversão do input d form para upperCase e remoção de caracteres especiais (erro1)
        const origin = form.cityOrigin.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const destination = form.cityDestination.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (
        !cities.includes(origin)
        ) {
            alert("Nome da cidade de origem está incorreto, favor preencher novamente!");
            return;
        }

        if (
        !cities.includes(destination)
        ) {
            alert("Nome da cidade de destino está incorreto, favor preencher novamente!");
            return;
        }

        // 1.7 - validação para confirmar que a cidade de origem e destino não são a mesma.
        if (
            origin === destination
        ){
            alert("Cidade de origem e destino não podem ser a mesma!");
            return;
        }

        calculateDistance(origin, destination, form.size)
          

    }
    //1.9 função para calcular a o trecho e fornecer a resposta ao usuario
    function calculateDistance(origin, destination, size){
        //1.10 função que valida qual elemento do array de cidades é igual a origem selecionada
        const originIndex = (element) => element === origin
        //1.11 função que valida qual elemento do array de cidades é igual ao destino selecionado
        const destinationIndex = (element) => element === destination
        
        //1.12 Uso do metodo findIndex para definir o indice dos eixos da matriz de distancia 
        const yAxis = cities.findIndex(originIndex)
        const xAxis = cities.findIndex(destinationIndex)        
        
        //1.13 variavel para armazenar o valor extraido da matrix de distancia
        const result = distance[yAxis][xAxis]

        //1.14 com base no tamanho do caminhão (P,M,G) fornece a resposta contento a origem, destino, distancia e preço.
        if ( 
            size ==="P"
        ){
            const cost = 4.87 * result

            alert(`de ${origin} para ${destination}, utilizando um caminhão de pequeno porte, a distancia é de ${result} km e o custo será de R$ ${cost.toFixed(2)}.`)
            return
        }
        if ( 
            size ==="M"
        ){
            const cost = 11.92 * result

            alert(`de ${origin} para ${destination}, utilizando um caminhão de médio porte, a distancia é de ${result} km e o custo será de R$ ${cost.toFixed(2)}.`)
            return
        }
        if ( 
            size ==="G"
        ){
            const cost = 27.44 * result

            alert(`de ${origin} para ${destination}, utilizando um caminhão de grande porte, a distancia é de ${result} km e o custo será de R$ ${cost.toFixed(2)}.`)
            return
        }

    }

    

    //1.4 - atualiza o estado dos campos do form
    function updateForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }
    
    return (
       //1-criacao do form para receber os dados pro calculo de distancia
       //1.3 - em caso de adicionar algo nos campos o estado do form é atualizadp
       <form onSubmit={submitForm}>
            <ConsultGeneral >
                <p>Consultar trecho</p>
                <InputGeneral>
                    <InputList>
                    <input
                        type=""
                        placeholder="De"
                        name="cityOrigin"
                        value={form.cityOrigin}                
                        onChange={updateForm}
                        required           
                        />

                    <input 
                        type="" 
                        placeholder="Para"
                        name="cityDestination" 
                        value={form.cityDestination}
                        onChange={updateForm}  
                        required
                        />
                    </InputList>
                </InputGeneral>
            </ConsultGeneral>

            <ModalGeneral >
                <p>Escolha a modalidade</p>
                <InputGeneral>
                    <InputList>                        
                            <input 
                                type="radio" 
                                value="P" 
                                name="size" 
                                onChange={updateForm}
                                required
                                /> Caminhão de pequeno porte
                                
                            <input 
                                type="radio" 
                                value="M" 
                                name="size" 
                                onChange={updateForm}
                                required
                                /> Caminhão de médio porte
                            <input 
                                type="radio" 
                                value="G" 
                                name="size" 
                                onChange={updateForm}
                                required
                                /> Caminhão de grande porte
                    </InputList>
                </InputGeneral>
            </ModalGeneral>
            <Buttons onClick={submitForm}>
                <button className="calculate">
                    Calcular
                </button>
            </Buttons>
        </form>

    )
}


const ConsultGeneral = styled.div` 
        p{
        margin-top:100px;
        margin-left:20px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        color: #5E17EB;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        `

const InputList = styled.li`
display: flex;
flex-direction: column;
align-items: center;
`
const InputGeneral = styled.ul`
    input {
        width: 250px;
        height: 45px;
        border: 1px solid #DBDBDB;
        border-radius: 5px;  
        margin-bottom: 6px;
        outline: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;  
        font-size: 20px;
        color: #AFAFAF;  
        ::placeholder {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            color: #DBDBDB;
            font-weight: 400;
            font-size: 20px;
        }
        `
const ModalGeneral = styled.div` 
        p{
        margin-top:50px;
        margin-left:25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        color: #5E17EB;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        `
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
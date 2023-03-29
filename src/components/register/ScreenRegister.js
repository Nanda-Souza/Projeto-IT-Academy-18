import styled from "styled-components";
//importei use state e context do react para manipular estados
import { useState, useContext } from "react";
import { DataContext } from "../../contexts/dataContext";



export default function ScreenRegister(){
    //objetos de estado do form
    const [form, setForm] = useState({
        cityOrigin: "",
        cityDestination: "",
        });
    
    const [formLoad, setFormLoad] = useState({
            celular: 0,            
            geladeira: 0,
            freezer: 0,
            cadeira: 0,
            luminaria: 0,
            lavadora: 0
    });
        
    //objetos importados do DataCOntext
    const { cities, loadWeight } = useContext(DataContext)
    //objetos criados para armazenar as rotas
    const [routes, setRoutes] = useState([])

    
    function submitForm(e){
        //e.preventDefault();
        if (
            !form.cityOrigin ||
            !form.cityDestination
          ) {
            alert('Favor preencher todos os campos!');
            return;
          }

        if(
            validaQuantidade(formLoad)
        ){
            alert('O campo quantidade aceita apenas numeros positivos e inteiros!');
            return;
        }

        //conversão do input d form para upperCase e remoção de caracteres especiais (erro1)
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

        //validação para confirmar que a cidade de origem e destino não são a mesma.
        if (
            origin === destination
        ){
            alert("Cidade de origem e destino não podem ser a mesma!");
            return;
        }

        setRoutes(form, formLoad)        

    }    
    
    //2.1 função pra validar se os objetos são inteiros e positivos
    function validaQuantidade(loadArray) {
        for (let key in loadArray) {
            if (loadArray[key] < 0 || Number.isInteger(loadArray[key])){
                return true
            }
        }
        return false
    }

    //atualiza o estado dos campos do form para cidade
    function updateForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }

    function updateFormLoad(e) {
    setFormLoad({ ...formLoad, [e.target.name]: e.target.value });
    }
    
    return (
       //2- criação do form utilizando o metodo .map para fazer uma tabela para registrar a quantidade de items
       <>
       <ConsultGeneral >
                <p>Rotas Adicionadas</p>
                {routes.map((o) => (
                    <div>
                        <p>
                            {o.cityOrigin}
                        </p>
                    
                    </div>

                ))}
                
            </ConsultGeneral>
            <Buttons>
                <button className="register">
                    Cadastrar Rota
                </button>
            </Buttons>
        <hr />
       <form onSubmit={submitForm}>
            <ConsultGeneral >
                <p>Trecho</p>
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
                <p>Quantidade de Items</p>                
                <InputGeneral>                    
                    <InputList>                                            
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>                        
                        {loadWeight.map((n) => (                            
                        <tbody key={n.item}>
                            <tr>
                            <td>{n.item}</td>
                            <input 
                                type="number"
                                placeholder="0"                                                                 
                                name={n.item}                                                                
                                onChange={updateFormLoad}  
                                required
                                />
                            </tr>                            
                        </tbody>
                        ))}
                        </table>
                    
                    </InputList>
                </InputGeneral>
            </ModalGeneral>
            <Buttons>
                <button className="add-route">
                    Adicionar Rota
                </button>
            </Buttons>            
        </form>
        </>


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
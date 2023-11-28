import { css } from "lit-element";

export default css`
    .contenedor{        
        width: 100%; 
        margin-top: 25vh;
    }

    .tituloForm{
        text-align:center;
        font-size: 25px;
        font-family: sans-serif;
        color: white;
    }

    .contenedorForm{
        width: 25rem;
        height: 30rem;
        border: .5rem solid rgb(60, 50, 60);
        background-color: rgb(53, 44, 58);
        border-radius: 1rem;
    }

    .form{
        padding: 0 2rem;        
    }

    .form-label{
        font-size: 13px;        
        display: block;
        height: 25px;

        color: white;
        font-family: "Gill Sans", sans-serif;
        letter-spacing: 2px;
    }

    .form-group{
        margin: 2rem 0;
    }

    .form-input{
        width:100%;
        padding: 10px 0px;     
        border-radius: 10px;   
        outline: none;
        border: 0;
    }

    .form-input::placeholder{        
        padding: 0px 15px;
    }

    .form-input:focus{
        border: 1px solid black;
        outline: none;
    }

    .form-cont-button{
        display: flex;
        justify-content: center;
        padding: 15px;
    } .form-cont-button button{
        padding: 15px 20px;
        border-radius:1vh;
        border: 0;
        width: 100%;            
        cursor:pointer;

        color: white;
        background-color: rgb(92, 77, 92);
        font-size: 15px;
        font-family: sans-serif;
    }

    .form-href{
        background-color: transparent;
        border: 0;
        outline: none;
        text-align: center;
        width: 100%;

        color: white;
        text-decoration: underline;
        cursor: pointer;
        font-size: 14px;
    }

    .mensajeResultado{                      
        text-align: center;
        width: 100%;
        font-size: 20px;
        color: green;
    }
`;
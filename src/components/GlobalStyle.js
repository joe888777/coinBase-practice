import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
html{
    &::-webkit-scrollbar{
        width:2rem;
    }
    &::-webkit-scrollbar-thumb{
        background: darkgrey;
    }
    &::-webkit-scrollbar-track{
        background:#ffffff;
    }
}
body{
    *{

        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:sans-serif;
    }
    a{
     text-decoration:none;
     color:#696969;
    }
    h1{
        text-align:center;
        margin:1rem;
    }
    h2{
        text-align:center;
        color: #646464;
    }
    @media(max-width:800px){
        font-size:12px;
    }
}


`;
export default GlobalStyle;

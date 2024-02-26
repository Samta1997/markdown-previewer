import { createGlobalStyle } from "styled-components";
export const GlobalStyle=createGlobalStyle`
*{
    box-sizing:border-box;
    
}
html,body{
    background-color: #ADEFD1FF;
}  
.editor-wrap{
    margin:0 auto;
    max-width:650px;
    box-shadow:0 0 5px 1px #0defd5; 
    height:265.5px;
}
.toolbar{
    background-color:#00203FFF;
    display:flex;
    align-items:center;
    gap:10px;
    padding:0 15px;
    color:white;
    font-size:20px;
    height:45px;
}
.arrow{
    margin-left:auto;
}
.preview-wrap{
    max-width:1000px;
    margin:15px auto;
    box-shadow:0 0 5px 1px #0defd5;  
}
#editor{
    width:100%;
    outline:none;
    font-size:1rem;
    background-color:#e3fcfd;
    height:220px;
    overflow-y:scroll;
    padding:6px 10px;
}
#preview{
    padding:1px 30px;
    max-width:80rem;
    outline:none;
    font-size:1rem;
    background-color:#e3fcfd;
    overflow-wrap:break-word;
    font-size:17.5px;
    min-height:220px;
}
table {
    border-collapse: collapse;
    width: 80%;
}
th,td{
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
} 
th{
    background-color: #f2f2f2;
}
code{
    background-color:white;
    font-size:14px;
}

blockquote{
    border-left:5px solid grey;
    padding-left:10px;
}
img{
    width:50%;
    margin-left:60px;  
}
@media(max-width:767px){
    .editor-wrap{
        width:80%;
    }
    #preview{
        max-width:40rem;
    }
}
`
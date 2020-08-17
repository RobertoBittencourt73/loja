function moveHome() {
    document.getElementById("navHome").style.marginLeft = "280px";    
}  
function fechaHome() {
    document.getElementById("navHome").style.marginLeft = "-280px";    
} 
function moveCadastro() {
    document.getElementById("navCadastro").style.marginLeft = "280px";    
}  
function fechaCadastro() {
    document.getElementById("navCadastro").style.marginLeft = "-280px";    
}  
function moveRelatorio(){
    document.getElementById("navRelatorio").style.marginLeft = "280px";    
}  
function fechaRelatorio() {
    document.getElementById("navRelatorio").style.marginLeft = "-280px";    
}
function moveCaixa(){
    document.getElementById("navCaixa").style.marginLeft = "280px";    
}  
function fechaCaixa() {
    document.getElementById("navCaixa").style.marginLeft = "-280px";    
}
function cadUser() {
    document.getElementById("cadUser").style.display = "flex"; 
    document.getElementById("cadProds").style.display = "none";    
}
function fechaUser() {
    document.getElementById("cadUser").style.display = "none";    
}
function cadProds() {
    document.getElementById("cadProds").style.display = "block"; 
    document.getElementById("cadUser").style.display = "none";     
}
function fechaProds() {
    document.getElementById("cadProds").style.display = "none";    
}
function novo(bool){
    var input = document.getElementsByTagName('input');
    var input = document.getElementsByTagName('textarea');
    for( var i=0; i<=(input.length-1); i++ )
	{
		if( input[i].type!='button' ) 
			input[i].readOnly = bool;
    }
   /* for( var i=0; i<=(textarea.length-1); i++ )
	{
		textarea[i].readOnly = bool;
	}*/
}

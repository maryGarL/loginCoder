var registrate=document.getElementById('registrate')
registrate.addEventListener("click",function(e){
		e.preventDefault();
var usuario=document.getElementById("usuario").value;
var contrasegna=document.getElementById("contrasegna").value;
function Coder(user,pass){
  this.user=user;
  this.pass=pass;
}
if((usuario.length!=0)&&(contrasegna.length!=0)){
  window.location="post.html"}else{
    alert("Dede completar campos");
  }});

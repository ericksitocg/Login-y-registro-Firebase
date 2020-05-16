const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}	

function ingresarAlerta(){

}

function removerAlerta(){
	let parent = this.parentNode.parentNode.parentNode;
	if(this.value != ""){
		if(parent.children.length >= 2){
			parent.removeChild(parent.childNodes[3]);
		}
	}
	else{
		if(parent.children.length < 2){
			let nodoError = document.createElement("div");
			let textnode = document.createTextNode("Por favor ingrese los datos solicitados");
			nodoError.classList.add("alerta-error")
			nodoError.appendChild(textnode); 
			parent.appendChild(nodoError);
		}
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
	input.addEventListener("blur", removerAlerta);
});
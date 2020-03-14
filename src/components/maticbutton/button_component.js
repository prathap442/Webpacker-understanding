import "./button_component.css"
class ButtonCreator{
   render(){
     let button = document.createElement('button')
     button.name = "simple1"
     button.innerHTML = "Click To See Magic"
     document.querySelector('body').appendChild(button)
     button.onclick = ()=>{
       button.style.backgroundColor = "red"
     }
     button.className = "matic"  
   }  
}

export default ButtonCreator;
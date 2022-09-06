// function GetSelectValue() {
//     var selectedValue = document.getElementById("Bread").value;
//     var selectedresult = document.querySelector(".resust1").value;
//     selectedValue.innerHTML = selectedresult
    
// }
// GetSelectValue();


// first result
{
let selection = document.querySelector('select');
let result = document.querySelector('.result1');
selection.addEventListener('change', () => {
    result.innerText = selection.options[selection.selectedIndex].value;
    console.log(selection.selectedIndex);
});
}








// second result
let shape = document.querySelector('.shape');
let result2 = document.querySelector('.result2')
shape.addEventListener('change', () => {
    let result = document.querySelector('input[name="size"]:checked').value
    result2.innerHTML = ''
    result2.innerHTML = `<span> ${result} cm</span>`

})


// {
//     let btnShow = document.querySelector('button');
//     let result2 = document.querySelector('.result3');
    
//     btnShow.addEventListener('click', () => {
        
        
//         let checkbox = document.querySelector('input[type="checkbox"]:checked');
//         result2.innerText = checkbox.parentElement.textContent; 
//         for(let checkbox = 1; checkbox>=6;checkbox++){
            
//         }
           
//     });
//     }







// third result

function formController(){
    var skillLenghth = document.myform.skill.length;
    var skillValue = "";

    for(i=0; i<skillLenghth; i++){
        var skillChecked = document.myform.skill[i].checked;
        if(skillChecked){
        skillValue += document.myform.skill[i].value+" -";
        }
    }
    var result = "-" +skillValue;

    document.querySelector(".result3").innerHTML = result
}




// {
// let btnShow = document.querySelector('button');
// let result2 = document.querySelector('.result3');
// btnShow.addEventListener('click', () => {
//     let checkbox = document.querySelector('input[type="checkbox"]:checked');
//     result2.innerText = checkbox.parentElement.textContent;    
// });
// }



// four result
function formController2(){
    var skillLenghth1 = document.myform1.skill.length;
    var skillValue1 = "";

    for(i=0; i<skillLenghth1; i++){
        var skillChecked = document.myform1.skill[i].checked;
        if(skillChecked){
        skillValue1 += document.myform1.skill[i].value+" -";
        }
    }
    var result = "-" +skillValue1;

    document.querySelector(".result4").innerHTML = result
}


// five result
let popup = document.getElementById("popup")

function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
}
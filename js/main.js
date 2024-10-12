
 


window.onload =function (){
    let userList= document.querySelector(".do-list");
    let txt_enter=document.querySelector(".txtInput");
    let span_list=document.getElementById("subject");
    const btnEl=document.getElementById("btnSave");

    
    btnEl.addEventListener('click', function(){
      if(txt_enter.value !="" && span_list!=""){
     const newLi =document.createElement('li');
     newLi.classList.add("li_list");
	 const delBtn=document.createElement('Button');
	 delBtn.textContent= "حذف";
	 delBtn.classList.add("btnDel");
     let spanEl =document.createElement('span');
     spanEl.classList.add("spanClass");
     let pEl =document.createElement('p');
     pEl.classList.add("pClass");
     let textEntered=document.createTextNode(txt_enter.value);
     let onvanEntered=document.createTextNode(span_list.value);
     //pEl.textContent= textEntered;
     userList.append(newLi);

     pEl.append(textEntered);
     spanEl.append(onvanEntered);
     newLi.append(spanEl);
     newLi.append(pEl);
     newLi.append(delBtn);
	 delBtn.addEventListener('click',function(){
		 newLi.remove();
	 }
	 );
     txt_enter.value='';
     span_list.value='';
     span_list.style.backgroundColor= "white";
	  }
	  else
		  alert("لطفا هر دو قسمت را تکمیل و سپس مجدد تست کنید.");
	
  });
   
   
   let insertBtn= document.querySelector(".div_enterText");;
  const clearBtn=document.createElement('Button');
	clearBtn.textContent= "حذف تمام لیست";
	 clearBtn.classList.add("btnSave");
	 insertBtn.append(clearBtn);
	 clearBtn.onclick= function(){
		 userList.remove();
	 }
}

function changeColor(){
    let span_list=document.getElementById("subject");
    span_list.style.backgroundColor= "yellow";
}

document.getElementById('btn-sub').addEventListener('click', function(){

  const textAria= document.getElementById('txt-area');
   const valueGet=  textAria.value;
  
   const cmtArea=document.getElementById('newComnt');
   const p= document.createElement('p');
   p.innerText=valueGet;
   cmtArea.appendChild(p);
   textAria.value='';
  
  
  })
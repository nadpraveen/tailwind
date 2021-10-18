document.querySelector('#burger').addEventListener('click', function(){
  if(document.querySelector('#menu').classList.contains('hidden')){
      document.querySelector('#menu').classList.remove('hidden');
  }else{
    document.querySelector('#menu').classList.add('hidden');
  }
})

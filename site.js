(function(){
  var root=document.documentElement;
  requestAnimationFrame(function(){requestAnimationFrame(function(){root.classList.add('ready')})});

  var drafts=document.querySelector('.drafts'),after=document.querySelector('.check-after');
  if(drafts){
    drafts.setAttribute('data-state','idle');
    drafts.addEventListener('click',function(e){
      var b=e.target.closest('.pick');if(!b)return;
      var pick=b.getAttribute('data-pick');
      b.closest('.draft').classList.add('picked');
      drafts.setAttribute('data-state','done');
      after.textContent=pick==='A'
        ?'Верно. Вы проверили по источнику, а не по уверенности текста. На курсе это становится привычкой.'
        :'Черновик Б звучит увереннее, но в нём три выдумки. Именно такие ошибки учимся ловить в первый вечер.';
    });
  }

  function openHash(){
    var id=location.hash.slice(1);if(!/^day-\d$/.test(id))return;
    var d=document.querySelector('#'+id+' details');if(d)d.open=true;
  }
  window.addEventListener('hashchange',openHash);openHash();

  var t=document.querySelector('.grid-toggle');
  if(t)t.addEventListener('click',function(){
    var on=root.classList.toggle('show-grid');
    t.setAttribute('aria-pressed',on);t.textContent=on?'Скрыть сетку':'Показать сетку';
  });
})();

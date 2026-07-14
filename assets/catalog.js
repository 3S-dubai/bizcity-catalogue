// Shared: theme-agnostic lightbox for zoomable photos/videos + smooth in-page nav.
(function(){
  function ready(fn){ if(document.readyState!=='loading'){fn();} else {document.addEventListener('DOMContentLoaded',fn);} }
  ready(function(){
    // smooth scroll for in-page hash links
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click',function(e){
        var id=a.getAttribute('href');
        if(id&&id.length>1&&document.querySelector(id)){ e.preventDefault(); document.querySelector(id).scrollIntoView({behavior:'smooth',block:'start'}); }
      });
    });
    // lightbox
    var lb=document.createElement('div');
    lb.className='lb';
    lb.innerHTML='<button class="lb-close" aria-label="Close viewer">&times;</button><div class="lb-body"></div>';
    document.body.appendChild(lb);
    var body=lb.querySelector('.lb-body');
    function close(){ lb.classList.remove('open'); body.innerHTML=''; }
    lb.addEventListener('click',function(e){ if(e.target===lb||e.target.classList.contains('lb-close')) close(); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });
    document.querySelectorAll('.zoomable').forEach(function(el){
      el.addEventListener('click',function(){
        var src=el.getAttribute('data-full')||el.getAttribute('src')||el.currentSrc;
        if(!src) return;
        var isVid=el.tagName==='VIDEO'||/\.(mp4|webm|mov)$/i.test(src);
        body.innerHTML = isVid ? '<video src="'+src+'" controls autoplay playsinline></video>' : '<img src="'+src+'" alt="">';
        lb.classList.add('open');
      });
    });
  });
})();

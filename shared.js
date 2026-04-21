// Shared bootstrap for subpages
(function(){
  const nav = document.querySelector('.nav');
  if(nav){
    // mark active nav link
    const path = location.pathname.split('/').pop();
    nav.querySelectorAll('a[href]').forEach(a=>{
      const href = a.getAttribute('href');
      if(href === path) a.classList.add('active');
    });
    // hamburger toggle — attach listener whether button is in HTML or needs injecting
    const brand = nav.querySelector('.brand');
    const ul = nav.querySelector('ul');
    if(brand && ul){
      let btn = nav.querySelector('.nav-toggle');
      if(!btn){
        btn = document.createElement('button');
        btn.className = 'nav-toggle';
        btn.setAttribute('aria-label','Toggle navigation');
        btn.setAttribute('aria-expanded','false');
        btn.innerHTML = '<span></span><span></span><span></span>';
        brand.insertAdjacentElement('afterend', btn);
      }
      btn.addEventListener('click', ()=>{
        const open = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      // close menu on link click
      ul.addEventListener('click', (e)=>{
        if(e.target.closest('a')){
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded','false');
        }
      });
    }
  }
  // page entry anim
  document.body.classList.add('page-enter');
})();

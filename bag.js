// Bag renderer — uses real product PNGs with bg removed
// 6 items arranged symmetrically around the Chanel tote, matching the reference layout
(function(){
  const items = [
    {cls:'content-item',    href:'content.html',                    img:'camera.png',     label:'Content'},
    {cls:'skills-item',     href:'skills.html',                     img:'perfume.png',    label:'Skills and Certificates'},
    {cls:'about-item',      href:'about.html',                      img:'lip-gloss.png',  label:'About me'},
    {cls:'events-item',     href:'resume.html',                      img:'mirror.png',     label:'Resume'},
    {cls:'experience-item', href:'experience.html',                 img:'sunglasses.png', label:'Experience'},
    {cls:'contact-item',    href:'contact.html',                    img:'phone-case.png', label:'Contact me'}
  ];

  window.renderBag = function(board){
    if(!board) return;
    board.innerHTML = `
      <div class="bag-center"><img src="assets/purse.png" alt="Chanel tote" class="tote-img"></div>
      ${items.map(it => `
        <a class="bag-item ${it.cls}" href="${it.href}">
          <span class="float">
            <span class="icon-wrap"><img src="assets/${it.img}" alt=""></span>
            <span class="label">${it.label}</span>
          </span>
        </a>
      `).join('')}
    `;
  };
})();

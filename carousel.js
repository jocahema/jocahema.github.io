function galleryMarkup(images,lang){
 const es=lang==='es';
 return `<section id="research-gallery" class="gallery swarm-gallery" aria-label="${es?'Fotografías de investigación':'Research photographs'}"><h2>${es?'En campo y en la comunidad científica':'In the field and the scientific community'}</h2><div class="photo-swarm">${images.map((x,i)=>`<button type="button" class="swarm-photo swarm-${i}" data-photo="${i}" aria-label="${es?'Ampliar':'Enlarge'}: ${esc(x.caption)}"><img src="${esc(x.src)}" alt="${esc(x.caption)}" decoding="async"><span>${esc(x.caption)}</span></button>`).join('')}</div><p class="gallery-hint">${es?'Explora las imágenes · Haz clic para ver la foto completa':'Explore the images · Click to view the full photograph'}</p><dialog class="photo-dialog"><button class="photo-close" type="button" aria-label="${es?'Cerrar fotografía':'Close photograph'}">×</button><img alt=""><p></p></dialog></section>`;
}
function initGallery(root){
 if(!root)return ()=>{};
 const dialog=root.querySelector('dialog');let opener;
 const click=e=>{const button=e.target.closest('[data-photo]');if(button){opener=button;const img=button.querySelector('img');dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.querySelector('p').textContent=img.alt;dialog.showModal();}else if(e.target.closest('.photo-close')||e.target===dialog)dialog.close();};
 const close=()=>opener?.focus();root.addEventListener('click',click);dialog.addEventListener('close',close);
 return ()=>{if(dialog.open)dialog.close();root.removeEventListener('click',click);dialog.removeEventListener('close',close);};
}

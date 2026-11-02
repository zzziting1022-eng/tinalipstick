const filters=document.querySelectorAll('.filter'),cards=document.querySelectorAll('.card');
    filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));btn.classList.add('active');const value=btn.dataset.filter;cards.forEach(card=>card.classList.toggle('hide',value!=='all'&&!card.dataset.kind.split(' ').includes(value)))}));
    let saved=0;document.querySelectorAll('.heart').forEach(btn=>btn.addEventListener('click',()=>{const on=btn.classList.toggle('saved');btn.textContent=on?'♥':'♡';btn.setAttribute('aria-pressed',on);saved+=on?1:-1;document.querySelector('#savedCount').textContent=saved}));
    const toast=document.querySelector('#toast');function showToast(msg){toast.textContent=msg;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}
    document.querySelector('#subscribe').addEventListener('submit',e=>{e.preventDefault();showToast('已收到你的訂閱，謝謝你！');e.target.reset()});

document.body.addEventListener("click",(event)=>{

    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = 'Hi';

    document.body.appendChild(circle);

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x-25}px`
    circle.style.top = `${y-25}px`

    const color = ['red','blue','yellow','green','orange','navy','brown','purple','pink','gray','aqua'];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

    const messages = ['Hi','Hello','Welcome'];
    circle.textContent = messages[Math.floor(Math.random()*messages.length)];

    setTimeout(()=>{
        circle.remove();
    },5000)
})
// Typing Effect
const text = ["Web Developer 💻","Designer 🎨","Game Developer 🎮","Future Tech King 🚀"];
let i=0,j=0,cur="",del=false;

function type(){
    cur=text[i];
    j=del?j-1:j+1;

    document.querySelector(".typing").innerText=cur.substring(0,j);

    if(!del && j==cur.length){del=true;setTimeout(type,1000);return;}
    if(del && j==0){del=false;i=(i+1)%text.length;}

    setTimeout(type,del?50:100);
}
type();


// 🔥 Mouse Glow Effect
document.addEventListener("mousemove", (e)=>{
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
});
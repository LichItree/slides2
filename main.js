let n
atBegin()
setInterval(()=>{
  makeLeave(getN(n))
    .one('transitionend',(e)=>{
      makeEnter($(e.currentTarget))
    })
    makeCurrent(getN(n+1))
    n+=1
},3000)

function atBegin(){
  n=1
  $(`.images>img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function getN(n){
  return $(`.images>img:nth-child(${x(n)})`)
}
function x(n){
  n=n%5
  if(n===0){n=5}
  return n
}
function makeCurrent($node){
  $node.removeClass('enter leave').addClass('current')
  return $node
}
function makeLeave($node){
  $node.removeClass('enter current').addClass('leave')
  return $node
}
function makeEnter($node){
  $node.removeClass('leave current').addClass('enter')
  return $node
}




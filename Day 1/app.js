const removeTransition=(e)=>{
    if(e.propertyName !== 'transform'){
        return
    }
    e.target.classList.remove('playing')
}

function playSound (e){
    const audio = this.document.querySelector(`audio[data-key="${e.key}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.key}"]`)
    key.classList.add("playing")
    if(!audio){return}
    audio.currentTime=0
    audio.play()
}


const keys = Array.from( document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend',removeTransition))
window.addEventListener('keydown',playSound)
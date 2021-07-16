const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

setDate=()=>{
    const now = new Date()
    //Second 
    const second = now.getSeconds()
    const secondDegree = ((second/60) *360)+90
    secondHand.style.transform = `rotate(${secondDegree}deg)`
    //Minute
    const minute = now.getMinutes()
    const minuteDegree =((minute/60)*360)+90
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`

    //Hour
    const hour = now.getHours()
    const hourDegree = ((hour - 12)/12*360)+90
    hourHand.style.transform=`rotate(${hourDegree}deg)`

}

setInterval(setDate,1000)

setDate()
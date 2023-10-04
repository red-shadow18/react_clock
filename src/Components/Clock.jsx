import React from "react";
import styled from '@emotion/styled'

let date = new Date()
let secondDeg=date.getSeconds()*6;
let minuteDeg=date.getMinutes()*6;
let hourDeg=date.getHours()*30 + Math.round(minuteDeg/12);
let secondDig=date.getSeconds();
let minuteDig=date.getMinutes();
let hourDig=date.getHours();
let isAM=true
if(hourDig>12){
    isAM=false
    hourDig=hourDig-12
}

const ClockContainer=styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items:center;

.visibilityHidden {
    visibility: hidden;
}

.clockDial {
    height:300px;
    width: 300px;
    border:10px solid black;
    border-radius:50%;
    position:relative;

    .centralPoint {
        width:20px;
        height:20px;
        border-radius:50%;
        background-color:black;
        position:absolute;
        top:50%;
        left:50%;
        z-index:10;
        transform: translate(-50%, -50%); 
    }
    .hoursContainer {
        font-weight:bold;
    }

    .handsWrapper {
        height:200px;
        width: 300px;
        border-radius:50%;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%); 

        &>div{
            position:absolute;
        }

        #secondHand {
            height:200px;
            width:2px;
            display: flex;
            align-items: flex-start;
            left: 50%;
            transform:rotate(${secondDeg}deg);
        }

        #minuteHand {
            height:160px;
            width:2px;
            display: flex;
            align-items: flex-start;
            left: 50%;
            top:10%;
            transform:rotate(${minuteDeg}deg);
        }

        #hourHand {
            height:120px;
            width:2px;
            display: flex;
            align-items: flex-start;
            left: 50%;
            top:20%;
            transform:rotate(${hourDeg}deg);
        }

        .secHand {
            box-sizing:border-box;
            height:100px;
            width: 4px;
            background-color: black;
            position:absolute;
            z-index:1;
        }
        .minHand {
            box-sizing:border-box;
            height:80px;
            width: 4px;
            background-color: blue;
            position:absolute;
            z-index:2;
        }
        .hrHand {
            box-sizing:border-box;
            height:60px;
            width: 4px;
            background-color: red;
            position:absolute;
            z-index:3;
        }
    }

}

.brandName {
    font-size: 10px;
    font-weight: 600;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.digitalClock {
    display: flex;
    gap: 5px;
    font-weight: 500;
    font-size: 16px;
    top: 55%;
    position: absolute;

    span {
        width: 15px; 
    }
}

`

const HourSpan=styled.span`
transform:rotate(calc(30deg *${(props)=>props.hour || 0}));
position:absolute;
inset:25px;

b {
    transform:rotate(calc((30deg *${(props)=>12-props.hour || 0})));
    position:absolute;
}
`



const Clock=()=>{

    setInterval(()=>{
        date= new Date();

        secondDeg=date.getSeconds()*6
        minuteDeg=date.getMinutes()*6
        hourDeg=date.getHours()*30 + Math.round(minuteDeg/12)

        secondDig=date.getSeconds()
        minuteDig=date.getMinutes()
        hourDig=date.getHours()
        if(hourDig>12){
            isAM=false
            hourDig=hourDig-12
        }

        document.getElementById("secondHand").style.transform=`rotate(${secondDeg}deg)`
        document.getElementById("minuteHand").style.transform=`rotate(${minuteDeg}deg)`
        document.getElementById("hourHand").style.transform=`rotate(${hourDeg}deg)`

        document.getElementById("digitalHr").innerText=hourDig.toString().padStart(2,"0")
        document.getElementById("digitalMin").innerText=minuteDig.toString().padStart(2,"0")
        document.getElementById("digitalSec").innerText=secondDig.toString().padStart(2,"0")
        document.getElementById("digitalSession").innerText=isAM?"AM":"PM"
    },1000)
    return(
        <ClockContainer>
            <div className="clockDial">
            <div className="centralPoint"></div>
            <div className="handsWrapper">
                <div  id="secondHand"><div className="secHand"></div></div>
                <div  id="minuteHand"><div className="minHand"></div></div>
                <div  id="hourHand"><div className="hrHand"></div></div>
            </div>
            <div className="hoursContainer">
                <HourSpan className="individualHour" hour={1}><b>1</b></HourSpan>
                <HourSpan className="individualHour" hour={2}><b>2</b></HourSpan>
                <HourSpan className="individualHour" hour={3}><b>3</b></HourSpan>
                <HourSpan className="individualHour" hour={4}><b>4</b></HourSpan>
                <HourSpan className="individualHour" hour={5}><b>5</b></HourSpan>
                <HourSpan className="individualHour" hour={6}><b>6</b></HourSpan>
                <HourSpan className="individualHour" hour={7}><b>7</b></HourSpan>
                <HourSpan className="individualHour" hour={8}><b>8</b></HourSpan>
                <HourSpan className="individualHour" hour={9}><b>9</b></HourSpan>
                <HourSpan className="individualHour" hour={10}><b>10</b></HourSpan>
                <HourSpan className="individualHour" hour={11}><b>11</b></HourSpan>
                <HourSpan className="individualHour" hour={12}><b>12</b></HourSpan>
            </div>
            </div>
            <span className="brandName">Red Shadow</span>
            <div className="digitalClock">
                <span id="digitalHr">{hourDig.toString().padStart(2,"0")}</span>:
                <span id="digitalMin">{minuteDig.toString().padStart(2,"0")}</span>:
                <span id="digitalSec">{secondDig.toString().padStart(2,"0")}</span>
                <span id="digitalSession">{isAM?"AM":"PM"}</span>
                
            </div>
        </ClockContainer>
    )
}

export default Clock;
import React, { Fragment } from "react";
import styled from '@emotion/styled'
import hands from "../Assests/hands.png"
import flyingButterfly from "../Assests/flyingButterfly.gif"

let chotuKaBday=new Date("21 Nov 2023 0:0:0").getTime()
let currentDate=new Date().getTime()
let distance=(chotuKaBday-currentDate)/1000
let leftDays=parseInt(distance/(24*60*60))
distance %=(24*60*60)
let leftHours=parseInt(distance/(60*60))
distance %=(60*60)
let leftMins=parseInt(distance/60)
let leftSecs=parseInt(distance%60)


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
height:60vh;
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
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.digitalClock {
    display: flex;
    gap: 5px;
    font-weight: 500;
    font-size: 16px;
    top: 35%;
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
const CountDownContainer=styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    table,th,td {
        border:1px solid black;
        border-collapse: collapse;
    }

    th {
        padding:5px;
    }
`

const ButterflyAnimationContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:30vh;
    margin-top:10px;
    .sky{
        position: relative;
        height:100%;
        width:300px;
        background:linear-gradient(180deg, #178ce8, #bfe2ff 85%, transparent);
    }
    .chotuKeHands{
        height:100%;
        overflow: visible;
        img {
            width: 100%;
            transform: translate(-50%, 0%);
            position: absolute;
            top: 50%;
            left: 50%;
        }
    }
    .flyingButterflies{
        position: absolute;
        top:0;
        z-index:2;
        scale:1.2
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


    setInterval(()=>{

        distance=(chotuKaBday-currentDate)/1000
        currentDate=new Date().getTime()
        leftDays=parseInt(distance/(24*60*60))
        distance %=(24*60*60)
        leftHours=parseInt(distance/(60*60))
        distance %=(60*60)
        leftMins=parseInt(distance/60)
        leftSecs=parseInt(distance%60)


        document.getElementById("leftDays").innerText=leftDays.toString().padStart(2,"0")
        document.getElementById("leftHours").innerText=leftHours.toString().padStart(2,"0")
        document.getElementById("leftMins").innerText=leftMins.toString().padStart(2,"0")
        document.getElementById("leftSecs").innerText=leftSecs.toString().padStart(2,"0")
    },1000)

    return(<Fragment>
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
        <CountDownContainer className="countDownTimer">
            <p>Chotu ka b'day in:</p>
                <table>
                    <tr>
                        <th>Days</th>
                        <th>Hours</th>
                        <th>Minutes</th>
                        <th>Seconds</th>
                    </tr>
                    <tr>
                        <td id="leftDays">{leftDays}</td>
                        <td id="leftHours">{leftHours}</td>
                        <td id="leftMins">{leftMins}</td>
                        <td id="leftSecs">{leftSecs}</td>
                    </tr>
                </table>
        </CountDownContainer>
        <ButterflyAnimationContainer>
        <div className="sky">
        <div className="chotuKeHands">
        <img height={"100%"} src={hands} alt="hands"/>
        </div>
        <div className="flyingButterflies">
        <img width="300px" src={flyingButterfly} alt="flyingButterfly"/>
        </div>
        </div>
        </ButterflyAnimationContainer>
        </Fragment>
    )
}

export default Clock;
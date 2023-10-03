import React from "react";
import styled from '@emotion/styled'

const ClockContainer=styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items:center;

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
        }

        #minuteHand {
            height:160px;
            width:2px;
            display: flex;
            align-items: flex-start;
            left: 50%;
            top:10%;
        }

        #hourHand {
            height:120px;
            width:2px;
            display: flex;
            align-items: flex-start;
            left: 50%;
            top:20%;
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
let secondDeg=0;
let minuteDeg=0;
let hourDeg=0;
let date = new Date()

const Clock=()=>{

    setInterval(()=>{
        date= new Date();
        secondDeg=date.getSeconds()*6
        minuteDeg=date.getMinutes()*6
        hourDeg=date.getHours()*30 + Math.round(minuteDeg/12)
        document.getElementById("secondHand").style.transform=`rotate(${secondDeg}deg)`
        document.getElementById("minuteHand").style.transform=`rotate(${minuteDeg}deg)`
        document.getElementById("hourHand").style.transform=`rotate(${hourDeg}deg)`
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
        </ClockContainer>
    )
}

export default Clock;
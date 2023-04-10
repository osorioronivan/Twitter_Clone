import tweetsData from "./data.js";

const txtweet = document.getElementById('txtTweet')
const btnTweet = document.getElementById('btn-tweet')

btnTweet.addEventListener('click', ()=>{
    console.log(txtweet.value)
    txtweet.value = ""
})
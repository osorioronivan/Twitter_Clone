import tweetsData from "./data.js";

const txtweet = document.getElementById('txtTweet')
const btnTweet = document.getElementById('btn-tweet')
const container = document.getElementById('Feed')

btnTweet.addEventListener('click', ()=>{
    console.log(txtweet.value)
    txtweet.value = ""
}) 

function getFeedHtml(){
    let feedHTML = ''
    tweetsData.forEach((tweetData)=>{
        feedHTML += `<div class="row tweet-feed justify-content-center ">
        <div class="col-1 d-flex p-0 flex-column align-content-between justify-content-between mt-1" >
                <div class="profile-holder align-self-center">
            076        <img class="profile-img" src="${tweetData.profilePic}" alt="">
                </div>
                <span class="border-below  mt-4 mb-3"></span>
        </div>
        <div class="col-5 d-flex p-0 flex-column align-content-center mt-1">
            <p class="tweet-handle">${tweetData.handle}</p>
            <p class="tweet-text">
               ${tweetData.tweetText}
            </p>
            <div class="tweet-controls d-flex justify-content-around">
                <button class="btn-comment">
                    <span>${tweetData.replies.length}</span>
                    <i class="fa-regular fa-comment fa-lg"></i>
                </button>
                <button class="btn-heart">
                    <span>${tweetData.likes}</span>
                    <i class="fa-regular fa-heart fa-lg"></i>
                </button>
                <button class="btn-retweet">
                    <span>${tweetData.retweets}</span>
                    <i class="fa-solid fa-retweet fa-lg"></i>
                </button>
            </div>
            <span class="border-below mt-2 mb-3"></span>
        </div>
    </div>`
    })
   return feedHTML
}
const renderTweets=()=>container.innerHTML += getFeedHtml()

renderTweets()
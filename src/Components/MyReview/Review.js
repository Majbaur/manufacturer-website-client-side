import React from 'react';
import './MyReview.css'

const Review = () => {
    const btn = document.querySelector("button");
        const post = document.querySelector(".post");
        const widget = document.querySelector(".star-widget");
        const editBtn = document.querySelector(".edit");
        btn.onclick = ()=>{
          widget.style.display = "none";
          post.style.display = "block";
          editBtn.onclick = ()=>{
            widget.style.display = "block";
            post.style.display = "none";
          }
          return false;
        }
    return (
        <div class="container review">
        <div class="post">
          <div class="text">Thanks for rating us!</div>
          <div class="edit">EDIT</div>
        </div>
        <div class="star-widget">
          <input type="radio" name="rate" id="rate-5"></input>
          <label for="rate-5" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-4"></input>
          <label for="rate-4" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-3"></input>
          <label for="rate-3" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-2"></input>
          <label for="rate-2" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-1"></input>
          <label for="rate-1" class="fas fa-star"></label>
          <form action="#">
            <header></header>
            <div class="textarea">
              <textarea cols="30" placeholder="Describe your experience.."></textarea>
            </div>
            <div class="btn">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Review;
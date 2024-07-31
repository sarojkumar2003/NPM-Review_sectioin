function createReview(){const username=prompt("Enter your username:");if(username){const reviewText=prompt("Enter your review:");if(reviewText){const review={id:Date.now(),username:username,text:reviewText};const reviews=JSON.parse(localStorage.getItem('reviews')||'[]');reviews.push(review);localStorage.setItem('reviews',JSON.stringify(reviews));displayReviews()}}}
function deleteReview(id){let reviews=JSON.parse(localStorage.getItem('reviews')||'[]');reviews=reviews.filter(review=>review.id!==id);localStorage.setItem('reviews',JSON.stringify(reviews));displayReviews()}
function displayReviews(){const reviewsContainer=document.getElementById('reviews');reviewsContainer.innerHTML='';const reviews=JSON.parse(localStorage.getItem('reviews')||'[]');reviews.forEach(review=>{const reviewElement=document.createElement('div');reviewElement.className='review';reviewElement.innerHTML=`
                    <div class="review-header">
                        <span class="username">${review.username}</span>
                    </div>
                    <div class="review-content">${review.text}</div>
                    <button onclick="deleteReview(${review.id})">Delete</button>
                `;reviewsContainer.appendChild(reviewElement)})}
displayReviews()


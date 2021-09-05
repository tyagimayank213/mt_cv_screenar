console.log("This is cv screener js file");
let result;
let candidates;
function getData() {
    url = "https://randomuser.me/api/?results=5";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        // console.log(data);
        let result = data.results;
        console.log(result)
        function cvIterator(profiles) {
            let nextIndex = 0;
            return {
                next: function () {
                    return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
                }
            }
        }
        const candidates = cvIterator(result);
        nextCV();
        //Button Listener for next button
        const next = document.getElementById('next');
        next.addEventListener('click', nextCV);
        
        function nextCV() {
            let currentCandidate = candidates.next().value;
        
            let image = document.getElementById('image');
            let profile = document.getElementById('profile');
            if (currentCandidate != undefined) {
                image.innerHTML = `<img class="my-4" src="${currentCandidate.picture.large}">`;
                profile.innerHTML = `<ul class="list-group my-3">
            <li class="list-group-item">Username : ${currentCandidate.login.username} framework</li>
            <li class="list-group-item">Name : ${currentCandidate.name.title}. ${currentCandidate.name.first} ${currentCandidate.name.last}</li>
            <li class="list-group-item">Age : ${currentCandidate.dob.age} years old</li>
            <li class="list-group-item">Location : ${currentCandidate.location.city}, ${currentCandidate.location.state}</li>
            <li class="list-group-item">Email : ${currentCandidate.email}</li>
          </ul>`;
            }
            else {
                alert("End of candidate application");
                window.location.reload();
            }
        }
        
    })
}
getData();

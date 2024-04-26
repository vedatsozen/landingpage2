$(document).ready(function() {

    $(".homelink").click(() => {
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 500);
    });

    $(".learnlink").click(() => {
        $('html, body').animate({
            scrollTop: $("#learn").offset().top 
        }, 500);
    });

    $(".contactlink").click(() => {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    });

})

let tutorials = [
    {
        title:"Title 1",
        detail:"Detail 1",
        photo:"imgs/tutorials/tutorial1.jpg"
    },
    {
        title:"Title 2",
        detail:"Detail 2",
        photo:"imgs/tutorials/tutorial2.jpg"
    },
    {
        title:"Title 3",
        detail:"Detail 3",
        photo:"imgs/tutorials/tutorial3.jpg"
    },
    {
        title:"Title 4",
        detail:"Detail 4",
        photo:"imgs/tutorials/tutorial4.jpg"
    },
    {
        title:"Title 5",
        detail:"Detail 5",
        photo:"imgs/tutorials/tutorial5.jpg"
    },
    {
        title:"Title 6",
        detail:"Detail 6",
        photo:"imgs/tutorials/tutorial6.jpg"
    },
    {
        title:"Title 7",
        detail:"Detail 7",
        photo:"imgs/tutorials/tutorial7.jpg"
    },
    {
        title:"Title 8",
        detail:"Detail 8",
        photo:"imgs/tutorials/tutorial8.jpg"
    }
]

tutorials.map(tutorial => {
    let tutorialsElement = document.getElementById("tutorials");

    tutorialsElement.innerHTML += `
        <div class="tutorial" style="background-image: url(${tutorial.photo}); background-size: 100% 100%; background-repeat: no-repeat;">
        <div>    
            <h1>${tutorial.title}</h1>
            <p>${tutorial.detail}</p>
        </div>
        </div>
    `;
});

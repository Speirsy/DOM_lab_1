document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    title.textContent = "Our DOM destroyed";

    // const newRedP = document.createElement('p');
    // newRedP.textContent = "Hey I'm Red";
    //  //tried using the title and a console.log for some reason.
    
    const container = document.querySelector('#container');

     const newRedP = document.createElement('p');
     newRedP.textContent = "Hey I'm Red";
     container.setAttribute('id', 'red')
     container.appendChild(newRedP)    
     
    const newBlueH = document.createElement('h3');
    newBlueH.textContent = "I'm a Blue h3"
    container.setAttribute('id', 'blue')
    container.appendChild(newBlueH)


    // now both are blue

    // const newDiv = document.createElement('div');
    // newDiv.classList.add('pink-div)');
    // const innerH1 = document.createElement('h1');
    // innerH1.textComment = "I'm in a div";
    // const innerP = document.createElement('h1');
    // innerP.textComment = "Me too";
    // container.setAttribute('id', 'red')
    // container.appendChild(innerH, innerP);

    // //meh. I new container was wrong 

    const pinkDiv = document.createElement('div');
    pinkDiv.classList.add('pink-div');
    container.appendChild(pinkDiv);

    const newH1 = document.createElement('h1');
    newH1.textContent = "I'm in a div";
    pinkDiv.appendChild(newH1)

    const newP = document.createElement('p');
    newP.textContent = "ME TOO!!";
    pinkDiv.appendChild(newP)

    //I didn't think to try to append pinkDiv variable.
    //I do like having the solutions to hand. I try to use them as resposibly as possible! Honest Guv. 

    const favouriteFoods = ["chips", "cheese", "gravy"]
    
    const newDiv = document.createElement('div');
    newDiv.textContent = "My Favourite Foods";
    container.appendChild(newDiv);

    foods = 
    for(food of favouriteFoods)


    






})
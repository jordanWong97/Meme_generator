let topText = document.getElementById('top'),
bottomText = document.getElementById('bottom'),
image = document.getElementById('image'),
submit = document.getElementById('submit'),
memes = document.getElementById('memes');


//generate meme function

function createImg(){
  //declare
      let meme = document.createElement('div');
      let memeImage = document.createElement('img');
      let topBox = document.createElement('div')
      let topT = document.createElement('div');
      let bottomBox = document.createElement('div')
      let bottomT = document.createElement('div');
      let newMemes = document.getElementById('memes');



  //overlay
      let overlay = document.createElement('div');
      overlay.classList.add('overlay');
  //remove
      let remove = document.createElement('btn');
      remove.innerHTML = 'X';

  //set values
      memeImage.src = image.value;
      topBox.classList.add('topBox');
      topT.classList.add('top_text');
      topT.innerHTML = topText.value.toUpperCase();
      bottomBox.classList.add('bottomBox')
      bottomT.classList.add('bottom_text');
      bottomT.innerHTML = bottomText.value.toUpperCase();

  //put everything in meme
      meme.classList.add('meme');
      meme.appendChild(topBox);
      topBox.appendChild(topT);
      meme.appendChild(bottomBox);
      bottomBox.appendChild(bottomT)
      meme.appendChild(memeImage);
      meme.appendChild(overlay);
      overlay.appendChild(remove);


  //placement
      newMemes.appendChild(meme);

  //reset inputs
      document.getElementById('image').value = '';
      document.getElementById('top').value = '';
      document.getElementById('bottom').value = '';

  //remove meme
      remove.addEventListener('click', function(){
        meme.remove();
      })



 }



 //submit click

 submit.onclick = createImg;

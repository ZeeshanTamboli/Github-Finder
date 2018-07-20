//Init Github
const github = new GitHub();
//Init UI
const ui = new UI();

//Search Input
const searchUser = document.getElementById('searchUser');

//Search Input event listener
searchUser.addEventListener('keyup', async e => {
  //Get input text
  const userText = e.target.value;

  if (userText !== '') {
    //Make http request
    const data = await github.getUser(userText);
    if (data.profile.message === 'Not Found') {
      //Show alert
    } else {
      //Show profile
      ui.showProfile(data.profile);
    }
  } else {
  }

  e.preventDefault();
});

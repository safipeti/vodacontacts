export const store = {
  // create a state object to persist actual state
  state: {
    // list of users
    users: [
      {
        "id": 1,
        "name":"Nagy János",
        "email":"janos.nagy@nagyjanos.com",
        "phone":"123-456"
      },
      {
        "id": 2,
        "name":"Kis Emil",
        "email":"emil.kis@kisemil.com",
        "phone":"456-123"
      },
      {
        "id": 3,
        "name":"Sós Emőke",
        "email": "emoke.sos@sosemoke.com",
        "phone":"123-658"
      },
      {
        "id": 4,
        "name":"Fekete Péter",
        "email": "peter.fekete@feketepeter.com",
        "phone":"123-658"
      },
      {
        "id": 5,
        "name":"Fellegi Mónika",
        "email": "monika.fellegi@fellegimonika.com",
        "phone":"123-658"
      },
      {
        "id": 6,
        "name":"Kardos Márta",
        "email": "marta.kardos@kardosmarta.com",
        "phone":"123-658"
      },
      {
        "id": 7,
        "name":"Karlaki Bendegúg",
        "email": "bendeguz.karlaki@karlakibendeguz.hu",
        "phone":"123-658"
      },
      {
        "id": 8,
        "name":"Veres Eszter",
        "email": "eszter.veres@vereseszter.com",
        "phone":"123-658"
      },
    ]
  },
  // add user to list
  addUser(user){
    this.state.users.push(user);
  },
  // update user
  updateUser(user){
    this.state.users.forEach(u => {
      if(user.id == u.id){
        user.name = u.name;
        user.email = u.email;
        user.phone = u.phone;
      }
    });
  },
  // get single user by its id
  getUser(id){
    return this.state.users.find(user => user.id == id);
  },
  //delete user by its id
  deleteUser(id){
 
    // identify user by its position
    const userIndex = this.state.users.map(user => {return user.id}).indexOf(id);

    // delete user at that position
    this.state.users.splice(userIndex,1);
  } 
}
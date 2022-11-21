import CSS from './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// fetch('http://localhost:3000/api/workouts', {
//   method: 'GET',
// }).then(res => {
//   return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('error'))

// fetch('http://localhost:3000/api/users/me',{
//   method: 'GET',
//   headers: {
//     'Authorization': 'Bearer {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzYzMzRlMzk3OGMwZTBjM2U2YmIzNiIsImlhdCI6MTY2ODY5MDc2NywiZXhwIjoxNjcxMjgyNzY3fQ.jS3YKuEZSSoeE-SotqtQliq51HVbjvbBHZ9wnNaO3R4}'
//   }
//   }).then(res => {
//   return res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('error'))



function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>
        Welcome to the Workout planner.
        </h1>
        <h2>Login</h2>
      </header>
    </div>
  );
}
 
async function handleSubmit(e){
  try {

  e.preventDefault();
    let email = document.getElementById("email_value").value
    let password = document.getElementById("password_value").value

    {
      const rawResponse = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password})
    });
    console.log(rawResponse)
    const content = await rawResponse.json();
    console.log(content)
    

    // if (content){
    //   Redirect(content)
    // }
    
  }
}
 catch (err){
    console.log(err)
 }

};

function Redirect(){
    return (
      window.location.assign('workout.html')
    ) 
}


// user_login = {
//   val: ""
// };
// value={this.state.user_login}
function UserRegistration(){
  return (
    <div className="Form container">
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control id="email_value" type="email" placeholder="Enter email"/>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control id= "password_value" type="password" placeholder="Enter password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>    
    </div>
  )
}

// function fetchWorkout(){
//   return(
//     console.log(fetch('http://localhost:3000/api/workouts/'))
//   )
// }

export  {App, UserRegistration};

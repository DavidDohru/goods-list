import React , {  useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { FormControl } from './Components/FormControl/FormControl';
import { Button, CloseButton, Image } from 'react-bootstrap';
import { ListOfGoods } from './Components/ListOfGoods/ListOfGoods.jsx';
import { Switch, Route, Link } from "react-router-dom";
import { Comments } from './Components/Comments/Comments';

if((JSON.parse(localStorage.getItem('array'))) === null) {  // we check whether there are arrays in the                                                      
  localStorage.setItem('array',JSON.stringify([]));         // cache for user storage
}                                                           // if not, we create empty ones 
if(JSON.parse(localStorage.getItem('comments')) === null) {
  localStorage.setItem('comments',JSON.stringify([]));
}
function App() {
  const [listOfUsers,setListOfUsers] = useState((JSON.parse(localStorage.getItem('array'))));          //create all necessary variables for 
  const [listOfComments,setListOfComments] = useState((JSON.parse(localStorage.getItem('comments')))); //further creation of objects (user, comment)
  const [idForDelete , setIdForDelete] = useState(0);                                                  //, and modification of these objects
  const [idRemoveComments,setIdRemoveComments] = useState(0);
  const [nameForDelete,setNameForDelete] = useState(0);
  const [comment, setComment] = useState('');
  const [badLength, setBadLength] = useState(false);

  useEffect(() => 
    setListOfComments(JSON.parse(localStorage.getItem('comments'))),//track changes in the array of comments,
    [idRemoveComments,comment.length,comment]);                     //delete, and length of the comment
                                                                    //and in case of change automatically overwrite the object
  const removeElement = (id) => {
    return localStorage.setItem('array', 
    JSON.stringify(                                                 //Function for deleting card(element) by id click
      listOfUsers.filter(element => element.id !== id)
    )
  );
  }

const removeComments = (id,clearPerson) => {
  if (clearPerson) {
    return localStorage.setItem('comments', 
    JSON.stringify(
      listOfComments.filter(comment => comment.productId !== clearPerson)   //Function for deleting comment by id click
    )                                                                       //Also note that if a card has been deleted
  );                                                                        //, the comments on that card will also be deleted
  }
  return localStorage.setItem('comments', 
    JSON.stringify(
      listOfComments.filter(comment => comment.postId !== id)
    )
  );
}


  return(
    <div>
   <Switch>
    <Route path="/" exact>                         {/* Here we have indicated  */}
      <div>                                        {/* on the main page there will */}
        <Link                                       /* be a button to add new items */
          className="form__product_add"
          to="/modalWindowForm"
        >
          <Button
            variant="outline-primary"
          >
            New Product
          </Button>
        </Link>
        <div className="all__card_container">
          <ListOfGoods
            setListOfUsers={setListOfUsers}            /*Here we passed all the necessary variables*/
            removeElement={removeElement}              /* in order to make a list in a separate component*/
            removeComments={removeComments}
            listOfComments={listOfComments}
            setListOfComments={setListOfComments}
            idForDelete={idForDelete}
            setIdForDelete={setIdForDelete}
            listOfUseres={listOfUsers}
          />
          </div>
        </div>
      </Route>
      <Route path="/modalWindowForm">                           {/*  Here we indicate that the link: */}
        <div className="modal__window-form">                    {/*  /modalWindowForm should be a form */}
          <div className="modal__title-container">              {/*  for adding new cards and also the */}
            Add new card                                        {/* form we made in a separate component */}
              <Link                                              /* as a separate logic */
                to="/"
                exact
              >
                <CloseButton className="card__button-close"/>
              </Link>
            </div>
              <FormControl
                removeComments={removeComments}
                listOfUsers={listOfUsers}
                nameForDelete={nameForDelete}                    /*component with forms */
                setNameForDelete={setNameForDelete}
              />
        </div>
      </Route>
    {
      listOfUsers.map(users => (
      <Route
        key={users.id} 
        path={`/${users.id}`}
        exact
      >
        <Link                                     /*  Here we read users, and make for each */
          to="/"                                  /*  new page in the form of the current link */
          exact                                   /*  + id of each card by means of library router */
          >
          <Button 
            variant="outline-danger"
            className="form__product_back"
          >
            Back
          </Button>
        </Link>
       <Link
         to={`/${users.id}/edit`}                       /*here with the help of a reac router we add*/
       >                                                {/*for each card we create an individual editing page*/}
       <Button
          variant="outline-success"
          className="form__product_edit" 
          onClick={()=> setNameForDelete(users.id)}
        >
          Edit
        </Button>
       </Link>
          <div className="card__full">
            <h1>{users.name}</h1>
            <div className="card__full-container">
              <Image
                rounded
                className="card__full-img"
                alt={users.name}                    //Here is a picture and a  
                src={users.imageUrl}                //full description of the product
              />                                 
              <div>
                Description:
                <p>{users.description}</p>
                <p>Count: {users.count}</p>
                <p>Weight: {users.weight}g</p>
                <p className={users.count? 'in_stock':'not_available'}>
                  {users.count
                    ? 'In stock'
                    :'Not available'
                  }
                </p>
                <p>Size - Width: {users.size.width} Heigth: {users.size.height}</p>
                <Comments
                  idRemoveComments={idRemoveComments}         //here is a separate Comment component
                  comment={comment}                           // in which the logic of adding and deleting
                  removeComments={removeComments}             //comments for each individual user
                  setIdRemoveComments={setIdRemoveComments}
                  badLength={badLength}
                  setComment={setComment}
                  listOfComments={listOfComments}
                  setListOfComments={setListOfComments}
                  setBadLength={setBadLength}
                  users={users}
                />
              </div>
            </div>
          </div>
        </Route>
      ))
    }
    {
      listOfUsers.map(users=> (
        <Route
          key={users.id}                          //here is the form for editing the 
          path={`/${users.id}/`}                  //current item and the back button
        >                                         {/*in case of editing cancellation*/}
            <div className="modal__window-form">
              <Link
                to={`/${users.id}`}
              >
                <Button variant="outline-danger">Back</Button>
              </Link>
              <h2>Edit Form</h2>
              <FormControl
                listOfUsers={listOfUsers}
                nameForDelete={nameForDelete}
                setNameForDelete={setNameForDelete}
              />
            </div>
        </Route>
        ))
      }
    </Switch>
  </div>
  );
}

export default App;

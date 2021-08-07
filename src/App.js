import React , {  useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FormControl } from './Components/FormControl/FormControl';

import { 
  Button,
  Form,
  CloseButton,
  Image
} from 'react-bootstrap';
import { ListOfGoods } from './Components/ListOfGoods/ListOfGoods';
import './App.scss';
import { Switch, Route, Link } from "react-router-dom";
function App() {
  let [listOfUsers,setListOfUsers] = useState((JSON.parse(localStorage.getItem('array'))));
  let [listOfComments,setListOfComments] = useState((JSON.parse(localStorage.getItem('comments'))));
  const [idForDelete , setIdForDelete] = useState(0);
  const [idRemoveComments,setIdRemoveComments] = useState(0);
  const [nameForDelete,setNameForDelete] = useState(0);
  const [comment, setComment] = useState('');
  const [badLength, setBadLength] = useState(false);
  

  useEffect(() => 
    setListOfComments(JSON.parse(localStorage.getItem('comments'))),
    [idRemoveComments,comment.length]);

  const removeElement = (id) => {
    return localStorage.setItem('array', 
    JSON.stringify(
      listOfUsers.filter(x => x.id !== id)
    )
  );
  }

  const addNewComments = (comments="",id) => {
    if(listOfComments.length) {
      return localStorage.setItem('comments',
      JSON.stringify([
        ...listOfComments,
        {
          postId: listOfComments.length + 1,
          productId: id,
          comments,
          date: new Date().toLocaleString()
       }
  ]));
    } else {
      return localStorage.setItem('comments',
      JSON.stringify([
        {
          postId: listOfComments.length + 1,
          productId: id,
          comments: comment,
          date: new Date().toLocaleString()
       }
  ]));
    }
  }


const removeComments = (id,clearPerson) => {
  if (clearPerson) {
    return localStorage.setItem('comments', 
    JSON.stringify(
      listOfComments.filter(x => x.productId !== clearPerson)
    )
  );
  }
  return localStorage.setItem('comments', 
    JSON.stringify(
      listOfComments.filter(x => x.postId !== id)
    )
  );
}


  return(
    <div>
   <Switch>
    <Route path="/" exact>
        <div>
        <Link className="form__product_add" to="/modalWindowForm">
        <Button
          variant="outline-primary"
        >
          New Product
        </Button>
      </Link>
          <div className="all__card_container">
            <ListOfGoods
              setListOfUsers={setListOfUsers}
              removeElement={removeElement}
              removeComments={removeComments}
              listOfComments={listOfComments}
              setListOfComments={setListOfComments}
              idForDelete={idForDelete}
              setIdForDelete={setIdForDelete}
              list={listOfUsers}
            />
          </div>
        </div>
      </Route>
    <Route path="/modalWindowForm">
    <div className="modal__window-form">
      <div className="modal__title-container">
        Add new card
          <Link
            to="/"
            exact
          >
            <CloseButton className="card__button-close"/>
          </Link>
        </div>
          <FormControl
            listOfUsers={listOfUsers}
            nameForDelete={nameForDelete}
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
        <Link  
          to="/"
          exact
          >
          <Button 
            variant="outline-danger"
            className="form__product_back"
          >
            Back
          </Button>
        </Link>
       <Link
         to={`/${users.id}/edit`}
       >
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
                alt={users.name} 
                src={users.imageUrl}
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
                <ul>{listOfComments
                .filter(item => item.productId === users.id)
                  .map((comment,index) => {
                  if (users.id === comment.productId) {
                    return(
                    <Fragment key={comment.id}>
                      Comment #{index + 1 }<div>By user id : {users.id}</div>
                      <li className="card__full-list_comments">
                        <div className="card__full-list_item">{comment.comments}</div>
                        <CloseButton
                          onClick={()=> {
                            removeComments(comment.postId);
                            setIdRemoveComments(comment.postId);
                          }}
                        />
                      </li>
                    </Fragment>
                    )
                  }
                })}</ul>
                <div className="card__full-contol_block">
                  <Form.Control
                    isInvalid={(badLength) && true}
                    isValid={(comment)&& true}
                    as="textarea" rows={3}
                    onChange={({target})=> {
                      setComment(target.value);
                      if (target.value.length) {
                        setBadLength(false);
                      }
                    }}
                    value={comment}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a comment (minimal length = 1).
                  </Form.Control.Feedback>
                  <Button
                    onClick={() => {
                      if(comment.length >= 1) {
                        addNewComments(comment, users.id);
                        setComment('');
                        setBadLength(false);
                      } else {
                        setBadLength(true);
                        }
                    }}
                  >
                    Add comment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Route>
      ))
    }
    {
      listOfUsers.map(users=> (
        <Route
          key={users.id} 
          path={`/${users.id}/`}
        >
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

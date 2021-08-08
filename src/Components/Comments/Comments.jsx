import React , { useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Button,
  Form,
  CloseButton,
} from 'react-bootstrap';
import { commentsPropTypes } from './commentsPropTypes';

export const Comments = ({
  idRemoveComments,
  comment,
  setIdRemoveComments,
  badLength,
  setComment,
  setBadLength,
  users,
  removeComments,
  listOfComments,
  setListOfComments,
}) => {
 
  useEffect(() => 
    setListOfComments(JSON.parse(localStorage.getItem('comments'))) //here we track changes in comments
    ,[idRemoveComments,comment.length]);

    const addNewComments = (comments="",id) => {  //it's funky to add and update a comment
      if (listOfComments.length) { 
        return localStorage.setItem('comments',
          JSON.stringify([
          ...listOfComments,
          {
            postId: listOfComments[listOfComments.length - 1].postId + 1, //here we save all previous comments
            productId: id,                                                //and add a new one, the id of the comment
            comments,                                                     //is equal to the id of the last element + 1,
            date: new Date().toLocaleString()                             //this allows to make each id unique for each
          }                                                                //element and to prevent problems in further 
        ]));                                                                  //use of the program.
      } else {
      return localStorage.setItem('comments',
      JSON.stringify([
        {
          postId: 1,
          productId: id,
          comments: comment,                    //here we add the comment object itself
          date: new Date().toLocaleString()
        }
      ]));
    }
  }

  return (
    <>
      <ul>
        {
          listOfComments
            .filter(item => item.productId === users.id)
              .map((comment,index) => {
                if (users.id === comment.productId) {
                  return (
                    <Fragment key={comment.postId}>
                      Comment #{index + 1 }
                      <div> By user id : {users.id}</div>                                {/* Here we review the list of comments*/}      
                      <li className="card__full-list_comments">                          {/* + check the comments of a particular*/}
                        <div className="card__full-list_item">{comment.comments}</div>    {/* user to view his comments */}
                        <CloseButton
                          onClick={()=> {                            //When we click on the cross, we delete the comment
                            removeComments(comment.postId);          // and add it to the IdRemoveComments variable in order
                            setIdRemoveComments(comment.postId);     //to track the changes in the state and use useEffect
                          }}                                         // to immediately redo the changes.
                        />
                      </li>
                    </Fragment>
                    )
                  }

                  return comment;
            })}
        </ul>
        <div className="card__full-contol_block">
          <Form.Control
            isInvalid={(badLength) && true}     //Here it finds the forms we track variables in the form
            isValid={(comment)&& true}          // we write in a state and we do validation on the empty comment
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
            Please enter a comment (minimal length = 1). {/*In case of failed validation, please enter a comment*/} 
          </Form.Control.Feedback>
          <Button
            onClick={() => {
              if (comment.length >= 1) {
                addNewComments(comment, users.id);
                setComment('');                    //Here we add a comment when you click
                setBadLength(false);               // on the button in case of validation
              } else {
                setBadLength(true);
              }
            }}
          >
            Add comment
          </Button>
        </div>
      </>
    );
};

Comments.propTypes = commentsPropTypes;

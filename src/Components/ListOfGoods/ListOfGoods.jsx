import React , { useState } from 'react';
import { useEffect } from 'react';
import { ModalWindowDelete } from '../ModalWindowDelete/ModalWindowDelete';
import { CloseButton, Image, Form,InputGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { listOfGoodsPropTypes } from './listOfGoodsPropTypes';

export const ListOfGoods = ({
  listOfUseres,
  removeElement,
  removeComments,
  setListOfUsers,    //here we accept the parameters
  setListOfComments,
  listOfComments,
}) => {

  const [smShow, setSmShow] = useState(false);
  const [searchCount , setSearchCount] = useState(0);
  const [idForRemove,setIdForRemove] = useState(0);   //All necessary variables for 
  const [searchName, setSearchName] = useState('');   //filtering the list, and other needs


  const filterByName = (array => {
    if (searchName.length) {
      return array.filter(item => item.name.toLowerCase()  //Function for filtering by name
        .includes(searchName.toLowerCase()))
    }
    return array;
  });

  const filterByCount = (array) => {
    if (+searchCount !== 0) {
      return array.filter(item => item.count >= +searchCount);  //Here we filter by the amount of product
    } else {
      return array;
    }
  }

  
  useEffect(() => 
    setListOfUsers(JSON.parse(localStorage.getItem('array')))
   ,[idForRemove]);
   useEffect(()=>                                                       //Here we track changes in the list
     setListOfComments((JSON.parse(localStorage.getItem('comments'))))  // and immediately render the changes
    ,[listOfComments.length])

  return (
  <>
    <div className="form__container">
    <InputGroup>
        <InputGroup.Text>Filter by name</InputGroup.Text>
          <Form.Control
            className='modal__filter-title'
            placeholder="filter by name"                        //input for filtering the list by name
            value={searchName}
            onChange={({ target }) => setSearchName(target.value)}
          />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Filter by count</InputGroup.Text>
          <Form.Control
            className='modal__filter-title'
            type="number"                                               //input for filtering the list by count
            value={searchCount}
            onChange={({ target }) => setSearchCount(target.value)}
          />
      </InputGroup>
    </div>
    {filterByCount(filterByName(listOfUseres)).map((users) => (  //here we read the list and in case of filtering at 
      <div                                             //once we call function for a filtration that it was at once
        key={users.id} 
        className="card"
      >
     <ModalWindowDelete
       smShow={smShow}
       setSmShow={setSmShow}                     //Modal window to confirm 
       removeComments={removeComments}           //publication in individual components
       removeElement={removeElement}
       idForRemove={idForRemove}
       setIdForRemove={setIdForRemove}
       users={users}
     />
        <CloseButton 
          onClick={() => {
            setIdForRemove(users.id);        //Remove the element on the blade on the cross
            setSmShow(true);
          }}
          className="card__button-close"
        />
        <Image
          rounded
          alt={users.name}
          src={users.imageUrl}
          className="card__images"
          />
        <div className="card__container">
          <h3>{users.name}</h3>
          <p className={users.count? 'in_stock':'not_available'}>
            {users.count
              ? 'In stock'                     //Here we repeat each individual card with 
              :'Not available'                 //the ability to go to the information about this card
            }                                        
          </p>
          <p>Count of products:{` ${users.count}`}</p>
          <p>Weight:{` ${users.weight}g`}</p>
        </div>
        <Link
          to={`/${users.id}`}
          className="card__button-info"
        >
          info
        </Link>
      </div>
      ))
      }
    </>
  );
};

ListOfGoods.propTypes = listOfGoodsPropTypes;

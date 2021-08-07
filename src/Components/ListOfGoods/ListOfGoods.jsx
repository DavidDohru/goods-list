import React , { useState } from 'react';
import { useEffect } from 'react';
import { Button, CloseButton, Image, Modal,Form,InputGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";

export const ListOfGoods = ({list,removeElement,removeComments,setListOfUsers,setListOfComments,listOfComments}) => {
  const [smShow, setSmShow] = useState(false);
  const [searchCount , setSearchCount] = useState(0);
  const [idForRemove,setIdForRemove] = useState(0);
  const [searchName, setSearchName] = useState('');


  const filterByName = (array) => {
    if (searchName.length) {
      return array.filter(item => item.name.toLowerCase()
        .includes(searchName.toLowerCase()))
    }
    return array;
  }

  const filterByCount = (array) => {
    if (+searchCount !== 0) {
      return array.filter(item => item.count >= +searchCount);
    } else {
      return array;
    }
  }

  
  useEffect(() => 
    setListOfUsers((JSON.parse(localStorage.getItem('array'))))
      ,[idForRemove]);
   useEffect(()=>
     setListOfComments((JSON.parse(localStorage.getItem('comments'))))
      ,[listOfComments])

  return (
  <>
    <div className="form__container">
    <InputGroup>
        <InputGroup.Text>Filter by name</InputGroup.Text>
          <Form.Control
            className='modal__filter-title'
            placeholder="filter by name"
            value={searchName}
            onChange={({ target }) => setSearchName(target.value)}
          />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Filter by count</InputGroup.Text>
          <Form.Control
            className='modal__filter-title'
            type="number"
            value={searchCount}
            onChange={({ target }) => setSearchCount(target.value)}
          />
      </InputGroup>
    </div>
    {filterByCount(filterByName(list)).map((x)=>(
      <div
        key={x.id} 
        className="card"
      >
    <Modal
      size="sm"
      show={smShow}
      onHide={() => setSmShow(false)}
    >
      <Modal.Header>
      <Modal.Title id="example-modal-sizes-title-sm">
        Are you sure want to delete it ?
        (reload the page after deleting)
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="button__form-container">
      <Button
        variant="danger"
        onClick={() => {
        removeElement(idForRemove);
        setIdForRemove(0);
        removeComments(undefined,x.id); 
        setSmShow(false);
        }}
      >
        Submit
      </Button>
      <Button onClick={() => setSmShow(false)}>Cancel</Button>
    </Modal.Body>
  </Modal>
        <CloseButton 
          onClick={() => {
            setIdForRemove(x.id);
            setSmShow(true);
          }}
          className="card__button-close"
        />
        <Image
          rounded
          alt={x.name}
          src={x.imageUrl}
          className="card__images"
          />
        <div className="card__container">
          <h3>{x.name}</h3>
          <p className={x.count? 'in_stock':'not_available'}>
            {x.count
              ? 'In stock'
              :'Not available'
            }
          </p>
          <p>Count of products:{` ${x.count}`}</p>
          <p>Weight:{` ${x.weight}g`}</p>
        </div>
        <Link
          to={`/${x.id}`} 
          exact
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
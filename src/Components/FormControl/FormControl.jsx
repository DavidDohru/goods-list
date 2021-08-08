import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './FormControl.scss';
import './formControlPropTypes';
import { 
  Form,
  InputGroup,
  Button,
} from 'react-bootstrap';
import { formControlPropTypes } from './formControlPropTypes';

export const FormControl = ({listOfUsers,setNameForDelete,nameForDelete}) => {
  const [cardName , setCardName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [count , setCount] = useState(0);
  const [weight , setWeight] = useState(0);
  const [description, setDescription] = useState('');
  const [widthProduct , setWidthProduct] = useState(0);
  const [heightProduct , setHeightProduct] = useState(0);
  const [badLength , setBadLength] = useState(true);
  const addAndUpdateNewUser = (
    name,
    imageUrl,
    count,
    weight,
    description,
    width,
    height,
    nameForDelete,
  ) => {
    if (listOfUsers.length) {
      return localStorage.setItem('array',
        JSON.stringify([
          ...listOfUsers,
        { 
          description,
          id:  listOfUsers[listOfUsers.length-1].id + 1,
          name,
          imageUrl,
          count,
          weight,
          size:{
            width,
            height,
          }
        }
    ].filter(x =>  {
      if (nameForDelete !== 0) {
        return (x.id !== nameForDelete);
      }
      return x;
    })));
    }
    else {
      return localStorage.setItem('array', JSON.stringify([ { 
        description,
        id: 1,
        name,
        imageUrl,
        count,
        weight,
        size:{
          width,
          height,
        }
      }]));
    }
  }

  return(
  <Form className="Form">
    <Form.Control
      value={cardName}
      isInvalid={cardName? false : true}
      onChange={({target}) => {
        setCardName(target.value);
        if(( imageUrl && target.value && description)) {
          setBadLength(false);
        } else {
          setBadLength(true);
        }
      }}
      placeholder="Enter the card name"
    />
    <Form.Control 
      value={imageUrl}
      isInvalid={imageUrl ? false : true}
      onChange={({target})=> {
        setImageUrl(target.value)
        if((cardName && target.value && description)) {
          setBadLength(false);
        } else {
          setBadLength(true);
        }
      }}
      placeholder="Enter the imageUrl"
    />
    <InputGroup>
      <InputGroup.Text>Count of products</InputGroup.Text>
        <Form.Control
          value={count}
          onChange={({target})=> setCount(target.value)}
          type="number"
        />
      </InputGroup>
    <InputGroup>
      <InputGroup.Text>Weight of products</InputGroup.Text>
        <Form.Control
          value={weight}
          onChange={({target})=> setWeight(target.value)}
          type="number"
        />
      </InputGroup>
    <InputGroup>
      <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control
          isInvalid={description ? false : true}
          value={description}
          onChange={({ target }) => {
            setDescription(target.value);
            if((imageUrl && cardName && target.value)) {
              setBadLength(false);
            } else {
              setBadLength(true);
            }
          }}
        />
      </InputGroup>
    <InputGroup>
      <InputGroup.Text>Width of product</InputGroup.Text>
        <Form.Control
          type="number"
          value={widthProduct}
          onChange={({ target }) => setWidthProduct(target.value)}
        />
      </InputGroup>
    <InputGroup>
      <InputGroup.Text>Height of product</InputGroup.Text>
        <Form.Control
          type="number"
          value={heightProduct}
          onChange={({ target }) => setHeightProduct(target.value)}
        />
      </InputGroup>
      <Link
         disabled={badLength && true}
          to={!badLength && "/"} exact
          onClick={()=>{
            if((cardName && imageUrl && description).length) {
              addAndUpdateNewUser(
                cardName,
                imageUrl,
                count,
                weight,
                description,
                widthProduct,
                heightProduct,
                nameForDelete,
              );
              setImageUrl('');
              setCardName('');
              setWidthProduct(0);
              setHeightProduct(0);
              setDescription('');
              setWeight(0);
              setCount(0);
              setNameForDelete(0);
            }
            setBadLength(true);
        }}
        >
          <Button
            style={{display:"block",width:"100%"}} 
            disabled={badLength && true}>Save</Button>
        </Link>
    </Form>
  );
};
FormControl.propTypes = formControlPropTypes;


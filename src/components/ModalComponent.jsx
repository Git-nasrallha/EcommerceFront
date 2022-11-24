import React  from 'react';
import {useDispatch} from "react-redux";
import {Modal ,Button} from 'react-bootstrap';
import {closeModal} from "../store/reducers/modaleSlice";

const ModalComponent = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal className={props.copClass}
         show={props.show} 
         onHide={props.handleClose?props.handleClose:()=>dispatch(closeModal())} 
         size={props.size}>
        <Modal.Header closeButton>
         {
          props.title?  <Modal.Title> {props.title} </Modal.Title> : null
         }
        </Modal.Header>
        <Modal.Body> 
            {props.children}
        </Modal.Body>
        {
          props.buttons?(
            <Modal.Footer>
              {
                props.buttons.map((btn,index)=>
                  <Button 
                    key={index}
                    variant={btn.variant?btn.variant:"primary"}
                    onClick={btn.click}
                  >
                  {btn.lable}
                </Button>
               )
              }
            </Modal.Footer>
          ):null
        }
        
      </Modal>
    </>
  )
}

export default ModalComponent

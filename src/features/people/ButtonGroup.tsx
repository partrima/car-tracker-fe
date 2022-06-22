import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { destroyPersonAsync } from './PersonSlice';

export default function ButtonGroup(props: any) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleClick(e: any) {
        const payload = {
            person: {
                person_id: props.person_id
            }
        }
        props.dispatch(destroyPersonAsync(payload));
    }


    return <div className="btn-group float-end">
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Deletion confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this person, this action cannot be un-done.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={(e) => handleClick(e)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
        {
            props.editing ?
                <button
                    className="btn btn-danger"
                    onClick={() => props.toggleEditForm()}>Cancel</button>
                :
                <>
                    <button
                        className="btn btn-warning"
                        onClick={() => props.toggleEditForm()}>Edit</button>
                    <button
                        className="btn btn-danger"
                        onClick={handleShow}>Delete</button>
                </>
        }
    </div>;
}

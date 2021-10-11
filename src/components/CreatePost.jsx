import React,{useState} from "react";
import db from "./firebase";
import { Form,Button } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore"; 

const CreatePost = () => {
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");

  const submitPost = async(e) => {
    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);
    setTitle("");
    setContent("");
    e.preventDefault();
  };


  return (
    <div className="container my-4 form-container">
      <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" className="createpost-input">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title..." onChange={(e)=>setTitle(e.target.value)}  value={title}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" className="createpost-textarea" >
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" rows={6} onChange={(e)=>setContent(e.target.value)} value={content} />
          <Button variant="primary" type="submit"  className="submit-btn" onClick={submitPost}>
          Post
        </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
export default CreatePost;


import {
  Box,
  Button,
  Divider,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import "./Comments.css";

const Comments = ({ comments }) => {
  const { id } = useParams();
  const { createComment, deleteComment } = useContext(productsContext);
  const [newComment, setNewComment] = useState("");
  const [value, setValue] = useState(1);
  function handleSave() {
    const comment = {
      text: newComment,
      rating: value,
      product: id,
    };
    createComment(comment, id);
  }
  console.log(newComment);
  return (
    <Box>
      <Box>
        <TextField
          className="comments"
          label="New comment"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />

        <Rating
          className="comments"
          name="simple-controlled"
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <Button variant="outlined" onClick={handleSave}>
          Post
        </Button>
      </Box>
      <Typography variant="h5">Comments: ({comments.length})</Typography>
      <Box>
        {comments.map(item => (
          <Box marginBottom={"20px"}>
            <Typography variant="p">Author: {item.author}</Typography>
            <br />
            <Typography variant="p">Comment: {item.text}</Typography>
            <br />
            <Typography variant="p">Date: {item.create_date}</Typography>
            <br />
            <Typography variant="p">Rating: {item.rating}</Typography>
            <br />
            <br />
            {item.author ? (
              <Button
                onClick={() => deleteComment(item.id, id)}
                color="error"
                variant="contained">
                Delete
              </Button>
            ) : null}
            <Divider variant="inset"></Divider>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Comments;

import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import { CommentsList } from ".";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { id } = useParams();
  const {
    sendRequest,
    status,
    data: loadedComments,
    error
  } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(id);
    setIsAddingComment(false);
  }, [sendRequest, id]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p>No comments added yet...</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={id} onAddedComment={addedCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;

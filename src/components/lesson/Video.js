import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Col } from "react-bootstrap";

import { LessonContext } from "../../contexts/LessonContext";

function Video({ lessonId }) {
  const {
    getLessonByIdx,
    lessonState: { lesson, lessonFindLoading },
  } = useContext(LessonContext);
  let url = "";
  let body = null;
  useEffect(() => {
    getLessonByIdx(lessonId);
  }, [lessonId]);
  if (lessonFindLoading) console.log("loading");
  else {
    url = lesson[0].videoUrl;
    body = (
      <div>
        <iframe
          width="100%"
          height="560px"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2 className="mt-3">{lesson[0].title}</h2>
      </div>
    );
  }

  return <Col sm={9}>{body}</Col>;
}

export default Video;

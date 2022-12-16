import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";

import Video from "../../components/lesson/Video";
import { ChapterContext } from "../../contexts/ChapterContext";
import Chapter from "../../components/chapter/Chapter";

function LeanCourse() {
  let { id, lessonId } = useParams();
  let body = null;
  const {
    getChapterById,
    chapterState: { chaptersFindLoading, chapters },
  } = useContext(ChapterContext);

  useEffect(() => {
    getChapterById(id);
  }, [id]);

  if (chaptersFindLoading) {
  } else {
    body = (
      <>
        {chapters.map((chapter, index) => (
          <Chapter
            chapter={chapter}
            index={index}
            key={index}
            learn={true}
          ></Chapter>
        ))}
      </>
    );
  }
  return (
    <>
      <Row>
        <Video lessonId={lessonId}></Video>
        <Col sm={3}>
          <Accordion defaultActiveKey="0" alwaysOpen>
            {body}
          </Accordion>
        </Col>
      </Row>
    </>
  );
}

export default LeanCourse;

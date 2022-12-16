import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";

import Sections from "../../components/lesson/Sections";
import { ChapterContext } from "../../contexts/ChapterContext";

function ChapterView() {
  let { id } = useParams();
  const {
    getChapterById,
    chapterState: { chaptersFindLoading, chapters },
  } = useContext(ChapterContext);
  useEffect(() => {
    getChapterById(id);
  }, []);

  let body = null;
  if (chaptersFindLoading) {
    body = (
      <>
        <h1>LOADING</h1>
      </>
    );
  } else {
    body = (
      <Accordion alwaysOpen>
        {chapters.map((chapter, index) => (
          <Sections
            key={index}
            chapter={chapter}
            index={index}
            id={id}
          ></Sections>
        ))}
      </Accordion>
    );
  }
  return (
    <>
      <div className="" style={{ height: "130px" }}>
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="">Manager Chapter</h1>
        </div>
        <Link
          to={`/course/id=${id}/addlesson`}
          className="d-flex justify-content-end"
        >
          <Button>ADD NEW CHAPTER</Button>
        </Link>
      </div>

      {body}
    </>
  );
}

export default ChapterView;

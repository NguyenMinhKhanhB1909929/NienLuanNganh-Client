import React, { useEffect } from "react";
import { useContext } from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";

import { AuthContext } from "../../contexts/AuthContext";
import PaginationForm from "../layout/PaginationForm";

function ManagerMember() {
  let queryString = "?page=1";
  queryString = window.location.search;
  const {
    getAllMember,
    authState: { member, userLength },
  } = useContext(AuthContext);
  useEffect(() => {
    getAllMember(queryString);
  }, [queryString]);

  const onLockAccount = () => {
    console.log("lock");
  };

  const onChangePermission = () => {
    console.log("onChangPermission");
  };

  const isLock = true;
  let icon = null;
  if (isLock) {
    icon = (
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="button-tooltip-1">UnLock Account</Tooltip>}
      >
        {({ ...triggerHandler }) => (
          <button
            className="p-2 hover-text border-0"
            {...triggerHandler}
            onClick={onLockAccount}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-unlock-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" />
            </svg>
          </button>
        )}
      </OverlayTrigger>
    );
  } else {
    icon = (
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="button-tooltip-1">Lock Account</Tooltip>}
      >
        {({ ...triggerHandler }) => (
          <button
            className="p-2 hover-text border-0"
            {...triggerHandler}
            onClick={onLockAccount}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-lock-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
          </button>
        )}
      </OverlayTrigger>
    );
  }
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "130px" }}
      >
        <h1 className="">Manager Member</h1>
      </div>
      <Table striped>
        <thead>
          <tr className="text-center">
            <th>STT</th>
            <th>Full Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Rule</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {member.map((user, index) => (
            <tr key={index} className="text-center">
              <td>{index + 1}</td>
              <td>{user.fullname}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {user.rule}

                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-1">change permissions</Tooltip>
                  }
                >
                  {({ ...triggerHandler }) => (
                    <button
                      className="p-2 hover-text border-0 ml-5"
                      {...triggerHandler}
                      onClick={onChangePermission}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-repeat"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                        <path d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                      </svg>
                    </button>
                  )}
                </OverlayTrigger>
              </td>
              <td>{icon}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationForm pageItem={userLength} pageSize={5}></PaginationForm>
    </>
  );
}

export default ManagerMember;

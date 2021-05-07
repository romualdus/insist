import React from "react";

export default function ActivityItem(props) {
  const { user, actionMessage, actionIcon, detail, date } = props.data;

  return (
    <div className="activity__item">
      <div className="activity__item__image" />
      <p className="txt-body">
        {user} <span className="txt-body txt-body--small">{actionMessage}</span>
      </p>
      <p className="activity__item__detail txt-body txt-body--small">
        {detail}
      </p>
      <p className="txt-body txt-body--small">
        <i className={actionIcon} />
        {date}
      </p>
    </div>
  );
}

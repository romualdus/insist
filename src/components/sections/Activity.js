import React, { useState, useEffect } from "react";
import ActivityItem from "../commons/ActivityItem";

export default function Activity() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/romualdus/demo/activity")
      .then(res => res.json())
      .then(result => {
        setData(
          result.map(item => {
            const newData = {
              id: item.id,
              user: item.user,
              detail: item.detail,
              actionMessage: createActionMessage(item.action),
              actionIcon: createActionIcon(item.action),
              date: createLastUpdate(item.date)
            };

            return newData;
          })
        );
      });
  }, []);

  const createActionMessage = action => {
    switch (action) {
      case 1:
        return "commented";
      case 2:
        return "added new video";
      case 3:
        return "shared a document";
      case 4:
        return "unlocked new badge";
      case 5:
        return "uploaded a new video";
      case 6:
        return "like a video";
    }
  };

  const createActionIcon = action => {
    switch (action) {
      case 1:
        return "fas fa-comment";
      case 2:
        return "fas fa-video";
      case 3:
        return "fas fa-file";
      case 4:
        return "fas fa-lock-open";
      case 5:
        return "fas fa-video";
      case 6:
        return "fas fa-heart";
    }
  };

  const createLastUpdate = date => {
    const seconds = Math.floor((Date.now() - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    if (minutes === 0) {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours === 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    }

    const days = Math.floor(hours / 24);
    if (days === 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }

    const weeks = Math.floor(days / 7);
    if (weeks === 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }

    const months = Math.floor(weeks / 4);
    if (months === 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    }

    return `${months} month${months > 1 ? "s" : ""} ago`;
  };

  return (
    <section className="activity">
      <div className="activity__header">
        <h2 className="txt-subtitle">Activity</h2>
        <p>View timeline / Filter Activities</p>
      </div>
      <div className="activity__list">
        {data.map(item => (
          <ActivityItem data={item} />
        ))}
      </div>
    </section>
  );
}

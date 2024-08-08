import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";


console.log('TOPICS', topics);

const TopicList = (props) => {

  const mappedTopics = topics.map((topic) => {
    return <TopicListItem topic={topic} key={topic.id} />
  })


  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {mappedTopics}
    </div>
  );
};

export default TopicList;

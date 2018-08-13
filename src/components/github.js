import React from "react";
import github from "github-paths";

function questionPath(title) {
  const issueTitle = `[${title}] - <put your question here>?`;
  const body = `<!-- Please keep the title of the article in your issue's title! -->`;

  return github("flaque/blog").issue(issueTitle, body);
}

export const SomethingWrong = ({ path }) => (
  <p>
    <a href={github("flaque/blog").edit(path)}>Fix a typo</a>
  </p>
);

export const AskQuestion = ({ title }) => (
  <p>
    <a href={questionPath(title)}>Ask a question</a>
  </p>
);

import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {pullOutIndent} from "styles/constants";

const works: {
  title: string;
  publisher?: string;
  date: Date;
  link?: string;
  description?: React.ReactNode;
}[] = [
  {
    title: "Journalism, independent of the police",
    publisher: "Blog",
    date: new Date("Sept 8 2020"),
    link: "https://leoji.blog/2020/09/journalism-independent-of-the-police/",
  },
  {
    title: "Living as a Revolutionary Act",
    publisher: "Popula",
    date: new Date("Jul 7, 2020"),
    link: "https://popula.com/2020/07/07/living-as-a-revolutionary-act/",
  },
  {
    title: "Remembering Chu Qiu",
    publisher: "North by Northwestern",
    date: new Date("Sept. 26 2016"),
    link: "https://www.northbynorthwestern.com/story/remembering-chu-qiu/",
    description:
      "Written during my time as publisher of the student publication.",
  },
];

export default function Writings() {
  return (
    <ListGroup>
      {works.map(({title, publisher, date, link, description}) => {
        return (
          <ListGroup.Item key={title}>
            <div
              style={{
                textIndent: "-" + pullOutIndent,
                marginLeft: pullOutIndent,
              }}
            >
              <strong>{title}</strong>, <em>{publisher}</em> (
              {Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(date)}
              )
              {link && (
                <React.Fragment>
                  <div className="clearfix" />
                  <a href={link} className="text-primary small">
                    {link}
                  </a>
                </React.Fragment>
              )}
            </div>
            {description && (
              <div
                style={{marginLeft: pullOutIndent}}
                className="text-secondary"
              >
                {description}
              </div>
            )}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

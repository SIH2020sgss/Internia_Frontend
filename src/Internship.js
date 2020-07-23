import React from "react";
import app from "./Firebase";
import $ from "jquery";

export default class Internship extends React.Component {
  componentDidMount() {
    app
      .firestore()
      .collection("internships")
      .onSnapshot(qss => {
        $(".Internship").html("");
        qss.forEach(internship => {
          $(".Internship").append(
            $("<div>").html(
              `<b>${internship.data().t}</b> : <span>${
                internship.data().d
              }</span>`
            )
          );
        });
      });
  }
  render() {
    return (
      <div className="Internships">
        {"hey"}
        <div className="Internship">{""}</div>
      </div>
    );
  }
}

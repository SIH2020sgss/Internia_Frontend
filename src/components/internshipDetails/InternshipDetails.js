import React from "react";
import "./InternshipDetails.scss";
class InternshipDetails extends React.Component {
  render() {
    return (
      <div id="internship-details" className="container-fluid">
        <div className="container">
          <div className="brief-info bg-white rounded shadow-sm my-2 mx-auto p-3">
            <div className="internship-title lead text-left col-12 d-flex flex-row p-1">
              <span>Internship Name</span>
            </div>

            <div className="professor lead col-12  text-left p-1">
              <span className="text-uppercase">Professor</span>
            </div>
            <div className="row col-12 text-muted p-1">
              <div className="col-md-3">
                <i class="fa fa-clock-o" />
                {"  "}
                <span>Duration : 3 months</span>
              </div>
              <div className="col-md-3">
                <i class="fa fa-code" /> {"  "}
                <span>Domain : Web Development</span>
              </div>
              <div className="col-md-3">
                <i class="fa fa-calendar" />
                {"  "} <span>Start Date: 22/6/20</span>
              </div>
            </div>

            <div className="row  text-muted my-2 p-1 d-md-flex other-details">
              <div className=" col-12 col-md-8">
                <button
                  className="btn btn-danger btn-sm border-light
                "
                >
                  Apply Now{" "}
                </button>
              </div>
              <div className="col-12 col-md-4 p-2 row ">
                <span className="px-4 px-md-2 col-12 col-md-6">
                  <span className="font-weight-bold">No of Applications</span> :
                  10
                </span>
                <span className="px-4 px-md-2 col-12 col-md-6 ">
                  <span className="font-weight-bold">Posted on</span> : 22/6/20
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded detailed-info shadow-sm my-4 mx-auto p-3">
            <div className="description py-2">
              <p className="title text-uppercase text-left font-weight-bold">
                Description{" "}
              </p>

              <p className="info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Vitae suscipit tellus mauris a. Vulputate eu scelerisque felis
                imperdiet proin fermentum leo vel. Dolor sit amet consectetur
                adipiscing elit duis tristique sollicitudin. At augue eget arcu
                dictum varius duis at consectetur lorem. Magna sit amet purus
                gravida quis blandit turpis. Convallis a cras semper auctor. Ac
                tortor dignissim convallis aenean et. Diam volutpat commodo sed
                egestas egestas. Varius sit amet mattis vulputate. Commodo
                ullamcorper a lacus vestibulum sed. Mauris commodo quis
                imperdiet massa tincidunt nunc pulvinar. Dui sapien eget mi
                proin sed libero enim sed. Molestie nunc non blandit massa enim
                nec. Vel orci porta non pulvinar neque laoreet suspendisse
                interdum consectetur. Euismod nisi porta lorem mollis aliquam.
                Iaculis nunc sed augue lacus viverra. Sed odio morbi quis
                commodo odio aenean sed adipiscing. Arcu felis bibendum ut
                tristique et. Adipiscing elit ut aliquam purus.{" "}
              </p>
            </div>

            <hr />
            <div className="skills">
              <p className="title text-uppercase text-left font-weight-bold">
                Skills Required
              </p>

              <ul className="list-group list-group-horizontal-lg p-0 m-0">
                <li className="list-group-item list-group-item-primary mr-2 my-2 rounded-lg text-center ">
                  HTML
                </li>
                <li className="list-group-item list-group-item-primary mr-2 my-2 rounded-lg text-center">
                  Javascript
                </li>
                <li className="list-group-item list-group-item-primary mr-2 my-2 rounded-lg text-center">
                  Bootstrap
                </li>
                <li className="list-group-item list-group-item-primary mr-2 my-2 rounded-lg text-center">
                  CSS
                </li>
                <li className="list-group-item list-group-item-primary mr-2 my-2 rounded-lg text-center">
                  ReactJS
                </li>
                <li className="list-group-item list-group-item-primary mr-2 my-2 rounded-lg text-center">
                  MongoDB
                </li>
              </ul>
            </div>

            <hr />
            <div className="openings">
              <p className="title text-uppercase text-left font-weight-bold">
                No of Positions
              </p>
              <p>2</p>
            </div>
            <hr />
            <div className="responsibilities">
              <p className="title text-uppercase text-left font-weight-bold">
                Responsibilities
              </p>
              <ol type="1">
                <li>abc</li>
                <li>def</li>
                <li>ghi</li>
                <li>jkl</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InternshipDetails;

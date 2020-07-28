import React from "react";
import "./Profile.scss";
import { Doughnut } from "react-chartjs-2";

const data1 = {
  labels: ["On going", "Completed", "Applied"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};
const data2 = {
  labels: ["Web Development", "Data Analysis", "Machine Learning"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

class Profile extends React.Component {
  inputResume = () => {
    document.getElementById("resume-input").click();
  };
  render() {
    return (
      <div
        className='container-fluid bg-light mx-auto p-4 min-vh-100'
        id='profile'>
        <div
          className='container shadow-sm mx-auto bg-white p-3 row'
          style={{ borderRadius: "0.9em" }}>
          <div
            className='col-md-2 rounded image-container '
            onClick={() => {
              document.getElementById("profile-input").click();
            }}>
            <img
              className='rounded'
              style={{ width: "20vh" }}
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=='
              alt='default pic'
            />
            <div className='overlay rounded'>
              {/* <i
                id='icon'
                className='fa fa-pencil-square-o'
                aria-hidden='true'
                style={{ fontSize: "1.4em" }}
              /> */}
            </div>
            <div className='d-none'>
              <input type='file' name='profile-pic' id='profile-input' />
            </div>
          </div>
          <div className='col-md-7  my-auto p-3'>
            <p
              className='lead'
              style={{ fontSize: "1.6em", fontWeight: "450" }}>
              Student Name
            </p>
            <p className='text-muted'> Student </p>
          </div>
        </div>
        {/* <div></div> */}
        <div
          className='container shadow-sm mx-auto p-4 bg-white  mt-4'
          style={{ borderRadius: "0.9em" }}>
          <div className='d-flex flex-md-row flex-column '>
            <div className='col'>
              <p className='subtitle text-muted'>Roll Number</p>
              <p className='info'>1814033</p>
            </div>

            <div className='col'>
              <p className='subtitle text-muted'> Year</p>
              <p className='info'>TY</p>
            </div>
          </div>
          <hr />
          <div className='d-flex flex-md-row flex-column mt-3 text-break'>
            <div className='col'>
              <p className='subtitle text-muted'>Email</p>
              <p className='info '>atharva.kitkaru@somaiya.edu</p>
            </div>
            <div className='col'>
              <p className='subtitle text-muted'>Credits Completed</p>
              <p className='info'>7</p>
            </div>
          </div>
          <hr />
          <div className='d-flex flex-md-row flex-column mt-3'>
            <div className='col'>
              <p className='subtitle text-muted'>Department</p>
              <p className='info'>IT</p>
            </div>
          </div>

          <div className='col-12 p-0 my-2'>
            <form className=''>
              <button
                type='button'
                className='btn btn-light text-primary  mx-auto'
                onClick={this.inputResume}>
                <i className='fa fa-chevron-circle-up mr-2' />
                Upload Resume
              </button>
              <div className='resume-section '>
                <input id='resume-input' type='file' />
              </div>
            </form>
          </div>
          <hr />
          <p className='text-muted text-center'>Statistics</p>
          <div className='d-flex flex-md-row flex-column mt-1'>
            <div className='col-md-6 p-0'>
              <Doughnut data={data1} />
            </div>
            <div className='col-md-6 p-0'>
              <Doughnut data={data2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;

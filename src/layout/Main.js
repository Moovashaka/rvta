import React from 'react';

const firstImage ={
  backgroundImage: "url('img/rvtalogo11.jpg')"
};
const secondImage ={
  backgroundImage: "url('img/rvtalogo41.jpg')"
};
const thirdImage ={
  backgroundImage: "url('img/rvtalogo61.jpg')"
};

export default class Main extends React.Component {
  render () {
    return (
      <div>
      <header id="home">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

          </ol>
          <div className="carousel-inner" role="listbox">
          {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
            <div className="carousel-item active " style={firstImage}>
            </div>
            {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
            <div className="carousel-item" style={secondImage}>
            </div>
            {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
            <div className="carousel-item" style={thirdImage}>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>

<br />
{/* <!-- Features Section --> */}

<section id="about">
  <div className="container">
      <div className="row">
      <div className="col-lg-6">
        <h2><i>RIBBLE VALLEY</i> Tyre &amp; Auto Services Ltd</h2>
        <address>Kestor Lane, Longridge, Preston, Lancashire. PR3 3AD <br />
          <b><a href="tel:+44-1772-784000">T: 01772 784000 </a> F: 01772 784008 </b>
        </address>
        <ul>
          <li>Car</li>
          <li>Commercial</li>
          <li>Agricultural</li>
          <li>Fleet</li>
      </ul>
        <p>Trusted by small & medium sized firms and large businesses alike, to deliver a quality, affordable & reliable service. Private car owner or vehicle fleet manager, Ribble Valley Tyre &amp;
          Auto Services are proud to offer an outstanding service to all our customers. Our facilities offer ample parking in the event that your
        car, van repair cannot be completed while you wait.</p>
      </div>
      <div className="col-lg-6">
        <img className="img-fluid rounded" src="img/rvteamphoto.png" alt="car tyres, servicing, exhausts, preston" />
      </div>
      </div>
{/* <!-- /.row --> */}
    </div>
      </section>
      <br />
      <section id="services">

        <div className="card-deck">
        <div className="card">
            <img className="card-img-top" src="img/motbay.png" alt="MOT, steering, suspension, car servicing, longridge preston" />
        <div className="card-body">
          <h4 className="card-title">MOT Testing</h4>
          <p className="card-text"><li>Class IV (Passenger cars up to 8 seats)</li>
          <li>Class VII Pre-checks & MOT's arranged</li>
          <li>MOT re-tests</li>
          <br />
          Your car's MOT test is about checking important parts and systems to ensure they meet the legal standards. Such as
          Brakes, Steering, Tyres, Suspension Components, Exhaust Emissions &amp; Vehicle Safety Systems.
          <br />
          <br />
          Take advantage of our waiting room or leave your vehicle with us and collect later in the day.
        </p>
        <br />
        <a href="#contact" className="btn btn-primary page-scroll">Book Now</a>
      </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="img/tyresrack1.png" alt="tyres, brakes, servicing longridge preston" />
        <div className="card-body">
          <h4 className="card-title">Tyres</h4>

          <p className="card-text">
            <li>All makes &amp; models supplied and fitted</li>
            <li>Commercial &amp; Agricultural Tyres</li>
            <li>Puncture repairs &amp; Tyre checks</li>
            <li>Wheel Alignment, Tracking &amp; Balancing</li>
            <li>Authorised Key Dealer for Toyo Tyres</li>
            <li>Member of the Independent Tyre Distributors Network</li>
            <br />
            We have a huge stock of tyres and can supply, fit &amp; balance your favorite brand or advise on something to suit your budget. </p>
            <p>Why not visit our sister site <a href="http://www.longridgetyres.co.uk" target="_blank" rel="noopener noreferrer">Longridge Tyres</a> for more information. </p>
            <br />
            <a href="http://www.longridgetyres.co.uk" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Longridge Tyres</a>
      </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="img/servicebay.png" alt="car and van servicing preston" />
        <div className="card-body">
          <h4 className="card-title">Servicing</h4>
          <p className="card-text">
            <li>All makes &amp; models serviced and repaired. </li>
            <li>Prestige vehicle servicing.</li>
            <li>Fleet & Commercial servicing &amp; repairs</li>
            <br />
            Since 2002 EU legislation (called Block Exemption) has freed up the car servicing market, giving you the choice of where you have your car serviced (providing manufacturer standards are met).
<br />
<br />
Have your vehicle serviced by the motoring professionals at Ribble Valley Tyre &amp; Auto Services, we take pride in doing the job properly</p>
<br />

<a href="#contact" className="btn btn-primary page-scroll">Book Now</a>
      </div>
      </div>
      </div>
      <br />
      <br />
  </section>
</div>
    );
  }
}

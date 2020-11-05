import React from "react";

import { Image } from "@components";
import styles from "./Schedule.scss";

const Schedule = () => (
  <section className="wrapper">
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="label">The Ceremony</p>
          <h2 className="heading--large">Gereja Katolik<br />
              Santa Monica</h2>
          <p>Jl. Alamanda Sektor 1.2, <br />
            Jl. Komp. Bsd No.1, Rw. Buntu, <br />
            Kec. Serpong, Kota Tangerang Selatan, <br />
            Banten 15318</p>
        </div>
        <div className="col">
          <p className="label">The Reception</p>
          <h2 className="heading--large">Hotel Santika Premiere ICE BSD City</h2>
          <p>Indonesia Convention Exhibition,<br />
             Jalan BSD Grand Boulevard, Pagedangan, <br />
             Tangerang, Banten 15339</p>

        </div>
     </div>
    </div>
  </section>
);

export default Schedule;


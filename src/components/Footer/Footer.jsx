import React from "react";
import "../Footer/footer.css"


export default function Intro() {

  return (
    <div className="footer" fluid={true}>
        <p>Copyright © 2022-{(new Date().getFullYear())} <strong>Jose Castro</strong></p>
    </div>
  );
}
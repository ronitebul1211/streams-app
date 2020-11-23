import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
   return (
      <div>
         Page One
         <Link to="/page-two">Navigate to page two</Link>
      </div>
   );
};

const PageTwo = () => {
   return <div>PageTwo</div>;
};

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <Route path="/" exact component={PageOne} />
            <Route path="/page-two" component={PageTwo} />
         </BrowserRouter>
      </div>
   );
};

export default App;

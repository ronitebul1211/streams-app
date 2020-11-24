import { Component } from "react";

class GoogleAuth extends Component {
   state = { isSignedIn: null };

   componentDidMount() {
      /**
       *  gapi library exist only in window scope, when app running in browser via script (index.html).
       * then specific library section request can be sent, and relevant js will return in response
       * callback function get called when client:auth2 will load to gapi
       */
      window.gapi.load("client:auth2", () => {
         window.gapi.client
            .init({
               clientId: "56569674041-mr6cesqeqb6mplissf1pr406ea7hs3qb.apps.googleusercontent.com",
               scope: "email",
            })
            .then(() => {
               this.auth = window.gapi.auth2.getAuthInstance();
               this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            });
      });
   }

   renderAuthButton() {
      if (this.state.isSignedIn === null) {
         return <div>don't know</div>;
      } else if (this.state.isSignedIn) {
         return <div>signed in</div>;
      } else {
         return <div>signed out</div>;
      }
   }
   render() {
      return <div>{this.renderAuthButton()}</div>;
   }
}
export default GoogleAuth;

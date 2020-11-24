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
               this.auth.isSignedIn.listen(this.onAuthChange);
            });
      });
   }

   onAuthChange = () => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });
   };

   onSignInButtonClick = () => {
      this.auth.signIn();
   };
   onSignOutButtonClick = () => {
      this.auth.signOut();
   };

   renderAuthButton() {
      if (this.state.isSignedIn === null) {
         return null;
      } else if (this.state.isSignedIn) {
         return (
            <button className="ui red google button" onClick={() => this.onSignOutButtonClick()}>
               <i className="google icon">Sign Out</i>
            </button>
         );
      } else {
         return (
            <button className="ui red google button" onClick={() => this.onSignInButtonClick()}>
               <i className="google icon">Sign in with google</i>
            </button>
         );
      }
   }
   render() {
      return <div>{this.renderAuthButton()}</div>;
   }
}
export default GoogleAuth;

# Email & Password Auth

user's email and encrypt password stored in record on DB.  
when user tries to login, email and encrypt password compared  
to DB record, if its identical, user has logged in.

# OAuth

user authenticates with outside service provider (google, facebook, ...)
user authorize app to access their information in service provider server
app get information about user from the provider.  
**OAuth can be used for:**

1. user identification in our app.
2. making action in the service provider on behalf of users

## OAuth for servers

-  results in a token that the server can use to make request on behalf of the user
-  usually used when app needs to access user data when he is not logged in  
   e.g email manager need to access every 10 minutes to check new email and delete spam  
   even if the user didn't logged in

## OAuth for JS browser servers

-  results in a token that the browser app can use to make request on behalf of the user
-  usually used when app needs to access user data while he is logged in

**Flow**

1. user click login with google button
2. google JS library is used to initiate to OAuth process
3. google JS library make auth request to google
4. google display confirmation screen to the user in popup window
5. user accept
6. pop up close
7. google JS library invoke callback in app
8. callback provided with authorization token and profile info to the user

-  if user logged out, google JS library invoke another callback in app

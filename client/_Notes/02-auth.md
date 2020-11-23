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

## OAuth for JS browser servers

-  results in a token that the browser app can use to make request on behalf of the user
-  usually used when app needs to access user data while he is logged in

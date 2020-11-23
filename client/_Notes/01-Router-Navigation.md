# How React Router work ?

-  History: keep track of the address par in browser
-  BrowserRouter: listen to history for changes to the url
-  Route: visible only when the path matches to current url

# How Path get matched ?

```
  <BrowserRouter>
    <Route path="/" component={PageOne} />
    <Route path="/page-two" component={PageTwo} />
  </BrowserRouter>
```

-  http://localhost:3000/ -> display PageOne
-  http://localhost:3000/page-two -> display PageOne + PageTwo

**Why ?**

-  path extracted from address bar,
-  then path of each route tested.
-  if extracted url path **contain** route path -> component render

---

```
  <BrowserRouter>
    <Route path="/" exact component={PageOne} />
    <Route path="/page-two" component={PageTwo} />
  </BrowserRouter>
```

-  http://localhost:3000/ -> display PageOne
-  http://localhost:3000/page-two -> display PageTwo

**Why ?**

-  when exact is equal to true
-  path extracted from address bar,
-  when this route tested
-  it will rendered only if extract url === path

# Link Other Page

## Wrong Navigation

**use an a tag with href="path"**
Why ?

-  browser make new request to path
-  dev server response with index.html
-  Browser receives index.html file dumb old index.html including state data
-  index.html list JS files in script tags, browser download & execute those scripts.
-  app starts up

## Right Navigation

    ```
      <Link to="/page-two">Navigate to page two</Link>
     ```

-  link implementation prevent the default behavior  
   (send get request to index.html) for "popstate" event
-  link use window.history.pushState({}, "/path") to change to url
-  routes listen to url event, when changed path tested,  
   match component render, not match component set to null.

**When App Loaded once -> Single Page APP**

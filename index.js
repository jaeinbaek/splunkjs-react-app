require([
    "splunkjs/mvc",
    "splunkjs/mvc/searchmanager",
    // require our bundle js file
    "/static/app/react/client/build/js/bundle.js",
  ], function (mvc, SearchManager, React) {
    // Start our React.js application and pass props in it 
    React.Index({
      text: "Pass from Splunk to react app anything you need...",
      SearchManager,
      mvc
    });
  
  });
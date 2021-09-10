function Search() {

    var splunkjs = require('splunk-sdk');

    var service = new splunkjs.Service({username: "admin", password: "changed!"});
    service.login(function(err, success) {
        if (err) {
            console.log('err')
            throw err;
        }

        console.log("Login was successful: " + success);
        service.jobs().fetch(function(err, jobs) {
            var jobList = jobs.list();
            for(var i = 0; i < jobList.length; i++) {
                console.log("Job " + i + ": " + jobList[i].sid);
            }
        });
    });
    

    return (
      <div>
        <div>todo-listaa</div>
      </div>
    );
  }
  
  export default Search;
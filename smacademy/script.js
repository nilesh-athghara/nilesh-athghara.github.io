function CloseSession() {
    app.CloseSession();
}

function processDone() {
    app.processDone();
}


function SuccessTraining(param1, param2, param3,param4) {
    app.SuccessTraining(param1, param2, param3,param4);
}


function clearWebBrowser() {
    app.clearWebBrowser();
}

function skipBBps() {
    app.skipBBps();
}



function closeWindow() {
/*var myWindow = window.open("www.google.com", "_self");
  setTimeout (function() {myWindow.close();},1000);*/
     /* var win=window.open('',"_self");
      window.close();*/
      try
      {
        window.close();
      }
      catch(e)
      {
        console.log(e)
      }
            try
            {
              self.close();
            }
            catch(e)
            {
              console.log(e)
            }


}


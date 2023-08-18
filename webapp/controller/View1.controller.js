sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("testuploadxml.controller.View1", {
            onInit: function () {

            },

            handleUploadPress: function(oEvent){


                var fU = this.getView().byId("idFileUploader");
                var domRef = fU.getFocusDomRef();
                var file = domRef.files[0];
                var reader = new FileReader();
            
                reader.onload = function(oEvent) {
                
                var strCSV = oEvent.target.result;
                var arrCSV = strCSV.match(/[\w .]+(?=,?)/g);
                var noOfCols = 6;
                var headerRow = arrCSV.splice(0, noOfCols);
                var data = [];
            
                while (arrCSV.length > 0) {
                  var obj = {};
                  var row = arrCSV.splice(0, noOfCols);
                      
                   for(var i = 0; i < row.lenght; i++) {
                    obj[headerRow[i]] = row[i].trim();
                }
                
                   data.push(obj);
                }
                   };
                
                reader.readAsBinaryString(file);

               /*  var xmlhttp = '';
                 var xmlDoc = '';

                if (window.XMLHttpRequest) {
                    xmlhttp = new XMLHttpRequest();
                 } else {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                 }
         
                 xmlhttp.open("GET", "Sample-XML-Files.xml", false);
                 xmlhttp.send();
                 xmlDoc = xmlhttp.responseXML;
         
                 var x = xmlDoc.getElementsByTagName("CD");
         
                 for ( i = 0; i < x.length; i++) {
         
                     var titleName = x[i].getElementsByTagName("TITLE")[0].innerHTML;
         
                     document.getElementById("text1").innerHTML = titleName ;
                     document.getElementById("text2").innerHTML = titleName ;
                     document.getElementById("text3").innerHTML = titleName ; 
             } */

         
            } 
        }); 
    });

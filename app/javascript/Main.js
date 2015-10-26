/*
Copyright (c) Lightstreamer Srl

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();

var Main = 
{
}

Main.onLoad = function()
{
	// To enable the key event processing
	document.getElementById("anchor").focus();
	
	// Set Default key handler function
	widgetAPI.sendReadyEvent();
	
	require(["LightstreamerClient","Subscription", "StaticGrid"], 
		function(LightstreamerClient,Table, StaticGrid) {
	
	  var client = new LightstreamerClient("http://push.lightstreamer.com","DEMO");  
	 
	  client.addListener({
		onStatusChange: function(newStatus) {  
		  alert(newStatus);
		}
	  });
	  
	  client.connect();
	 
	  var stocksGrid = new StaticGrid("stocks",true);
      stocksGrid.setAutoCleanBehavior(true,false);
      stocksGrid.addListener({
        onVisualUpdate: function(key,info) {
          if (info == null) {
            //cleaning
            return;
          }
          var cold = (key.substring(4) % 2 == 1) ? "#eeeeee" : "#ddddee";
          info.setAttribute("yellow", cold, "backgroundColor");
        }
      });
	 
	  var testTable = new Table("MERGE",["item1","item2","item3"],["stock_name","last_price"]);
	  testTable.setDataAdapter("QUOTE_ADAPTER");
	  testTable.setRequestedSnapshot("yes");
	  
	  testTable.addListener({
		onSubscription: function() {
		  alert("SUBSCRIBED");
		},
		onUnsubscription: function() {
		  alert("UNSUBSCRIBED");
		},
		onItemUpdate: function(obj) {
		  alert(obj.getValue("stock_name") + ": " + obj.getValue("last_price"));
		}
	  });
	  testTable.addListener(stocksGrid);
	  client.subscribe(testTable);
	 
	});
}

Main.onUnload = function()
{

}

Main.MainKeyHandler = function()
{
	var KeyCode = event.keyCode;

	switch(KeyCode)
	{
		case tvKey.KEY_LEFT :
			break;
		case tvKey.KEY_RIGHT :
			break;
		case tvKey.KEY_UP :
			break;
		case tvKey.KEY_DOWN :
			break;
		default :
			break;
	}
}

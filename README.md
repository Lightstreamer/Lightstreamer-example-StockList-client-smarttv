# Lightstreamer StockList Demo Client for Samsung Smart TV in JavaScript #

This demo shows how to use the <b>Lightstreamer JavaScript Client library</b> and the the <b>Samsung Smart TV SDK</b> to create a simple streaming-enabled application.

## Basic StockList Demo for Samsung Samrt TV SDK##

<table>
  <tr>
    <td style="text-align: left">
      &nbsp;<img src="/SSmartTV.png">&nbsp;
    </td>
  </tr>
</table>


This demo displays real-time last price data for 3 stocks, simulated Stock-List data is received from the Lightstreamer Server deployed @ [http://push.lightstreamer.com](http://push.lightstreamer.com).<br>

The demo includes the following client-side technologies:
* A [Subscription](http://www.lightstreamer.com/docs/client_javascript_uni_api/Subscription.html) containing 3 items, subscribed to in <b>MERGE</b> mode feeding a [StaticGrid](http://www.lightstreamer.com/docs/client_javascript_uni_api/StaticGrid.html).

# Build and Run #

Please to run the demo:

* Download and install the [Samsung SMART TV SDK](https://www.samsungdforum.com/Devtools/SdkDownload) (choose the platform of your interest), this example is based on version 4.5 of the SDK.
* Download and install the [Oracle VM Virtual Box](http://www.virtualbox.org/).
* Download and install the [Smart TV SDK Emulator Image for Virtual Box](https://www.samsungdforum.com/Devtools/SdkDownload) and import it in Virtual Box.
* Download the [latest Lightstreamer distribution](http://www.lightstreamer.com/download) and copy the lightstreamer.js file from the Lightstreamer JavaScript Client SDK (that is located under the DOCS-SDKs/sdk_client_javascript/lib folder) into the "app/javascript" folder of this project.
* Download the [require.js](http://requirejs.org/) file and copy it into the "app/javascript" folder of this project.

Once ready, create in eclipse a new <b>Samsung Smart TV JavaScript App Project</b> and overwrite the resources of this project on those newly created.

# Deploy #

In order to run the demo please right-click on the eclipse project and press "Run As" -> "Run Current Project in Samsung Smart TV Emulator". The Emulator will be launched automatically and the demo will be deployed and started as soon as the emulator goes up.<br>

You may run the demo against your local server instead of using our online server @ [http://push.lightstreamer.com:80](http://push.lightstreamer.com:80). The server to which the demo will connect to is configured in the app/javascript/Main.js file. In this case, the example requires that the [QUOTE_ADAPTER](https://github.com/Weswit/Lightstreamer-example-Stocklist-adapter-java) and [LiteralBasedProvider](https://github.com/Weswit/Lightstreamer-example-ReusableMetadata-adapter-java) have to be deployed in your local Lightstreamer server instance. The factory configuration of Lightstreamer server already provides this adapter deployed.

# See Also #

## Lightstreamer Adapters needed by this demo client ##

* [Lightstreamer StockList Demo Adapter](https://github.com/Weswit/Lightstreamer-example-Stocklist-adapter-java)
* [Lightstreamer Reusable Metadata Adapter in Java](https://github.com/Weswit/Lightstreamer-example-ReusableMetadata-adapter-java)

## Similar demo clients that may interest you ##

* [Lightstreamer StockList Demo Client for JavaScript](https://github.com/Weswit/Lightstreamer-example-StockList-client-javascript)
* [Lightstreamer StockList Demo Client for Android](https://github.com/Weswit/Lightstreamer-example-StockList-client-android)
* [Lightstreamer StockList Demo Client for jQuery](https://github.com/Weswit/Lightstreamer-example-StockList-client-jquery)
* [Lightstreamer StockList Demo Client for Dojo](https://github.com/Weswit/Lightstreamer-example-StockList-client-dojo)
* [Lightstreamer StockList Demo Client for Adobe Flex SDK](https://github.com/Weswit/Lightstreamer-example-StockList-client-flex)
* [Lightstreamer StockList Demo Client for Java SE](https://github.com/Weswit/Lightstreamer-example-StockList-client-java)
* [Lightstreamer StockList Demo Client for .NET](https://github.com/Weswit/Lightstreamer-example-StockList-client-dotnet)

# Lightstreamer Compatibility Notes #

- Compatible with Lightstreamer JavaScript Client library version 6.0 or newer.
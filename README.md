Lelesys MultiContent Plugin
======================

This plugin displays content in your websites in many different and pleasant structures.

##### Important note: Initial package development was done when TYPO3 Neos was at alpha3/4. We are working hard continuously to get this to work perfectly and to beautify source code using best practices/concepts of Flow/Neos. Stay tuned!

Quick start
-----------

* include the plugin's Stylesheet to your own one's where you add other stylesheets of the site.

```
<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Styles/MultiContent.css')}" rel="stylesheet" media="screen">
```

* add the plugin content element "Lelesys MultiContent" to the position of your choice.



STEPS TO ADD TAB STRUCTURE INTO YOUR OWN SITE
------------


* include the plugin's Stylesheet to your own one's where you add other stylesheets of the site.

```
<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Styles/MultiContent.css')}" rel="stylesheet" media="screen">
```

* include the plugin's Javascript to your own one's where you add other javascript files of the site.

```
<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/JavaScript/MultiContent.js')}"></script>
<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Library/bootstrap-tab.js')}"></script>
```

* add the plugin content element "Lelesys Tab Structure" to the position of your choice and inside that
plugin add as many "Lelesys Tab Item" plugin as you want with "Text", "Image", "Text with Image" or any
other content elements.

STEPS TO ADD TOGGLE STRUCTURE INTO YOUR OWN SITE
------------------------------------------------

* Js and Css is base on twitter bootstrap, so need to include twitter bootstrap css and js.

* add the plugin content element "Lelesys Toggle Structure" to the position of your choice and inside that
plugin add another plugin "Lelesys Toggle Item" and enter title and text in respected positions.

STEPS TO ADD sLIDER/CAROUSEL STRUCTURE INTO YOUR OWN SITE
------------------------------------------------

* include the plugin's Stylesheets to your own one's where you add other stylesheets of the site.

```
<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Styles/MultiContent.css')}" rel="stylesheet" media="screen">
```

* include the plugin's Javascript to your own one's where you add other javascript files of the site.

```
<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Library/jquery.tinycarousel.min.js')}"></script>
<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/JavaScript/MultiContent.js')}"></script>
```

* add the plugin content element "Lelesys slide Structure" to the position of your choice and inside that
plugin add another plugin "Lelesys slide Item" per slide and add the content into it.

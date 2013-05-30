TYPO3 Neos Lelesys MultiContent Plugin
======================

This plugin displays content in a TYPO3 Neos websites in many different and pleasant structures.

Quick start
-----------

* include the plugin's TypoScript definitions to your own one's (located in, for example, `Packages/Sites/Your.Site/Resources/Private/TypoScripts/Library/ContentElements.ts2`, with:

```
include: resource://Lelesys.Plugin.MultiContent/Private/TypoScripts/Library/NodeTypes.ts2
```

* include the plugin's Stylesheet to your own one's where you add other stylesheets of the site.

```
<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Stylesheets/multicontent.css')}" rel="stylesheet" media="screen">
<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Stylesheets/responsive.css')}" rel="stylesheet" media="screen">
```

* add the plugin content element "Lelesys MultiContent" to the position of your choice.

Steps to add tab structure
------------

* include the plugin's TypoScript definitions to your own one's (located in, for example, `Packages/Sites/Your.Site/Resources/Private/TypoScripts/Library/ContentElements.ts2`, with:

```
include: resource://Lelesys.Plugin.MultiContent/Private/TypoScripts/Library/NodeTypes.ts2
```

* include the plugin's Stylesheet to your own one's where you add other stylesheets of the site.

```
<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Stylesheets/tabs.css')}" rel="stylesheet" media="screen">
```

* include the plugin's Javascript to your own one's where you add other javascript files of the site.

```
<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/JavaScript/tabs.js')}"></script>
```

* add the plugin content element "Lelesys Tab Structure" to the position of your choice and inside that
plugin add as many "Lelesys Tab Item" plugin as you want with "Text", "Image", "Text with Image" or any
other content elements.

Steps to add toogle structure into your own site
------------------------------------------------

* include the plugin's TypoScript definitions to your own one's (located in, for example, `Packages/Sites/Your.Site/Resources/Private/TypoScripts/Library/ContentElements.ts2`, with:

```
include: resource://Lelesys.Plugin.MultiContent/Private/TypoScripts/Library/NodeTypes.ts2
```

* include the plugin's Stylesheets to your own one's where you add other stylesheets of the site.

```
<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Stylesheets/toggle.css')}" rel="stylesheet" media="screen">
```

* include the plugin's Javascript to your own one's where you add other javascript files of the site.

```
<script src="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/JavaScript/toggle.js')}"></script>
```

* include the plugin's Images into your own site's Image folder where you add other images of the site.

* add the plugin content element "Lelesys Toggle Structure" to the position of your choice and inside that
plugin add another plugin "Lelesys Toggle Item" and enter title and text in respected positions.
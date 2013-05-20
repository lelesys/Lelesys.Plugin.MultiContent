TYPO3 Neos Lelesys MultiContent Plugin
======================

This plugin displays content in a TYPO3 Neos websites in many different and pleasant structures.

Quick start
-----------

* include the plugin's TypoScript definitions to your own one's (located in, for example, `Packages/Sites/Your.Site/Resources/Private/TypoScripts/Library/ContentElements.ts2`, with:

```
include: include: resource://Lelesys.Plugin.MultiContent/Private/TypoScripts/Library/NodeTypes.ts2
```

* include the plugin's Stylesheet to your own one's where you add other stylesheets of the site.

```
<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Stylesheets/multicontent.css')}" rel="stylesheet" media="screen">
<link href="{f:uri.resource(path: 'resource://Lelesys.Plugin.MultiContent/Public/Stylesheets/responsive.css')}" rel="stylesheet" media="screen">
```

* add the plugin content element "Lelesys MultiContent" to the position of your choice.
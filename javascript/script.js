$(function(){
    var item_template = $('#results-template').text();
  settings = {
    items            : example_items,
    facets           : {
      'guideline' : {'title': 'Guidelines'},
      'language'  : {'title': 'Languages', 'collapsed': true},
      'assistance': {'title': 'Assistance', 'collapsed': true},
      'platform' : {'title': 'Platform', 'collapsed': true},
      'license' : {'title': 'License', 'collapsed': true},
      'automatic': {'title': 'Automatically checks…', 'collapsed': true},
      'type': {'title': 'Type', 'collapsed': true},
      'checks': {'title': 'Checks', 'collapsed': true},
      'reports': {'title': 'Report Format', 'collapsed': true}
    },
    resultSelector   : '#results',
    facetSelector    : '#facets',
    resultTemplate   : item_template,
    paginationCount  : 8,
    orderByOptions   : {'title': 'Title'},
    facetSortOption  : {},
    facetListContainer : '<ul class=facetlist></ul>',
    listItemTemplate   : '<li><label><input type="checkbox" class="facetitem" aria-pressed="false" id="<%= id %>"> <span><%= name %> <span class="facetitemcount">(<%= count %> Tools)</span></span></label></li>',
    listItemInnerTemplate   : '<span><%= name %> <span class=facetitemcount>(<%= count %> Tools)</span></span>',
    orderByTemplate    : '',
    countTemplate      : '<div class="facettotalcount"><span aria-live="true"><%= count %> Results</span><% if (filters) { %> <span><strong>Selected Filters:</strong> <%= filters.join(", ") %> </span><% } %></div>',
    facetTitleTemplate : '<summary class="facettitle"><%= title %></summary>',
    facetContainer     : '<details <% if (obj.collapsed) { %><% } else { %>open="true"<% } %> class="facetsearch <% if (obj.collapsed) { %><% } else { %>open<% } %>" id="<%= id %>"></details> <%= obj %>',
  };

  // use them!
  $.facetelize(settings);
  // Emulate <details> where necessary and enable open/close event handlers
  $('html').addClass($.fn.details.support ? 'details' : 'no-details');
  $('details').details();
});

var example_items = [{
"title": "Accessibility Wizard",
"creator": "Binary Blue",
"location": "http://www.binaryblue.com.au/access_wizard/",
"release": "2003-06-24",
"version": "1.0",
"language": "English",
"guideline": ["WCAG 1.0"],
"assistance": ["Step-by-step evaluations"],
"platform": ["Flash"],
"license": ["Freeware"],
"type": "Online Tool",
"desc": "The Accessibility Wizard is a tool for web developers and project teams. It breaks down the WAI Checkpoints into individual tasks for each job role in a development team. Every member of a development team is directed to implement the WAI Checkpoints at a specified conformance level (A,AA or AAA). This is a sure way of meeting accessibility conformance. A web client that supports the Flash 6 (or higher) plugin is the minimum requirement to use the wizard."
},
{
"title": "WebXACT",
"creator": "Watchfire",
"location": "http://webxact.watchfire.com/",
"release": "2005-03-14",
"version": "4.0",
"language": ["English", "French (<span lang='fr'>Français</span>)"],
"guideline": ["WCAG 1.0", "Section 508"],
"assistance": ["Automated Checks"],
"automatic": ["Single Web Pages"],
"type": "Online Tool",
"checks": ["HTML", "XHTML"],
"reports": ["HTML"],
"license": ["Freeware"],
"desc": "WebXACT is a free online service that enables users to test single pages of web content for accessibility, quality and privacy issues. Can be integrated into the browser via favelet or similar technology."
},
{
"title":"AccRepair",
"version":"DS2 2005/8.x",
"release": "2005-01-01",
"creator":"HiSoftware",
"location":"http://www.hisoftware.com/access/repair.html",
"desc": "Description: AccRepair by HiSoftware provides for the verification and correction of Accessibility policy and standards required for Web sites. AccRepair supports the WCAG Guidelines at all three levels, as well as Section 508, and through the Usability Test Manager provides usability testing. AccRepair is designed to work as a standalone client or integrated with Microsoft FrontPage, Microsoft Office 2000 and XP. AccRepair includes a Repair Library Editor allowing for team services and automated repairs of common accessibility errors, and all the verification functions of AccVerify, as well as Hi-Caption and metadata management. A developer's kit including API's and sample source code is available to allow extension or integration with other products. AccRepair provides out-of-the-box testing and reporting for Accessibility, Privacy, Metadata and Usability standards. It also allows users to define and conduct custom tests.",
"language": "English",
"guideline": ["WCAG 1.0", "Section 508"],
"assistance": ["Generating Reports", "Step-by-step evaluations", "In-page feedback", "Page transformation"],
"automatic": ["Single Web Pages", "Page groups", "Restricted pages"],
"repair": "Code modification",
"checks": ["CSS", "HTML", "XHTML", "PDF", "SVG"],
"platform": ["Windows",".NET"],
"authoringtools": "FrontPage",
"ide": "Visual Studio",
"reports": ["HTML", "XML", "EARL", "CSV"],
"license": ["Commercial", "Enterprise"]
},
{
"title": "Accessibility Wizard",
"creator": "Binary Blue",
"location": "http://www.binaryblue.com.au/access_wizard/",
"release": "2003-06-24",
"version": "1.0",
"language": "English",
"guideline": ["WCAG 1.0"],
"assistance": ["Step-by-step evaluations"],
"platform": ["Flash"],
"license": ["Freeware"],
"type": "Online Tool",
"desc": "The Accessibility Wizard is a tool for web developers and project teams. It breaks down the WAI Checkpoints into individual tasks for each job role in a development team. Every member of a development team is directed to implement the WAI Checkpoints at a specified conformance level (A,AA or AAA). This is a sure way of meeting accessibility conformance. A web client that supports the Flash 6 (or higher) plugin is the minimum requirement to use the wizard."
},
{
"title": "WebXACT",
"creator": "Watchfire",
"location": "http://webxact.watchfire.com/",
"release": "2005-03-14",
"version": "4.0",
"language": ["French (<span lang='fr'>Français</span>)"],
"guideline": ["WCAG 1.0", "Section 508"],
"assistance": ["Automated Checks"],
"automatic": ["Single Web Pages"],
"type": "Online Tool",
"checks": ["HTML", "XHTML"],
"reports": ["HTML"],
"license": ["Freeware"],
"desc": "WebXACT is a free online service that enables users to test single pages of web content for accessibility, quality and privacy issues. Can be integrated into the browser via favelet or similar technology."
},
{
"title":"AccRepair",
"version":"DS2 2005/8.x",
"release": "2005-01-01",
"creator":"HiSoftware",
"location":"http://www.hisoftware.com/access/repair.html",
"desc": "Description: AccRepair by HiSoftware provides for the verification and correction of Accessibility policy and standards required for Web sites. AccRepair supports the WCAG Guidelines at all three levels, as well as Section 508, and through the Usability Test Manager provides usability testing. AccRepair is designed to work as a standalone client or integrated with Microsoft FrontPage, Microsoft Office 2000 and XP. AccRepair includes a Repair Library Editor allowing for team services and automated repairs of common accessibility errors, and all the verification functions of AccVerify, as well as Hi-Caption and metadata management. A developer's kit including API's and sample source code is available to allow extension or integration with other products. AccRepair provides out-of-the-box testing and reporting for Accessibility, Privacy, Metadata and Usability standards. It also allows users to define and conduct custom tests.",
"language": "English",
"guideline": ["WCAG 1.0", "Section 508"],
"assistance": ["Generating Reports", "Step-by-step evaluations", "In-page feedback", "Page transformation"],
"automatic": ["Single Web Pages", "Restricted pages"],
"repair": "Code modification",
"checks": ["CSS", "HTML", "XHTML", "PDF", "SVG"],
"platform": ["Windows",".NET"],
"authoringtools": "FrontPage",
"ide": "Visual Studio",
"reports": ["HTML", "XML", "EARL", "CSV"],
"license": ["Commercial", "Enterprise"]
},
{
"title": "Accessibility Wizard",
"creator": "Binary Blue",
"location": "http://www.binaryblue.com.au/access_wizard/",
"release": "2003-06-24",
"version": "1.0",
"language": "English",
"guideline": ["WCAG 1.0"],
"assistance": ["Step-by-step evaluations"],
"platform": ["Flash"],
"license": ["Freeware"],
"type": "Online Tool",
"desc": "The Accessibility Wizard is a tool for web developers and project teams. It breaks down the WAI Checkpoints into individual tasks for each job role in a development team. Every member of a development team is directed to implement the WAI Checkpoints at a specified conformance level (A,AA or AAA). This is a sure way of meeting accessibility conformance. A web client that supports the Flash 6 (or higher) plugin is the minimum requirement to use the wizard."
},
{
"title": "WebXACT",
"creator": "Watchfire",
"location": "http://webxact.watchfire.com/",
"release": "2005-03-14",
"version": "4.0",
"language": ["French (<span lang='fr'>Français</span>)"],
"guideline": ["WCAG 1.0"],
"assistance": ["Automated Checks"],
"automatic": ["Single Web Pages"],
"type": "Online Tool",
"checks": ["HTML", "XHTML"],
"reports": ["HTML"],
"license": ["Freeware"],
"desc": "WebXACT is a free online service that enables users to test single pages of web content for accessibility, quality and privacy issues. Can be integrated into the browser via favelet or similar technology."
},
{
"title":"AccRepair",
"version":"DS2 2005/8.x",
"release": "2005-01-01",
"creator":"HiSoftware",
"location":"http://www.hisoftware.com/access/repair.html",
"desc": "Description: AccRepair by HiSoftware provides for the verification and correction of Accessibility policy and standards required for Web sites. AccRepair supports the WCAG Guidelines at all three levels, as well as Section 508, and through the Usability Test Manager provides usability testing. AccRepair is designed to work as a standalone client or integrated with Microsoft FrontPage, Microsoft Office 2000 and XP. AccRepair includes a Repair Library Editor allowing for team services and automated repairs of common accessibility errors, and all the verification functions of AccVerify, as well as Hi-Caption and metadata management. A developer's kit including API's and sample source code is available to allow extension or integration with other products. AccRepair provides out-of-the-box testing and reporting for Accessibility, Privacy, Metadata and Usability standards. It also allows users to define and conduct custom tests.",
"language": "English",
"guideline": ["WCAG 1.0", "Section 508"],
"assistance": ["Generating Reports", "Step-by-step evaluations", "In-page feedback", "Page transformation"],
"automatic": ["Single Web Pages", "Page groups", "Restricted pages"],
"repair": "Code modification",
"checks": ["CSS", "HTML", "XHTML", "PDF", "SVG"],
"platform": ["Windows",".NET"],
"authoringtools": "FrontPage",
"ide": "Visual Studio",
"reports": ["HTML", "XML", "EARL", "CSV"],
"license": ["Commercial", "Enterprise"]
},
{
"title": "Accessibility Wizard",
"creator": "Binary Blue",
"location": "http://www.binaryblue.com.au/access_wizard/",
"release": "2003-06-24",
"version": "1.0",
"language": "English",
"guideline": ["WCAG 1.0", "WCAG 2.0"],
"assistance": ["Step-by-step evaluations"],
"platform": ["Flash"],
"license": ["Freeware"],
"type": "Online Tool",
"desc": "The Accessibility Wizard is a tool for web developers and project teams. It breaks down the WAI Checkpoints into individual tasks for each job role in a development team. Every member of a development team is directed to implement the WAI Checkpoints at a specified conformance level (A,AA or AAA). This is a sure way of meeting accessibility conformance. A web client that supports the Flash 6 (or higher) plugin is the minimum requirement to use the wizard."
},
{
"title": "WebXACT",
"creator": "Watchfire",
"location": "http://webxact.watchfire.com/",
"release": "2005-03-14",
"version": "4.0",
"language": ["English", "French (<span lang='fr'>Français</span>)"],
"guideline": ["WCAG 1.0", "Section 508"],
"assistance": ["Automated Checks"],
"automatic": ["Single Web Pages"],
"type": "Online Tool",
"checks": ["HTML", "XHTML"],
"reports": ["HTML"],
"license": ["Freeware"],
"desc": "WebXACT is a free online service that enables users to test single pages of web content for accessibility, quality and privacy issues. Can be integrated into the browser via favelet or similar technology."
},
{
"title":"AccRepair",
"version":"DS2 2005/8.x",
"release": "2005-01-01",
"creator":"HiSoftware",
"location":"http://www.hisoftware.com/access/repair.html",
"desc": "Description: AccRepair by HiSoftware provides for the verification and correction of Accessibility policy and standards required for Web sites. AccRepair supports the WCAG Guidelines at all three levels, as well as Section 508, and through the Usability Test Manager provides usability testing. AccRepair is designed to work as a standalone client or integrated with Microsoft FrontPage, Microsoft Office 2000 and XP. AccRepair includes a Repair Library Editor allowing for team services and automated repairs of common accessibility errors, and all the verification functions of AccVerify, as well as Hi-Caption and metadata management. A developer's kit including API's and sample source code is available to allow extension or integration with other products. AccRepair provides out-of-the-box testing and reporting for Accessibility, Privacy, Metadata and Usability standards. It also allows users to define and conduct custom tests.",
"language": "English",
"guideline": ["WCAG 1.0", "Section 508"],
"assistance": ["Generating Reports", "Step-by-step evaluations", "Page transformation"],
"automatic": ["Single Web Pages", "Page groups", "Restricted pages"],
"repair": "Code modification",
"checks": ["CSS", "HTML", "PDF", "SVG"],
"platform": ["Windows",".NET"],
"authoringtools": "FrontPage",
"ide": "Visual Studio",
"reports": ["HTML", "XML", "EARL", "CSV"],
"license": ["Commercial"]
},
{
"title": "Accessibility Wizard",
"creator": "Binary Blue",
"location": "http://www.binaryblue.com.au/access_wizard/",
"release": "2003-06-24",
"version": "1.0",
"language": "English",
"guideline": ["WCAG 1.0"],
"assistance": ["Step-by-step evaluations"],
"platform": ["Flash"],
"license": ["Freeware"],
"type": "Online Tool",
"desc": "The Accessibility Wizard is a tool for web developers and project teams. It breaks down the WAI Checkpoints into individual tasks for each job role in a development team. Every member of a development team is directed to implement the WAI Checkpoints at a specified conformance level (A,AA or AAA). This is a sure way of meeting accessibility conformance. A web client that supports the Flash 6 (or higher) plugin is the minimum requirement to use the wizard."
},
{
"title": "WebXACT",
"creator": "Watchfire",
"location": "http://webxact.watchfire.com/",
"release": "2005-03-14",
"version": "4.0",
"language": ["English", "French (<span lang='fr'>Français</span>)"],
"guideline": ["WCAG 1.0", "Section 508"],
"assistance": ["Automated Checks"],
"automatic": ["Single Web Pages"],
"type": "Online Tool",
"checks": ["HTML", "XHTML"],
"reports": ["HTML"],
"license": ["Freeware"],
"desc": "WebXACT is a free online service that enables users to test single pages of web content for accessibility, quality and privacy issues. Can be integrated into the browser via favelet or similar technology."
},
{
"title":"AccRepair",
"version":"DS2 2005/8.x",
"release": "2005-01-01",
"creator":"HiSoftware",
"location":"http://www.hisoftware.com/access/repair.html",
"desc": "Description: AccRepair by HiSoftware provides for the verification and correction of Accessibility policy and standards required for Web sites. AccRepair supports the WCAG Guidelines at all three levels, as well as Section 508, and through the Usability Test Manager provides usability testing. AccRepair is designed to work as a standalone client or integrated with Microsoft FrontPage, Microsoft Office 2000 and XP. AccRepair includes a Repair Library Editor allowing for team services and automated repairs of common accessibility errors, and all the verification functions of AccVerify, as well as Hi-Caption and metadata management. A developer's kit including API's and sample source code is available to allow extension or integration with other products. AccRepair provides out-of-the-box testing and reporting for Accessibility, Privacy, Metadata and Usability standards. It also allows users to define and conduct custom tests.",
"language": "English",
"guideline": ["WCAG 1.0", "Section 508"],
"assistance": ["Generating Reports", "Step-by-step evaluations", "In-page feedback", "Page transformation"],
"automatic": ["Single Web Pages", "Page groups", "Restricted pages"],
"repair": "Code modification",
"checks": ["CSS", "HTML", "XHTML", "PDF", "SVG"],
"platform": ["Windows",".NET"],
"authoringtools": "FrontPage",
"ide": "Visual Studio",
"reports": ["HTML", "XML", "EARL", "CSV"],
"license": ["Commercial", "Enterprise"]
},
{
"title": "Accessibility Wizard",
"creator": "Binary Blue",
"location": "http://www.binaryblue.com.au/access_wizard/",
"release": "2003-06-24",
"version": "1.0",
"language": "English",
"guideline": ["WCAG 1.0"],
"assistance": ["Step-by-step evaluations"],
"platform": ["Flash"],
"license": ["Freeware"],
"type": "Online Tool",
"desc": "The Accessibility Wizard is a tool for web developers and project teams. It breaks down the WAI Checkpoints into individual tasks for each job role in a development team. Every member of a development team is directed to implement the WAI Checkpoints at a specified conformance level (A,AA or AAA). This is a sure way of meeting accessibility conformance. A web client that supports the Flash 6 (or higher) plugin is the minimum requirement to use the wizard."
},
{
"title": "WebXACT",
"creator": "Watchfire",
"location": "http://webxact.watchfire.com/",
"release": "2005-03-14",
"version": "4.0",
"language": ["English", "French (<span lang='fr'>Français</span>)"],
"guideline": ["WCAG 1.0", "Section 508", "BITV 2.0"],
"assistance": ["Automated Checks"],
"automatic": ["Single Web Pages"],
"type": "Online Tool",
"checks": ["HTML", "XHTML"],
"reports": ["HTML"],
"license": ["Freeware"],
"desc": "WebXACT is a free online service that enables users to test single pages of web content for accessibility, quality and privacy issues. Can be integrated into the browser via favelet or similar technology."
},
{
"title":"AccRepair",
"version":"DS2 2005/8.x",
"release": "2005-01-01",
"creator":"HiSoftware",
"location":"http://www.hisoftware.com/access/repair.html",
"desc": "Description: AccRepair by HiSoftware provides for the verification and correction of Accessibility policy and standards required for Web sites. AccRepair supports the WCAG Guidelines at all three levels, as well as Section 508, and through the Usability Test Manager provides usability testing. AccRepair is designed to work as a standalone client or integrated with Microsoft FrontPage, Microsoft Office 2000 and XP. AccRepair includes a Repair Library Editor allowing for team services and automated repairs of common accessibility errors, and all the verification functions of AccVerify, as well as Hi-Caption and metadata management. A developer's kit including API's and sample source code is available to allow extension or integration with other products. AccRepair provides out-of-the-box testing and reporting for Accessibility, Privacy, Metadata and Usability standards. It also allows users to define and conduct custom tests.",
"language": "English",
"guideline": ["WCAG 1.0", "Section 508"],
"assistance": ["Generating Reports", "Step-by-step evaluations", "In-page feedback", "Page transformation"],
"automatic": ["Single Web Pages", "Page groups", "Restricted pages"],
"repair": "Code modification",
"checks": ["CSS", "HTML", "XHTML", "PDF", "SVG"],
"platform": ["Windows",".NET"],
"authoringtools": "FrontPage",
"ide": "Visual Studio",
"reports": ["HTML", "XML", "EARL", "CSV"],
"license": ["Commercial", "Enterprise"]
}];

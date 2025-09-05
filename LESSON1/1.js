<!DOCTYPE html>
<!-- saved from url=(0055)https://dev353233.service-now.com/sys.scripts.modern.do -->
<html lang="en" class="ltr date-calendar tabbed" data-doctype="true" dir="ltr" ontouchend="CustomEvent.fireAll(&#39;body_clicked&#39;, event);"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><script>document.addEventListener('click', function (event) {
				CustomEvent.fireAll('body_clicked', event);
			});
			document.hasBodyClickedTrigger = 'true';</script><script type="text/javascript"></script><title>ServiceNow</title><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"><meta http-equiv="cache-control" content="public"><meta name="viewport" content="initial-scale=1.0"><script type="text/javascript" data-description="globals population">
	window.NOW = window.NOW || {};
	var g_loadTime = new Date();
	var lastActivity = new Date();
	var g_lang = 'en';
	var g_system_lang = 'en';
	var g_enhanced_activated = 'true';
	  var g_popup_timeout = parseInt(100);
	var g_export_warn_threshold = parseInt(10000);
	  var g_event_handler_ids = {};
	var g_event_handlers = [];
	var g_event_handlers_onLoad = [];
	var g_event_handlers_onSubmit = [];
	var g_event_handlers_onChange = [];
	var g_event_handlers_onCellEdit = {};
	var g_event_handlers_localCache = {};
	var g_event_handlers_queryTracking = true;
	var g_user_date_time_format = "yyyy-MM-dd HH:mm:ss";
	var g_user_date_format = "yyyy-MM-dd";
	var g_user_decimal_separator = ".";
	var g_user_grouping_separator = ",";
	var g_glide_list_separator = ", ";
	var g_allow_field_dependency_for_templates = ("true" === "true");
	var g_tz_offset = -25200000;
	  var g_tz_user_offset = true;
	var g_first_day_of_week = parseInt(1, 10);
	var g_date_picker_first_day_of_week = parseInt(0, 10);
	  var g_full_calendar_edit = true;
	var g_submitted = false;
	var g_max_table_length = 80;
	var g_fontSizePreference = "";
	var g_fontSize = "10pt";
	// use to be the sys_property glide.ui.js_error_notify, hard coded for PRB603998
	var g_jsErrorNotify = "true";
	var g_cancelPreviousTransaction = true;
	var g_text_direction = "ltr";
	var g_glide_list_filter_max_length =  parseInt("0", 10);
	var g_accessibility = false;
	var g_accessibility_tooltips = false;
	var g_accessibility_tooltip_duration = parseInt("10", 10);
	var g_accessibility_visual_patterns = false;
	var g_accessibility_screen_reader_table = false;
	var g_accessibility_date_format = false;
	var g_detail_row = false;
	var g_builddate = "07-27-2025_1301";
	// default values to be used in absence of user preferences are hard coded below
	// as well as in keyboardShortcuts.js and keyboard_preference_changer.xml
	window.g_keyboard_shortcuts = {};
	window.g_keyboard_shortcuts.allow_in_input_fields = false;
	window.g_keyboard_shortcuts.enabled = true;
	window.g_keyboard_shortcuts.global_search = {};
	window.g_keyboard_shortcuts.global_search.enabled = true;
	window.g_keyboard_shortcuts.global_search.key_combination = 'ctrl+alt+g';
	window.g_keyboard_shortcuts.main_frame = {};
	window.g_keyboard_shortcuts.main_frame.enabled = true;
	window.g_keyboard_shortcuts.main_frame.key_combination = 'ctrl+alt+p';
	window.g_keyboard_shortcuts.navigator_toggle = {};
	window.g_keyboard_shortcuts.navigator_toggle.enabled = true;
	window.g_keyboard_shortcuts.navigator_toggle.key_combination = 'ctrl+alt+c';
	window.g_keyboard_shortcuts.navigator_filter = {};
	window.g_keyboard_shortcuts.navigator_filter.enabled = true;
	window.g_keyboard_shortcuts.navigator_filter.key_combination = 'ctrl+alt+f';
	window.g_keyboard_shortcuts.impersonator = {}
	window.g_keyboard_shortcuts.impersonator.enabled = true;
	window.g_keyboard_shortcuts.impersonator.key_combination = 'ctrl+alt+i';
	// The `g_concourse_onmessage_enforce_same_origin` and `g_concourse_onmessage_enforce_same_origin_whitelist` variables
    // do not appear to be used anywhere other than the CustomEventManager, but leaving these for backwards compatability
	var g_concourse_onmessage_enforce_same_origin = 'true'.toLowerCase() === 'true';
	var g_concourse_onmessage_enforce_same_origin_whitelist = '';
	window.g_load_functions = [];
	window.g_render_functions = [];
	window.g_late_load_functions = [];
	window.g_tiny_url = {};
	window.g_tiny_url.use_tiny = 'true' === 'true';
	window.g_tiny_url.min_length = parseInt('1024');
	
	
	var g_ck = '12426be19333221096fdfd10ed03d695010608a1781cb7d62ef5ef19654fa4615d9b6d64';
	

	
	var g_acWaitTime = parseInt(250);
	

	var g_autoRequest = '';

	try {
		window.NOW.dateFormat = JSON.parse("{\"timeAgo\": false, \"dateBoth\": false}");
	} catch (e) {
		window.NOW.dateFormat = {timeAgo: false, dateBoth: false};
	}

	window.NOW.dateFormat.dateStringFormat = "yyyy-MM-dd";
	window.NOW.dateFormat.timeStringFormat = "HH:mm:ss";
	window.NOW.shortDateFormat = false;
	window.NOW.listTableWrap = true;
	window.NOW.compact = false;
  	window.NOW.templateToggle = false;
	window.NOW.tabbed = true;
	window.NOW.permalink = true;
	window.NOW.useSimpleStorage = true;
	window.NOW.httpRequestCompressionThreshold = 40000;
	window.NOW.httpRequestCompressionLevel = -1;
	window.NOW.httpRequestCompressionMemoryLevel = -1;
	window.NOW.httpRequestCompressionExcludeUrls = 'xmlhttp.do'.split(',');
	window.NOW.deferAmbConnection = false;
	window.NOW.deferredAmbConnectionTimeout = 10000;
	window.NOW.simpleStorageSynch = "26c123219333221096fdfd10ed03d66d";
	window.NOW.language =  'en';
	window.NOW.listOpenInAppTab = false;
	window.NOW.floatingScrollbars = 'false'.toLowerCase() === 'true';
	
	window.NOW.user = {};
	window.NOW.user.preferences = [];
	window.NOW.user.roles = 'platform_ml_create,import_transformer,taxonomy_admin,ais_admin,catalog_builder_editor,nlu_admin,catalog,catalog_template_editor,sn_ex_emp_fd.portal_stats_manager,catalog_lookup_admin,admin,ml_admin,platform_ml_read,platform_ml_write,chat_admin,search_application_admin,search_relevancy_model_admin,import_set_loader,catalog_admin,catalog_builder_developer,sn_ace.ace_user,import_scheduler,pa_viewer,nlu_editor,sn_hr_sp.esc_admin,sn_templated_snip.template_snippet_admin,nlu_user,personalize_dictionary,live_feed_admin,evam_admin,sn_templated_snip.template_snippet_writer,sn_hr_sp.admin,sp_admin,ml_labeler,import_admin,announcement_admin,pa_data_collector,sn_templated_snip.template_snippet_reader,teamdev_code_reviewer,agent_security_admin,user_criteria_admin,image_admin,sn_employee.admin,sn_nlu_workbench.nlu_feedback_admin';
	window.NOW.user.allRoles = 'platform_ml_create,import_transformer,taxonomy_admin,ais_admin,catalog_builder_editor,nlu_admin,catalog,catalog_template_editor,sn_ex_emp_fd.portal_stats_manager,catalog_lookup_admin,admin,ml_admin,platform_ml_read,platform_ml_write,chat_admin,search_application_admin,search_relevancy_model_admin,import_set_loader,catalog_admin,catalog_builder_developer,sn_ace.ace_user,import_scheduler,pa_viewer,nlu_editor,sn_hr_sp.esc_admin,sn_templated_snip.template_snippet_admin,nlu_user,personalize_dictionary,live_feed_admin,evam_admin,sn_templated_snip.template_snippet_writer,sn_hr_sp.admin,sp_admin,ml_labeler,import_admin,announcement_admin,pa_data_collector,sn_templated_snip.template_snippet_reader,teamdev_code_reviewer,agent_security_admin,user_criteria_admin,image_admin,sn_employee.admin,sn_nlu_workbench.nlu_feedback_admin';
	window.NOW.user.userID = '6816f79cc0a8016401c5a33be04be441';
	window.NOW.user.departmentID = 'a581ab703710200044e0bfc8bcbe5de8';
	window.NOW.user.firstName = 'System';
	window.NOW.user.lastName = 'Administrator';
	window.NOW.user.name = 'admin';
  	window.NOW.user.isImpersonating = false;
	window.NOW.batch_glide_ajax_requests = 'true' === 'true';
	window.NOW.batch_glide_ajax_requests_max_time_in_queue = ~~'50';
	window.NOW.batch_glide_ajax_disable_time = ~~'1000';

	window.NOW.currency = {};
	window.NOW.currency.code = 'USD';
	window.NOW.locale = {};
	window.NOW.locale.code = 'en_US';

	window.NOW.attachment = {};
	
	window.NOW.attachment.overflow_limit =  parseInt('3', 10);
	window.NOW.isPolarisEnabled = "true";
	window.NOW.polaris_page_info ={"canUsePolarisCSS":true,"canUsePolarisTemplates":true,"jvar_form_name":"sys.scripts.modern"};</script><script data-comment="GlideUser initialization">(function() {
		 g_render_functions.push(setGlideUser);
		function setGlideUser() {
			if (window.g_user || !window.GlideUser)
		return;

		window.g_user = new GlideUser(NOW.user.name,
			  NOW.user.firstName,
			  NOW.user.lastName,
			  NOW.user.roles,
			  NOW.user.userID,
			  NOW.user.departmentID);
		window.g_user.setRoles(NOW.user.allRoles, true);
		}
	})();</script><script data-description="NOW glide web analytics siteid and url">window.snWebaConfig = window.snWebaConfig || {};
		// glide web analytics config
		window.snWebaConfig.siteId = "0";
		window.snWebaConfig.trackerURL = "";
		window.snWebaConfig.webaScriptPath = "/scripts/piwik-3.1.1/thirdparty/piwik.min.js";
		window.snWebaConfig.ambClient = (window.g_ambClient) ? window.g_ambClient : ((window.amb)? window.amb.getClient(): "");
		window.snWebaConfig.subscribed = false;</script><script type="text/javascript" src="./1_files/ConditionalFocus.jsdbx"></script><script data-description="UX Metrics Data">(function () {
				try {
					window.NOW = window.NOW || {};
					window.NOW.UXMetrics = window.NOW.UXMetrics || {};
					var config = '{\"subscribers\":[{\"path\":\"/uxasset/externals/@devsnc/ux-metrics-appsee-subscriber/index.jsdbx\",\"config\":{\"apiAuth\":\"6e967ec032374b06b1a682b179a983ed\",\"apiKey\":\"e33ea8fb330326d07c42c7bb9d5c7b3a:635911e2732130107d804c9885f6a78f\",\"uxCollectionMode\":\"Both\",\"endpointURL\":\"https://api-appsee.service-now.com\",\"restrictedApps\":\"\",\"allowedPropsInPageNavigate\":\"Entry Page,Page Title\",\"enableUnauthenticatedUserTracking\":\"false\",\"channelType\":\"NextExperience\",\"trackingConsent\":\"Full\",\"user\":{\"domainName\":\"global\",\"roles\":\"platform_ml_create,import_transformer,taxonomy_admin,ais_admin,catalog_builder_editor,nlu_admin,catalog,catalog_template_editor,sn_ex_emp_fd.portal_stats_manager,catalog_lookup_admin,admin,ml_admin,platform_ml_read,platform_ml_write,chat_admin,search_application_admin,search_relevancy_model_admin,import_set_loader,catalog_admin,catalog_builder_developer,sn_ace.ace_user,import_scheduler,pa_viewer,nlu_editor,sn_hr_sp.esc_admin,sn_templated_snip.template_snippet_admin,nlu_user,personalize_dictionary,live_feed_admin,evam_admin,sn_templated_snip.template_snippet_writer,sn_hr_sp.admin,sp_admin,ml_labeler,import_admin,announcement_admin,pa_data_collector,sn_templated_snip.template_snippet_reader,teamdev_code_reviewer,agent_security_admin,user_criteria_admin,image_admin,sn_employee.admin,sn_nlu_workbench.nlu_feedback_admin\",\"hashId\":\"5df770fa60fb6ae1caf0326127e92a77c844a1b5484ae8adb201a396877b22c2\",\"domainId\":\"global\"},\"enabled\":\"true\"}}],\"userConsentRequired\":false,\"globalMetricsLevel\":4}';
					if (config) {
						window.NOW.UXMetrics.config = JSON.parse(config);
						window.NOW.UXMetrics.ucmInfo = {
							user_analytics_consent_text: '',
							user_consent : "NoConsentRequired"
						};
					}
				} catch(err) {}
			})();</script><link href="https://dev353233.service-now.com/favicon.ico?v=5" rel="shortcut icon"><script type="text/javascript" src="./1_files/xperf_timing.jsx"></script><link type="text/css" rel="stylesheet" href="./1_files/css_includes_doctype_polaris.cssx"><script>window.NOW = window.NOW || {};
		 NOW.isUsingPolaris = true;</script><link type="text/css" rel="stylesheet" href="./1_files/css_includes_polarisberg.cssx"><script>NOW.exclude_dark_theme = "false";</script><script type="text/javascript" src="./1_files/polaris_theme_refresh_observer.jsx"></script><link type="text/css" rel="stylesheet" href="./1_files/polarisberg_theme_variables.do" id="polarisberg_theme_variables"><script>NOW.xperf.cssEnd = NOW.xperf.now();
			NOW.xperf.scriptBegin = NOW.xperf.now();</script><script src="./1_files/legacy_date_time_choices_processor.do"></script><script type="text/javascript" src="./1_files/js_includes_doctype.jsx"></script><script type="text/javascript" src="./1_files/js_includes_ux_metrics.js.download"></script><script type="text/javascript" src="./1_files/js_includes_customer.jsx"></script><script type="text/javascript" src="./1_files/history_across_tabs.jsx"></script><script type="text/javascript" src="./1_files/js_includes_legacy.jsx"></script><script type="text/javascript" data-comment="navpage layout preferences, onfocus observation">/**
	* Every window needs to observe these events.
	*/
	if (Prototype.Browser.IE && !isMSIE9) {
		document.onfocusout = function() { CustomEvent.fireTop(GlideEvent.WINDOW_BLURRED, window); };
		document.onfocusin = function() { CustomEvent.fireTop(GlideEvent.WINDOW_FOCUSED, window); };
	} else {
		Event.observe(window, 'blur', function() { CustomEvent.fireTop(GlideEvent.WINDOW_BLURRED, window); });
		Event.observe(window, 'focus', function() { CustomEvent.fireTop(GlideEvent.WINDOW_FOCUSED, window); });
	}</script><script type="text/javascript">g_swLoadTime = new StopWatch(g_loadTime);

    if (window.CustomEvent){
        CustomEvent.fireAll("ck_updated", "12426be19333221096fdfd10ed03d695010608a1781cb7d62ef5ef19654fa4615d9b6d64");
	    CustomEvent.fireTop("navigation.complete", window);
	}

    addLoadEvent( function() {

		if (isValidTouchDevice())
			addTouchScrollClassToBody();

      if (typeof g_ck != 'undefined') {
        CustomEvent.observe("ck_updated", function(ck) { g_ck = ck; });
        CustomEvent.fireAll("ck_updated", "12426be19333221096fdfd10ed03d695010608a1781cb7d62ef5ef19654fa4615d9b6d64");CustomEvent.fireTop('user.impersonation', '');}try {
              var helpico = getTopWindow().document.getElementById("help_ico");

              if (helpico) {
                var urlname=window.location.pathname.split("?");
                var search_str = window.location.search;
                
                // if this is a form, extract the record's sys_id...
                var sys_id_loc = search_str.search(/sys_id=[0-9a-f]{32}/i);
                var sys_id_str = (sys_id_loc != -1) ? search_str.substr(sys_id_loc, 39) : null;
                
                // make the URL to our context help processor...
                var url_search = "?sysparm_url=" + urlname[0];
                if (sys_id_loc != -1)
                   url_search += "&" + sys_id_str;

               	helpico.href="context_help.do" + url_search;                	
              }
            } catch (exception) {}

      synchCache();
      pageLoaded();
    });
    
    function synchCache() {
      try {
        var w = getTopWindow();
        if (w.g_cache_message)
          w.g_cache_message.stamp("26c123219333221096fdfd10ed03d66d");
  
        if (w.g_cache_td)
          w.g_cache_td.stamp("b80767a99333221096fdfd10ed03d69a");
      } catch(e) {}
    }

    function isValidTouchDevice() {
		var navigator = window.navigator || {};
		var devices;
		try {
			devices = 'iPad,Android'.split(',');
		} catch(ex) {
			devices = [];
		}
		return devices.some(function(item) {return item.trim() === navigator.platform;});
	}

	function addTouchScrollClassToBody() {
		if ('ontouchstart' in window ||
				(navigator.maxTouchPoints !== 'undefined' && navigator.maxTouchPoints > 0) ||
				(navigator.msMaxTouchPoints !== 'undefined' && navigator.msMaxTouchPoints > 0)) {
			if (typeof document.body != undefined) {
				document.body.classList.add('touch_scroll');
			}
		}
	}
  </script><script>window.NOW = window.NOW || {};
        NOW.amb_themed_login = true;</script><script type="text/javascript" src="./1_files/js_includes_amb.jsx"></script><!--googleoff: all--><noscript>This site requires JavaScript to be enabled</noscript> <!--googleon: all--><script type="text/javascript" src="./1_files/js_guided_tours_includes.jsx"></script><script>NOW.xperf.scriptEnd = NOW.xperf.now();
				NOW.xperf.parseEnd = NOW.xperf.now();</script><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .accessibilityHelpWidget {
	padding: 10px;
	vertical-align: middle;
	overflow: scroll;
	color: var(--vscode-editorWidget-foreground);
	background-color: var(--vscode-editorWidget-background);
	box-shadow: 0 2px 8px var(--vscode-widget-shadow);
	border: 2px solid var(--vscode-contrastBorder);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-aria-container {
	position: absolute; /* try to hide from window but not from screen readers */
	left:-999em;
}</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .selection-anchor {
	background-color: #007ACC;
	width: 2px !important;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .bracket-match {
	box-sizing: border-box;
	background-color: var(--vscode-editorBracketMatch-background);
	border: 1px solid var(--vscode-editorBracketMatch-border);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

@font-face {
	font-family: "codicon";
	font-display: block;
	src: url(/scripts/snc-code-editor/c8bafa1de09b4a286abf7159343aeffc.ttf) format("truetype");
}

.codicon[class*='codicon-'] {
	font: normal normal normal 16px/1 codicon;
	display: inline-block;
	text-decoration: none;
	text-rendering: auto;
	text-align: center;
	text-transform: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	user-select: none;
	-webkit-user-select: none;
}

/* icon rules are dynamically created by the platform theme service (see iconsStyleSheet.ts) */
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.codicon-wrench-subaction {
	opacity: 0.5;
}

@keyframes codicon-spin {
	100% {
		transform:rotate(360deg);
	}
}

.codicon-sync.codicon-modifier-spin,
.codicon-loading.codicon-modifier-spin,
.codicon-gear.codicon-modifier-spin,
.codicon-notebook-state-executing.codicon-modifier-spin {
	/* Use steps to throttle FPS to reduce CPU usage */
	animation: codicon-spin 1.5s steps(30) infinite;
}

.codicon-modifier-disabled {
	opacity: 0.4;
}

/* custom speed & easing for loading icon */
.codicon-loading,
.codicon-tree-item-loading::before {
	animation-duration: 1s !important;
	animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .codicon.codicon-symbol-array,
.monaco-workbench .codicon.codicon-symbol-array { color: var(--vscode-symbolIcon-arrayForeground); }
.monaco-editor .codicon.codicon-symbol-boolean,
.monaco-workbench .codicon.codicon-symbol-boolean { color: var(--vscode-symbolIcon-booleanForeground); }
.monaco-editor .codicon.codicon-symbol-class,
.monaco-workbench .codicon.codicon-symbol-class { color: var(--vscode-symbolIcon-classForeground); }
.monaco-editor .codicon.codicon-symbol-method,
.monaco-workbench .codicon.codicon-symbol-method { color: var(--vscode-symbolIcon-methodForeground); }
.monaco-editor .codicon.codicon-symbol-color,
.monaco-workbench .codicon.codicon-symbol-color { color: var(--vscode-symbolIcon-colorForeground); }
.monaco-editor .codicon.codicon-symbol-constant,
.monaco-workbench .codicon.codicon-symbol-constant { color: var(--vscode-symbolIcon-constantForeground); }
.monaco-editor .codicon.codicon-symbol-constructor,
.monaco-workbench .codicon.codicon-symbol-constructor { color: var(--vscode-symbolIcon-constructorForeground); }
.monaco-editor .codicon.codicon-symbol-value,
.monaco-workbench .codicon.codicon-symbol-value,
.monaco-editor .codicon.codicon-symbol-enum,
.monaco-workbench .codicon.codicon-symbol-enum { color: var(--vscode-symbolIcon-enumeratorForeground); }
.monaco-editor .codicon.codicon-symbol-enum-member,
.monaco-workbench .codicon.codicon-symbol-enum-member { color: var(--vscode-symbolIcon-enumeratorMemberForeground); }
.monaco-editor .codicon.codicon-symbol-event,
.monaco-workbench .codicon.codicon-symbol-event { color: var(--vscode-symbolIcon-eventForeground); }
.monaco-editor .codicon.codicon-symbol-field,
.monaco-workbench .codicon.codicon-symbol-field { color: var(--vscode-symbolIcon-fieldForeground); }
.monaco-editor .codicon.codicon-symbol-file,
.monaco-workbench .codicon.codicon-symbol-file { color: var(--vscode-symbolIcon-fileForeground); }
.monaco-editor .codicon.codicon-symbol-folder,
.monaco-workbench .codicon.codicon-symbol-folder { color: var(--vscode-symbolIcon-folderForeground); }
.monaco-editor .codicon.codicon-symbol-function,
.monaco-workbench .codicon.codicon-symbol-function { color: var(--vscode-symbolIcon-functionForeground); }
.monaco-editor .codicon.codicon-symbol-interface,
.monaco-workbench .codicon.codicon-symbol-interface { color: var(--vscode-symbolIcon-interfaceForeground); }
.monaco-editor .codicon.codicon-symbol-key,
.monaco-workbench .codicon.codicon-symbol-key { color: var(--vscode-symbolIcon-keyForeground); }
.monaco-editor .codicon.codicon-symbol-keyword,
.monaco-workbench .codicon.codicon-symbol-keyword { color: var(--vscode-symbolIcon-keywordForeground); }
.monaco-editor .codicon.codicon-symbol-module,
.monaco-workbench .codicon.codicon-symbol-module { color: var(--vscode-symbolIcon-moduleForeground); }
.monaco-editor .codicon.codicon-symbol-namespace,
.monaco-workbench .codicon.codicon-symbol-namespace { color: var(--vscode-symbolIcon-namespaceForeground); }
.monaco-editor .codicon.codicon-symbol-null,
.monaco-workbench .codicon.codicon-symbol-null { color: var(--vscode-symbolIcon-nullForeground); }
.monaco-editor .codicon.codicon-symbol-number,
.monaco-workbench .codicon.codicon-symbol-number { color: var(--vscode-symbolIcon-numberForeground); }
.monaco-editor .codicon.codicon-symbol-object,
.monaco-workbench .codicon.codicon-symbol-object { color: var(--vscode-symbolIcon-objectForeground); }
.monaco-editor .codicon.codicon-symbol-operator,
.monaco-workbench .codicon.codicon-symbol-operator { color: var(--vscode-symbolIcon-operatorForeground); }
.monaco-editor .codicon.codicon-symbol-package,
.monaco-workbench .codicon.codicon-symbol-package { color: var(--vscode-symbolIcon-packageForeground); }
.monaco-editor .codicon.codicon-symbol-property,
.monaco-workbench .codicon.codicon-symbol-property { color: var(--vscode-symbolIcon-propertyForeground); }
.monaco-editor .codicon.codicon-symbol-reference,
.monaco-workbench .codicon.codicon-symbol-reference { color: var(--vscode-symbolIcon-referenceForeground); }
.monaco-editor .codicon.codicon-symbol-snippet,
.monaco-workbench .codicon.codicon-symbol-snippet { color: var(--vscode-symbolIcon-snippetForeground); }
.monaco-editor .codicon.codicon-symbol-string,
.monaco-workbench .codicon.codicon-symbol-string { color: var(--vscode-symbolIcon-stringForeground); }
.monaco-editor .codicon.codicon-symbol-struct,
.monaco-workbench .codicon.codicon-symbol-struct { color: var(--vscode-symbolIcon-structForeground); }
.monaco-editor .codicon.codicon-symbol-text,
.monaco-workbench .codicon.codicon-symbol-text { color: var(--vscode-symbolIcon-textForeground); }
.monaco-editor .codicon.codicon-symbol-type-parameter,
.monaco-workbench .codicon.codicon-symbol-type-parameter { color: var(--vscode-symbolIcon-typeParameterForeground); }
.monaco-editor .codicon.codicon-symbol-unit,
.monaco-workbench .codicon.codicon-symbol-unit { color: var(--vscode-symbolIcon-unitForeground); }
.monaco-editor .codicon.codicon-symbol-variable,
.monaco-workbench .codicon.codicon-symbol-variable { color: var(--vscode-symbolIcon-variableForeground); }
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .monaco-editor-overlaymessage {
	padding-bottom: 8px;
	z-index: 10000;
}

.monaco-editor .monaco-editor-overlaymessage.below {
	padding-bottom: 0;
	padding-top: 8px;
	z-index: 10000;
}

@keyframes fadeIn {
	from { opacity: 0; }
	to { opacity: 1; }
}
.monaco-editor .monaco-editor-overlaymessage.fadeIn {
	animation: fadeIn 150ms ease-out;
}

@keyframes fadeOut {
	from { opacity: 1; }
	to { opacity: 0; }
}
.monaco-editor .monaco-editor-overlaymessage.fadeOut {
	animation: fadeOut 100ms ease-out;
}

.monaco-editor .monaco-editor-overlaymessage .message {
	padding: 1px 4px;
	color: var(--vscode-inputValidation-infoForeground);
	background-color: var(--vscode-inputValidation-infoBackground);
	border: 1px solid var(--vscode-inputValidation-infoBorder);
}

.monaco-editor.hc-black .monaco-editor-overlaymessage .message,
.monaco-editor.hc-light .monaco-editor-overlaymessage .message {
	border-width: 2px;
}

.monaco-editor .monaco-editor-overlaymessage .anchor {
	width: 0 !important;
	height: 0 !important;
	border-color: transparent;
	border-style: solid;
	z-index: 1000;
	border-width: 8px;
	position: absolute;
}

.monaco-editor .monaco-editor-overlaymessage .anchor.top {
	border-bottom-color: var(--vscode-inputValidation-infoBorder);
}

.monaco-editor .monaco-editor-overlaymessage .anchor.below {
	border-top-color: var(--vscode-inputValidation-infoBorder);
}

.monaco-editor .monaco-editor-overlaymessage:not(.below) .anchor.top,
.monaco-editor .monaco-editor-overlaymessage.below .anchor.below {
	display: none;
}

.monaco-editor .monaco-editor-overlaymessage.below .anchor.top {
	display: inherit;
	top: -8px;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-list {
	position: relative;
	height: 100%;
	width: 100%;
	white-space: nowrap;
}

.monaco-list.mouse-support {
	user-select: none;
	-webkit-user-select: none;
}

.monaco-list > .monaco-scrollable-element {
	height: 100%;
}

.monaco-list-rows {
	position: relative;
	width: 100%;
	height: 100%;
}

.monaco-list.horizontal-scrolling .monaco-list-rows {
	width: auto;
	min-width: 100%;
}

.monaco-list-row {
	position: absolute;
	box-sizing: border-box;
	overflow: hidden;
	width: 100%;
}

.monaco-list.mouse-support .monaco-list-row {
	cursor: pointer;
	touch-action: none;
}

/* for OS X ballistic scrolling */
.monaco-list-row.scrolling {
	display: none !important;
}

/* Focus */
.monaco-list.element-focused,
.monaco-list.selection-single,
.monaco-list.selection-multiple {
	outline: 0 !important;
}

/* Dnd */
.monaco-drag-image {
	display: inline-block;
	padding: 1px 7px;
	border-radius: 10px;
	font-size: 12px;
	position: absolute;
	z-index: 1000;
}

/* Filter */

.monaco-list-type-filter-message {
	position: absolute;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 40px 1em 1em 1em;
	text-align: center;
	white-space: normal;
	opacity: 0.7;
	pointer-events: none;
}

.monaco-list-type-filter-message:empty {
	display: none;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Arrows */
.monaco-scrollable-element > .scrollbar > .scra {
	cursor: pointer;
	font-size: 11px !important;
}

.monaco-scrollable-element > .visible {
	opacity: 1;

	/* Background rule added for IE9 - to allow clicks on dom node */
	background:rgba(0,0,0,0);

	transition: opacity 100ms linear;
	/* In front of peek view */
	z-index: 11;
}
.monaco-scrollable-element > .invisible {
	opacity: 0;
	pointer-events: none;
}
.monaco-scrollable-element > .invisible.fade {
	transition: opacity 800ms linear;
}

/* Scrollable Content Inset Shadow */
.monaco-scrollable-element > .shadow {
	position: absolute;
	display: none;
}
.monaco-scrollable-element > .shadow.top {
	display: block;
	top: 0;
	left: 3px;
	height: 3px;
	width: 100%;
	box-shadow: var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset;
}
.monaco-scrollable-element > .shadow.left {
	display: block;
	top: 3px;
	left: 0;
	height: 100%;
	width: 3px;
	box-shadow: var(--vscode-scrollbar-shadow) 6px 0 6px -6px inset;
}
.monaco-scrollable-element > .shadow.top-left-corner {
	display: block;
	top: 0;
	left: 0;
	height: 3px;
	width: 3px;
}
.monaco-scrollable-element > .shadow.top.left {
	box-shadow: var(--vscode-scrollbar-shadow) 6px 0 6px -6px inset;
}

.monaco-scrollable-element > .scrollbar > .slider {
	background: var(--vscode-scrollbarSlider-background);
}

.monaco-scrollable-element > .scrollbar > .slider:hover {
	background: var(--vscode-scrollbarSlider-hoverBackground);
}

.monaco-scrollable-element > .scrollbar > .slider.active {
	background: var(--vscode-scrollbarSlider-activeBackground);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Use custom CSS vars to expose padding into parent select for padding calculation */
.monaco-select-box-dropdown-padding {
	--dropdown-padding-top: 1px;
	--dropdown-padding-bottom: 1px;
}

.hc-black .monaco-select-box-dropdown-padding,
.hc-light .monaco-select-box-dropdown-padding {
	--dropdown-padding-top: 3px;
	--dropdown-padding-bottom: 4px;
}

.monaco-select-box-dropdown-container {
	display: none;
	box-sizing:	border-box;
}

.monaco-select-box-dropdown-container > .select-box-details-pane > .select-box-description-markdown * {
	margin: 0;
}

.monaco-select-box-dropdown-container > .select-box-details-pane > .select-box-description-markdown a:focus {
	outline: 1px solid -webkit-focus-ring-color;
	outline-offset: -1px;
}

.monaco-select-box-dropdown-container > .select-box-details-pane > .select-box-description-markdown code {
	line-height: 15px; /** For some reason, this is needed, otherwise <code> will take up 20px height */
	font-family: var(--monaco-monospace-font);
}


.monaco-select-box-dropdown-container.visible {
	display: flex;
	flex-direction: column;
	text-align: left;
	width: 1px;
	overflow: hidden;
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.monaco-select-box-dropdown-container > .select-box-dropdown-list-container {
	flex: 0 0 auto;
	align-self: flex-start;
	padding-top: var(--dropdown-padding-top);
	padding-bottom: var(--dropdown-padding-bottom);
	padding-left: 1px;
	padding-right: 1px;
	width: 100%;
	overflow: hidden;
	box-sizing:	border-box;
}

.monaco-select-box-dropdown-container > .select-box-details-pane {
	padding: 5px;
}

.hc-black .monaco-select-box-dropdown-container > .select-box-dropdown-list-container {
	padding-top: var(--dropdown-padding-top);
	padding-bottom: var(--dropdown-padding-bottom);
}

.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row {
	cursor: pointer;
}

.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row > .option-text {
	text-overflow: ellipsis;
	overflow: hidden;
	padding-left: 3.5px;
	white-space: nowrap;
	float: left;
}

.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row > .option-detail {
	text-overflow: ellipsis;
	overflow: hidden;
	padding-left: 3.5px;
	white-space: nowrap;
	float: left;
	opacity: 0.7;
}

.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row > .option-decorator-right {
	text-overflow: ellipsis;
	overflow: hidden;
	padding-right: 10px;
	white-space: nowrap;
	float: right;
}


/* Accepted CSS hiding technique for accessibility reader text  */
/* https://webaim.org/techniques/css/invisiblecontent/ */

.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row > .visually-hidden {
		position: absolute;
		left: -10000px;
		top: auto;
		width: 1px;
		height: 1px;
		overflow: hidden;
}

.monaco-select-box-dropdown-container > .select-box-dropdown-container-width-control {
	flex: 1 1 auto;
	align-self: flex-start;
	opacity: 0;
}

.monaco-select-box-dropdown-container > .select-box-dropdown-container-width-control > .width-control-div {
	overflow: hidden;
	max-height: 0px;
}

.monaco-select-box-dropdown-container > .select-box-dropdown-container-width-control > .width-control-div > .option-text-width-control {
	padding-left: 4px;
	padding-right: 8px;
	white-space: nowrap;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-select-box {
	width: 100%;
	cursor: pointer;
	border-radius: 2px;
}

.monaco-select-box-dropdown-container {
	font-size: 13px;
	font-weight: normal;
	text-transform: none;
}

/** Actions */

.monaco-action-bar .action-item.select-container {
	cursor: default;
}

.monaco-action-bar .action-item .monaco-select-box {
	cursor: pointer;
	min-width: 100px;
	min-height: 18px;
	padding: 2px 23px 2px 8px;
}

.mac .monaco-action-bar .action-item .monaco-select-box {
	font-size: 11px;
	border-radius: 5px;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-action-bar {
	white-space: nowrap;
	height: 100%;
}

.monaco-action-bar .actions-container {
	display: flex;
	margin: 0 auto;
	padding: 0;
	height: 100%;
	width: 100%;
	align-items: center;
}

.monaco-action-bar.vertical .actions-container {
	display: inline-block;
}

.monaco-action-bar .action-item {
	display: block;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	position: relative;  /* DO NOT REMOVE - this is the key to preventing the ghosting icon bug in Chrome 42 */
}

.monaco-action-bar .action-item.disabled {
	cursor: default;
}

.monaco-action-bar .action-item .icon,
.monaco-action-bar .action-item .codicon {
	display: block;
}

.monaco-action-bar .action-item .codicon {
	display: flex;
	align-items: center;
	width: 16px;
	height: 16px;
}

.monaco-action-bar .action-label {
	display: flex;
	font-size: 11px;
	padding: 3px;
	border-radius: 5px;
}

.monaco-action-bar .action-item.disabled .action-label,
.monaco-action-bar .action-item.disabled .action-label::before,
.monaco-action-bar .action-item.disabled .action-label:hover {
	opacity: 0.6;
}

/* Vertical actions */

.monaco-action-bar.vertical {
	text-align: left;
}

.monaco-action-bar.vertical .action-item {
	display: block;
}

.monaco-action-bar.vertical .action-label.separator {
	display: block;
	border-bottom: 1px solid #bbb;
	padding-top: 1px;
	margin-left: .8em;
	margin-right: .8em;
}

.monaco-action-bar .action-item .action-label.separator {
	width: 1px;
	height: 16px;
	margin: 5px 4px !important;
	cursor: default;
	min-width: 1px;
	padding: 0;
	background-color: #bbb;
}

.secondary-actions .monaco-action-bar .action-label {
	margin-left: 6px;
}

/* Action Items */
.monaco-action-bar .action-item.select-container {
	overflow: hidden; /* somehow the dropdown overflows its container, we prevent it here to not push */
	flex: 1;
	max-width: 170px;
	min-width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
}

.monaco-action-bar .action-item.action-dropdown-item {
	display: flex;
}

.monaco-action-bar .action-item.action-dropdown-item > .action-dropdown-item-separator {
	display: flex;
	align-items: center;
	cursor: default;
}

.monaco-action-bar .action-item.action-dropdown-item > .action-dropdown-item-separator > div {
	width: 1px;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.action-widget {
	font-size: 13px;
	border-radius: 0;
	min-width: 160px;
	max-width: 500px;
	z-index: 40;
	display: block;
	width: 100%;
	border: 1px solid var(--vscode-editorWidget-border) !important;
	background-color: var(--vscode-editorWidget-background);
	color: var(--vscode-editorWidget-foreground);
}

.context-view-block {
	position: fixed;
	cursor: initial;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
}

.context-view-pointerBlock {
	position: fixed;
	cursor: initial;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
}

.action-widget .monaco-list {
	user-select: none;
	-webkit-user-select: none;
	border: none !important;
	border-width: 0 !important;
}

.action-widget .monaco-list:focus:before {
	outline: 0 !important;
}

.action-widget .monaco-list .monaco-scrollable-element {
	overflow: visible;
}

/** Styles for each row in the list element **/
.action-widget .monaco-list .monaco-list-row {
	padding: 0 10px;
	white-space: nowrap;
	cursor: pointer;
	touch-action: none;
	width: 100%;
}

.action-widget .monaco-list .monaco-list-row.action.focused:not(.option-disabled) {
	background-color: var(--vscode-quickInputList-focusBackground) !important;
	color: var(--vscode-quickInputList-focusForeground);
	outline: 1px solid var(--vscode-menu-selectionBorder, transparent);
	outline-offset: -1px;
}

.action-widget .monaco-list-row.group-header {
	color: var(--vscode-pickerGroup-foreground) !important;
	font-weight: 600;
}

.action-widget .monaco-list .group-header,
.action-widget .monaco-list .option-disabled,
.action-widget .monaco-list .option-disabled:before,
.action-widget .monaco-list .option-disabled .focused,
.action-widget .monaco-list .option-disabled .focused:before {
	cursor: default !important;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	user-select: none;
	background-color: transparent !important;
	outline: 0 solid !important;
}

.action-widget .monaco-list-row.action {
	display: flex;
	gap: 6px;
	align-items: center;
}

.action-widget .monaco-list-row.action.option-disabled {
	color: var(--vscode-disabledForeground);
}

.action-widget .monaco-list-row.action.option-disabled .codicon {
	opacity: 0.4;
}

.action-widget .monaco-list-row.action:not(.option-disabled) .codicon {
	color: inherit;
}

.action-widget .monaco-list-row.action .title {
	flex: 1;
	overflow: hidden;
	text-overflow: ellipsis;
}

/* Action bar */

.action-widget .action-widget-action-bar {
	background-color: var(--vscode-editorHoverWidget-statusBarBackground);
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
}

.action-widget .action-widget-action-bar::before {
	display: block;
	content: "";
	width: 100%;
}

.action-widget .action-widget-action-bar .actions-container {
	padding: 0 8px;
}

.action-widget-action-bar .action-label {
	color: var(--vscode-textLink-activeForeground);
	font-size: 12px;
	line-height: 22px;
	padding: 0;
	pointer-events: all;
}

.action-widget-action-bar .action-item {
	margin-right: 16px;
	pointer-events: none;
}

.action-widget-action-bar .action-label:hover {
	background-color: transparent !important;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-keybinding {
	display: flex;
	align-items: center;
	line-height: 10px;
}

.monaco-keybinding > .monaco-keybinding-key {
	display: inline-block;
	border-style: solid;
	border-width: 1px;
	border-radius: 3px;
	vertical-align: middle;
	font-size: 11px;
	padding: 3px 5px;
	margin: 0 2px;
}

.monaco-keybinding > .monaco-keybinding-key:first-child {
	margin-left: 0;
}

.monaco-keybinding > .monaco-keybinding-key:last-child {
	margin-right: 0;
}

.monaco-keybinding > .monaco-keybinding-key-separator {
	display: inline-block;
}

.monaco-keybinding > .monaco-keybinding-key-chord-separator {
	width: 6px;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .lightBulbWidget {
	display: flex;
	align-items: center;
	justify-content: center;
}

.monaco-editor .lightBulbWidget:hover{
	cursor: pointer;
}

.monaco-editor .lightBulbWidget.codicon-light-bulb {
	color: var(--vscode-editorLightBulb-foreground);
}

.monaco-editor .lightBulbWidget.codicon-lightbulb-autofix {
	color: var(--vscode-editorLightBulbAutoFix-foreground, var(--vscode-editorLightBulb-foreground));
}

.monaco-editor .lightBulbWidget:before {
	position: relative;
	z-index: 2;
}

.monaco-editor .lightBulbWidget:after {
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	display: block;
	width: 100%;
	height: 100%;
	opacity: 0.3;
	background-color: var(--vscode-editor-background);
	z-index: 1;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .codelens-decoration {
	overflow: hidden;
	display: inline-block;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: var(--vscode-editorCodeLens-foreground);
	line-height: var(--vscode-editorCodeLens-lineHeight);
	font-size: var(--vscode-editorCodeLens-fontSize);
	padding-right: calc(var(--vscode-editorCodeLens-fontSize)*0.5);
	font-feature-settings: var(--vscode-editorCodeLens-fontFeatureSettings);
	font-family: var(--vscode-editorCodeLens-fontFamily), var(--vscode-editorCodeLens-fontFamilyDefault);
}

.monaco-editor .codelens-decoration>span,
.monaco-editor .codelens-decoration>a {
	user-select: none;
	-webkit-user-select: none;
	white-space: nowrap;
	vertical-align: sub;
}

.monaco-editor .codelens-decoration>a {
	text-decoration: none;
}

.monaco-editor .codelens-decoration>a:hover {
	cursor: pointer;
	color: var(--vscode-editorLink-activeForeground) !important;
}

.monaco-editor .codelens-decoration>a:hover .codicon {
	color: var(--vscode-editorLink-activeForeground) !important;
}

.monaco-editor .codelens-decoration .codicon {
	vertical-align: middle;
	color: currentColor !important;
	color: var(--vscode-editorCodeLens-foreground);
	line-height: var(--vscode-editorCodeLens-lineHeight);
	font-size: var(--vscode-editorCodeLens-fontSize);
}

.monaco-editor .codelens-decoration>a:hover .codicon::before {
	cursor: pointer;
}

@keyframes fadein {
	0% {
		opacity: 0;
		visibility: visible;
	}

	100% {
		opacity: 1;
	}
}

.monaco-editor .codelens-decoration.fadein {
	animation: fadein 0.1s linear;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.colorpicker-widget {
	height: 190px;
	user-select: none;
	-webkit-user-select: none;
}

/* Decoration */

.colorpicker-color-decoration,
.hc-light .colorpicker-color-decoration {
	border: solid 0.1em #000;
	box-sizing: border-box;
	margin: 0.1em 0.2em 0 0.2em;
	width: 0.8em;
	height: 0.8em;
	line-height: 0.8em;
	display: inline-block;
	cursor: pointer;
}

.hc-black .colorpicker-color-decoration,
.vs-dark .colorpicker-color-decoration {
	border: solid 0.1em #eee;
}

/* Header */

.colorpicker-header {
	display: flex;
	height: 24px;
	position: relative;
	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII=");
	background-size: 9px 9px;
	image-rendering: pixelated;
}

.colorpicker-header .picked-color {
	width: 240px;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 24px;
	cursor: pointer;
	color: white;
	flex: 1;
}

.colorpicker-header .picked-color .codicon {
	color: inherit;
	font-size: 14px;
	position: absolute;
	left: 8px;
}

.colorpicker-header .picked-color.light {
	color: black;
}

.colorpicker-header .original-color {
	width: 74px;
	z-index: inherit;
	cursor: pointer;
}

.standalone-colorpicker {
	color: var(--vscode-editorHoverWidget-foreground);
	background-color: var(--vscode-editorHoverWidget-background);
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.colorpicker-header.standalone-colorpicker {
	border-bottom: none;
}

.colorpicker-header .close-button {
	cursor: pointer;
	background-color: var(--vscode-editorHoverWidget-background);
	border-left: 1px solid var(--vscode-editorHoverWidget-border);
}

.colorpicker-header .close-button-inner-div {
	width: 100%;
	height: 100%;
	text-align: center;
}

.colorpicker-header .close-button-inner-div:hover {
	background-color: var(--vscode-toolbar-hoverBackground);
}

.colorpicker-header .close-icon {
	padding: 3px;
}

/* Body */

.colorpicker-body {
	display: flex;
	padding: 8px;
	position: relative;
}

.colorpicker-body .saturation-wrap {
	overflow: hidden;
	height: 150px;
	position: relative;
	min-width: 220px;
	flex: 1;
}

.colorpicker-body .saturation-box {
	height: 150px;
	position: absolute;
}

.colorpicker-body .saturation-selection {
	width: 9px;
	height: 9px;
	margin: -5px 0 0 -5px;
	border: 1px solid rgb(255, 255, 255);
	border-radius: 100%;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
	position: absolute;
}

.colorpicker-body .strip {
	width: 25px;
	height: 150px;
}

.colorpicker-body .standalone-strip {
	width: 25px;
	height: 122px;
}

.colorpicker-body .hue-strip {
	position: relative;
	margin-left: 8px;
	cursor: grab;
	background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
}

.colorpicker-body .opacity-strip {
	position: relative;
	margin-left: 8px;
	cursor: grab;
	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII=");
	background-size: 9px 9px;
	image-rendering: pixelated;
}

.colorpicker-body .strip.grabbing {
	cursor: grabbing;
}

.colorpicker-body .slider {
	position: absolute;
	top: 0;
	left: -2px;
	width: calc(100% + 4px);
	height: 4px;
	box-sizing: border-box;
	border: 1px solid rgba(255, 255, 255, 0.71);
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.85);
}

.colorpicker-body .strip .overlay {
	height: 150px;
	pointer-events: none;
}

.colorpicker-body .standalone-strip .standalone-overlay {
	height: 122px;
	pointer-events: none;
}

.standalone-colorpicker-body {
	display: block;
	border: 1px solid transparent;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
	overflow: hidden;
}

.colorpicker-body .insert-button {
	height: 20px;
	width: 58px;
	position: absolute;
	right: 8px;
	bottom: 8px;
	background: var(--vscode-button-background);
	color: var(--vscode-button-foreground);
	border-radius: 2px;
	border: none;
	cursor: pointer;
}

.colorpicker-body .insert-button:hover{
	background: var(--vscode-button-hoverBackground);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .goto-definition-link {
	text-decoration: underline;
	cursor: pointer;
	color: var(--vscode-editorLink-activeForeground) !important;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .peekview-widget .head {
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title {
	display: flex;
	align-items: baseline;
	font-size: 13px;
	margin-left: 20px;
	min-width: 0;
	text-overflow: ellipsis;
	overflow: hidden;
}

.monaco-editor .peekview-widget .head .peekview-title.clickable {
	cursor: pointer;
}

.monaco-editor .peekview-widget .head .peekview-title .dirname:not(:empty) {
	font-size: 0.9em;
	margin-left: 0.5em;
}

.monaco-editor .peekview-widget .head .peekview-title .meta {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.monaco-editor .peekview-widget .head .peekview-title .dirname {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title .filename {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .peekview-widget .head .peekview-title .meta:not(:empty)::before {
	content: '-';
	padding: 0 0.3em;
}

.monaco-editor .peekview-widget .head .peekview-actions {
	flex: 1;
	text-align: right;
	padding-right: 2px;
}

.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar {
	display: inline-block;
}

.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar,
.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar > .actions-container {
	height: 100%;
}

.monaco-editor .peekview-widget > .body {
	border-top: 1px solid;
	position: relative;
}

.monaco-editor .peekview-widget .head .peekview-title .codicon {
	margin-right: 4px;
	align-self: center;
}

.monaco-editor .peekview-widget .monaco-list .monaco-list-row.focused .codicon {
	color: inherit !important;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* -------------------- IE10 remove auto clear button -------------------- */

::-ms-clear {
	display: none;
}

/* All widgets */
/* I am not a big fan of this rule */
.monaco-editor .editor-widget input {
	color: inherit;
}

/* -------------------- Editor -------------------- */

.monaco-editor {
	position: relative;
	overflow: visible;
	-webkit-text-size-adjust: 100%;
	color: var(--vscode-editor-foreground);
	background-color: var(--vscode-editor-background);
}
.monaco-editor-background {
	background-color: var(--vscode-editor-background);
}
.monaco-editor .rangeHighlight {
	background-color: var(--vscode-editor-rangeHighlightBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-rangeHighlightBorder);
}
.monaco-editor.hc-black .rangeHighlight, .monaco-editor.hc-light .rangeHighlight {
	border-style: dotted;
}
.monaco-editor .symbolHighlight {
	background-color: var(--vscode-editor-symbolHighlightBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-symbolHighlightBorder);
}
.monaco-editor.hc-black .symbolHighlight, .monaco-editor.hc-light .symbolHighlight {
	border-style: dotted;
}

/* -------------------- Misc -------------------- */

.monaco-editor .overflow-guard {
	position: relative;
	overflow: hidden;
}

.monaco-editor .view-overlays {
	position: absolute;
	top: 0;
}

/*
.monaco-editor .auto-closed-character {
	opacity: 0.3;
}
*/


.monaco-editor .squiggly-error {
	border-bottom: 4px double var(--vscode-editorError-border);
}
.monaco-editor .squiggly-error::before {
	display: block;
	content: '';
	width: 100%;
	height: 100%;
	background: var(--vscode-editorError-background);
}
.monaco-editor .squiggly-warning {
	border-bottom: 4px double var(--vscode-editorWarning-border);
}
.monaco-editor .squiggly-warning::before {
	display: block;
	content: '';
	width: 100%;
	height: 100%;
	background: var(--vscode-editorWarning-background);
}
.monaco-editor .squiggly-info {
	border-bottom: 4px double var(--vscode-editorInfo-border);
}
.monaco-editor .squiggly-info::before {
	display: block;
	content: '';
	width: 100%;
	height: 100%;
	background: var(--vscode-editorInfo-background);
}
.monaco-editor .squiggly-hint {
	border-bottom: 2px dotted var(--vscode-editorHint-border);
}
.monaco-editor.showUnused .squiggly-unnecessary {
	border-bottom: 2px dashed var(--vscode-editorUnnecessaryCode-border);
}
.monaco-editor.showDeprecated .squiggly-inline-deprecated {
	text-decoration: line-through;
	text-decoration-color: var(--vscode-editor-foreground, inherit);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .inputarea {
	min-width: 0;
	min-height: 0;
	margin: 0;
	padding: 0;
	position: absolute;
	outline: none !important;
	resize: none;
	border: none;
	overflow: hidden;
	color: transparent;
	background-color: transparent;
	z-index: -10;
}
/*.monaco-editor .inputarea {
	position: fixed !important;
	width: 800px !important;
	height: 500px !important;
	top: initial !important;
	left: initial !important;
	bottom: 0 !important;
	right: 0 !important;
	color: black !important;
	background: white !important;
	line-height: 15px !important;
	font-size: 14px !important;
	z-index: 10 !important;
}*/
.monaco-editor .inputarea.ime-input {
	z-index: 10;
	caret-color: var(--vscode-editorCursor-foreground);
	color: var(--vscode-editor-foreground);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .margin-view-overlays .line-numbers {
	font-variant-numeric: tabular-nums;
	position: absolute;
	text-align: right;
	display: inline-block;
	vertical-align: middle;
	box-sizing: border-box;
	cursor: default;
	height: 100%;
}

.monaco-editor .relative-current-line-number {
	text-align: left;
	display: inline-block;
	width: 100%;
}

.monaco-editor .margin-view-overlays .line-numbers.lh-odd {
	margin-top: 1px;
}

.monaco-editor .line-numbers {
	color: var(--vscode-editorLineNumber-foreground);
}

.monaco-editor .line-numbers.active-line-number {
	color: var(--vscode-editorLineNumber-activeForeground);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .margin {
	background-color: var(--vscode-editorGutter-background);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-mouse-cursor-text {
	cursor: text;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .view-overlays .current-line {
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	box-sizing: border-box;
}

.monaco-editor .margin-view-overlays .current-line {
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	box-sizing: border-box;
}

.monaco-editor .margin-view-overlays .current-line.current-line-margin.current-line-margin-both {
	border-right: 0;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/*
	Keeping name short for faster parsing.
	cdr = core decorations rendering (div)
*/
.monaco-editor .lines-content .cdr {
	position: absolute;
}</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .glyph-margin {
	position: absolute;
	top: 0;
}

/*
	Keeping name short for faster parsing.
	cgmr = core glyph margin rendering (div)
*/
.monaco-editor .margin-view-overlays .cgmr {
	position: absolute;
	display: flex;
	align-items: center;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .lines-content .core-guide {
	position: absolute;
	box-sizing: border-box;
}

.monaco-editor .lines-content .core-guide-indent {
	box-shadow: 1px 0 0 0 var(--vscode-editorIndentGuide-background) inset;
}

.monaco-editor .lines-content .core-guide-indent-active {
	box-shadow: 1px 0 0 0 var(--vscode-editorIndentGuide-activeBackground, --vscode-editorIndentGuide-background) inset;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Uncomment to see lines flashing when they're painted */
/*.monaco-editor .view-lines > .view-line {
	background-color: none;
	animation-name: flash-background;
	animation-duration: 800ms;
}
@keyframes flash-background {
	0%   { background-color: lightgreen; }
	100% { background-color: none }
}*/

.mtkcontrol {
	color: rgb(255, 255, 255) !important;
	background: rgb(150, 0, 0) !important;
}

.mtkoverflow {
	background-color: var(--vscode-button-background, --vscode-editor-background);
	color: var(--vscode-button-foreground, --vscode-editor-foreground);
	border-width: 1px;
	border-style: solid;
	border-color: var(--vscode-contrastBorder);
	border-radius: 2px;
	padding: 4px;
	cursor: pointer;
}
.mtkoverflow:hover {
	background-color: var(--vscode-button-hoverBackground);
}

.monaco-editor.no-user-select .lines-content,
.monaco-editor.no-user-select .view-line,
.monaco-editor.no-user-select .view-lines {
	user-select: none;
	-webkit-user-select: none;
}
/* Use user-select: text for lookup feature on macOS */
/* https://github.com/microsoft/vscode/issues/85632 */
.monaco-editor.mac .lines-content:hover,
.monaco-editor.mac .view-line:hover,
.monaco-editor.mac .view-lines:hover {
	user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
}

.monaco-editor.enable-user-select {
	user-select: initial;
	-webkit-user-select: initial;
}

.monaco-editor .view-lines {
	white-space: nowrap;
}

.monaco-editor .view-line {
	position: absolute;
	width: 100%;
}

.monaco-editor .mtkw {
	color: var(--vscode-editorWhitespace-foreground) !important;
}

.monaco-editor .mtkz {
	display: inline-block;
	color: var(--vscode-editorWhitespace-foreground) !important;
}

/* TODO@tokenization bootstrap fix */
/*.monaco-editor .view-line > span > span {
	float: none;
	min-height: inherit;
	margin-left: inherit;
}*/
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .lines-decorations {
	position: absolute;
	top: 0;
	background: white;
}

/*
	Keeping name short for faster parsing.
	cldr = core lines decorations rendering (div)
*/
.monaco-editor .margin-view-overlays .cldr {
	position: absolute;
	height: 100%;
}</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/*
	Keeping name short for faster parsing.
	cmdr = core margin decorations rendering (div)
*/
.monaco-editor .margin-view-overlays .cmdr {
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
}</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* START cover the case that slider is visible on mouseover */
.monaco-editor .minimap.slider-mouseover .minimap-slider {
	opacity: 0;
	transition: opacity 100ms linear;
}
.monaco-editor .minimap.slider-mouseover:hover .minimap-slider {
	opacity: 1;
}
.monaco-editor .minimap.slider-mouseover .minimap-slider.active {
	opacity: 1;
}
/* END cover the case that slider is visible on mouseover */
.monaco-editor .minimap-slider .minimap-slider-horizontal {
	background: var(--vscode-minimapSlider-background);
}
.monaco-editor .minimap-slider:hover .minimap-slider-horizontal {
	background: var(--vscode-minimapSlider-hoverBackground);
}
.monaco-editor .minimap-slider.active .minimap-slider-horizontal {
	background: var(--vscode-minimapSlider-activeBackground);
}
.monaco-editor .minimap-shadow-visible {
	box-shadow: var(--vscode-scrollbar-shadow) -6px 0 6px -6px inset;
}
.monaco-editor .minimap-shadow-hidden {
	position: absolute;
	width: 0;
}
.monaco-editor .minimap-shadow-visible {
	position: absolute;
	left: -6px;
	width: 6px;
}
.monaco-editor.no-minimap-shadow .minimap-shadow-visible {
	position: absolute;
	left: -1px;
	width: 1px;
}

/* 0.5s fade in/out for the minimap */
.minimap.autohide {
	opacity: 0;
	transition: opacity 0.5s;
}
.minimap.autohide:hover {
	opacity: 1;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .overlayWidgets {
	position: absolute;
	top: 0;
	left:0;
}</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .view-ruler {
	position: absolute;
	top: 0;
	box-shadow: 1px 0 0 0 var(--vscode-editorRuler-foreground) inset;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .scroll-decoration {
	position: absolute;
	top: 0;
	left: 0;
	height: 6px;
	box-shadow: var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/*
	Keeping name short for faster parsing.
	cslr = core selections layer rendering (div)
*/
.monaco-editor .lines-content .cslr {
	position: absolute;
}

.monaco-editor .focused .selected-text {
	background-color: var(--vscode-editor-selectionBackground);
}

.monaco-editor .selected-text {
	background-color: var(--vscode-editor-inactiveSelectionBackground);
}

.monaco-editor			.top-left-radius		{ border-top-left-radius: 3px; }
.monaco-editor			.bottom-left-radius		{ border-bottom-left-radius: 3px; }
.monaco-editor			.top-right-radius		{ border-top-right-radius: 3px; }
.monaco-editor			.bottom-right-radius	{ border-bottom-right-radius: 3px; }

.monaco-editor.hc-black .top-left-radius		{ border-top-left-radius: 0; }
.monaco-editor.hc-black .bottom-left-radius		{ border-bottom-left-radius: 0; }
.monaco-editor.hc-black .top-right-radius		{ border-top-right-radius: 0; }
.monaco-editor.hc-black .bottom-right-radius	{ border-bottom-right-radius: 0; }

.monaco-editor.hc-light .top-left-radius		{ border-top-left-radius: 0; }
.monaco-editor.hc-light .bottom-left-radius		{ border-bottom-left-radius: 0; }
.monaco-editor.hc-light .top-right-radius		{ border-top-right-radius: 0; }
.monaco-editor.hc-light .bottom-right-radius	{ border-bottom-right-radius: 0; }
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .cursors-layer {
	position: absolute;
	top: 0;
}

.monaco-editor .cursors-layer > .cursor {
	position: absolute;
	overflow: hidden;
	box-sizing: border-box;
}

/* -- smooth-caret-animation -- */
.monaco-editor .cursors-layer.cursor-smooth-caret-animation > .cursor {
	transition: all 80ms;
}

/* -- block-outline-style -- */
.monaco-editor .cursors-layer.cursor-block-outline-style > .cursor {
	background: transparent !important;
	border-style: solid;
	border-width: 1px;
}

/* -- underline-style -- */
.monaco-editor .cursors-layer.cursor-underline-style > .cursor {
	border-bottom-width: 2px;
	border-bottom-style: solid;
	background: transparent !important;
}

/* -- underline-thin-style -- */
.monaco-editor .cursors-layer.cursor-underline-thin-style > .cursor {
	border-bottom-width: 1px;
	border-bottom-style: solid;
	background: transparent !important;
}

@keyframes monaco-cursor-smooth {
	0%,
	20% {
		opacity: 1;
	}
	60%,
	100% {
		opacity: 0;
	}
}

@keyframes monaco-cursor-phase {
	0%,
	20% {
		opacity: 1;
	}
	90%,
	100% {
		opacity: 0;
	}
}

@keyframes monaco-cursor-expand {
	0%,
	20% {
		transform: scaleY(1);
	}
	80%,
	100% {
		transform: scaleY(0);
	}
}

.cursor-smooth {
	animation: monaco-cursor-smooth 0.5s ease-in-out 0s 20 alternate;
}

.cursor-phase {
	animation: monaco-cursor-phase 0.5s ease-in-out 0s 20 alternate;
}

.cursor-expand > .cursor {
	animation: monaco-cursor-expand 0.5s ease-in-out 0s 20 alternate;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .blockDecorations-container {
	position: absolute;
	top: 0;
	pointer-events: none;
}

.monaco-editor .blockDecorations-block {
	position: absolute;
	box-sizing: border-box;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .mwh {
	position: absolute;
	color: var(--vscode-editorWhitespace-foreground) !important;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

:root {
	--vscode-sash-size: 4px;
}

.monaco-sash {
	position: absolute;
	z-index: 35;
	touch-action: none;
}

.monaco-sash.disabled {
	pointer-events: none;
}

.monaco-sash.mac.vertical {
	cursor: col-resize;
}

.monaco-sash.vertical.minimum {
	cursor: e-resize;
}

.monaco-sash.vertical.maximum {
	cursor: w-resize;
}

.monaco-sash.mac.horizontal {
	cursor: row-resize;
}

.monaco-sash.horizontal.minimum {
	cursor: s-resize;
}

.monaco-sash.horizontal.maximum {
	cursor: n-resize;
}

.monaco-sash.disabled {
	cursor: default !important;
	pointer-events: none !important;
}

.monaco-sash.vertical {
	cursor: ew-resize;
	top: 0;
	width: var(--vscode-sash-size);
	height: 100%;
}

.monaco-sash.horizontal {
	cursor: ns-resize;
	left: 0;
	width: 100%;
	height: var(--vscode-sash-size);
}

.monaco-sash:not(.disabled) > .orthogonal-drag-handle {
	content: " ";
	height: calc(var(--vscode-sash-size) * 2);
	width: calc(var(--vscode-sash-size) * 2);
	z-index: 100;
	display: block;
	cursor: all-scroll;
	position: absolute;
}

.monaco-sash.horizontal.orthogonal-edge-north:not(.disabled)
	> .orthogonal-drag-handle.start,
.monaco-sash.horizontal.orthogonal-edge-south:not(.disabled)
	> .orthogonal-drag-handle.end {
	cursor: nwse-resize;
}

.monaco-sash.horizontal.orthogonal-edge-north:not(.disabled)
	> .orthogonal-drag-handle.end,
.monaco-sash.horizontal.orthogonal-edge-south:not(.disabled)
	> .orthogonal-drag-handle.start {
	cursor: nesw-resize;
}

.monaco-sash.vertical > .orthogonal-drag-handle.start {
	left: calc(var(--vscode-sash-size) * -0.5);
	top: calc(var(--vscode-sash-size) * -1);
}
.monaco-sash.vertical > .orthogonal-drag-handle.end {
	left: calc(var(--vscode-sash-size) * -0.5);
	bottom: calc(var(--vscode-sash-size) * -1);
}
.monaco-sash.horizontal > .orthogonal-drag-handle.start {
	top: calc(var(--vscode-sash-size) * -0.5);
	left: calc(var(--vscode-sash-size) * -1);
}
.monaco-sash.horizontal > .orthogonal-drag-handle.end {
	top: calc(var(--vscode-sash-size) * -0.5);
	right: calc(var(--vscode-sash-size) * -1);
}

.monaco-sash:before {
	content: '';
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 100%;
	background: transparent;
}

.monaco-workbench:not(.reduce-motion) .monaco-sash:before {
	transition: background-color 0.1s ease-out;
}

.monaco-sash.hover:before,
.monaco-sash.active:before {
	background: var(--vscode-sash-hoverBorder);
}

.monaco-sash.vertical:before {
	width: var(--vscode-sash-hover-size);
	left: calc(50% - (var(--vscode-sash-hover-size) / 2));
}

.monaco-sash.horizontal:before {
	height: var(--vscode-sash-hover-size);
	top: calc(50% - (var(--vscode-sash-hover-size) / 2));
}

.pointer-events-disabled {
	pointer-events: none !important;
}

/** Debug **/

.monaco-sash.debug {
	background: cyan;
}

.monaco-sash.debug.disabled {
	background: rgba(0, 255, 255, 0.2);
}

.monaco-sash.debug:not(.disabled) > .orthogonal-drag-handle {
	background: red;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .zone-widget {
	position: absolute;
	z-index: 10;
}


.monaco-editor .zone-widget .zone-widget-container {
	border-top-style: solid;
	border-bottom-style: solid;
	border-top-width: 0;
	border-bottom-width: 0;
	position: relative;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-dropdown {
	height: 100%;
	padding: 0;
}

.monaco-dropdown > .dropdown-label {
	cursor: pointer;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.monaco-dropdown > .dropdown-label > .action-label.disabled {
	cursor: default;
}

.monaco-dropdown-with-primary {
	display: flex !important;
	flex-direction: row;
	border-radius: 5px;
}

.monaco-dropdown-with-primary > .action-container > .action-label {
	margin-right: 0;
}

.monaco-dropdown-with-primary > .dropdown-action-container > .monaco-dropdown > .dropdown-label .codicon[class*='codicon-'] {
	font-size: 12px;
	padding-left: 0px;
	padding-right: 0px;
	line-height: 16px;
	margin-left: -3px;
}

.monaco-dropdown-with-primary > .dropdown-action-container > .monaco-dropdown > .dropdown-label > .action-label {
	display: block;
	background-size: 16px;
	background-position: center center;
	background-repeat: no-repeat;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-action-bar .action-item.menu-entry .action-label.icon {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 16px;
}

.monaco-dropdown-with-default {
	display: flex !important;
	flex-direction: row;
	border-radius: 5px;
}

.monaco-dropdown-with-default > .action-container > .action-label {
	margin-right: 0;
}

.monaco-dropdown-with-default > .action-container.menu-entry > .action-label.icon {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 16px;
}

.monaco-dropdown-with-default > .dropdown-action-container > .monaco-dropdown > .dropdown-label .codicon[class*='codicon-'] {
	font-size: 12px;
	padding-left: 0px;
	padding-right: 0px;
	line-height: 16px;
	margin-left: -3px;
}

.monaco-dropdown-with-default > .dropdown-action-container > .monaco-dropdown > .dropdown-label > .action-label {
	display: block;
	background-size: 16px;
	background-position: center center;
	background-repeat: no-repeat;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-split-view2 {
	position: relative;
	width: 100%;
	height: 100%;
}

.monaco-split-view2 > .sash-container {
	position: absolute;
	width: 100%;
	height: 100%;
	pointer-events: none;
}

.monaco-split-view2 > .sash-container > .monaco-sash {
	pointer-events: initial;
}

.monaco-split-view2 > .monaco-scrollable-element {
	width: 100%;
	height: 100%;
}

.monaco-split-view2 > .monaco-scrollable-element > .split-view-container {
	width: 100%;
	height: 100%;
	white-space: nowrap;
	position: relative;
}

.monaco-split-view2 > .monaco-scrollable-element > .split-view-container > .split-view-view {
	white-space: initial;
	position: absolute;
}

.monaco-split-view2 > .monaco-scrollable-element > .split-view-container > .split-view-view:not(.visible) {
	display: none;
}

.monaco-split-view2.vertical > .monaco-scrollable-element > .split-view-container > .split-view-view {
	width: 100%;
}

.monaco-split-view2.horizontal > .monaco-scrollable-element > .split-view-container > .split-view-view {
	height: 100%;
}

.monaco-split-view2.separator-border > .monaco-scrollable-element > .split-view-container > .split-view-view:not(:first-child)::before {
	content: ' ';
	position: absolute;
	top: 0;
	left: 0;
	z-index: 5;
	pointer-events: none;
	background-color: var(--separator-border);
}

.monaco-split-view2.separator-border.horizontal > .monaco-scrollable-element > .split-view-container > .split-view-view:not(:first-child)::before {
	height: 100%;
	width: 1px;
}

.monaco-split-view2.separator-border.vertical > .monaco-scrollable-element > .split-view-container > .split-view-view:not(:first-child)::before {
	height: 1px;
	width: 100%;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-table {
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
}

.monaco-table > .monaco-split-view2 {
	border-bottom: 1px solid transparent;
}

.monaco-table > .monaco-list {
	flex: 1;
}

.monaco-table-tr {
	display: flex;
	height: 100%;
}

.monaco-table-th {
	width: 100%;
	height: 100%;
	font-weight: bold;
	overflow: hidden;
	text-overflow: ellipsis;
}

.monaco-table-th,
.monaco-table-td {
	box-sizing: border-box;
	flex-shrink: 0;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
	content: "";
	position: absolute;
	left: calc(var(--vscode-sash-size) / 2);
	width: 0;
	border-left: 1px solid transparent;
}

.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,
.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
	transition: border-color 0.2s ease-out;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-custom-toggle {
	margin-left: 2px;
	float: left;
	cursor: pointer;
	overflow: hidden;
	width: 20px;
	height: 20px;
	border-radius: 3px;
	border: 1px solid transparent;
	padding: 1px;
	box-sizing:	border-box;
	user-select: none;
	-webkit-user-select: none;
}

.monaco-custom-toggle:hover {
	background-color: var(--vscode-inputOption-hoverBackground);
}

.hc-black .monaco-custom-toggle:hover,
.hc-light .monaco-custom-toggle:hover {
	border: 1px dashed var(--vscode-focusBorder);
}

.hc-black .monaco-custom-toggle,
.hc-light .monaco-custom-toggle {
	background: none;
}

.hc-black .monaco-custom-toggle:hover,
.hc-light .monaco-custom-toggle:hover {
	background: none;
}

.monaco-custom-toggle.monaco-checkbox {
	height: 18px;
	width: 18px;
	border: 1px solid transparent;
	border-radius: 3px;
	margin-right: 9px;
	margin-left: 0px;
	padding: 0px;
	opacity: 1;
	background-size: 16px !important;
}

/* hide check when unchecked */
.monaco-custom-toggle.monaco-checkbox:not(.checked)::before {
	visibility: hidden;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-inputbox {
	position: relative;
	display: block;
	padding: 0;
	box-sizing:	border-box;
	border-radius: 2px;

	/* Customizable */
	font-size: inherit;
}

.monaco-inputbox > .ibwrapper > .input,
.monaco-inputbox > .ibwrapper > .mirror {

	/* Customizable */
	padding: 4px 6px;
}

.monaco-inputbox > .ibwrapper {
	position: relative;
	width: 100%;
	height: 100%;
}

.monaco-inputbox > .ibwrapper > .input {
	display: inline-block;
	box-sizing:	border-box;
	width: 100%;
	height: 100%;
	line-height: inherit;
	border: none;
	font-family: inherit;
	font-size: inherit;
	resize: none;
	color: inherit;
}

.monaco-inputbox > .ibwrapper > input {
	text-overflow: ellipsis;
}

.monaco-inputbox > .ibwrapper > textarea.input {
	display: block;
	scrollbar-width: none; /* Firefox: hide scrollbars */
	outline: none;
}

.monaco-inputbox > .ibwrapper > textarea.input::-webkit-scrollbar {
	display: none; /* Chrome + Safari: hide scrollbar */
}

.monaco-inputbox > .ibwrapper > textarea.input.empty {
	white-space: nowrap;
}

.monaco-inputbox > .ibwrapper > .mirror {
	position: absolute;
	display: inline-block;
	width: 100%;
	top: 0;
	left: 0;
	box-sizing: border-box;
	white-space: pre-wrap;
	visibility: hidden;
	word-wrap: break-word;
}

/* Context view */

.monaco-inputbox-container {
	text-align: right;
}

.monaco-inputbox-container .monaco-inputbox-message {
	display: inline-block;
	overflow: hidden;
	text-align: left;
	width: 100%;
	box-sizing:	border-box;
	padding: 0.4em;
	font-size: 12px;
	line-height: 17px;
	margin-top: -1px;
	word-wrap: break-word;
}

/* Action bar support */
.monaco-inputbox .monaco-action-bar {
	position: absolute;
	right: 2px;
	top: 4px;
}

.monaco-inputbox .monaco-action-bar .action-item {
	margin-left: 2px;
}

.monaco-inputbox .monaco-action-bar .action-item .codicon {
	background-repeat: no-repeat;
	width: 16px;
	height: 16px;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* ---------- Find input ---------- */

.monaco-findInput {
	position: relative;
}

.monaco-findInput .monaco-inputbox {
	font-size: 13px;
	width: 100%;
}

.monaco-findInput > .controls {
	position: absolute;
	top: 3px;
	right: 2px;
}

.vs .monaco-findInput.disabled {
	background-color: #E1E1E1;
}

/* Theming */
.vs-dark .monaco-findInput.disabled {
	background-color: #333;
}

/* Highlighting */
.monaco-findInput.highlight-0 .controls,
.hc-light .monaco-findInput.highlight-0 .controls {
	animation: monaco-findInput-highlight-0 100ms linear 0s;
}

.monaco-findInput.highlight-1 .controls,
.hc-light .monaco-findInput.highlight-1 .controls {
	animation: monaco-findInput-highlight-1 100ms linear 0s;
}

.hc-black .monaco-findInput.highlight-0 .controls,
.vs-dark  .monaco-findInput.highlight-0 .controls {
	animation: monaco-findInput-highlight-dark-0 100ms linear 0s;
}

.hc-black .monaco-findInput.highlight-1 .controls,
.vs-dark  .monaco-findInput.highlight-1 .controls {
	animation: monaco-findInput-highlight-dark-1 100ms linear 0s;
}

@keyframes monaco-findInput-highlight-0 {
	0% { background: rgba(253, 255, 0, 0.8); }
	100% { background: transparent; }
}
@keyframes monaco-findInput-highlight-1 {
	0% { background: rgba(253, 255, 0, 0.8); }
	/* Made intentionally different such that the CSS minifier does not collapse the two animations into a single one*/
	99% { background: transparent; }
}

@keyframes monaco-findInput-highlight-dark-0 {
	0% { background: rgba(255, 255, 255, 0.44); }
	100% { background: transparent; }
}
@keyframes monaco-findInput-highlight-dark-1 {
	0% { background: rgba(255, 255, 255, 0.44); }
	/* Made intentionally different such that the CSS minifier does not collapse the two animations into a single one*/
	99% { background: transparent; }
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-tl-row {
	display: flex;
	height: 100%;
	align-items: center;
	position: relative;
}

.monaco-tl-row.disabled {
	cursor: default;
}
.monaco-tl-indent {
	height: 100%;
	position: absolute;
	top: 0;
	left: 16px;
	pointer-events: none;
}

.hide-arrows .monaco-tl-indent {
	left: 12px;
}

.monaco-tl-indent > .indent-guide {
	display: inline-block;
	box-sizing: border-box;
	height: 100%;
	border-left: 1px solid transparent;
}

.monaco-workbench:not(.reduce-motion) .monaco-tl-indent > .indent-guide {
	transition: border-color 0.1s linear;
}

.monaco-tl-twistie,
.monaco-tl-contents {
	height: 100%;
}

.monaco-tl-twistie {
	font-size: 10px;
	text-align: right;
	padding-right: 6px;
	flex-shrink: 0;
	width: 16px;
	display: flex !important;
	align-items: center;
	justify-content: center;
	transform: translateX(3px);
}

.monaco-tl-contents {
	flex: 1;
	overflow: hidden;
}

.monaco-tl-twistie::before {
	border-radius: 20px;
}

.monaco-tl-twistie.collapsed::before {
	transform: rotate(-90deg);
}

.monaco-tl-twistie.codicon-tree-item-loading::before {
	/* Use steps to throttle FPS to reduce CPU usage */
	animation: codicon-spin 1.25s steps(30) infinite;
}

.monaco-tree-type-filter {
	position: absolute;
	top: 0;
	display: flex;
	padding: 3px;
	max-width: 200px;
	z-index: 100;
	margin: 0 6px;
	border: 1px solid var(--vscode-widget-border);
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
}

.monaco-workbench:not(.reduce-motion) .monaco-tree-type-filter {
	transition: top 0.3s;
}

.monaco-tree-type-filter.disabled {
	top: -40px !important;
}

.monaco-tree-type-filter-grab {
	display: flex !important;
	align-items: center;
	justify-content: center;
	cursor: grab;
	margin-right: 2px;
}

.monaco-tree-type-filter-grab.grabbing {
	cursor: grabbing;
}

.monaco-tree-type-filter-input {
	flex: 1;
}

.monaco-tree-type-filter-input .monaco-inputbox {
	height: 23px;
}

.monaco-tree-type-filter-input .monaco-inputbox > .ibwrapper > .input,
.monaco-tree-type-filter-input .monaco-inputbox > .ibwrapper > .mirror {
	padding: 2px 4px;
}

.monaco-tree-type-filter-input .monaco-findInput > .controls {
	top: 2px;
}

.monaco-tree-type-filter-actionbar {
	margin-left: 4px;
}

.monaco-tree-type-filter-actionbar .monaco-action-bar .action-label {
	padding: 2px;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* -- zone widget */
.monaco-editor .zone-widget .zone-widget-container.reference-zone-widget {
	border-top-width: 1px;
	border-bottom-width: 1px;
}

.monaco-editor .reference-zone-widget .inline {
	display: inline-block;
	vertical-align: top;
}

.monaco-editor .reference-zone-widget .messages {
	height: 100%;
	width: 100%;
	text-align: center;
	padding: 3em 0;
}

.monaco-editor .reference-zone-widget .ref-tree {
	line-height: 23px;
	background-color: var(--vscode-peekViewResult-background);
	color: var(--vscode-peekViewResult-lineForeground);
}

.monaco-editor .reference-zone-widget .ref-tree .reference {
	text-overflow: ellipsis;
	overflow: hidden;
}

.monaco-editor .reference-zone-widget .ref-tree .reference-file {
	display: inline-flex;
	width: 100%;
	height: 100%;
	color: var(--vscode-peekViewResult-fileForeground);
}

.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .selected .reference-file {
	color: inherit !important;
}

.monaco-editor .reference-zone-widget .ref-tree .monaco-list:focus .monaco-list-rows > .monaco-list-row.selected:not(.highlighted) {
	background-color: var(--vscode-peekViewResult-selectionBackground);
	color: var(--vscode-peekViewResult-selectionForeground) !important;
}

.monaco-editor .reference-zone-widget .ref-tree .reference-file .count {
	margin-right: 12px;
	margin-left: auto;
}

.monaco-editor .reference-zone-widget .ref-tree .referenceMatch .highlight {
	background-color: var(--vscode-peekViewResult-matchHighlightBackground);
}

.monaco-editor .reference-zone-widget .preview .reference-decoration {
	background-color: var(--vscode-peekViewEditor-matchHighlightBackground);
	border: 2px solid var(--vscode-peekViewEditor-matchHighlightBorder);
	box-sizing: border-box;
}

.monaco-editor .reference-zone-widget .preview .monaco-editor .monaco-editor-background,
.monaco-editor .reference-zone-widget .preview .monaco-editor .inputarea.ime-input {
	background-color: var(--vscode-peekViewEditor-background);
}

.monaco-editor .reference-zone-widget .preview .monaco-editor .margin {
	background-color: var(--vscode-peekViewEditorGutter-background);
}

/* High Contrast Theming */

.monaco-editor.hc-black .reference-zone-widget .ref-tree .reference-file,
.monaco-editor.hc-light .reference-zone-widget .ref-tree .reference-file {
	font-weight: bold;
}

.monaco-editor.hc-black .reference-zone-widget .ref-tree .referenceMatch .highlight,
.monaco-editor.hc-light .reference-zone-widget .ref-tree .referenceMatch .highlight {
	border: 1px dotted var(--vscode-contrastActiveBorder, transparent);
	box-sizing: border-box;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-count-badge {
	padding: 3px 6px;
	border-radius: 11px;
	font-size: 11px;
	min-width: 18px;
	min-height: 18px;
	line-height: 11px;
	font-weight: normal;
	text-align: center;
	display: inline-block;
	box-sizing: border-box;
}

.monaco-count-badge.long {
	padding: 2px 3px;
	border-radius: 2px;
	min-height: auto;
	line-height: normal;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* ---------- Icon label ---------- */

.monaco-icon-label {
	display: flex; /* required for icons support :before rule */
	overflow: hidden;
	text-overflow: ellipsis;
}

.monaco-icon-label::before {

	/* svg icons rendered as background image */
	background-size: 16px;
	background-position: left center;
	background-repeat: no-repeat;
	padding-right: 6px;
	width: 16px;
	height: 22px;
	line-height: inherit !important;
	display: inline-block;

	/* fonts icons */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	vertical-align: top;

	flex-shrink: 0; /* fix for https://github.com/microsoft/vscode/issues/13787 */
}

.monaco-icon-label-container.disabled {
	color: var(--vscode-disabledForeground);
}
.monaco-icon-label > .monaco-icon-label-container {
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	flex: 1;
}

.monaco-icon-label > .monaco-icon-label-container > .monaco-icon-name-container > .label-name {
	color: inherit;
	white-space: pre; /* enable to show labels that include multiple whitespaces */
}

.monaco-icon-label > .monaco-icon-label-container > .monaco-icon-name-container > .label-name > .label-separator {
	margin: 0 2px;
	opacity: 0.5;
}

.monaco-icon-label > .monaco-icon-label-container > .monaco-icon-description-container > .label-description {
	opacity: .7;
	margin-left: 0.5em;
	font-size: 0.9em;
	white-space: pre; /* enable to show labels that include multiple whitespaces */
}

.monaco-icon-label.nowrap > .monaco-icon-label-container > .monaco-icon-description-container > .label-description{
	white-space: nowrap
}

.vs .monaco-icon-label > .monaco-icon-label-container > .monaco-icon-description-container > .label-description {
	opacity: .95;
}

.monaco-icon-label.italic > .monaco-icon-label-container > .monaco-icon-name-container > .label-name,
.monaco-icon-label.italic > .monaco-icon-label-container > .monaco-icon-description-container > .label-description {
	font-style: italic;
}

.monaco-icon-label.deprecated {
	text-decoration: line-through;
	opacity: 0.66;
}

/* make sure apply italic font style to decorations as well */
.monaco-icon-label.italic::after {
	font-style: italic;
}

.monaco-icon-label.strikethrough > .monaco-icon-label-container > .monaco-icon-name-container > .label-name,
.monaco-icon-label.strikethrough > .monaco-icon-label-container > .monaco-icon-description-container > .label-description {
	text-decoration: line-through;
}

.monaco-icon-label::after {
	opacity: 0.75;
	font-size: 90%;
	font-weight: 600;
	margin: auto 16px 0 5px; /* https://github.com/microsoft/vscode/issues/113223 */
	text-align: center;
}

/* make sure selection color wins when a label is being selected */
.monaco-list:focus .selected .monaco-icon-label, /* list */
.monaco-list:focus .selected .monaco-icon-label::after
{
	color: inherit !important;
}

.monaco-list-row.focused.selected .label-description,
.monaco-list-row.selected .label-description {
	opacity: .8;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .hoverHighlight {
	background-color: var(--vscode-editor-hoverHighlightBackground);
}

.monaco-editor .monaco-hover {
	color: var(--vscode-editorHoverWidget-foreground);
	background-color: var(--vscode-editorHoverWidget-background);
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.monaco-editor .monaco-hover a {
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .monaco-hover a:hover {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor .monaco-hover .hover-row .actions {
	background-color: var(--vscode-editorHoverWidget-statusBarBackground);
}

.monaco-editor .monaco-hover code {
	background-color: var(--vscode-textCodeBlock-background);
}


</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .rendered-markdown kbd {
	background-color: var(--vscode-keybindingLabel-background);
	color: var(--vscode-keybindingLabel-foreground);
	border-style: solid;
	border-width: 1px;
	border-radius: 3px;
	border-color: var(--vscode-keybindingLabel-border);
	border-bottom-color: var(--vscode-keybindingLabel-bottomBorder);
	box-shadow: inset 0 -1px 0 var(--vscode-widget-shadow);
	vertical-align: middle;
	padding: 1px 3px;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* marker zone */

.monaco-editor .peekview-widget .head .peekview-title .severity-icon {
	display: inline-block;
	vertical-align: text-top;
	margin-right: 4px;
}

.monaco-editor .marker-widget {
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .marker-widget > .stale {
	opacity: 0.6;
	font-style: italic;
}

.monaco-editor .marker-widget .title {
	display: inline-block;
	padding-right: 5px;
}

.monaco-editor .marker-widget .descriptioncontainer {
	position: absolute;
	white-space: pre;
	user-select: text;
	-webkit-user-select: text;
	padding: 8px 12px 0 20px;
}

.monaco-editor .marker-widget .descriptioncontainer .message {
	display: flex;
	flex-direction: column;
}

.monaco-editor .marker-widget .descriptioncontainer .message .details {
	padding-left: 6px;
}

.monaco-editor .marker-widget .descriptioncontainer .message .source,
.monaco-editor .marker-widget .descriptioncontainer .message span.code {
	opacity: 0.6;
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link {
	opacity: 0.6;
	color: inherit;
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:before {
	content: '(';
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:after {
	content: ')';
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link > span {
	text-decoration: underline;
	/** Hack to force underline to show **/
	border-bottom: 1px solid transparent;
	text-underline-position: under;
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .marker-widget .descriptioncontainer .message a.code-link > span {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor .marker-widget .descriptioncontainer .filename {
	cursor: pointer;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .zone-widget .codicon.codicon-error,
.markers-panel .marker-icon.error, .markers-panel .marker-icon .codicon.codicon-error,
.text-search-provider-messages .providerMessage .codicon.codicon-error,
.extensions-viewlet > .extensions .codicon.codicon-error,
.extension-editor .codicon.codicon-error,
.preferences-editor .codicon.codicon-error {
	color: var(--vscode-problemsErrorIcon-foreground);
}

.monaco-editor .zone-widget .codicon.codicon-warning,
.markers-panel .marker-icon.warning, .markers-panel .marker-icon .codicon.codicon-warning,
.text-search-provider-messages .providerMessage .codicon.codicon-warning,
.extensions-viewlet > .extensions .codicon.codicon-warning,
.extension-editor .codicon.codicon-warning,
.preferences-editor .codicon.codicon-warning {
	color: var(--vscode-problemsWarningIcon-foreground);
}

.monaco-editor .zone-widget .codicon.codicon-info,
.markers-panel .marker-icon.info, .markers-panel .marker-icon .codicon.codicon-info,
.text-search-provider-messages .providerMessage .codicon.codicon-info,
.extensions-viewlet > .extensions .codicon.codicon-info,
.extension-editor .codicon.codicon-info,
.preferences-editor .codicon.codicon-info {
	color: var(--vscode-problemsInfoIcon-foreground);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .inlineSuggestionsHints.withBorder {
	z-index: 39;
	color: var(--vscode-editorHoverWidget-foreground);
	background-color: var(--vscode-editorHoverWidget-background);
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.monaco-editor .inlineSuggestionsHints a {
	color: var(--vscode-foreground);
}

.monaco-editor .inlineSuggestionsHints a:hover {
	color: var(--vscode-foreground);
}

.monaco-editor .inlineSuggestionsHints .keybinding {
	display: flex;
	margin-left: 4px;
	opacity: 0.6;
}

.monaco-editor .inlineSuggestionsHints .keybinding .monaco-keybinding-key {
	font-size: 8px;
	padding: 2px 3px;
}

.monaco-editor .inlineSuggestionsHints .custom-actions .action-item:nth-child(2) a {
	display: flex;
	min-width: 19px;
	justify-content: center;
}

.monaco-editor .inlineSuggestionStatusBarItemLabel {
	margin-right: 2px;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-toolbar {
	height: 100%;
}

.monaco-toolbar .toolbar-toggle-more {
	display: inline-block;
	padding: 0;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.inline-editor-progress-decoration {
	display: inline-block;
	width: 1em;
	height: 1em;
}

.inline-progress-widget  {
	display: flex !important;
	justify-content: center;
	align-items: center;
}

.inline-progress-widget .icon {
	font-size: 80% !important;
}

.inline-progress-widget:hover .icon {
	font-size: 90% !important;
	animation: none;
}

.inline-progress-widget:hover .icon::before {
	content: "\ea76"; /* codicon-x */
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor.vs .dnd-target,
.monaco-editor.hc-light .dnd-target {
	border-right: 2px dotted black;
	color: white; /* opposite of black */
}
.monaco-editor.vs-dark .dnd-target {
	border-right: 2px dotted #AEAFAD;
	color: #51504f; /* opposite of #AEAFAD */
}
.monaco-editor.hc-black .dnd-target {
	border-right: 2px dotted #fff;
	color: #000; /* opposite of #fff */
}

.monaco-editor.mouse-default .view-lines,
.monaco-editor.vs-dark.mac.mouse-default .view-lines,
.monaco-editor.hc-black.mac.mouse-default .view-lines,
.monaco-editor.hc-light.mac.mouse-default .view-lines {
	cursor: default;
}
.monaco-editor.mouse-copy .view-lines,
.monaco-editor.vs-dark.mac.mouse-copy .view-lines,
.monaco-editor.hc-black.mac.mouse-copy .view-lines,
.monaco-editor.hc-light.mac.mouse-copy .view-lines {
	cursor: copy;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-text-button {
	box-sizing: border-box;
	display: flex;
	width: 100%;
	padding: 4px;
	border-radius: 2px;
	text-align: center;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	border: 1px solid var(--vscode-button-border, transparent);
	line-height: 18px;
}

.monaco-text-button:focus {
	outline-offset: 2px !important;
}

.monaco-text-button:hover {
	text-decoration: none !important;
}

.monaco-button.disabled:focus,
.monaco-button.disabled {
	opacity: 0.4 !important;
	cursor: default;
}

.monaco-text-button .codicon {
	margin: 0 0.2em;
	color: inherit !important;
}

.monaco-text-button.monaco-text-button-with-short-label {
	flex-direction: row;
	flex-wrap: wrap;
	padding: 0 4px;
	overflow: hidden;
	height: 28px;
}

.monaco-text-button.monaco-text-button-with-short-label > .monaco-button-label {
	flex-basis: 100%;
}

.monaco-text-button.monaco-text-button-with-short-label > .monaco-button-label-short {
	flex-grow: 1;
	width: 0;
	overflow: hidden;
}

.monaco-text-button.monaco-text-button-with-short-label > .monaco-button-label,
.monaco-text-button.monaco-text-button-with-short-label > .monaco-button-label-short {
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: normal;
	font-style: inherit;
	padding: 4px 0;
}

.monaco-button-dropdown {
	display: flex;
	cursor: pointer;
}

.monaco-button-dropdown.disabled {
	cursor: default;
}

.monaco-button-dropdown > .monaco-button:focus {
	outline-offset: -1px !important;
}

.monaco-button-dropdown.disabled > .monaco-button.disabled,
.monaco-button-dropdown.disabled > .monaco-button.disabled:focus,
.monaco-button-dropdown.disabled > .monaco-button-dropdown-separator {
	opacity: 0.4 !important;
}

.monaco-button-dropdown > .monaco-button.monaco-text-button {
	border-right-width: 0 !important;
}

.monaco-button-dropdown .monaco-button-dropdown-separator {
	padding: 4px 0;
	cursor: default;
}

.monaco-button-dropdown .monaco-button-dropdown-separator > div {
	height: 100%;
	width: 1px;
}

.monaco-button-dropdown > .monaco-button.monaco-dropdown-button {
	border: 1px solid var(--vscode-button-border, transparent);
	border-left-width: 0 !important;
	border-radius: 0 2px 2px 0;
}

.monaco-button-dropdown > .monaco-button.monaco-text-button {
	border-radius: 2px 0 0 2px;
}

.monaco-description-button {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 4px 5px; /* allows button focus outline to be visible */
}

.monaco-description-button .monaco-button-description {
	font-style: italic;
	font-size: 11px;
	padding: 4px 20px;
}

.monaco-description-button .monaco-button-label,
.monaco-description-button .monaco-button-description {
	display: flex;
	justify-content: center;
	align-items: center;
}

.monaco-description-button .monaco-button-label > .codicon,
.monaco-description-button .monaco-button-description > .codicon {
	margin: 0 0.2em;
	color: inherit !important;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.post-drop-widget {
	box-shadow: 0 0 8px 2px var(--vscode-widget-shadow);
	border: 1px solid var(--vscode-widget-border, transparent);
	border-radius: 4px;
	background-color: var(--vscode-editorWidget-background);
	overflow: hidden;
}

.post-drop-widget .monaco-button {
	padding: 2px;
	border: none;
	border-radius: 0;
}

.post-drop-widget .monaco-button:hover {
	background-color: var(--vscode-button-secondaryHoverBackground) !important;
}

.post-drop-widget .monaco-button .codicon {
	margin: 0;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .findOptionsWidget {
	background-color: var(--vscode-editorWidget-background);
	color: var(--vscode-editorWidget-foreground);
	box-shadow: 0 0 8px 2px var(--vscode-widget-shadow);
	border: 2px solid var(--vscode-contrastBorder);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Find widget */
.monaco-editor .find-widget {
	position: absolute;
	z-index: 35;
	height: 33px;
	overflow: hidden;
	line-height: 19px;
	transition: transform 200ms linear;
	padding: 0 4px;
	box-sizing: border-box;
	transform: translateY(calc(-100% - 10px)); /* shadow (10px) */
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
}

.monaco-workbench.reduce-motion .monaco-editor .find-widget {
	transition: transform 0ms linear;
}

.monaco-editor .find-widget textarea {
	margin: 0px;
}

.monaco-editor .find-widget.hiddenEditor {
	display: none;
}

/* Find widget when replace is toggled on */
.monaco-editor .find-widget.replaceToggled > .replace-part {
	display: flex;
}

.monaco-editor .find-widget.visible  {
	transform: translateY(0);
}

.monaco-editor .find-widget .monaco-inputbox.synthetic-focus {
	outline: 1px solid -webkit-focus-ring-color;
	outline-offset: -1px;
}

.monaco-editor .find-widget .monaco-inputbox .input {
	background-color: transparent;
	min-height: 0;
}

.monaco-editor .find-widget .monaco-findInput .input {
	font-size: 13px;
}

.monaco-editor .find-widget > .find-part,
.monaco-editor .find-widget > .replace-part {
	margin: 3px 0 0 17px;
	font-size: 12px;
	display: flex;
}

.monaco-editor .find-widget > .find-part .monaco-inputbox,
.monaco-editor .find-widget > .replace-part .monaco-inputbox {
	min-height: 25px;
}


.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .mirror {
	padding-right: 22px;
}

.monaco-editor .find-widget > .find-part .monaco-inputbox > .ibwrapper > .input,
.monaco-editor .find-widget > .find-part .monaco-inputbox > .ibwrapper > .mirror,
.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .input,
.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .mirror {
	padding-top: 2px;
	padding-bottom: 2px;
}

.monaco-editor .find-widget > .find-part .find-actions {
	height: 25px;
	display: flex;
	align-items: center;
}

.monaco-editor .find-widget > .replace-part .replace-actions {
	height: 25px;
	display: flex;
	align-items: center;
}

.monaco-editor .find-widget .monaco-findInput {
	vertical-align: middle;
	display: flex;
	flex:1;
}

.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element {
	/* Make sure textarea inherits the width correctly */
	width: 100%;
}

.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element .scrollbar.vertical {
	/* Hide vertical scrollbar */
	opacity: 0;
}

.monaco-editor .find-widget .matchesCount {
	display: flex;
	flex: initial;
	margin: 0 0 0 3px;
	padding: 2px 0 0 2px;
	height: 25px;
	vertical-align: middle;
	box-sizing: border-box;
	text-align: center;
	line-height: 23px;
}

.monaco-editor .find-widget .button {
	width: 16px;
	height: 16px;
	padding: 3px;
	border-radius: 5px;
	display: flex;
	flex: initial;
	margin-left: 3px;
	background-position: center center;
	background-repeat: no-repeat;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* find in selection button */
.monaco-editor .find-widget .codicon-find-selection {
	width: 22px;
	height: 22px;
	padding: 3px;
	border-radius: 5px;
}

.monaco-editor .find-widget .button.left {
	margin-left: 0;
	margin-right: 3px;
}

.monaco-editor .find-widget .button.wide {
	width: auto;
	padding: 1px 6px;
	top: -1px;
}

.monaco-editor .find-widget .button.toggle {
	position: absolute;
	top: 0;
	left: 3px;
	width: 18px;
	height: 100%;
	border-radius: 0;
	box-sizing: border-box;
}

.monaco-editor .find-widget .button.toggle.disabled {
	display: none;
}

.monaco-editor .find-widget .disabled {
	color: var(--vscode-disabledForeground);
	cursor: default;
}

.monaco-editor .find-widget > .replace-part {
	display: none;
}

.monaco-editor .find-widget > .replace-part > .monaco-findInput {
	position: relative;
	display: flex;
	vertical-align: middle;
	flex: auto;
	flex-grow: 0;
	flex-shrink: 0;
}

.monaco-editor .find-widget > .replace-part > .monaco-findInput > .controls {
	position: absolute;
	top: 3px;
	right: 2px;
}

/* REDUCED */
.monaco-editor .find-widget.reduced-find-widget .matchesCount {
	display:none;
}

/* NARROW (SMALLER THAN REDUCED) */
.monaco-editor .find-widget.narrow-find-widget {
	max-width: 257px !important;
}

/* COLLAPSED (SMALLER THAN NARROW) */
.monaco-editor .find-widget.collapsed-find-widget {
	max-width: 170px !important;
}

.monaco-editor .find-widget.collapsed-find-widget .button.previous,
.monaco-editor .find-widget.collapsed-find-widget .button.next,
.monaco-editor .find-widget.collapsed-find-widget .button.replace,
.monaco-editor .find-widget.collapsed-find-widget .button.replace-all,
.monaco-editor .find-widget.collapsed-find-widget > .find-part .monaco-findInput .controls {
	display:none;
}

.monaco-editor .findMatch {
	animation-duration: 0;
	animation-name: inherit !important;
}

.monaco-editor .find-widget .monaco-sash {
	left: 0 !important;
}

.monaco-editor.hc-black .find-widget .button:before {
	position: relative;
	top: 1px;
	left: 2px;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .margin-view-overlays .codicon-folding-manual-collapsed,
.monaco-editor .margin-view-overlays .codicon-folding-manual-expanded,
.monaco-editor .margin-view-overlays .codicon-folding-expanded,
.monaco-editor .margin-view-overlays .codicon-folding-collapsed {
	cursor: pointer;
	opacity: 0;
	transition: opacity 0.5s;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 140%;
	margin-left: 2px;
}

.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-manual-collapsed,
.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-manual-expanded,
.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-expanded,
.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-collapsed {
	transition: initial;
}

.monaco-editor .margin-view-overlays:hover .codicon,
.monaco-editor .margin-view-overlays .codicon.codicon-folding-collapsed,
.monaco-editor .margin-view-overlays .codicon.codicon-folding-manual-collapsed,
.monaco-editor .margin-view-overlays .codicon.alwaysShowFoldIcons {
	opacity: 1;
}

.monaco-editor .inline-folded:after {
	color: grey;
	margin: 0.1em 0.2em 0 0.2em;
	content: "\22EF"; /* ellipses unicode character */
	display: inline;
	line-height: 1em;
	cursor: pointer;
}

.monaco-editor .folded-background {
	background-color: var(--vscode-editor-foldBackground);
}

.monaco-editor .cldr.codicon.codicon-folding-expanded,
.monaco-editor .cldr.codicon.codicon-folding-collapsed,
.monaco-editor .cldr.codicon.codicon-folding-manual-expanded,
.monaco-editor .cldr.codicon.codicon-folding-manual-collapsed {
	color: var(--vscode-editorGutter-foldingControlForeground) !important;
}

</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .iPadShowKeyboard {
	width: 58px;
	min-width: 0;
	height: 36px;
	min-height: 0;
	margin: 0;
	padding: 0;
	position: absolute;
	resize: none;
	overflow: hidden;
	background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjNDI0MjQyIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==") center center no-repeat;
	border: 4px solid #F6F6F6;
	border-radius: 4px;
}

.monaco-editor.vs-dark .iPadShowKeyboard {
	background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjQzVDNUM1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==") center center no-repeat;
	border: 4px solid #252526;
}</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


.monaco-editor.vs .valueSetReplacement {
	outline: solid 2px var(--vscode-editorBracketMatch-border);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .suggest-preview-additional-widget {
	white-space: nowrap;
}

.monaco-editor .suggest-preview-additional-widget .content-spacer {
	color: transparent;
	white-space: pre;
}

.monaco-editor .suggest-preview-additional-widget .button {
	display: inline-block;
	cursor: pointer;
	text-decoration: underline;
	text-underline-position: under;
}

.monaco-editor .ghost-text-hidden {
	opacity: 0;
	font-size: 0;
}

.monaco-editor .ghost-text-decoration, .monaco-editor .suggest-preview-text .ghost-text {
	font-style: italic;
}

.monaco-editor .inline-completion-text-to-replace {
	text-decoration: underline;
	text-underline-position: under;
}

.monaco-editor .ghost-text-decoration,
.monaco-editor .ghost-text-decoration-preview,
.monaco-editor .suggest-preview-text .ghost-text {
	color: var(--vscode-editorGhostText-foreground) !important;
	background-color: var(--vscode-editorGhostText-background);
	border: 1px solid var(--vscode-editorGhostText-border);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .snippet-placeholder {
	min-width: 2px;
	outline-style: solid;
	outline-width: 1px;
	background-color: var(--vscode-editor-snippetTabstopHighlightBackground, transparent);
	outline-color: var(--vscode-editor-snippetTabstopHighlightBorder, transparent);
}

.monaco-editor .finish-snippet-placeholder {
	outline-style: solid;
	outline-width: 1px;
	background-color: var(--vscode-editor-snippetFinalTabstopHighlightBackground, transparent);
	outline-color: var(--vscode-editor-snippetFinalTabstopHighlightBorder, transparent);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* Suggest widget*/

.monaco-editor .suggest-widget {
	width: 430px;
	z-index: 40;
	display: flex;
	flex-direction: column;
}

.monaco-editor .suggest-widget.message {
	flex-direction: row;
	align-items: center;
}

.monaco-editor .suggest-widget,
.monaco-editor .suggest-details {
	flex: 0 1 auto;
	width: 100%;
	border-style: solid;
	border-width: 1px;
	border-color: var(--vscode-editorSuggestWidget-border);
	background-color: var(--vscode-editorSuggestWidget-background);
}

.monaco-editor.hc-black .suggest-widget,
.monaco-editor.hc-black .suggest-details,
.monaco-editor.hc-light .suggest-widget,
.monaco-editor.hc-light .suggest-details {
	border-width: 2px;
}

/* Styles for status bar part */


.monaco-editor .suggest-widget .suggest-status-bar {
	box-sizing: border-box;
	display: none;
	flex-flow: row nowrap;
	justify-content: space-between;
	width: 100%;
	font-size: 80%;
	padding: 0 4px 0 4px;
	border-top: 1px solid var(--vscode-editorSuggestWidget-border);
	overflow: hidden;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar {
	display: flex;
}

.monaco-editor .suggest-widget .suggest-status-bar .left {
	padding-right: 8px;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-label {
	color: var(--vscode-editorSuggestWidgetStatus-foreground);
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label {
	margin-right: 0;
}

.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label::after {
	content: ', ';
	margin-right: 0.3em;
}

.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row>.contents>.main>.right>.readMore,
.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore {
	display: none;
}

.monaco-editor .suggest-widget.with-status-bar:not(.docs-side) .monaco-list .monaco-list-row:hover>.contents>.main>.right.can-expand-details>.details-label {
	width: 100%;
}

/* Styles for Message element for when widget is loading or is empty */

.monaco-editor .suggest-widget>.message {
	padding-left: 22px;
}

/** Styles for the list element **/

.monaco-editor .suggest-widget>.tree {
	height: 100%;
	width: 100%;
}

.monaco-editor .suggest-widget .monaco-list {
	user-select: none;
	-webkit-user-select: none;
}

/** Styles for each row in the list element **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row {
	display: flex;
	-mox-box-sizing: border-box;
	box-sizing: border-box;
	padding-right: 10px;
	background-repeat: no-repeat;
	background-position: 2px 2px;
	white-space: nowrap;
	cursor: pointer;
	touch-action: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused {
	color: var(--vscode-editorSuggestWidget-selectedForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused .codicon {
	color: var(--vscode-editorSuggestWidget-selectedIconForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents {
	flex: 1;
	height: 100%;
	overflow: hidden;
	padding-left: 2px;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main {
	display: flex;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: pre;
	justify-content: space-between;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right {
	display: flex;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.focused)>.contents>.main .monaco-icon-label {
	color: var(--vscode-editorSuggestWidget-foreground);
}

.monaco-editor .suggest-widget:not(.frozen) .monaco-highlighted-label .highlight {
	font-weight: bold;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main .monaco-highlighted-label .highlight {
	color: var(--vscode-editorSuggestWidget-highlightForeground);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused>.contents>.main .monaco-highlighted-label .highlight {
	color: var(--vscode-editorSuggestWidget-focusHighlightForeground);
}

/** ReadMore Icon styles **/

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore::before {
	color: inherit;
	opacity: 1;
	font-size: 14px;
	cursor: pointer;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close {
	position: absolute;
	top: 6px;
	right: 2px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close:hover,
.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore:hover {
	opacity: 1;
}

/** signature, qualifier, type/details opacity **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	opacity: 0.7;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.signature-label {
	overflow: hidden;
	text-overflow: ellipsis;
	opacity: 0.6;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.qualifier-label {
	margin-left: 12px;
	opacity: 0.4;
	font-size: 85%;
	line-height: initial;
	text-overflow: ellipsis;
	overflow: hidden;
	align-self: center;
}

/** Type Info and icon next to the label in the focused completion item **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	font-size: 85%;
	margin-left: 1.1em;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label>.monaco-tokenized-source {
	display: inline;
}

/** Details: if using CompletionItem#details, show on focus **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {
	display: none;
}

.monaco-editor .suggest-widget:not(.shows-details) .monaco-list .monaco-list-row.focused>.contents>.main>.right>.details-label {
	display: inline;
}

/** Details: if using CompletionItemLabel#details, always show **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.right>.details-label,
.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row.focused:not(.string-label)>.contents>.main>.right>.details-label {
	display: inline;
}

/** Ellipsis on hover **/

.monaco-editor .suggest-widget:not(.docs-side) .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right.can-expand-details>.details-label {
	width: calc(100% - 26px);
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left {
	flex-shrink: 1;
	flex-grow: 1;
	overflow: hidden;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.monaco-icon-label {
	flex-shrink: 0;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.left>.monaco-icon-label {
	max-width: 100%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.left>.monaco-icon-label {
	flex-shrink: 1;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right {
	overflow: hidden;
	flex-shrink: 4;
	max-width: 70%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore {
	display: inline-block;
	position: absolute;
	right: 10px;
	width: 18px;
	height: 18px;
	visibility: hidden;
}

/** Do NOT display ReadMore when docs is side/below **/

.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row>.contents>.main>.right>.readMore {
	display: none !important;
}

/** Do NOT display ReadMore when using plain CompletionItemLabel (details/documentation might not be resolved) **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.right>.readMore {
	display: none;
}

/** Focused item can show ReadMore, but can't when docs is side/below **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore {
	display: inline-block;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right>.readMore {
	visibility: visible;
}

/** Styles for each row in the list **/

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated {
	opacity: 0.66;
	text-decoration: unset;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated>.monaco-icon-label-container>.monaco-icon-name-container {
	text-decoration: line-through;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label::before {
	height: 100%;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon {
	display: block;
	height: 16px;
	width: 16px;
	margin-left: 2px;
	background-repeat: no-repeat;
	background-size: 80%;
	background-position: center;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.hide {
	display: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .suggest-icon {
	display: flex;
	align-items: center;
	margin-right: 4px;
}

.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .icon,
.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .suggest-icon::before {
	display: none;
}

.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.customcolor .colorspan {
	margin: 0 0 0 0.3em;
	border: 0.1em solid #000;
	width: 0.7em;
	height: 0.7em;
	display: inline-block;
}

/** Styles for the docs of the completion item in focus **/

.monaco-editor .suggest-details-container {
	z-index: 41;
}

.monaco-editor .suggest-details {
	display: flex;
	flex-direction: column;
	cursor: default;
	color: var(--vscode-editorSuggestWidget-foreground);
}

.monaco-editor .suggest-details.focused {
	border-color: var(--vscode-focusBorder);
}

.monaco-editor .suggest-details a {
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .suggest-details a:hover {
	color: var(--vscode-textLink-activeForeground);
}

.monaco-editor .suggest-details code {
	background-color: var(--vscode-textCodeBlock-background);
}

.monaco-editor .suggest-details.no-docs {
	display: none;
}

.monaco-editor .suggest-details>.monaco-scrollable-element {
	flex: 1;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body {
	box-sizing: border-box;
	height: 100%;
	width: 100%;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type {
	flex: 2;
	overflow: hidden;
	text-overflow: ellipsis;
	opacity: 0.7;
	white-space: pre;
	margin: 0 24px 0 0;
	padding: 4px 0 12px 5px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type.auto-wrap {
	white-space: normal;
	word-break: break-all;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs {
	margin: 0;
	padding: 4px 5px;
	white-space: pre-wrap;
}

.monaco-editor .suggest-details.no-type>.monaco-scrollable-element>.body>.docs {
	margin-right: 24px;
	overflow: hidden;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs {
	padding: 0;
	white-space: initial;
	min-height: calc(1rem + 8px);
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div,
.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>span:not(:empty) {
	padding: 4px 5px;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:first-child {
	margin-top: 0;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:last-child {
	margin-bottom: 0;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .monaco-tokenized-source {
	white-space: pre;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs .code {
	white-space: pre-wrap;
	word-wrap: break-word;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .codicon {
	vertical-align: sub;
}

.monaco-editor .suggest-details>.monaco-scrollable-element>.body>p:empty {
	display: none;
}

.monaco-editor .suggest-details code {
	border-radius: 3px;
	padding: 0 0.4em;
}

.monaco-editor .suggest-details ul {
	padding-left: 20px;
}

.monaco-editor .suggest-details ol {
	padding-left: 20px;
}

.monaco-editor .suggest-details p code {
	font-family: var(--monaco-monospace-font);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .tokens-inspect-widget {
	z-index: 50;
	user-select: text;
	-webkit-user-select: text;
	padding: 10px;
	color: var(--vscode-editorHoverWidget-foreground);
	background-color: var(--vscode-editorHoverWidget-background);
	border: 1px solid var(--vscode-editorHoverWidget-border);
}
.monaco-editor.hc-black .tokens-inspect-widget, .monaco-editor.hc-light .tokens-inspect-widget {
	border-width: 2px;
}

.monaco-editor .tokens-inspect-widget .tokens-inspect-separator {
	height: 1px;
	border: 0;
	background-color: var(--vscode-editorHoverWidget-border);
}

.monaco-editor .tokens-inspect-widget .tm-token {
	font-family: var(--monaco-monospace-font);
}

.monaco-editor .tokens-inspect-widget .tm-token-length {
	font-weight: normal;
	font-size: 60%;
	float: right;
}

.monaco-editor .tokens-inspect-widget .tm-metadata-table {
	width: 100%;
}

.monaco-editor .tokens-inspect-widget .tm-metadata-value {
	font-family: var(--monaco-monospace-font);
	text-align: right;
}

.monaco-editor .tokens-inspect-widget .tm-token-type {
	font-family: var(--monaco-monospace-font);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .linked-editing-decoration {
	background-color: var(--vscode-editor-linkedEditingBackground);

	/* Ensure decoration is visible even if range is empty */
	min-width: 1px;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
.monaco-editor .detected-link,
.monaco-editor .detected-link-active {
	text-decoration: underline;
	text-underline-position: under;
}

.monaco-editor .detected-link-active {
	cursor: pointer;
	color: var(--vscode-editorLink-activeForeground) !important;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .focused .selectionHighlight {
	background-color: var(--vscode-editor-selectionHighlightBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-selectionHighlightBorder);
}
.monaco-editor.hc-black .focused .selectionHighlight, .monaco-editor.hc-light .focused .selectionHighlight {
	border-style: dotted;
}

.monaco-editor .wordHighlight {
	background-color: var(--vscode-editor-wordHighlightBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-wordHighlightBorder);
}
.monaco-editor.hc-black .wordHighlight, .monaco-editor.hc-light .wordHighlight {
	border-style: dotted;
}

.monaco-editor .wordHighlightStrong {
	background-color: var(--vscode-editor-wordHighlightStrongBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-wordHighlightStrongBorder);
}
.monaco-editor.hc-black .wordHighlightStrong, .monaco-editor.hc-light .wordHighlightStrong {
	border-style: dotted;
}

.monaco-editor .wordHighlightText {
	background-color: var(--vscode-editor-wordHighlightTextBackground);
	box-sizing: border-box;
	border: 1px solid var(--vscode-editor-wordHighlightTextBorder);
}
.monaco-editor.hc-black .wordHighlightText, .monaco-editor.hc-light .wordHighlightText {
	border-style: dotted;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .parameter-hints-widget {
	/* Must be higher than the sash's z-index and terminal canvases but lower than the suggest widget */
	z-index: 39;
	display: flex;
	flex-direction: column;
	line-height: 1.5em;
	cursor: default;
	color: var(--vscode-editorHoverWidget-foreground);
	background-color: var(--vscode-editorHoverWidget-background);
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.hc-black .monaco-editor .parameter-hints-widget,
.hc-light .monaco-editor .parameter-hints-widget {
	border-width: 2px;
}

.monaco-editor .parameter-hints-widget > .phwrapper {
	max-width: 440px;
	display: flex;
	flex-direction: row;
}

.monaco-editor .parameter-hints-widget.multiple {
	min-height: 3.3em;
	padding: 0;
}

.monaco-editor .parameter-hints-widget.multiple .body::before {
	content: "";
	display: block;
	height: 100%;
	position: absolute;
	opacity: 0.5;
	border-left: 1px solid var(--vscode-editorHoverWidget-border);
}

.monaco-editor .parameter-hints-widget p,
.monaco-editor .parameter-hints-widget ul {
	margin: 8px 0;
}

.monaco-editor .parameter-hints-widget .monaco-scrollable-element,
.monaco-editor .parameter-hints-widget .body {
	display: flex;
	flex: 1;
	flex-direction: column;
	min-height: 100%;
}

.monaco-editor .parameter-hints-widget .signature {
	padding: 4px 5px;
	position: relative;
}

.monaco-editor .parameter-hints-widget .signature.has-docs::after {
	content: "";
	display: block;
	position: absolute;
	left: 0;
	width: 100%;
	padding-top: 4px;
	opacity: 0.5;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.monaco-editor .parameter-hints-widget .docs {
	padding: 0 10px 0 5px;
	white-space: pre-wrap;
}

.monaco-editor .parameter-hints-widget .docs.empty {
	display: none;
}

.monaco-editor .parameter-hints-widget .docs a {
	color: var(--vscode-textLink-foreground);
}

.monaco-editor .parameter-hints-widget .docs a:hover {
	color: var(--vscode-textLink-activeForeground);
	cursor: pointer;
}

.monaco-editor .parameter-hints-widget .docs .markdown-docs {
	white-space: initial;
}

.monaco-editor .parameter-hints-widget .docs code {
	font-family: var(--monaco-monospace-font);
	border-radius: 3px;
	padding: 0 0.4em;
	background-color: var(--vscode-textCodeBlock-background);
}

.monaco-editor .parameter-hints-widget .docs .monaco-tokenized-source,
.monaco-editor .parameter-hints-widget .docs .code {
	white-space: pre-wrap;
}

.monaco-editor .parameter-hints-widget .controls {
	display: none;
	flex-direction: column;
	align-items: center;
	min-width: 22px;
	justify-content: flex-end;
}

.monaco-editor .parameter-hints-widget.multiple .controls {
	display: flex;
	padding: 0 2px;
}

.monaco-editor .parameter-hints-widget.multiple .button {
	width: 16px;
	height: 16px;
	background-repeat: no-repeat;
	cursor: pointer;
}

.monaco-editor .parameter-hints-widget .button.previous {
	bottom: 24px;
}

.monaco-editor .parameter-hints-widget .overloads {
	text-align: center;
	height: 12px;
	line-height: 12px;
	font-family: var(--monaco-monospace-font);
}

.monaco-editor .parameter-hints-widget .signature .parameter.active {
	color: var(--vscode-editorHoverWidget-highlightForeground);
	font-weight: bold;
}

.monaco-editor .parameter-hints-widget .documentation-parameter > .parameter {
	font-weight: bold;
	margin-right: 0.5em;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .rename-box {
	z-index: 100;
	color: inherit;
	border-radius: 4px;
}

.monaco-editor .rename-box.preview {
	padding: 4px 4px 0 4px;
}

.monaco-editor .rename-box .rename-input {
	padding: 3px;
	border-radius: 2px;
}

.monaco-editor .rename-box .rename-label {
	display: none;
	opacity: .8;
}

.monaco-editor .rename-box.preview .rename-label {
	display: inherit;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .sticky-line {
	color: var(--vscode-editorLineNumber-foreground);
	overflow: hidden;
	white-space: nowrap;
	display: inline-block;
}

.monaco-editor .sticky-line-number {
	text-align: right;
	float: left;
}

.monaco-editor .sticky-line-root {
	background-color: inherit;
	overflow: hidden;
	white-space: nowrap;
	width: 100%;
}

.monaco-editor.hc-black .sticky-widget,
.monaco-editor.hc-light .sticky-widget {
	border-bottom: 1px solid var(--vscode-contrastBorder);
}

.monaco-editor .sticky-line-root:hover {
	background-color: var(--vscode-editorStickyScrollHover-background);
	cursor: pointer;
}

.monaco-editor .sticky-widget {
	width: 100%;
	box-shadow: var(--vscode-scrollbar-shadow) 0 3px 2px -2px;
	z-index: 4;
	background-color: var(--vscode-editorStickyScroll-background);
}

.monaco-editor .sticky-widget.peek {
	background-color: var(--vscode-peekViewEditorStickyScroll-background);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-editor .unicode-highlight {
	border: 1px solid var(--vscode-editorUnicodeHighlight-border);
	background-color: var(--vscode-editorUnicodeHighlight-background);
	box-sizing: border-box;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.editor-banner {
	box-sizing: border-box;
	cursor: default;
	width: 100%;
	font-size: 12px;
	display: flex;
	overflow: visible;

	height: 26px;

	background: var(--vscode-banner-background);
}


.editor-banner .icon-container {
	display: flex;
	flex-shrink: 0;
	align-items: center;
	padding: 0 6px 0 10px;
}

.editor-banner .icon-container.custom-icon {
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 16px;
	width: 16px;
	padding: 0;
	margin: 0 6px 0 10px;
}

.editor-banner .message-container {
	display: flex;
	align-items: center;
	line-height: 26px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.editor-banner .message-container p {
	margin-block-start: 0;
	margin-block-end: 0;
}

.editor-banner .message-actions-container {
	flex-grow: 1;
	flex-shrink: 0;
	line-height: 26px;
	margin: 0 4px;
}

.editor-banner .message-actions-container a.monaco-button {
	width: inherit;
	margin: 2px 8px;
	padding: 0px 12px;
}

.editor-banner .message-actions-container a {
	padding: 3px;
	margin-left: 12px;
	text-decoration: underline;
}

.editor-banner .action-container {
	padding: 0 10px 0 6px;
}

.editor-banner {
	background-color: var(--vscode-banner-background);
}

.editor-banner,
.editor-banner .action-container .codicon,
.editor-banner .message-actions-container .monaco-link {
	color: var(--vscode-banner-foreground);
}

.editor-banner .icon-container .codicon {
	color: var(--vscode-banner-iconForeground);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-link {
	color: var(--vscode-textLink-foreground);
}

.monaco-link:hover {
	color: var(--vscode-textLink-activeForeground);
}

</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/* Default standalone editor fonts */
.monaco-editor {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "HelveticaNeue-Light", system-ui, "Ubuntu", "Droid Sans", sans-serif;
	--monaco-monospace-font: "SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace;
}

.monaco-menu .monaco-action-bar.vertical .action-item .action-menu-item:focus .action-label {
	stroke-width: 1.2px;
}

.monaco-editor.vs-dark .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label,
.monaco-editor.hc-black .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label,
.monaco-editor.hc-light .monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .action-label {
	stroke-width: 1.2px;
}

.monaco-hover p {
	margin: 0;
}

/* See https://github.com/microsoft/monaco-editor/issues/2168#issuecomment-780078600 */
.monaco-aria-container {
	position: absolute !important;
	top: 0; /* avoid being placed underneath a sibling element */
	height: 1px;
	width: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
}

/*.monaco-editor.vs [tabindex="0"]:focus {
	outline: 1px solid rgba(0, 122, 204, 0.4);
	outline-offset: -1px;
	opacity: 1 !important;
}

.monaco-editor.vs-dark [tabindex="0"]:focus {
	outline: 1px solid rgba(14, 99, 156, 0.6);
	outline-offset: -1px;
	opacity: 1 !important;
}*/
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* ---------- DiffEditor ---------- */

.monaco-diff-editor .diffOverview {
	z-index: 9;
}

.monaco-diff-editor .diffOverview .diffViewport {
	z-index: 10;
}

/* colors not externalized: using transparancy on background */
.monaco-diff-editor.vs			.diffOverview { background: rgba(0, 0, 0, 0.03); }
.monaco-diff-editor.vs-dark		.diffOverview { background: rgba(255, 255, 255, 0.01); }

.monaco-scrollable-element.modified-in-monaco-diff-editor.vs		.scrollbar { background: rgba(0,0,0,0); }
.monaco-scrollable-element.modified-in-monaco-diff-editor.vs-dark	.scrollbar { background: rgba(0,0,0,0); }
.monaco-scrollable-element.modified-in-monaco-diff-editor.hc-black	.scrollbar { background: none; }
.monaco-scrollable-element.modified-in-monaco-diff-editor.hc-light	.scrollbar { background: none; }

.monaco-scrollable-element.modified-in-monaco-diff-editor .slider {
	z-index: 10;
}
.modified-in-monaco-diff-editor				.slider.active { background: rgba(171, 171, 171, .4); }
.modified-in-monaco-diff-editor.hc-black	.slider.active { background: none; }
.modified-in-monaco-diff-editor.hc-light	.slider.active { background: none; }

/* ---------- Diff ---------- */

.monaco-editor .insert-sign,
.monaco-diff-editor .insert-sign,
.monaco-editor .delete-sign,
.monaco-diff-editor .delete-sign {
	font-size: 11px !important;
	opacity: 0.7 !important;
	display: flex !important;
	align-items: center;
}
.monaco-editor.hc-black .insert-sign,
.monaco-diff-editor.hc-black .insert-sign,
.monaco-editor.hc-black .delete-sign,
.monaco-diff-editor.hc-black .delete-sign,
.monaco-editor.hc-light .insert-sign,
.monaco-diff-editor.hc-light .insert-sign,
.monaco-editor.hc-light .delete-sign,
.monaco-diff-editor.hc-light .delete-sign {
	opacity: 1;
}

.monaco-editor .inline-deleted-margin-view-zone {
	text-align: right;
}
.monaco-editor .inline-added-margin-view-zone {
	text-align: right;
}

.monaco-editor .arrow-revert-change {
	z-index: 10;
	position: absolute;
}

.monaco-editor .arrow-revert-change:hover {
	cursor: pointer;
}

/* ---------- Inline Diff ---------- */

.monaco-editor .view-zones .view-lines .view-line span {
	display: inline-block;
}

.monaco-editor .margin-view-zones .lightbulb-glyph:hover {
	cursor: pointer;
}

.monaco-editor .char-insert, .monaco-diff-editor .char-insert {
	background-color: var(--vscode-diffEditor-insertedTextBackground);
}

.monaco-editor .line-insert, .monaco-diff-editor .line-insert {
	background-color: var(--vscode-diffEditor-insertedLineBackground, --vscode-diffEditor-insertedTextBackground);
}

.monaco-editor .line-insert,
.monaco-editor .char-insert {
	box-sizing: border-box;
	border: 1px solid var(--vscode-diffEditor-insertedTextBorder);
}
.monaco-editor.hc-black .line-insert, .monaco-editor.hc-light .line-insert,
.monaco-editor.hc-black .char-insert, .monaco-editor.hc-light .char-insert {
	border-style: dashed;
}

.monaco-editor .line-delete,
.monaco-editor .char-delete {
	box-sizing: border-box;
	border: 1px solid var(--vscode-diffEditor-removedTextBorder);
}
.monaco-editor.hc-black .line-delete, .monaco-editor.hc-light .line-delete,
.monaco-editor.hc-black .char-delete, .monaco-editor.hc-light .char-delete {
	border-style: dashed;
}

.monaco-editor .inline-added-margin-view-zone,
.monaco-editor .gutter-insert, .monaco-diff-editor .gutter-insert {
	background-color: var(--vscode-diffEditorGutter-insertedLineBackground, --vscode-diffEditor-insertedLineBackground, --vscode-diffEditor-insertedTextBackground);
}

.monaco-editor .char-delete, .monaco-diff-editor .char-delete {
	background-color: var(--vscode-diffEditor-removedTextBackground);
}

.monaco-editor .line-delete, .monaco-diff-editor .line-delete {
	background-color: var(--vscode-diffEditor-removedLineBackground, --vscode-diffEditor-removedTextBackground);
}

.monaco-editor .inline-deleted-margin-view-zone,
.monaco-editor .gutter-delete, .monaco-diff-editor .gutter-delete {
	background-color: var(--vscode-diffEditorGutter-removedLineBackground, --vscode-diffEditor-removedLineBackground, --vscode-diffEditor-removedTextBackground);
}

.monaco-diff-editor.side-by-side .editor.modified {
	box-shadow: -6px 0 5px -5px var(--vscode-scrollbar-shadow);
	border-left: 1px solid var(--vscode-diffEditor-border);
}

.monaco-diff-editor .diffViewport {
	background: var(--vscode-scrollbarSlider-background);
}

.monaco-diff-editor .diffViewport:hover {
	background: var(--vscode-scrollbarSlider-hoverBackground);
}

.monaco-diff-editor .diffViewport:active {
	background: var(--vscode-scrollbarSlider-activeBackground);
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-diff-editor .diff-review-line-number {
	text-align: right;
	display: inline-block;
	color: var(--vscode-editorLineNumber-foreground);
}

.monaco-diff-editor .diff-review {
	position: absolute;
	user-select: none;
	-webkit-user-select: none;
}

.monaco-diff-editor .diff-review-summary {
	padding-left: 10px;
}

.monaco-diff-editor .diff-review-shadow {
	position: absolute;
	box-shadow: var(--vscode-scrollbar-shadow) 0 -6px 6px -6px inset;
}

.monaco-diff-editor .diff-review-row {
	white-space: pre;
}

.monaco-diff-editor .diff-review-table {
	display: table;
	min-width: 100%;
}

.monaco-diff-editor .diff-review-row {
	display: table-row;
	width: 100%;
}

.monaco-diff-editor .diff-review-spacer {
	display: inline-block;
	width: 10px;
	vertical-align: middle;
}

.monaco-diff-editor .diff-review-spacer > .codicon {
	font-size: 9px !important;
}

.monaco-diff-editor .diff-review-actions {
	display: inline-block;
	position: absolute;
	right: 10px;
	top: 2px;
}

.monaco-diff-editor .diff-review-actions .action-label {
	width: 16px;
	height: 16px;
	margin: 2px 0;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.context-view {
	position: absolute;
}

.context-view.fixed {
	all: initial;
	font-family: inherit;
	font-size: 13px;
	position: fixed;
	color: inherit;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.quick-input-widget {
	font-size: 13px;
}

.quick-input-widget .monaco-highlighted-label .highlight,
.quick-input-widget .monaco-highlighted-label .highlight {
	color: #0066BF;
}

.vs .quick-input-widget .monaco-list-row.focused .monaco-highlighted-label .highlight,
.vs .quick-input-widget .monaco-list-row.focused .monaco-highlighted-label .highlight {
	color: #9DDDFF;
}

.vs-dark .quick-input-widget .monaco-highlighted-label .highlight,
.vs-dark .quick-input-widget .monaco-highlighted-label .highlight {
	color: #0097fb;
}

.hc-black .quick-input-widget .monaco-highlighted-label .highlight,
.hc-black .quick-input-widget .monaco-highlighted-label .highlight {
	color: #F38518;
}

.hc-light .quick-input-widget .monaco-highlighted-label .highlight,
.hc-light .quick-input-widget .monaco-highlighted-label .highlight {
	color: #0F4A85;
}

.monaco-keybinding > .monaco-keybinding-key {
	background-color: rgba(221, 221, 221, 0.4);
	border: solid 1px rgba(204, 204, 204, 0.4);
	border-bottom-color: rgba(187, 187, 187, 0.4);
	box-shadow: inset 0 -1px 0 rgba(187, 187, 187, 0.4);
	color: #555;
}

.hc-black .monaco-keybinding > .monaco-keybinding-key {
	background-color: transparent;
	border: solid 1px rgb(111, 195, 223);
	box-shadow: none;
	color: #fff;
}

.hc-light .monaco-keybinding > .monaco-keybinding-key {
	background-color: transparent;
	border: solid 1px #0F4A85;
	box-shadow: none;
	color: #292929;
}

.vs-dark .monaco-keybinding > .monaco-keybinding-key {
	background-color: rgba(128, 128, 128, 0.17);
	border: solid 1px rgba(51, 51, 51, 0.6);
	border-bottom-color: rgba(68, 68, 68, 0.6);
	box-shadow: inset 0 -1px 0 rgba(68, 68, 68, 0.6);
	color: #ccc;
}
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.monaco-progress-container {
	width: 100%;
	height: 5px;
	overflow: hidden; /* keep progress bit in bounds */
}

.monaco-progress-container .progress-bit {
	width: 2%;
	height: 5px;
	position: absolute;
	left: 0;
	display: none;
}

.monaco-progress-container.active .progress-bit {
	display: inherit;
}

.monaco-progress-container.discrete .progress-bit {
	left: 0;
	transition: width 100ms linear;
}

.monaco-progress-container.discrete.done .progress-bit {
	width: 100%;
}

.monaco-progress-container.infinite .progress-bit {
	animation-name: progress;
	animation-duration: 4s;
	animation-iteration-count: infinite;
	transform: translate3d(0px, 0px, 0px);
	animation-timing-function: linear;
}

.monaco-progress-container.infinite.infinite-long-running .progress-bit {
	/*
		The more smooth `linear` timing function can cause
		higher GPU consumption as indicated in
		https://github.com/microsoft/vscode/issues/97900 &
		https://github.com/microsoft/vscode/issues/138396
	*/
	animation-timing-function: steps(100);
}

/**
 * The progress bit has a width: 2% (1/50) of the parent container. The animation moves it from 0% to 100% of
 * that container. Since translateX is relative to the progress bit size, we have to multiple it with
 * its relative size to the parent container:
 * parent width: 5000%
 *    bit width: 100%
 * translateX should be as follow:
 *  50%: 5000% * 50% - 50% (set to center) = 2450%
 * 100%: 5000% * 100% - 100% (do not overflow) = 4900%
 */
@keyframes progress { from { transform: translateX(0%) scaleX(1) } 50% { transform: translateX(2500%) scaleX(3) } to { transform: translateX(4900%) scaleX(1) } }
</style><style>/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

.quick-input-widget {
	position: absolute;
	width: 600px;
	z-index: 2550;
	left: 50%;
	margin-left: -300px;
	-webkit-app-region: no-drag;
	border-radius: 6px;
}

.quick-input-titlebar {
	display: flex;
	align-items: center;
	border-top-left-radius: 5px; /* match border radius of quick input widget */
	border-top-right-radius: 5px;
}

.quick-input-left-action-bar {
	display: flex;
	margin-left: 4px;
	flex: 1;
}

.quick-input-title {
	padding: 3px 0px;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
}

.quick-input-right-action-bar {
	display: flex;
	margin-right: 4px;
	flex: 1;
}

.quick-input-right-action-bar > .actions-container {
	justify-content: flex-end;
}

.quick-input-titlebar .monaco-action-bar .action-label.codicon {
	background-position: center;
	background-repeat: no-repeat;
	padding: 2px;
}

.quick-input-description {
	margin: 6px;
}

.quick-input-header .quick-input-description {
	margin: 4px 2px;
}

.quick-input-header {
	display: flex;
	padding: 8px 6px 6px 6px;
}

.quick-input-widget.hidden-input .quick-input-header {
	/* reduce margins and paddings when input box hidden */
	padding: 0;
	margin-bottom: 0;
}

.quick-input-and-message {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	min-width: 0;
	position: relative;
}

.quick-input-check-all {
	align-self: center;
	margin: 0;
}

.quick-input-filter {
	flex-grow: 1;
	display: flex;
	position: relative;
}

.quick-input-box {
	flex-grow: 1;
}

.quick-input-widget.show-checkboxes .quick-input-box,
.quick-input-widget.show-checkboxes .quick-input-message {
	margin-left: 5px;
}

.quick-input-visible-count {
	position: absolute;
	left: -10000px;
}

.quick-input-count {
	align-self: center;
	position: absolute;
	right: 4px;
	display: flex;
	align-items: center;
}

.quick-input-count .monaco-count-badge {
	vertical-align: middle;
	padding: 2px 4px;
	border-radius: 2px;
	min-height: auto;
	line-height: normal;
}

.quick-input-action {
	margin-left: 6px;
}

.quick-input-action .monaco-text-button {
	font-size: 11px;
	padding: 0 6px;
	display: flex;
	height: 25px;
	align-items: center;
}

.quick-input-message {
	margin-top: -1px;
	padding: 5px;
	overflow-wrap: break-word;
}

.quick-input-message > .codicon {
	margin: 0 0.2em;
	vertical-align: text-bottom;
}

/* Links in descriptions & validations */
.quick-input-message a {
	color: inherit;
}

.quick-input-progress.monaco-progress-container {
	position: relative;
}

.quick-input-progress.monaco-progress-container,
.quick-input-progress.monaco-progress-container .progress-bit {
	height: 2px;
}

.quick-input-list {
	line-height: 22px;
}

.quick-input-widget.hidden-input .quick-input-list {
	margin-top: 4px; /* reduce margins when input box hidden */
	padding-bottom: 4px;
}

.quick-input-list .monaco-list {
	overflow: hidden;
	max-height: calc(20 * 22px);
	padding-bottom: 5px;
}

.quick-input-list .monaco-scrollable-element {
	padding: 0px 5px;
}

.quick-input-list .quick-input-list-entry {
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	height: 100%;
	padding: 0 6px;
}

.quick-input-list .quick-input-list-entry.quick-input-list-separator-border {
	border-top-width: 1px;
	border-top-style: solid;
}

.quick-input-list .monaco-list-row {
	border-radius: 3px;
}

.quick-input-list .monaco-list-row[data-index="0"] .quick-input-list-entry.quick-input-list-separator-border {
	border-top-style: none;
}

.quick-input-list .quick-input-list-label {
	overflow: hidden;
	display: flex;
	height: 100%;
	flex: 1;
}

.quick-input-list .quick-input-list-checkbox {
	align-self: center;
	margin: 0;
}

.quick-input-list .quick-input-list-rows {
	overflow: hidden;
	text-overflow: ellipsis;
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: 1;
	margin-left: 5px;
}

.quick-input-widget.show-checkboxes .quick-input-list .quick-input-list-rows {
	margin-left: 10px;
}

.quick-input-widget .quick-input-list .quick-input-list-checkbox {
	display: none;
}
.quick-input-widget.show-checkboxes .quick-input-list .quick-input-list-checkbox {
	display: inline;
}

.quick-input-list .quick-input-list-rows > .quick-input-list-row {
	display: flex;
	align-items: center;
}

.quick-input-list .quick-input-list-rows > .quick-input-list-row .monaco-icon-label,
.quick-input-list .quick-input-list-rows > .quick-input-list-row .monaco-icon-label .monaco-icon-label-container > .monaco-icon-name-container {
	flex: 1; /* make sure the icon label grows within the row */
}

.quick-input-list .quick-input-list-rows > .quick-input-list-row .codicon[class*='codicon-'] {
	vertical-align: text-bottom;
}

.quick-input-list .quick-input-list-rows .monaco-highlighted-label > span {
	opacity: 1;
}

.quick-input-list .quick-input-list-entry .quick-input-list-entry-keybinding {
	margin-right: 8px; /* separate from the separator label or scrollbar if any */
}

.quick-input-list .quick-input-list-label-meta {
	opacity: 0.7;
	line-height: normal;
	text-overflow: ellipsis;
	overflow: hidden;
}

.quick-input-list .monaco-highlighted-label .highlight {
	font-weight: bold;
}

.quick-input-list .quick-input-list-entry .quick-input-list-separator {
	margin-right: 4px; /* separate from keybindings or actions */
}

.quick-input-list .quick-input-list-entry-action-bar {
	display: flex;
	flex: 0;
	overflow: visible;
}

.quick-input-list .quick-input-list-entry-action-bar .action-label {
	/*
	 * By default, actions in the quick input action bar are hidden
	 * until hovered over them or selected.
	 */
	display: none;
}

.quick-input-list .quick-input-list-entry-action-bar .action-label.codicon {
	margin-right: 4px;
	padding: 0px 2px 2px 2px;
}

.quick-input-list .quick-input-list-entry-action-bar {
	margin-top: 1px;
}

.quick-input-list .quick-input-list-entry-action-bar {
	margin-right: 4px; /* separate from scrollbar */
}

.quick-input-list .quick-input-list-entry .quick-input-list-entry-action-bar .action-label.always-visible,
.quick-input-list .quick-input-list-entry:hover .quick-input-list-entry-action-bar .action-label,
.quick-input-list .monaco-list-row.focused .quick-input-list-entry-action-bar .action-label {
	display: flex;
}

/* focused items in quick pick */
.quick-input-list .monaco-list-row.focused .monaco-keybinding-key,
.quick-input-list .monaco-list-row.focused .quick-input-list-entry .quick-input-list-separator {
	color: inherit
}
.quick-input-list .monaco-list-row.focused .monaco-keybinding-key {
	background: none;
}
</style><style type="text/css" media="screen" class="monaco-colors">.codicon-add:before { content: '\ea60'; }
.codicon-plus:before { content: '\ea60'; }
.codicon-gist-new:before { content: '\ea60'; }
.codicon-repo-create:before { content: '\ea60'; }
.codicon-lightbulb:before { content: '\ea61'; }
.codicon-light-bulb:before { content: '\ea61'; }
.codicon-repo:before { content: '\ea62'; }
.codicon-repo-delete:before { content: '\ea62'; }
.codicon-gist-fork:before { content: '\ea63'; }
.codicon-repo-forked:before { content: '\ea63'; }
.codicon-git-pull-request:before { content: '\ea64'; }
.codicon-git-pull-request-abandoned:before { content: '\ea64'; }
.codicon-record-keys:before { content: '\ea65'; }
.codicon-keyboard:before { content: '\ea65'; }
.codicon-tag:before { content: '\ea66'; }
.codicon-tag-add:before { content: '\ea66'; }
.codicon-tag-remove:before { content: '\ea66'; }
.codicon-person:before { content: '\ea67'; }
.codicon-person-follow:before { content: '\ea67'; }
.codicon-person-outline:before { content: '\ea67'; }
.codicon-person-filled:before { content: '\ea67'; }
.codicon-git-branch:before { content: '\ea68'; }
.codicon-git-branch-create:before { content: '\ea68'; }
.codicon-git-branch-delete:before { content: '\ea68'; }
.codicon-source-control:before { content: '\ea68'; }
.codicon-mirror:before { content: '\ea69'; }
.codicon-mirror-public:before { content: '\ea69'; }
.codicon-star:before { content: '\ea6a'; }
.codicon-star-add:before { content: '\ea6a'; }
.codicon-star-delete:before { content: '\ea6a'; }
.codicon-star-empty:before { content: '\ea6a'; }
.codicon-comment:before { content: '\ea6b'; }
.codicon-comment-add:before { content: '\ea6b'; }
.codicon-alert:before { content: '\ea6c'; }
.codicon-warning:before { content: '\ea6c'; }
.codicon-search:before { content: '\ea6d'; }
.codicon-search-save:before { content: '\ea6d'; }
.codicon-log-out:before { content: '\ea6e'; }
.codicon-sign-out:before { content: '\ea6e'; }
.codicon-log-in:before { content: '\ea6f'; }
.codicon-sign-in:before { content: '\ea6f'; }
.codicon-eye:before { content: '\ea70'; }
.codicon-eye-unwatch:before { content: '\ea70'; }
.codicon-eye-watch:before { content: '\ea70'; }
.codicon-circle-filled:before { content: '\ea71'; }
.codicon-primitive-dot:before { content: '\ea71'; }
.codicon-close-dirty:before { content: '\ea71'; }
.codicon-debug-breakpoint:before { content: '\ea71'; }
.codicon-debug-breakpoint-disabled:before { content: '\ea71'; }
.codicon-debug-hint:before { content: '\ea71'; }
.codicon-primitive-square:before { content: '\ea72'; }
.codicon-edit:before { content: '\ea73'; }
.codicon-pencil:before { content: '\ea73'; }
.codicon-info:before { content: '\ea74'; }
.codicon-issue-opened:before { content: '\ea74'; }
.codicon-gist-private:before { content: '\ea75'; }
.codicon-git-fork-private:before { content: '\ea75'; }
.codicon-lock:before { content: '\ea75'; }
.codicon-mirror-private:before { content: '\ea75'; }
.codicon-close:before { content: '\ea76'; }
.codicon-remove-close:before { content: '\ea76'; }
.codicon-x:before { content: '\ea76'; }
.codicon-repo-sync:before { content: '\ea77'; }
.codicon-sync:before { content: '\ea77'; }
.codicon-clone:before { content: '\ea78'; }
.codicon-desktop-download:before { content: '\ea78'; }
.codicon-beaker:before { content: '\ea79'; }
.codicon-microscope:before { content: '\ea79'; }
.codicon-vm:before { content: '\ea7a'; }
.codicon-device-desktop:before { content: '\ea7a'; }
.codicon-file:before { content: '\ea7b'; }
.codicon-file-text:before { content: '\ea7b'; }
.codicon-more:before { content: '\ea7c'; }
.codicon-ellipsis:before { content: '\ea7c'; }
.codicon-kebab-horizontal:before { content: '\ea7c'; }
.codicon-mail-reply:before { content: '\ea7d'; }
.codicon-reply:before { content: '\ea7d'; }
.codicon-organization:before { content: '\ea7e'; }
.codicon-organization-filled:before { content: '\ea7e'; }
.codicon-organization-outline:before { content: '\ea7e'; }
.codicon-new-file:before { content: '\ea7f'; }
.codicon-file-add:before { content: '\ea7f'; }
.codicon-new-folder:before { content: '\ea80'; }
.codicon-file-directory-create:before { content: '\ea80'; }
.codicon-trash:before { content: '\ea81'; }
.codicon-trashcan:before { content: '\ea81'; }
.codicon-history:before { content: '\ea82'; }
.codicon-clock:before { content: '\ea82'; }
.codicon-folder:before { content: '\ea83'; }
.codicon-file-directory:before { content: '\ea83'; }
.codicon-symbol-folder:before { content: '\ea83'; }
.codicon-logo-github:before { content: '\ea84'; }
.codicon-mark-github:before { content: '\ea84'; }
.codicon-github:before { content: '\ea84'; }
.codicon-terminal:before { content: '\ea85'; }
.codicon-console:before { content: '\ea85'; }
.codicon-repl:before { content: '\ea85'; }
.codicon-zap:before { content: '\ea86'; }
.codicon-symbol-event:before { content: '\ea86'; }
.codicon-error:before { content: '\ea87'; }
.codicon-stop:before { content: '\ea87'; }
.codicon-variable:before { content: '\ea88'; }
.codicon-symbol-variable:before { content: '\ea88'; }
.codicon-array:before { content: '\ea8a'; }
.codicon-symbol-array:before { content: '\ea8a'; }
.codicon-symbol-module:before { content: '\ea8b'; }
.codicon-symbol-package:before { content: '\ea8b'; }
.codicon-symbol-namespace:before { content: '\ea8b'; }
.codicon-symbol-object:before { content: '\ea8b'; }
.codicon-symbol-method:before { content: '\ea8c'; }
.codicon-symbol-function:before { content: '\ea8c'; }
.codicon-symbol-constructor:before { content: '\ea8c'; }
.codicon-symbol-boolean:before { content: '\ea8f'; }
.codicon-symbol-null:before { content: '\ea8f'; }
.codicon-symbol-numeric:before { content: '\ea90'; }
.codicon-symbol-number:before { content: '\ea90'; }
.codicon-symbol-structure:before { content: '\ea91'; }
.codicon-symbol-struct:before { content: '\ea91'; }
.codicon-symbol-parameter:before { content: '\ea92'; }
.codicon-symbol-type-parameter:before { content: '\ea92'; }
.codicon-symbol-key:before { content: '\ea93'; }
.codicon-symbol-text:before { content: '\ea93'; }
.codicon-symbol-reference:before { content: '\ea94'; }
.codicon-go-to-file:before { content: '\ea94'; }
.codicon-symbol-enum:before { content: '\ea95'; }
.codicon-symbol-value:before { content: '\ea95'; }
.codicon-symbol-ruler:before { content: '\ea96'; }
.codicon-symbol-unit:before { content: '\ea96'; }
.codicon-activate-breakpoints:before { content: '\ea97'; }
.codicon-archive:before { content: '\ea98'; }
.codicon-arrow-both:before { content: '\ea99'; }
.codicon-arrow-down:before { content: '\ea9a'; }
.codicon-arrow-left:before { content: '\ea9b'; }
.codicon-arrow-right:before { content: '\ea9c'; }
.codicon-arrow-small-down:before { content: '\ea9d'; }
.codicon-arrow-small-left:before { content: '\ea9e'; }
.codicon-arrow-small-right:before { content: '\ea9f'; }
.codicon-arrow-small-up:before { content: '\eaa0'; }
.codicon-arrow-up:before { content: '\eaa1'; }
.codicon-bell:before { content: '\eaa2'; }
.codicon-bold:before { content: '\eaa3'; }
.codicon-book:before { content: '\eaa4'; }
.codicon-bookmark:before { content: '\eaa5'; }
.codicon-debug-breakpoint-conditional-unverified:before { content: '\eaa6'; }
.codicon-debug-breakpoint-conditional:before { content: '\eaa7'; }
.codicon-debug-breakpoint-conditional-disabled:before { content: '\eaa7'; }
.codicon-debug-breakpoint-data-unverified:before { content: '\eaa8'; }
.codicon-debug-breakpoint-data:before { content: '\eaa9'; }
.codicon-debug-breakpoint-data-disabled:before { content: '\eaa9'; }
.codicon-debug-breakpoint-log-unverified:before { content: '\eaaa'; }
.codicon-debug-breakpoint-log:before { content: '\eaab'; }
.codicon-debug-breakpoint-log-disabled:before { content: '\eaab'; }
.codicon-briefcase:before { content: '\eaac'; }
.codicon-broadcast:before { content: '\eaad'; }
.codicon-browser:before { content: '\eaae'; }
.codicon-bug:before { content: '\eaaf'; }
.codicon-calendar:before { content: '\eab0'; }
.codicon-case-sensitive:before { content: '\eab1'; }
.codicon-check:before { content: '\eab2'; }
.codicon-checklist:before { content: '\eab3'; }
.codicon-chevron-down:before { content: '\eab4'; }
.codicon-drop-down-button:before { content: '\eab4'; }
.codicon-chevron-left:before { content: '\eab5'; }
.codicon-chevron-right:before { content: '\eab6'; }
.codicon-chevron-up:before { content: '\eab7'; }
.codicon-chrome-close:before { content: '\eab8'; }
.codicon-chrome-maximize:before { content: '\eab9'; }
.codicon-chrome-minimize:before { content: '\eaba'; }
.codicon-chrome-restore:before { content: '\eabb'; }
.codicon-circle:before { content: '\eabc'; }
.codicon-circle-outline:before { content: '\eabc'; }
.codicon-debug-breakpoint-unverified:before { content: '\eabc'; }
.codicon-circle-slash:before { content: '\eabd'; }
.codicon-circuit-board:before { content: '\eabe'; }
.codicon-clear-all:before { content: '\eabf'; }
.codicon-clippy:before { content: '\eac0'; }
.codicon-close-all:before { content: '\eac1'; }
.codicon-cloud-download:before { content: '\eac2'; }
.codicon-cloud-upload:before { content: '\eac3'; }
.codicon-code:before { content: '\eac4'; }
.codicon-collapse-all:before { content: '\eac5'; }
.codicon-color-mode:before { content: '\eac6'; }
.codicon-comment-discussion:before { content: '\eac7'; }
.codicon-compare-changes:before { content: '\eafd'; }
.codicon-credit-card:before { content: '\eac9'; }
.codicon-dash:before { content: '\eacc'; }
.codicon-dashboard:before { content: '\eacd'; }
.codicon-database:before { content: '\eace'; }
.codicon-debug-continue:before { content: '\eacf'; }
.codicon-debug-disconnect:before { content: '\ead0'; }
.codicon-debug-pause:before { content: '\ead1'; }
.codicon-debug-restart:before { content: '\ead2'; }
.codicon-debug-start:before { content: '\ead3'; }
.codicon-debug-step-into:before { content: '\ead4'; }
.codicon-debug-step-out:before { content: '\ead5'; }
.codicon-debug-step-over:before { content: '\ead6'; }
.codicon-debug-stop:before { content: '\ead7'; }
.codicon-debug:before { content: '\ead8'; }
.codicon-device-camera-video:before { content: '\ead9'; }
.codicon-device-camera:before { content: '\eada'; }
.codicon-device-mobile:before { content: '\eadb'; }
.codicon-diff-added:before { content: '\eadc'; }
.codicon-diff-ignored:before { content: '\eadd'; }
.codicon-diff-modified:before { content: '\eade'; }
.codicon-diff-removed:before { content: '\eadf'; }
.codicon-diff-renamed:before { content: '\eae0'; }
.codicon-diff:before { content: '\eae1'; }
.codicon-discard:before { content: '\eae2'; }
.codicon-editor-layout:before { content: '\eae3'; }
.codicon-empty-window:before { content: '\eae4'; }
.codicon-exclude:before { content: '\eae5'; }
.codicon-extensions:before { content: '\eae6'; }
.codicon-eye-closed:before { content: '\eae7'; }
.codicon-file-binary:before { content: '\eae8'; }
.codicon-file-code:before { content: '\eae9'; }
.codicon-file-media:before { content: '\eaea'; }
.codicon-file-pdf:before { content: '\eaeb'; }
.codicon-file-submodule:before { content: '\eaec'; }
.codicon-file-symlink-directory:before { content: '\eaed'; }
.codicon-file-symlink-file:before { content: '\eaee'; }
.codicon-file-zip:before { content: '\eaef'; }
.codicon-files:before { content: '\eaf0'; }
.codicon-filter:before { content: '\eaf1'; }
.codicon-flame:before { content: '\eaf2'; }
.codicon-fold-down:before { content: '\eaf3'; }
.codicon-fold-up:before { content: '\eaf4'; }
.codicon-fold:before { content: '\eaf5'; }
.codicon-folder-active:before { content: '\eaf6'; }
.codicon-folder-opened:before { content: '\eaf7'; }
.codicon-gear:before { content: '\eaf8'; }
.codicon-gift:before { content: '\eaf9'; }
.codicon-gist-secret:before { content: '\eafa'; }
.codicon-gist:before { content: '\eafb'; }
.codicon-git-commit:before { content: '\eafc'; }
.codicon-git-compare:before { content: '\eafd'; }
.codicon-git-merge:before { content: '\eafe'; }
.codicon-github-action:before { content: '\eaff'; }
.codicon-github-alt:before { content: '\eb00'; }
.codicon-globe:before { content: '\eb01'; }
.codicon-grabber:before { content: '\eb02'; }
.codicon-graph:before { content: '\eb03'; }
.codicon-gripper:before { content: '\eb04'; }
.codicon-heart:before { content: '\eb05'; }
.codicon-home:before { content: '\eb06'; }
.codicon-horizontal-rule:before { content: '\eb07'; }
.codicon-hubot:before { content: '\eb08'; }
.codicon-inbox:before { content: '\eb09'; }
.codicon-issue-closed:before { content: '\eba4'; }
.codicon-issue-reopened:before { content: '\eb0b'; }
.codicon-issues:before { content: '\eb0c'; }
.codicon-italic:before { content: '\eb0d'; }
.codicon-jersey:before { content: '\eb0e'; }
.codicon-json:before { content: '\eb0f'; }
.codicon-bracket:before { content: '\eb0f'; }
.codicon-kebab-vertical:before { content: '\eb10'; }
.codicon-key:before { content: '\eb11'; }
.codicon-law:before { content: '\eb12'; }
.codicon-lightbulb-autofix:before { content: '\eb13'; }
.codicon-link-external:before { content: '\eb14'; }
.codicon-link:before { content: '\eb15'; }
.codicon-list-ordered:before { content: '\eb16'; }
.codicon-list-unordered:before { content: '\eb17'; }
.codicon-live-share:before { content: '\eb18'; }
.codicon-loading:before { content: '\eb19'; }
.codicon-location:before { content: '\eb1a'; }
.codicon-mail-read:before { content: '\eb1b'; }
.codicon-mail:before { content: '\eb1c'; }
.codicon-markdown:before { content: '\eb1d'; }
.codicon-megaphone:before { content: '\eb1e'; }
.codicon-mention:before { content: '\eb1f'; }
.codicon-milestone:before { content: '\eb20'; }
.codicon-mortar-board:before { content: '\eb21'; }
.codicon-move:before { content: '\eb22'; }
.codicon-multiple-windows:before { content: '\eb23'; }
.codicon-mute:before { content: '\eb24'; }
.codicon-no-newline:before { content: '\eb25'; }
.codicon-note:before { content: '\eb26'; }
.codicon-octoface:before { content: '\eb27'; }
.codicon-open-preview:before { content: '\eb28'; }
.codicon-package:before { content: '\eb29'; }
.codicon-paintcan:before { content: '\eb2a'; }
.codicon-pin:before { content: '\eb2b'; }
.codicon-play:before { content: '\eb2c'; }
.codicon-run:before { content: '\eb2c'; }
.codicon-plug:before { content: '\eb2d'; }
.codicon-preserve-case:before { content: '\eb2e'; }
.codicon-preview:before { content: '\eb2f'; }
.codicon-project:before { content: '\eb30'; }
.codicon-pulse:before { content: '\eb31'; }
.codicon-question:before { content: '\eb32'; }
.codicon-quote:before { content: '\eb33'; }
.codicon-radio-tower:before { content: '\eb34'; }
.codicon-reactions:before { content: '\eb35'; }
.codicon-references:before { content: '\eb36'; }
.codicon-refresh:before { content: '\eb37'; }
.codicon-regex:before { content: '\eb38'; }
.codicon-remote-explorer:before { content: '\eb39'; }
.codicon-remote:before { content: '\eb3a'; }
.codicon-remove:before { content: '\eb3b'; }
.codicon-replace-all:before { content: '\eb3c'; }
.codicon-replace:before { content: '\eb3d'; }
.codicon-repo-clone:before { content: '\eb3e'; }
.codicon-repo-force-push:before { content: '\eb3f'; }
.codicon-repo-pull:before { content: '\eb40'; }
.codicon-repo-push:before { content: '\eb41'; }
.codicon-report:before { content: '\eb42'; }
.codicon-request-changes:before { content: '\eb43'; }
.codicon-rocket:before { content: '\eb44'; }
.codicon-root-folder-opened:before { content: '\eb45'; }
.codicon-root-folder:before { content: '\eb46'; }
.codicon-rss:before { content: '\eb47'; }
.codicon-ruby:before { content: '\eb48'; }
.codicon-save-all:before { content: '\eb49'; }
.codicon-save-as:before { content: '\eb4a'; }
.codicon-save:before { content: '\eb4b'; }
.codicon-screen-full:before { content: '\eb4c'; }
.codicon-screen-normal:before { content: '\eb4d'; }
.codicon-search-stop:before { content: '\eb4e'; }
.codicon-server:before { content: '\eb50'; }
.codicon-settings-gear:before { content: '\eb51'; }
.codicon-settings:before { content: '\eb52'; }
.codicon-shield:before { content: '\eb53'; }
.codicon-smiley:before { content: '\eb54'; }
.codicon-sort-precedence:before { content: '\eb55'; }
.codicon-split-horizontal:before { content: '\eb56'; }
.codicon-split-vertical:before { content: '\eb57'; }
.codicon-squirrel:before { content: '\eb58'; }
.codicon-star-full:before { content: '\eb59'; }
.codicon-star-half:before { content: '\eb5a'; }
.codicon-symbol-class:before { content: '\eb5b'; }
.codicon-symbol-color:before { content: '\eb5c'; }
.codicon-symbol-customcolor:before { content: '\eb5c'; }
.codicon-symbol-constant:before { content: '\eb5d'; }
.codicon-symbol-enum-member:before { content: '\eb5e'; }
.codicon-symbol-field:before { content: '\eb5f'; }
.codicon-symbol-file:before { content: '\eb60'; }
.codicon-symbol-interface:before { content: '\eb61'; }
.codicon-symbol-keyword:before { content: '\eb62'; }
.codicon-symbol-misc:before { content: '\eb63'; }
.codicon-symbol-operator:before { content: '\eb64'; }
.codicon-symbol-property:before { content: '\eb65'; }
.codicon-wrench:before { content: '\eb65'; }
.codicon-wrench-subaction:before { content: '\eb65'; }
.codicon-symbol-snippet:before { content: '\eb66'; }
.codicon-tasklist:before { content: '\eb67'; }
.codicon-telescope:before { content: '\eb68'; }
.codicon-text-size:before { content: '\eb69'; }
.codicon-three-bars:before { content: '\eb6a'; }
.codicon-thumbsdown:before { content: '\eb6b'; }
.codicon-thumbsup:before { content: '\eb6c'; }
.codicon-tools:before { content: '\eb6d'; }
.codicon-triangle-down:before { content: '\eb6e'; }
.codicon-triangle-left:before { content: '\eb6f'; }
.codicon-triangle-right:before { content: '\eb70'; }
.codicon-triangle-up:before { content: '\eb71'; }
.codicon-twitter:before { content: '\eb72'; }
.codicon-unfold:before { content: '\eb73'; }
.codicon-unlock:before { content: '\eb74'; }
.codicon-unmute:before { content: '\eb75'; }
.codicon-unverified:before { content: '\eb76'; }
.codicon-verified:before { content: '\eb77'; }
.codicon-versions:before { content: '\eb78'; }
.codicon-vm-active:before { content: '\eb79'; }
.codicon-vm-outline:before { content: '\eb7a'; }
.codicon-vm-running:before { content: '\eb7b'; }
.codicon-watch:before { content: '\eb7c'; }
.codicon-whitespace:before { content: '\eb7d'; }
.codicon-whole-word:before { content: '\eb7e'; }
.codicon-window:before { content: '\eb7f'; }
.codicon-word-wrap:before { content: '\eb80'; }
.codicon-zoom-in:before { content: '\eb81'; }
.codicon-zoom-out:before { content: '\eb82'; }
.codicon-list-filter:before { content: '\eb83'; }
.codicon-list-flat:before { content: '\eb84'; }
.codicon-list-selection:before { content: '\eb85'; }
.codicon-selection:before { content: '\eb85'; }
.codicon-list-tree:before { content: '\eb86'; }
.codicon-debug-breakpoint-function-unverified:before { content: '\eb87'; }
.codicon-debug-breakpoint-function:before { content: '\eb88'; }
.codicon-debug-breakpoint-function-disabled:before { content: '\eb88'; }
.codicon-debug-stackframe-active:before { content: '\eb89'; }
.codicon-circle-small-filled:before { content: '\eb8a'; }
.codicon-debug-stackframe-dot:before { content: '\eb8a'; }
.codicon-debug-stackframe:before { content: '\eb8b'; }
.codicon-debug-stackframe-focused:before { content: '\eb8b'; }
.codicon-debug-breakpoint-unsupported:before { content: '\eb8c'; }
.codicon-symbol-string:before { content: '\eb8d'; }
.codicon-debug-reverse-continue:before { content: '\eb8e'; }
.codicon-debug-step-back:before { content: '\eb8f'; }
.codicon-debug-restart-frame:before { content: '\eb90'; }
.codicon-call-incoming:before { content: '\eb92'; }
.codicon-call-outgoing:before { content: '\eb93'; }
.codicon-menu:before { content: '\eb94'; }
.codicon-expand-all:before { content: '\eb95'; }
.codicon-feedback:before { content: '\eb96'; }
.codicon-group-by-ref-type:before { content: '\eb97'; }
.codicon-ungroup-by-ref-type:before { content: '\eb98'; }
.codicon-account:before { content: '\eb99'; }
.codicon-bell-dot:before { content: '\eb9a'; }
.codicon-debug-console:before { content: '\eb9b'; }
.codicon-library:before { content: '\eb9c'; }
.codicon-output:before { content: '\eb9d'; }
.codicon-run-all:before { content: '\eb9e'; }
.codicon-sync-ignored:before { content: '\eb9f'; }
.codicon-pinned:before { content: '\eba0'; }
.codicon-github-inverted:before { content: '\eba1'; }
.codicon-debug-alt:before { content: '\eb91'; }
.codicon-server-process:before { content: '\eba2'; }
.codicon-server-environment:before { content: '\eba3'; }
.codicon-pass:before { content: '\eba4'; }
.codicon-stop-circle:before { content: '\eba5'; }
.codicon-play-circle:before { content: '\eba6'; }
.codicon-record:before { content: '\eba7'; }
.codicon-debug-alt-small:before { content: '\eba8'; }
.codicon-vm-connect:before { content: '\eba9'; }
.codicon-cloud:before { content: '\ebaa'; }
.codicon-merge:before { content: '\ebab'; }
.codicon-export:before { content: '\ebac'; }
.codicon-graph-left:before { content: '\ebad'; }
.codicon-magnet:before { content: '\ebae'; }
.codicon-notebook:before { content: '\ebaf'; }
.codicon-redo:before { content: '\ebb0'; }
.codicon-check-all:before { content: '\ebb1'; }
.codicon-pinned-dirty:before { content: '\ebb2'; }
.codicon-pass-filled:before { content: '\ebb3'; }
.codicon-circle-large-filled:before { content: '\ebb4'; }
.codicon-circle-large:before { content: '\ebb5'; }
.codicon-circle-large-outline:before { content: '\ebb5'; }
.codicon-combine:before { content: '\ebb6'; }
.codicon-gather:before { content: '\ebb6'; }
.codicon-table:before { content: '\ebb7'; }
.codicon-variable-group:before { content: '\ebb8'; }
.codicon-type-hierarchy:before { content: '\ebb9'; }
.codicon-type-hierarchy-sub:before { content: '\ebba'; }
.codicon-type-hierarchy-super:before { content: '\ebbb'; }
.codicon-git-pull-request-create:before { content: '\ebbc'; }
.codicon-run-above:before { content: '\ebbd'; }
.codicon-run-below:before { content: '\ebbe'; }
.codicon-notebook-template:before { content: '\ebbf'; }
.codicon-debug-rerun:before { content: '\ebc0'; }
.codicon-workspace-trusted:before { content: '\ebc1'; }
.codicon-workspace-untrusted:before { content: '\ebc2'; }
.codicon-workspace-unspecified:before { content: '\ebc3'; }
.codicon-terminal-cmd:before { content: '\ebc4'; }
.codicon-terminal-debian:before { content: '\ebc5'; }
.codicon-terminal-linux:before { content: '\ebc6'; }
.codicon-terminal-powershell:before { content: '\ebc7'; }
.codicon-terminal-tmux:before { content: '\ebc8'; }
.codicon-terminal-ubuntu:before { content: '\ebc9'; }
.codicon-terminal-bash:before { content: '\ebca'; }
.codicon-arrow-swap:before { content: '\ebcb'; }
.codicon-copy:before { content: '\ebcc'; }
.codicon-person-add:before { content: '\ebcd'; }
.codicon-filter-filled:before { content: '\ebce'; }
.codicon-wand:before { content: '\ebcf'; }
.codicon-debug-line-by-line:before { content: '\ebd0'; }
.codicon-inspect:before { content: '\ebd1'; }
.codicon-layers:before { content: '\ebd2'; }
.codicon-layers-dot:before { content: '\ebd3'; }
.codicon-layers-active:before { content: '\ebd4'; }
.codicon-compass:before { content: '\ebd5'; }
.codicon-compass-dot:before { content: '\ebd6'; }
.codicon-compass-active:before { content: '\ebd7'; }
.codicon-azure:before { content: '\ebd8'; }
.codicon-issue-draft:before { content: '\ebd9'; }
.codicon-git-pull-request-closed:before { content: '\ebda'; }
.codicon-git-pull-request-draft:before { content: '\ebdb'; }
.codicon-debug-all:before { content: '\ebdc'; }
.codicon-debug-coverage:before { content: '\ebdd'; }
.codicon-run-errors:before { content: '\ebde'; }
.codicon-folder-library:before { content: '\ebdf'; }
.codicon-debug-continue-small:before { content: '\ebe0'; }
.codicon-beaker-stop:before { content: '\ebe1'; }
.codicon-graph-line:before { content: '\ebe2'; }
.codicon-graph-scatter:before { content: '\ebe3'; }
.codicon-pie-chart:before { content: '\ebe4'; }
.codicon-bracket-dot:before { content: '\ebe5'; }
.codicon-bracket-error:before { content: '\ebe6'; }
.codicon-lock-small:before { content: '\ebe7'; }
.codicon-azure-devops:before { content: '\ebe8'; }
.codicon-verified-filled:before { content: '\ebe9'; }
.codicon-newline:before { content: '\ebea'; }
.codicon-layout:before { content: '\ebeb'; }
.codicon-layout-activitybar-left:before { content: '\ebec'; }
.codicon-layout-activitybar-right:before { content: '\ebed'; }
.codicon-layout-panel-left:before { content: '\ebee'; }
.codicon-layout-panel-center:before { content: '\ebef'; }
.codicon-layout-panel-justify:before { content: '\ebf0'; }
.codicon-layout-panel-right:before { content: '\ebf1'; }
.codicon-layout-panel:before { content: '\ebf2'; }
.codicon-layout-sidebar-left:before { content: '\ebf3'; }
.codicon-layout-sidebar-right:before { content: '\ebf4'; }
.codicon-layout-statusbar:before { content: '\ebf5'; }
.codicon-layout-menubar:before { content: '\ebf6'; }
.codicon-layout-centered:before { content: '\ebf7'; }
.codicon-layout-sidebar-right-off:before { content: '\ec00'; }
.codicon-layout-panel-off:before { content: '\ec01'; }
.codicon-layout-sidebar-left-off:before { content: '\ec02'; }
.codicon-target:before { content: '\ebf8'; }
.codicon-indent:before { content: '\ebf9'; }
.codicon-record-small:before { content: '\ebfa'; }
.codicon-error-small:before { content: '\ebfb'; }
.codicon-arrow-circle-down:before { content: '\ebfc'; }
.codicon-arrow-circle-left:before { content: '\ebfd'; }
.codicon-arrow-circle-right:before { content: '\ebfe'; }
.codicon-arrow-circle-up:before { content: '\ebff'; }
.codicon-heart-filled:before { content: '\ec04'; }
.codicon-map:before { content: '\ec05'; }
.codicon-map-filled:before { content: '\ec06'; }
.codicon-circle-small:before { content: '\ec07'; }
.codicon-bell-slash:before { content: '\ec08'; }
.codicon-bell-slash-dot:before { content: '\ec09'; }
.codicon-comment-unresolved:before { content: '\ec0a'; }
.codicon-git-pull-request-go-to-changes:before { content: '\ec0b'; }
.codicon-git-pull-request-new-changes:before { content: '\ec0c'; }
.codicon-search-fuzzy:before { content: '\ec0d'; }
.codicon-comment-draft:before { content: '\ec0e'; }
.codicon-send:before { content: '\ec0f'; }
.codicon-sparkle:before { content: '\ec10'; }
.codicon-insert:before { content: '\ec11'; }
.codicon-dialog-error:before { content: '\ea87'; }
.codicon-dialog-warning:before { content: '\ea6c'; }
.codicon-dialog-info:before { content: '\ea74'; }
.codicon-dialog-close:before { content: '\ea76'; }
.codicon-tree-item-expanded:before { content: '\eab4'; }
.codicon-tree-filter-on-type-on:before { content: '\eb83'; }
.codicon-tree-filter-on-type-off:before { content: '\eb85'; }
.codicon-tree-filter-clear:before { content: '\ea76'; }
.codicon-tree-item-loading:before { content: '\eb19'; }
.codicon-menu-selection:before { content: '\eab2'; }
.codicon-menu-submenu:before { content: '\eab6'; }
.codicon-menubar-more:before { content: '\ea7c'; }
.codicon-scrollbar-button-left:before { content: '\eb6f'; }
.codicon-scrollbar-button-right:before { content: '\eb70'; }
.codicon-scrollbar-button-up:before { content: '\eb71'; }
.codicon-scrollbar-button-down:before { content: '\eb6e'; }
.codicon-toolbar-more:before { content: '\ea7c'; }
.codicon-quick-input-back:before { content: '\ea9b'; }
.codicon-widget-close:before { content: '\ea76'; }
.codicon-goto-previous-location:before { content: '\eaa1'; }
.codicon-goto-next-location:before { content: '\ea9a'; }
.codicon-marker-navigation-next:before { content: '\ea9a'; }
.codicon-marker-navigation-previous:before { content: '\eaa1'; }
.codicon-inline-suggestion-hints-next:before { content: '\eab6'; }
.codicon-inline-suggestion-hints-previous:before { content: '\eab5'; }
.codicon-find-selection:before { content: '\eb85'; }
.codicon-find-collapsed:before { content: '\eab6'; }
.codicon-find-expanded:before { content: '\eab4'; }
.codicon-find-replace:before { content: '\eb3d'; }
.codicon-find-replace-all:before { content: '\eb3c'; }
.codicon-find-previous-match:before { content: '\eaa1'; }
.codicon-find-next-match:before { content: '\ea9a'; }
.codicon-folding-expanded:before { content: '\eab4'; }
.codicon-folding-collapsed:before { content: '\eab6'; }
.codicon-folding-manual-collapsed:before { content: '\eab6'; }
.codicon-folding-manual-expanded:before { content: '\eab4'; }
.codicon-suggest-more-info:before { content: '\eab6'; }
.codicon-parameter-hints-next:before { content: '\eab4'; }
.codicon-parameter-hints-previous:before { content: '\eab7'; }
.codicon-extensions-warning-message:before { content: '\ea6c'; }
.codicon-diff-review-insert:before { content: '\ea60'; }
.codicon-diff-review-remove:before { content: '\eb3b'; }
.codicon-diff-review-close:before { content: '\ea76'; }
.codicon-diff-insert:before { content: '\ea60'; }
.codicon-diff-remove:before { content: '\eb3b'; }
.monaco-editor .inputarea.ime-input { background-color: #fffffe; }
.monaco-editor .unexpected-closing-bracket { color: rgba(255, 18, 18, 0.8); }
.monaco-editor .bracket-highlighting-0 { color: #0431fa; }
.monaco-editor .bracket-highlighting-1 { color: #319331; }
.monaco-editor .bracket-highlighting-2 { color: #7b3814; }
.monaco-editor .bracket-highlighting-3 { color: #0431fa; }
.monaco-editor .bracket-highlighting-4 { color: #319331; }
.monaco-editor .bracket-highlighting-5 { color: #7b3814; }
.monaco-editor .bracket-highlighting-6 { color: #0431fa; }
.monaco-editor .bracket-highlighting-7 { color: #319331; }
.monaco-editor .bracket-highlighting-8 { color: #7b3814; }
.monaco-editor .bracket-highlighting-9 { color: #0431fa; }
.monaco-editor .bracket-highlighting-10 { color: #319331; }
.monaco-editor .bracket-highlighting-11 { color: #7b3814; }
.monaco-editor .bracket-highlighting-12 { color: #0431fa; }
.monaco-editor .bracket-highlighting-13 { color: #319331; }
.monaco-editor .bracket-highlighting-14 { color: #7b3814; }
.monaco-editor .bracket-highlighting-15 { color: #0431fa; }
.monaco-editor .bracket-highlighting-16 { color: #319331; }
.monaco-editor .bracket-highlighting-17 { color: #7b3814; }
.monaco-editor .bracket-highlighting-18 { color: #0431fa; }
.monaco-editor .bracket-highlighting-19 { color: #319331; }
.monaco-editor .bracket-highlighting-20 { color: #7b3814; }
.monaco-editor .bracket-highlighting-21 { color: #0431fa; }
.monaco-editor .bracket-highlighting-22 { color: #319331; }
.monaco-editor .bracket-highlighting-23 { color: #7b3814; }
.monaco-editor .bracket-highlighting-24 { color: #0431fa; }
.monaco-editor .bracket-highlighting-25 { color: #319331; }
.monaco-editor .bracket-highlighting-26 { color: #7b3814; }
.monaco-editor .bracket-highlighting-27 { color: #0431fa; }
.monaco-editor .bracket-highlighting-28 { color: #319331; }
.monaco-editor .bracket-highlighting-29 { color: #7b3814; }
.monaco-editor .line-numbers.dimmed-line-number { color: rgba(35, 120, 147, 0.4); }
.monaco-editor .view-overlays .current-line { border: 2px solid #eeeeee; }
.monaco-editor .margin-view-overlays .current-line-margin { border: 2px solid #eeeeee; }
.monaco-editor .bracket-indent-guide.lvl-0 { --guide-color: rgba(4, 49, 250, 0.3); --guide-color-active: #0431fa; }
.monaco-editor .bracket-indent-guide.lvl-1 { --guide-color: rgba(49, 147, 49, 0.3); --guide-color-active: #319331; }
.monaco-editor .bracket-indent-guide.lvl-2 { --guide-color: rgba(123, 56, 20, 0.3); --guide-color-active: #7b3814; }
.monaco-editor .bracket-indent-guide.lvl-3 { --guide-color: rgba(4, 49, 250, 0.3); --guide-color-active: #0431fa; }
.monaco-editor .bracket-indent-guide.lvl-4 { --guide-color: rgba(49, 147, 49, 0.3); --guide-color-active: #319331; }
.monaco-editor .bracket-indent-guide.lvl-5 { --guide-color: rgba(123, 56, 20, 0.3); --guide-color-active: #7b3814; }
.monaco-editor .bracket-indent-guide.lvl-6 { --guide-color: rgba(4, 49, 250, 0.3); --guide-color-active: #0431fa; }
.monaco-editor .bracket-indent-guide.lvl-7 { --guide-color: rgba(49, 147, 49, 0.3); --guide-color-active: #319331; }
.monaco-editor .bracket-indent-guide.lvl-8 { --guide-color: rgba(123, 56, 20, 0.3); --guide-color-active: #7b3814; }
.monaco-editor .bracket-indent-guide.lvl-9 { --guide-color: rgba(4, 49, 250, 0.3); --guide-color-active: #0431fa; }
.monaco-editor .bracket-indent-guide.lvl-10 { --guide-color: rgba(49, 147, 49, 0.3); --guide-color-active: #319331; }
.monaco-editor .bracket-indent-guide.lvl-11 { --guide-color: rgba(123, 56, 20, 0.3); --guide-color-active: #7b3814; }
.monaco-editor .bracket-indent-guide.lvl-12 { --guide-color: rgba(4, 49, 250, 0.3); --guide-color-active: #0431fa; }
.monaco-editor .bracket-indent-guide.lvl-13 { --guide-color: rgba(49, 147, 49, 0.3); --guide-color-active: #319331; }
.monaco-editor .bracket-indent-guide.lvl-14 { --guide-color: rgba(123, 56, 20, 0.3); --guide-color-active: #7b3814; }
.monaco-editor .bracket-indent-guide.lvl-15 { --guide-color: rgba(4, 49, 250, 0.3); --guide-color-active: #0431fa; }
.monaco-editor .bracket-indent-guide.lvl-16 { --guide-color: rgba(49, 147, 49, 0.3); --guide-color-active: #319331; }
.monaco-editor .bracket-indent-guide.lvl-17 { --guide-color: rgba(123, 56, 20, 0.3); --guide-color-active: #7b3814; }
.monaco-editor .bracket-indent-guide.lvl-18 { --guide-color: rgba(4, 49, 250, 0.3); --guide-color-active: #0431fa; }
.monaco-editor .bracket-indent-guide.lvl-19 { --guide-color: rgba(49, 147, 49, 0.3); --guide-color-active: #319331; }
.monaco-editor .bracket-indent-guide.lvl-20 { --guide-color: rgba(123, 56, 20, 0.3); --guide-color-active: #7b3814; }
.monaco-editor .bracket-indent-guide.lvl-21 { --guide-color: rgba(4, 49, 250, 0.3); --guide-color-active: #0431fa; }
.monaco-editor .bracket-indent-guide.lvl-22 { --guide-color: rgba(49, 147, 49, 0.3); --guide-color-active: #319331; }
.monaco-editor .bracket-indent-guide.lvl-23 { --guide-color: rgba(123, 56, 20, 0.3); --guide-color-active: #7b3814; }
.monaco-editor .bracket-indent-guide.lvl-24 { --guide-color: rgba(4, 49, 250, 0.3); --guide-color-active: #0431fa; }
.monaco-editor .bracket-indent-guide.lvl-25 { --guide-color: rgba(49, 147, 49, 0.3); --guide-color-active: #319331; }
.monaco-editor .bracket-indent-guide.lvl-26 { --guide-color: rgba(123, 56, 20, 0.3); --guide-color-active: #7b3814; }
.monaco-editor .bracket-indent-guide.lvl-27 { --guide-color: rgba(4, 49, 250, 0.3); --guide-color-active: #0431fa; }
.monaco-editor .bracket-indent-guide.lvl-28 { --guide-color: rgba(49, 147, 49, 0.3); --guide-color-active: #319331; }
.monaco-editor .bracket-indent-guide.lvl-29 { --guide-color: rgba(123, 56, 20, 0.3); --guide-color-active: #7b3814; }
.monaco-editor .vertical { box-shadow: 1px 0 0 0 var(--guide-color) inset; }
.monaco-editor .horizontal-top { border-top: 1px solid var(--guide-color); }
.monaco-editor .horizontal-bottom { border-bottom: 1px solid var(--guide-color); }
.monaco-editor .vertical.indent-active { box-shadow: 1px 0 0 0 var(--guide-color-active) inset; }
.monaco-editor .horizontal-top.indent-active { border-top: 1px solid var(--guide-color-active); }
.monaco-editor .horizontal-bottom.indent-active { border-bottom: 1px solid var(--guide-color-active); }
.monaco-editor .cursors-layer .cursor { background-color: #000000; border-color: #000000; color: #ffffff; }
.monaco-editor .squiggly-error { background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%23e51400'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E") repeat-x bottom left; }
.monaco-editor .squiggly-warning { background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%23bf8803'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E") repeat-x bottom left; }
.monaco-editor .squiggly-info { background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%231a85ff'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E") repeat-x bottom left; }
.monaco-editor .squiggly-hint { background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%223%22%20width%3D%2212%22%3E%3Cg%20fill%3D%22%236c6c6c%22%3E%3Ccircle%20cx%3D%221%22%20cy%3D%221%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%225%22%20cy%3D%221%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%229%22%20cy%3D%221%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E") no-repeat bottom left; }
.monaco-editor.showUnused .squiggly-inline-unnecessary { opacity: 0.467; }
.monaco-editor .monaco-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid rgba(200, 200, 200, 0.5); }
.monaco-editor .monaco-hover hr { border-top: 1px solid rgba(200, 200, 200, 0.5); }
.monaco-editor .monaco-hover hr { border-bottom: 0px solid rgba(200, 200, 200, 0.5); }
.monaco-editor .findMatch { background-color: rgba(234, 92, 0, 0.33); }
.monaco-editor .currentFindMatch { background-color: #a8ac94; }
.monaco-editor .findScope { background-color: rgba(180, 180, 180, 0.3); }
.monaco-editor .find-widget { background-color: #f3f3f3; }
.monaco-editor .find-widget { box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.16); }
.monaco-editor .find-widget { color: #616161; }
.monaco-editor .find-widget.no-results .matchesCount { color: #a1260d; }
.monaco-editor .find-widget .monaco-sash { background-color: #c8c8c8; }

		.monaco-editor .find-widget .button:not(.disabled):hover,
		.monaco-editor .find-widget .codicon-find-selection:hover {
			background-color: rgba(184, 184, 184, 0.31) !important;
		}
	
.monaco-editor .find-widget .monaco-inputbox.synthetic-focus { outline-color: #0090f1; }
.monaco-editor .selectionHighlight { background-color: rgba(173, 214, 255, 0.15); }

	.monaco-editor .diagonal-fill {
		background-image: linear-gradient(
			-45deg,
			rgba(34, 34, 34, 0.2) 12.5%,
			#0000 12.5%, #0000 50%,
			rgba(34, 34, 34, 0.2) 50%, rgba(34, 34, 34, 0.2) 62.5%,
			#0000 62.5%, #0000 100%
		);
		background-size: 8px 8px;
	}
	
.monaco-editor { --vscode-foreground: #616161;
--vscode-disabledForeground: rgba(97, 97, 97, 0.5);
--vscode-errorForeground: #a1260d;
--vscode-descriptionForeground: #717171;
--vscode-icon-foreground: #424242;
--vscode-focusBorder: #0090f1;
--vscode-textSeparator-foreground: rgba(0, 0, 0, 0.18);
--vscode-textLink-foreground: #006ab1;
--vscode-textLink-activeForeground: #006ab1;
--vscode-textPreformat-foreground: #a31515;
--vscode-textBlockQuote-background: rgba(127, 127, 127, 0.1);
--vscode-textBlockQuote-border: rgba(0, 122, 204, 0.5);
--vscode-textCodeBlock-background: rgba(220, 220, 220, 0.4);
--vscode-widget-shadow: rgba(0, 0, 0, 0.16);
--vscode-input-background: #ffffff;
--vscode-input-foreground: #616161;
--vscode-inputOption-activeBorder: #007acc;
--vscode-inputOption-hoverBackground: rgba(184, 184, 184, 0.31);
--vscode-inputOption-activeBackground: rgba(0, 144, 241, 0.2);
--vscode-inputOption-activeForeground: #000000;
--vscode-input-placeholderForeground: rgba(97, 97, 97, 0.5);
--vscode-inputValidation-infoBackground: #d6ecf2;
--vscode-inputValidation-infoBorder: #007acc;
--vscode-inputValidation-warningBackground: #f6f5d2;
--vscode-inputValidation-warningBorder: #b89500;
--vscode-inputValidation-errorBackground: #f2dede;
--vscode-inputValidation-errorBorder: #be1100;
--vscode-dropdown-background: #ffffff;
--vscode-dropdown-foreground: #616161;
--vscode-dropdown-border: #cecece;
--vscode-button-foreground: #ffffff;
--vscode-button-separator: rgba(255, 255, 255, 0.4);
--vscode-button-background: #007acc;
--vscode-button-hoverBackground: #0062a3;
--vscode-button-secondaryForeground: #ffffff;
--vscode-button-secondaryBackground: #5f6a79;
--vscode-button-secondaryHoverBackground: #4c5561;
--vscode-badge-background: #c4c4c4;
--vscode-badge-foreground: #333333;
--vscode-scrollbar-shadow: #dddddd;
--vscode-scrollbarSlider-background: rgba(100, 100, 100, 0.4);
--vscode-scrollbarSlider-hoverBackground: rgba(100, 100, 100, 0.7);
--vscode-scrollbarSlider-activeBackground: rgba(0, 0, 0, 0.6);
--vscode-progressBar-background: #0e70c0;
--vscode-editorError-foreground: #e51400;
--vscode-editorWarning-foreground: #bf8803;
--vscode-editorInfo-foreground: #1a85ff;
--vscode-editorHint-foreground: #6c6c6c;
--vscode-sash-hoverBorder: #0090f1;
--vscode-editor-background: #fffffe;
--vscode-editor-foreground: #000000;
--vscode-editorStickyScroll-background: #fffffe;
--vscode-editorStickyScrollHover-background: #f0f0f0;
--vscode-editorWidget-background: #f3f3f3;
--vscode-editorWidget-foreground: #616161;
--vscode-editorWidget-border: #c8c8c8;
--vscode-quickInput-background: #f3f3f3;
--vscode-quickInput-foreground: #616161;
--vscode-quickInputTitle-background: rgba(0, 0, 0, 0.06);
--vscode-pickerGroup-foreground: #0066bf;
--vscode-pickerGroup-border: #cccedb;
--vscode-keybindingLabel-background: rgba(221, 221, 221, 0.4);
--vscode-keybindingLabel-foreground: #555555;
--vscode-keybindingLabel-border: rgba(204, 204, 204, 0.4);
--vscode-keybindingLabel-bottomBorder: rgba(187, 187, 187, 0.4);
--vscode-editor-selectionBackground: #add6ff;
--vscode-editor-inactiveSelectionBackground: #e5ebf1;
--vscode-editor-selectionHighlightBackground: rgba(173, 214, 255, 0.3);
--vscode-editor-findMatchBackground: #a8ac94;
--vscode-editor-findMatchHighlightBackground: rgba(234, 92, 0, 0.33);
--vscode-editor-findRangeHighlightBackground: rgba(180, 180, 180, 0.3);
--vscode-searchEditor-findMatchBackground: rgba(234, 92, 0, 0.22);
--vscode-search-resultsInfoForeground: #616161;
--vscode-editor-hoverHighlightBackground: rgba(173, 214, 255, 0.15);
--vscode-editorHoverWidget-background: #f3f3f3;
--vscode-editorHoverWidget-foreground: #616161;
--vscode-editorHoverWidget-border: #c8c8c8;
--vscode-editorHoverWidget-statusBarBackground: #e7e7e7;
--vscode-editorLink-activeForeground: #0000ff;
--vscode-editorInlayHint-foreground: #333333;
--vscode-editorInlayHint-background: rgba(196, 196, 196, 0.6);
--vscode-editorInlayHint-typeForeground: #333333;
--vscode-editorInlayHint-typeBackground: rgba(196, 196, 196, 0.6);
--vscode-editorInlayHint-parameterForeground: #333333;
--vscode-editorInlayHint-parameterBackground: rgba(196, 196, 196, 0.6);
--vscode-editorLightBulb-foreground: #ddb100;
--vscode-editorLightBulbAutoFix-foreground: #007acc;
--vscode-diffEditor-insertedTextBackground: rgba(156, 204, 44, 0.25);
--vscode-diffEditor-removedTextBackground: rgba(255, 0, 0, 0.2);
--vscode-diffEditor-insertedLineBackground: rgba(155, 185, 85, 0.2);
--vscode-diffEditor-removedLineBackground: rgba(255, 0, 0, 0.2);
--vscode-diffEditor-diagonalFill: rgba(34, 34, 34, 0.2);
--vscode-list-focusOutline: #0090f1;
--vscode-list-activeSelectionBackground: #0060c0;
--vscode-list-activeSelectionForeground: #ffffff;
--vscode-list-inactiveSelectionBackground: #e4e6f1;
--vscode-list-hoverBackground: #f0f0f0;
--vscode-list-dropBackground: #d6ebff;
--vscode-list-highlightForeground: #0066bf;
--vscode-list-focusHighlightForeground: #bbe7ff;
--vscode-list-invalidItemForeground: #b89500;
--vscode-list-errorForeground: #b01011;
--vscode-list-warningForeground: #855f00;
--vscode-listFilterWidget-background: #f3f3f3;
--vscode-listFilterWidget-outline: rgba(0, 0, 0, 0);
--vscode-listFilterWidget-noMatchesOutline: #be1100;
--vscode-listFilterWidget-shadow: rgba(0, 0, 0, 0.16);
--vscode-list-filterMatchBackground: rgba(234, 92, 0, 0.33);
--vscode-tree-indentGuidesStroke: #a9a9a9;
--vscode-tree-inactiveIndentGuidesStroke: rgba(169, 169, 169, 0.4);
--vscode-tree-tableColumnsBorder: rgba(97, 97, 97, 0.13);
--vscode-tree-tableOddRowsBackground: rgba(97, 97, 97, 0.04);
--vscode-list-deemphasizedForeground: #8e8e90;
--vscode-checkbox-background: #ffffff;
--vscode-checkbox-selectBackground: #f3f3f3;
--vscode-checkbox-foreground: #616161;
--vscode-checkbox-border: #cecece;
--vscode-checkbox-selectBorder: #424242;
--vscode-quickInputList-focusForeground: #ffffff;
--vscode-quickInputList-focusBackground: #0060c0;
--vscode-menu-foreground: #616161;
--vscode-menu-background: #ffffff;
--vscode-menu-selectionForeground: #ffffff;
--vscode-menu-selectionBackground: #0060c0;
--vscode-menu-separatorBackground: #d4d4d4;
--vscode-toolbar-hoverBackground: rgba(184, 184, 184, 0.31);
--vscode-toolbar-activeBackground: rgba(166, 166, 166, 0.31);
--vscode-editor-snippetTabstopHighlightBackground: rgba(10, 50, 100, 0.2);
--vscode-editor-snippetFinalTabstopHighlightBorder: rgba(10, 50, 100, 0.5);
--vscode-breadcrumb-foreground: rgba(97, 97, 97, 0.8);
--vscode-breadcrumb-background: #fffffe;
--vscode-breadcrumb-focusForeground: #4e4e4e;
--vscode-breadcrumb-activeSelectionForeground: #4e4e4e;
--vscode-breadcrumbPicker-background: #f3f3f3;
--vscode-merge-currentHeaderBackground: rgba(64, 200, 174, 0.5);
--vscode-merge-currentContentBackground: rgba(64, 200, 174, 0.2);
--vscode-merge-incomingHeaderBackground: rgba(64, 166, 255, 0.5);
--vscode-merge-incomingContentBackground: rgba(64, 166, 255, 0.2);
--vscode-merge-commonHeaderBackground: rgba(96, 96, 96, 0.4);
--vscode-merge-commonContentBackground: rgba(96, 96, 96, 0.16);
--vscode-editorOverviewRuler-currentContentForeground: rgba(64, 200, 174, 0.5);
--vscode-editorOverviewRuler-incomingContentForeground: rgba(64, 166, 255, 0.5);
--vscode-editorOverviewRuler-commonContentForeground: rgba(96, 96, 96, 0.4);
--vscode-editorOverviewRuler-findMatchForeground: rgba(209, 134, 22, 0.49);
--vscode-editorOverviewRuler-selectionHighlightForeground: rgba(160, 160, 160, 0.8);
--vscode-minimap-findMatchHighlight: #d18616;
--vscode-minimap-selectionOccurrenceHighlight: #c9c9c9;
--vscode-minimap-selectionHighlight: #add6ff;
--vscode-minimap-errorHighlight: rgba(255, 18, 18, 0.7);
--vscode-minimap-warningHighlight: #bf8803;
--vscode-minimap-foregroundOpacity: #000000;
--vscode-minimapSlider-background: rgba(100, 100, 100, 0.2);
--vscode-minimapSlider-hoverBackground: rgba(100, 100, 100, 0.35);
--vscode-minimapSlider-activeBackground: rgba(0, 0, 0, 0.3);
--vscode-problemsErrorIcon-foreground: #e51400;
--vscode-problemsWarningIcon-foreground: #bf8803;
--vscode-problemsInfoIcon-foreground: #1a85ff;
--vscode-charts-foreground: #616161;
--vscode-charts-lines: rgba(97, 97, 97, 0.5);
--vscode-charts-red: #e51400;
--vscode-charts-blue: #1a85ff;
--vscode-charts-yellow: #bf8803;
--vscode-charts-orange: #d18616;
--vscode-charts-green: #388a34;
--vscode-charts-purple: #652d90;
--vscode-editor-lineHighlightBorder: #eeeeee;
--vscode-editor-rangeHighlightBackground: rgba(253, 255, 0, 0.2);
--vscode-editor-symbolHighlightBackground: rgba(234, 92, 0, 0.33);
--vscode-editorCursor-foreground: #000000;
--vscode-editorWhitespace-foreground: rgba(51, 51, 51, 0.2);
--vscode-editorIndentGuide-background: #d3d3d3;
--vscode-editorIndentGuide-activeBackground: #939393;
--vscode-editorLineNumber-foreground: #237893;
--vscode-editorActiveLineNumber-foreground: #0b216f;
--vscode-editorLineNumber-activeForeground: #0b216f;
--vscode-editorRuler-foreground: #d3d3d3;
--vscode-editorCodeLens-foreground: #919191;
--vscode-editorBracketMatch-background: rgba(0, 100, 0, 0.1);
--vscode-editorBracketMatch-border: #b9b9b9;
--vscode-editorOverviewRuler-border: rgba(127, 127, 127, 0.3);
--vscode-editorGutter-background: #fffffe;
--vscode-editorUnnecessaryCode-opacity: rgba(0, 0, 0, 0.47);
--vscode-editorGhostText-foreground: rgba(0, 0, 0, 0.47);
--vscode-editorOverviewRuler-rangeHighlightForeground: rgba(0, 122, 204, 0.6);
--vscode-editorOverviewRuler-errorForeground: rgba(255, 18, 18, 0.7);
--vscode-editorOverviewRuler-warningForeground: #bf8803;
--vscode-editorOverviewRuler-infoForeground: #1a85ff;
--vscode-editorBracketHighlight-foreground1: #0431fa;
--vscode-editorBracketHighlight-foreground2: #319331;
--vscode-editorBracketHighlight-foreground3: #7b3814;
--vscode-editorBracketHighlight-foreground4: rgba(0, 0, 0, 0);
--vscode-editorBracketHighlight-foreground5: rgba(0, 0, 0, 0);
--vscode-editorBracketHighlight-foreground6: rgba(0, 0, 0, 0);
--vscode-editorBracketHighlight-unexpectedBracket-foreground: rgba(255, 18, 18, 0.8);
--vscode-editorBracketPairGuide-background1: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-background2: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-background3: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-background4: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-background5: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-background6: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-activeBackground1: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-activeBackground2: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-activeBackground3: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-activeBackground4: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-activeBackground5: rgba(0, 0, 0, 0);
--vscode-editorBracketPairGuide-activeBackground6: rgba(0, 0, 0, 0);
--vscode-editorUnicodeHighlight-border: #cea33d;
--vscode-editorUnicodeHighlight-background: rgba(206, 163, 61, 0.08);
--vscode-editorOverviewRuler-bracketMatchForeground: #a0a0a0;
--vscode-symbolIcon-arrayForeground: #616161;
--vscode-symbolIcon-booleanForeground: #616161;
--vscode-symbolIcon-classForeground: #d67e00;
--vscode-symbolIcon-colorForeground: #616161;
--vscode-symbolIcon-constantForeground: #616161;
--vscode-symbolIcon-constructorForeground: #652d90;
--vscode-symbolIcon-enumeratorForeground: #d67e00;
--vscode-symbolIcon-enumeratorMemberForeground: #007acc;
--vscode-symbolIcon-eventForeground: #d67e00;
--vscode-symbolIcon-fieldForeground: #007acc;
--vscode-symbolIcon-fileForeground: #616161;
--vscode-symbolIcon-folderForeground: #616161;
--vscode-symbolIcon-functionForeground: #652d90;
--vscode-symbolIcon-interfaceForeground: #007acc;
--vscode-symbolIcon-keyForeground: #616161;
--vscode-symbolIcon-keywordForeground: #616161;
--vscode-symbolIcon-methodForeground: #652d90;
--vscode-symbolIcon-moduleForeground: #616161;
--vscode-symbolIcon-namespaceForeground: #616161;
--vscode-symbolIcon-nullForeground: #616161;
--vscode-symbolIcon-numberForeground: #616161;
--vscode-symbolIcon-objectForeground: #616161;
--vscode-symbolIcon-operatorForeground: #616161;
--vscode-symbolIcon-packageForeground: #616161;
--vscode-symbolIcon-propertyForeground: #616161;
--vscode-symbolIcon-referenceForeground: #616161;
--vscode-symbolIcon-snippetForeground: #616161;
--vscode-symbolIcon-stringForeground: #616161;
--vscode-symbolIcon-structForeground: #616161;
--vscode-symbolIcon-textForeground: #616161;
--vscode-symbolIcon-typeParameterForeground: #616161;
--vscode-symbolIcon-unitForeground: #616161;
--vscode-symbolIcon-variableForeground: #007acc;
--vscode-peekViewTitle-background: #f3f3f3;
--vscode-peekViewTitleLabel-foreground: #000000;
--vscode-peekViewTitleDescription-foreground: #616161;
--vscode-peekView-border: #1a85ff;
--vscode-peekViewResult-background: #f3f3f3;
--vscode-peekViewResult-lineForeground: #646465;
--vscode-peekViewResult-fileForeground: #1e1e1e;
--vscode-peekViewResult-selectionBackground: rgba(51, 153, 255, 0.2);
--vscode-peekViewResult-selectionForeground: #6c6c6c;
--vscode-peekViewEditor-background: #f2f8fc;
--vscode-peekViewEditorGutter-background: #f2f8fc;
--vscode-peekViewEditorStickyScroll-background: #f2f8fc;
--vscode-peekViewResult-matchHighlightBackground: rgba(234, 92, 0, 0.3);
--vscode-peekViewEditor-matchHighlightBackground: rgba(245, 216, 2, 0.87);
--vscode-editorMarkerNavigationError-background: #e51400;
--vscode-editorMarkerNavigationError-headerBackground: rgba(229, 20, 0, 0.1);
--vscode-editorMarkerNavigationWarning-background: #bf8803;
--vscode-editorMarkerNavigationWarning-headerBackground: rgba(191, 136, 3, 0.1);
--vscode-editorMarkerNavigationInfo-background: #1a85ff;
--vscode-editorMarkerNavigationInfo-headerBackground: rgba(26, 133, 255, 0.1);
--vscode-editorMarkerNavigation-background: #fffffe;
--vscode-editor-foldBackground: rgba(173, 214, 255, 0.3);
--vscode-editorGutter-foldingControlForeground: #424242;
--vscode-editorSuggestWidget-background: #f3f3f3;
--vscode-editorSuggestWidget-border: #c8c8c8;
--vscode-editorSuggestWidget-foreground: #000000;
--vscode-editorSuggestWidget-selectedForeground: #ffffff;
--vscode-editorSuggestWidget-selectedBackground: #0060c0;
--vscode-editorSuggestWidget-highlightForeground: #0066bf;
--vscode-editorSuggestWidget-focusHighlightForeground: #bbe7ff;
--vscode-editorSuggestWidgetStatus-foreground: rgba(0, 0, 0, 0.5);
--vscode-editor-linkedEditingBackground: rgba(255, 0, 0, 0.3);
--vscode-editor-wordHighlightBackground: rgba(87, 87, 87, 0.25);
--vscode-editor-wordHighlightStrongBackground: rgba(14, 99, 156, 0.25);
--vscode-editor-wordHighlightTextBackground: rgba(87, 87, 87, 0.25);
--vscode-editorOverviewRuler-wordHighlightForeground: rgba(160, 160, 160, 0.8);
--vscode-editorOverviewRuler-wordHighlightStrongForeground: rgba(192, 160, 192, 0.8);
--vscode-editorOverviewRuler-wordHighlightTextForeground: rgba(160, 160, 160, 0.8);
--vscode-editorHoverWidget-highlightForeground: #0066bf; }

.mtk1 { color: #000000; }
.mtk2 { color: #fffffe; }
.mtk3 { color: #808080; }
.mtk4 { color: #ff0000; }
.mtk5 { color: #0451a5; }
.mtk6 { color: #0000ff; }
.mtk7 { color: #098658; }
.mtk8 { color: #008000; }
.mtk9 { color: #dd0000; }
.mtk10 { color: #383838; }
.mtk11 { color: #cd3131; }
.mtk12 { color: #863b00; }
.mtk13 { color: #af00db; }
.mtk14 { color: #800000; }
.mtk15 { color: #e00000; }
.mtk16 { color: #3030c0; }
.mtk17 { color: #666666; }
.mtk18 { color: #778899; }
.mtk19 { color: #c700c7; }
.mtk20 { color: #a31515; }
.mtk21 { color: #4f76ac; }
.mtk22 { color: #008080; }
.mtk23 { color: #001188; }
.mtk24 { color: #4864aa; }
.mtki { font-style: italic; }
.mtkb { font-weight: bold; }
.mtku { text-decoration: underline; text-underline-position: under; }
.mtks { text-decoration: line-through; }
.mtks.mtku { text-decoration: underline line-through; text-underline-position: under; }</style></head><body class="windows chrome        -polaris  non_standard_lists" data-formname="sys.scripts.modern"><span class="sr-only"><div id="html_page_aria_live_polite" role="region" aria-relevant="additions text" aria-atomic="false" aria-live="polite"></div><div id="html_page_aria_live_assertive" role="region" aria-relevant="additions text" aria-atomic="false" aria-live="assertive"></div></span><div class="outputmsg_div"><div id="output_messages" class="outputmsg_container outputmsg_hide"><button type="button" aria-label="Close Messages" id="close-messages-btn" class="btn btn-icon close icon-cross" onclick="GlideUI.get().onCloseMessagesButtonClick(this); return false;"></button><div class="outputmsg_div" aria-live="polite" role="region" data-server-messages="false"></div></div><script>addRenderEvent(function() {CustomEvent.fire('glide_optics_inspect_update_watchfield', '');});

			var accessibilityEnabled = Boolean(false);
			var hasMessages = false;
			if (accessibilityEnabled && hasMessages) {
				$j(function() {
					$j('#output_messages .btn.btn-icon.close').focus();
				});
			}</script></div><style>.script-control-container {
				display: flex;
			}
			.script-control {
				margin: 0.5em;
			}
			.script-control label * {
				margin: 0 0.33em;
			}
			.row {
				margin-inline-end: unset !important;
				margin-inline-start: unset !important;
			}
			.script-list-hidden ul {
				display: none;
			}
			.script-list-hidden::before { content: "+"; }
			.script-list-visible ul {
				display: block;
			}
			.script-list-visible::before {
				content: "-";
			}
			.script-list-toggleable {
				cursor: pointer;
				font-weight: 600;
			}
			ul {
				cursor: initial;
				font-weight: initial;
			}
			.script-list-toggleable::before {
				display: inline-block;
				width: 15px;
			}
			ul.script-list-app, ul.script-list-appscript, ul.script-list-container {
				list-style-type: none;
			}
			.app-scriptitem-view::before, .app-scriptitem-run::before {
				content: '[';
			}
			.app-scriptitem-view::after, .app-scriptitem-run::after {
				content: ']';
			}
			.app-scriptitem-view, .app-scriptitem-run, app-scriptitem-title {
				margin-right: 0.75em;
			}
			.script-appname-title {
				font-weight: 600;
			}
			ul.script-list-container {
				padding-left: 0.5em;
			}</style><script>window.g_scratchpad = {};
			var g_form = new GlideForm('',true,true,true,true);</script><script language="javascript">var lintConfigStandard = JSON.parse('{\n  \"rules\": {\n    \"constructor-super\": \"warn\",\n    \"no-case-declarations\": \"warn\",\n    \"no-class-assign\": \"warn\",\n    \"no-compare-neg-zero\": \"warn\",\n    \"no-cond-assign\": \"warn\",\n    \"no-console\": \"warn\",\n    \"no-const-assign\": \"warn\",\n    \"no-constant-condition\": \"warn\",\n    \"no-control-regex\": \"warn\",\n    \"no-debugger\": \"warn\",\n    \"no-delete-var\": \"warn\",\n    \"no-dupe-args\": \"warn\",\n    \"no-dupe-class-members\": \"warn\",\n    \"no-dupe-keys\": \"warn\",\n    \"no-duplicate-case\": \"warn\",\n    \"no-empty-character-class\": \"warn\",\n    \"no-empty-pattern\": \"warn\",\n    \"no-empty\": [\"warn\", { \"allowEmptyCatch\": true }],\n    \"no-ex-assign\": \"warn\",\n    \"no-extra-boolean-cast\": \"warn\",\n    \"no-extra-semi\": \"warn\",\n    \"semi\" : \"warn\",\n    \"no-fallthrough\": \"warn\",\n    \"no-func-assign\": \"warn\",\n    \"no-global-assign\": \"warn\",\n    \"no-inner-declarations\": \"warn\",\n    \"no-invalid-regexp\": \"warn\",\n    \"no-irregular-whitespace\": \"warn\",\n    \"no-mixed-spaces-and-tabs\": \"warn\",\n    \"no-new-symbol\": \"warn\",\n    \"no-obj-calls\": \"warn\",\n    \"no-octal\": \"warn\",\n    \"no-redeclare\": \"warn\",\n    \"no-regex-spaces\": \"warn\",\n    \"no-self-assign\": \"warn\",\n    \"no-sparse-arrays\": \"warn\",\n    \"no-this-before-super\": \"warn\",\n    \"no-undef\": \"off\",\n    \"no-unexpected-multiline\": \"warn\",\n    \"no-unreachable\": \"warn\",\n    \"no-unsafe-finally\": \"warn\",\n    \"no-unsafe-negation\": \"warn\",\n    \"no-unused-labels\": \"warn\",\n    \"no-unused-vars\": \"off\",\n    \"no-useless-escape\": \"warn\",\n    \"require-yield\": \"warn\",\n    \"use-isnan\": \"warn\",\n    \"valid-typeof\": \"warn\"\n  }\n}');
			var lintConfigEsLatest = JSON.parse('{\n  \"parserOptions\": {\n    \"ecmaVersion\": 12\n  },\n  \"rules\": {\n    \"sn-no-proxies\": \"warn\",\n    \"constructor-super\": \"warn\",\n    \"no-case-declarations\": \"warn\",\n    \"no-class-assign\": \"warn\",\n    \"no-compare-neg-zero\": \"warn\",\n    \"no-cond-assign\": \"warn\",\n    \"no-console\": \"warn\",\n    \"no-const-assign\": \"warn\",\n    \"no-constant-condition\": \"warn\",\n    \"no-control-regex\": \"warn\",\n    \"no-debugger\": \"warn\",\n    \"no-delete-var\": \"warn\",\n    \"no-dupe-args\": \"warn\",\n    \"no-dupe-class-members\": \"warn\",\n    \"no-dupe-keys\": \"warn\",\n    \"no-duplicate-case\": \"warn\",\n    \"no-empty-character-class\": \"warn\",\n    \"no-empty-pattern\": \"warn\",\n    \"no-empty\": [\"warn\", { \"allowEmptyCatch\": true }],\n    \"no-ex-assign\": \"warn\",\n    \"no-extra-boolean-cast\": \"warn\",\n    \"no-extra-semi\": \"warn\",\n    \"semi\" : \"warn\",\n    \"no-fallthrough\": \"warn\",\n    \"no-func-assign\": \"warn\",\n    \"no-global-assign\": \"warn\",\n    \"no-inner-declarations\": \"warn\",\n    \"no-invalid-regexp\": \"warn\",\n    \"no-irregular-whitespace\": \"warn\",\n    \"no-mixed-spaces-and-tabs\": \"warn\",\n    \"no-new-symbol\": \"warn\",\n    \"no-obj-calls\": \"warn\",\n    \"no-octal\": \"warn\",\n    \"no-redeclare\": \"warn\",\n    \"no-regex-spaces\": \"warn\",\n    \"no-self-assign\": \"warn\",\n    \"no-sparse-arrays\": \"warn\",\n    \"no-this-before-super\": \"warn\",\n    \"no-undef\": \"off\",\n    \"no-unexpected-multiline\": \"warn\",\n    \"no-unreachable\": \"warn\",\n    \"no-unsafe-finally\": \"warn\",\n    \"no-unsafe-negation\": \"warn\",\n    \"no-unused-labels\": \"warn\",\n    \"no-unused-vars\": \"off\",\n    \"no-useless-escape\": \"warn\",\n    \"require-yield\": \"warn\",\n    \"use-isnan\": \"warn\",\n    \"valid-typeof\": \"warn\"\n  }\n}');
			var scopeToLevel = JSON.parse('{\"global\":\"SN_TRADITIONAL\"}');</script><form action="https://dev353233.service-now.com/sys.scripts.do" method="post" id=".do"><input name="sysparm_ck" id="sysparm_ck" type="hidden" value="12426be19333221096fdfd10ed03d695010608a1781cb7d62ef5ef19654fa4615d9b6d64"><h4>Running freeform script can cause system disruption or loss of data.</h4><hr><div class="script-container"><span><strong>Run script (JavaScript executed on server)</strong></span><script type="text/javascript" src="./1_files/code-editor-metrics.min.jsx"></script><script type="text/javascript" src="./1_files/monaco.bundle.min.jsx"></script><script type="text/javascript" src="./1_files/beautifier_1.14.0.jsx"></script><script type="text/javascript" src="./1_files/monacoIncludes.jsx"></script><link type="text/css" rel="stylesheet" href="./1_files/monacoIncludes.cssx"><link type="text/css" rel="stylesheet" href="./1_files/eslatest-toggle.cssx"><script>function initScriptTree(treeName, treeElement, tableElement, target) {
			var t = gel(treeElement);
			t.innerHTML = "";
			var e = gel(tableElement);
			if (!e)
				return;

			var te;
			if (e.tagName.toLowerCase() == "input")
				te = e;
			else
				te = getSelectedOption(e);

			if (te == null)
				return;

			var table = te.value;
			var scriptTree = new ScriptTableTree(treeName, treeElement, table, target, true);

			scriptTree.syntaxEditor = true;

			// refresh the fields node of the tree when the table selection is changed
			var h = new GlideEventHandler('onChange_' + tableElement.replace(/\./g, '_'),
				scriptTree.dependChange.bind(scriptTree),
				tableElement);
				g_event_handlers.push(h);
		}

		function insertFieldIntoEditor(txt, colref) {if (GlideEditorMonaco.get(colref)) {
					var editor = GlideEditorMonaco.get(colref).editor;
					var position = editor.getPosition();
					editor.executeEdits("", [
						{ range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column), text: txt }
					]);
				}else { // editor is hidden
				var textarea = gel(colref);
				if (document.selection) {
					textarea.focus();
					sel = document.selection.createRange();
					sel.text = txt;
					//Mozilla/Firefox/Netscape 7+ support
				}
				else if (textarea.selectionStart || textarea.selectionStart == '0') {
					textarea.focus();
					var startPos = textarea.selectionStart;
					var endPos = textarea.selectionEnd;
					textarea.value = textarea.value.substring(0, startPos) + txt + textarea.value.substring(endPos, textarea.value.length);
					textarea.setSelectionRange(endPos + txt.length, endPos + txt.length);
				}
				else {
					textarea.value += txt;
				}
			}
			
			var scriptArea = gel(colref);
			var form = scriptArea.up('form');
			if (form) {
				var onChangeData = {id : scriptArea.id, value : scriptArea.value, modified: true};
    			form.fire('glideform:onchange', onChangeData);	
    		}	
		}</script><script type="text/javascript" src="./1_files/gwt_tree2.jsx"></script><script type="text/javascript" src="./1_files/ScriptTableTree.jsx"></script><script type="text/javascript" src="./1_files/ScriptTableNode.jsx"></script><script type="text/javascript" src="./1_files/FieldTreeNode.jsx"></script><div id="syntax_macros" style="display:none;"><textarea class="syntax_macros_class" name="doc" comments="Documentation Header ">/**
 
* Description: $0
 
* Parameters: 
 
* Returns:
*/
 </textarea><textarea class="syntax_macros_class" name="for" comments="Standard loop for arrays">for (var i=0; i&lt; myArray.length; i++) {
 //myArray[i];
 
}

 </textarea><textarea class="syntax_macros_class" name="vargror" comments="Example GlideRecord Or Query">var gr = new GlideRecord('$0');
 
var qc = gr.addQuery('field', 'value1');
 
qc.addOrCondition('field', 'value2');
gr.query();
 
while (gr.next()) {

 
}

 </textarea><textarea class="syntax_macros_class" name="info" comments="">gs.addInfoMessage(gs.getMessage("$0"));</textarea><textarea class="syntax_macros_class" name="method" comments="Standard JavaScript Class Method">/*_________________________________________________________________
   * Description:
   * Parameters:
   * Returns:
   ________________________________________________________________*/
   $0: function() {
   
   },
</textarea><textarea class="syntax_macros_class" name="vargr" comments="A common pattern of creating and querying a GlideRecord">var gr = new GlideRecord("$0");
gr.addQuery("name", "value");
gr.query();
if (gr.next()) {
   
}
</textarea></div><div class="form-group " ng-non-bindable=""><div oncontextmenu="return elementAction(this, event)" type="script" id="label.script"><label onclick="return labelClicked(this);" for="script" dir="ltr" class="  control-label"><span id="status.script" aria-label="" role="note" mandatory="" oclass="" class=" required-marker"></span><span class="label-text" data-html="false"></span></label></div><div class=" input_controls"><div class="row"><script language="javascript">if (!true) {
                document.querySelectorAll('.use-es-latest-toggle').forEach(function (toggle) {
                    toggle.setAttribute('disabled', true);
                });
            };

            
            function clickToggle(isChecked, lintConfig) {
                var toggles = document.querySelectorAll('.use-es-latest-toggle');
                toggles.forEach(function (toggle) {
                    toggle.checked = isChecked;
                    script_editor.toggleLintConfig(lintConfig);
                });
            }</script><div class="col-lg-10 col-md-10 col-sm-10 col-xs-10" oncontextmenu="return elementAction(this, event)" type="script" id="column.script"><span id="script.editor.toolbar.instructional.info" class="script-editor-toolbar btn-group btn-group-sm toolbar-padding-right toolbar-instructional-info"><span id="script.instructionalInfo" data-toggle="tooltip" tabindex="0" class="btn-icon icon-help sn-tooltip-basic toolbar-instructional-button " aria-label="Use the Tab key to enter a tab character in your script. To toggle tab behavior and move focus to the next page element, use Ctrl + M for Windows or Ctrl + Shift + M for Mac." data-original-title="Use the Tab key to enter a tab character in your script. To toggle tab behavior and move focus to the next page element, use Ctrl + M for Windows or Ctrl + Shift + M for Mac." data-omit-aria-describedby="true" role="button"></span></span><script>function changeJsEditorPreference_script_editor(value) {
			var useMonaco = false === false;

			if (typeof script_editor == "undefined") {
				if (!confirm("OK to reload the form to get the JavaScript syntax editor? Otherwise the editor will be enabled next time you open a form with a script block.")) {
					setPreference("glide.ui.javascript_editor", value);
					return;
				} else
					setPreference("glide.ui.javascript_editor", value, jsEditorPreferenceDone_script_editor);
			} else {
				if (useMonaco) {
					var editors = GlideEditorMonaco.getAll();
					for (var i = 0; i != editors.length; i++){
						editors[i].changeJsEditorPreference(value);
					}
				} else if (typeof GlideEditor == "undefined") {// old js editor
					script_editor.changeJsEditorPreference(value);
					jsEditorPreferenceDone_script_editor();
				} else { //new codemirror editor
					var editors = GlideEditor.getAll();
					for (var i = 0; i != editors.length; i++){
						editors[i].changeJsEditorPreference(value);
						$(editors[i].id).style.visibility = "visible";
					}
				}
			}
		}
		function jsEditorPreferenceDone_script_editor() {
			reloadWindow(window);
		}</script><span class="btn-group btn-group-sm script-editor-toolbar"><a id="js_editor_false.script" style="display:none;visibility:hidden" class="sn-tooltip-basic btn btn-sm btn-default" onclick="changeJsEditorPreference_script_editor(&#39;true&#39;)" role="button" title="Click to enable syntax highlighting and script formatting" data-original-title="Click to enable syntax highlighting and script formatting"><img src="./1_files/script_assist_off.gifx" alt="Click to enable syntax highlighting and script formatting" aria-hidden="true"><span class="sr-only">Click to enable syntax highlighting and script formatting</span></a></span><span class="btn-group btn-group-sm script-editor-toolbar"><a id="js_editor_true.script" style="display:inline;visibility:visible" class="btn btn-sm btn-default" onclick="changeJsEditorPreference_script_editor(&#39;false&#39;)" role="button" title="Click to disable syntax highlighting and script formatting" data-original-title="Click to disable syntax highlighting and script formatting"><img src="./1_files/script_assist.gifx" alt="Click to disable syntax highlighting and script formatting" aria-hidden="true"><span class="sr-only">Click to disable syntax highlighting and script formatting</span></a></span><span id="script.noeditor.toolbar" class="script-editor-toolbar btn-group btn-group-sm" style="display: none"><a onclick="showGoToLine(&#39;&#39;);" title="Go to line" id="go_to_script.script" style="display:none;visibility:hidden" class="btn btn-default" data-original-title="Go to line"><img src="./1_files/go_to_line.gifx" alt="Go to line" width="16" height="16" border="0"></a><span id="go_to_" style="display:none;"><input type="gotoline" id="go_to_input_" name="go_to_input_" size="3" style="font-size:smaller; border-width:1px 1px 0px 1px;" title="Enter line number" onkeypress="gotoLineKeyPress(event, gel(&#39;script&#39;), this)" onblur="hideObject(this.parentNode)" data-original-title="Enter line number"></span></span><span id="script.editor.toolbar" class="script-editor-toolbar btn-group btn-group-sm toolbar-padding-left"><a id="script.commentSelection" class="sn-tooltip-basic btn btn-default " role="button" aria-disabled="false" data-original-title="Toggle Comment (Ctrl-/)"><img src="./1_files/comment_16.gifx" class="i16x16" aria-hidden="true"><span class="sr-only">Comment Selection</span></a><a id="script.formatCode" class="sn-tooltip-basic btn btn-default " role="button" aria-disabled="false" data-original-title="Format Code (Shift-Alt-F)"><img src="./1_files/format_code.gifx" class="i16x16" aria-hidden="true"><span class="sr-only">Format Code</span></a><a id="script.replace" class="sn-tooltip-basic btn btn-default " role="button" aria-disabled="false" data-original-title="Replace (Ctrl-Alt-F)"><img src="./1_files/replace.gifx" class="i16x16" aria-hidden="true" alt="Replace (Ctrl-Alt-W)"><span class="sr-only">Replace (Ctrl-Alt-W)</span></a><a id="script.replaceAll" class="sn-tooltip-basic btn btn-default      toolbar-padding-right" role="button" aria-disabled="false" data-original-title="Replace All (Ctrl-Alt-F)"><img src="./1_files/replace_all.gifx" class="i16x16" aria-hidden="true"><span class="sr-only">Replace All (Ctrl-Alt-;)</span></a><a id="script.find" class="sn-tooltip-basic btn btn-default" role="button" data-original-title="Start Searching (Ctrl-F)"><img src="./1_files/find.gifx" class="i16x16" alt="Start Searching (Ctrl-Alt-)" aria-hidden="true"><span class="sr-only">Start Searching (Ctrl-Alt-)</span></a><a id="script.findNext" class="sn-tooltip-basic btn btn-default" role="button" data-original-title="Find Next (Enter )"><img src="./1_files/find_next.gifx" class="i16x16" alt="Find Next (Ctrl-Alt-[)" aria-hidden="true"><span class="sr-only">Find Next (Ctrl-Alt-[)</span></a><a id="script.findPrev" class="sn-tooltip-basic btn btn-default toolbar-padding-right" role="button" data-original-title="Find Previous (Shift-Enter)"><img src="./1_files/find_previous.gifx" class="i16x16" alt="Find Previous (Ctrl-Alt-])" aria-hidden="true"><span class="sr-only">Find Previous (Ctrl-Alt-])</span></a><a id="script.fullScreen" class="sn-tooltip-basic btn btn-default" role="button" data-original-title="Toggle Full Screen (Ctrl-M)"><img src="./1_files/full_screen.gifx" class="i16x16" aria-hidden="true"><span class="sr-only">Toggle Full Screen Mode (Ctrl-Alt-L)</span></a><a id="script.showKeyMap" class="sn-tooltip-basic btn btn-default toolbar-padding-right" role="button" data-original-title="Help (Ctrl-H)"><img src="./1_files/help.gifx" class="i16x16" aria-hidden="true"><span class="sr-only">Help (Ctrl-Alt-P)</span></a><a id="script.toggleLinter" class="sn-tooltip-basic btn btn-default toolbar-padding-right " role="button" title="Toggle Check Syntax" aria-disabled="false" data-original-title="Toggle Check Syntax"><img src="./1_files/js_validate.gifx" class="i16x16" alt="Toggle Check Syntax" aria-hidden="true"><span class="sr-only">Toggle Check Syntax</span></a><a id="script.lintSyntaxCheck" class="sn-tooltip-basic btn btn-default toolbar-padding-right " role="button" onclick="runLint();" style="display: none;" title="Check syntax" aria-disabled="false" data-original-title="Check syntax"><img src="./1_files/js_validate.gifx" alt="Check syntax" width="16" height="16" border="0"><span class="sr-only">Check syntax</span></a><div id="script.showFeedbackForm"></div></span></div><script>addAfterPageLoadedEvent(function () {
			if(true === true ) {
				if(typeof(Worker) === "undefined") {
					var refVal = 'script';
					$(refVal+'.lintSyntaxCheck').show();
					$(refVal+'.toggleLinter').hide();
				}
			}
			
			var instructionalSpan = jQuery($('script' +'.instructionalInfo'));
			if (instructionalSpan) {
				instructionalSpan.tooltip({'placement': 'auto top', 'container': 'body'}).on('hide.bs.tooltip', function (e) {
					e.preventDefault();
					jQuery('div.tooltip').hide();
		});
			}

		});</script><div class="col-xs-2 col-md-2 col-sm-2 col-lg-2" style="text-align:right"><script language="javascript">addLoadEvent(
			function() {
				if (window['textareaResize'])
					textareaResize('script');
			}
		);</script></div></div><div class="row" id="debugContainer"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><span id="script_editor-keyboard-trap-help-1" class="sr-only">Use the Tab key to enter a tab character in your script.</span><span id="script_editor-keyboard-trap-help-2" class="sr-only">To toggle tab behavior and move focus to the next page element, use Ctrl + M for Windows or Ctrl + Shift + M for Mac.</span><div id="div_script" style="width: 100%; height: 400px; direction: ltr; font-family: courier, serif; border: 1px solid RGB(var(--now-color_border--primary, var(--now-color--neutral-7, 135, 147, 148))); --vscode-editorCodeLens-lineHeight: 16px; --vscode-editorCodeLens-fontSize: 12px; --vscode-editorCodeLens-fontFeatureSettings: &quot;liga&quot; off, &quot;calt&quot; off; --code-editorInlayHintsFontFamily: Consolas, &#39;Courier New&#39;, monospace;" data-keybinding-context="1" data-mode-id="javascript"><div class="monaco-editor script-editor-with-glyph-margin no-user-select  showUnused showDeprecated vs" role="code" data-uri="inmemory://model/1" style="width: 1329px; height: 398px;"><div data-mprt="3" class="overflow-guard" style="width: 1329px; height: 398px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 398px; width: 79px;"><div class="glyph-margin" style="left: 0px; width: 19px; height: 398px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; font-variation-settings: normal; line-height: 19px; letter-spacing: 0px; width: 79px; height: 398px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:79px; height:19px;"></div><div class="line-numbers active-line-number" style="left:19px;width:38px;">1</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 79px; width: 1250px; height: 398px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; font-variation-settings: normal; line-height: 19px; letter-spacing: 0px; height: 0px; width: 1130px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:1130px; height:19px;"></div></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; font-variation-settings: normal; line-height: 19px; letter-spacing: 0px; width: 1130px; height: 398px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1 discoverable-text glideApi-GlideSystem-Global">gs</span><span class="mtk1">.info</span><span class="mtk1 bracket-highlighting-0">(</span><span class="mtk20">'Hello&nbsp;world!'</span><span class="mtk1 bracket-highlighting-0">)</span><span class="mtk1">;</span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"><div class="lightBulbWidget codicon-light-bulb codicon" widgetid="LightBulbWidget" title="Show Code Actions (Ctrl+.)" style="position: absolute; display: none; visibility: hidden; max-width: 1130px;"></div></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 184px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; font-variation-settings: normal; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; padding-left: 1px; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 1116px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 1116px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="14" height="398" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 398px; display: block;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute; width: 14px; height: 398px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 398px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 1315px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="on" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="tab-size: 30.7969px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; font-variation-settings: normal; line-height: 19px; letter-spacing: 0px; top: 0px; left: 79px; width: 1109px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover margin" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 1329px;"></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 1195px; width: 120px; height: 398px;"><div class="minimap-shadow-hidden" style="height: 398px;"></div><canvas width="120" height="398" style="position: absolute; left: 0px; width: 120px; height: 398px;"></canvas><canvas class="minimap-decorations-layer" width="120" height="398" style="position: absolute; left: 0px; width: 120px; height: 398px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 120px; display: none; height: 41px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 120px; top: 0px; height: 41px;"></div></div></div><div role="presentation" aria-hidden="true" class="blockDecorations-container"></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-hover hidden" tabindex="0" role="tooltip" widgetid="editor.contrib.contentHoverWidget" style="position: absolute; display: none; visibility: hidden; max-width: 1366px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 1.35714; max-height: 250px; max-width: 877.14px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div></div></div></div><textarea id="script" style="width: 100%; height: 175px; font-family: courier, serif; visibility: visible; overflow: hidden; overflow-wrap: break-word; resize: none; display: none;" name="script" wrap="soft" class=" script-field form-control" onchange="multiModified(this)" onkeydown="multiKeyDown(this);" onkeyup="fieldTyped(this);"></textarea><input type="hidden" id="sys_original.script" name="sys_original.script" value="" style="display: none;" class="script_editor_editor_original_input"></div><div id="gutterContextMenu" class="hide-me"><ul class="context_menu" style="list-style: none; z-index: 1000"><li id="addBreakpoint" class="breakpoint-menu-item context_item hide-me" tabindex="-1">Add breakpoint</li><li id="removeBreakpoint" class="breakpoint-menu-item context_item hide-me" tabindex="-1">Remove breakpoint</li><li id="addCondition" class="breakpoint-menu-item context_item hide-me" tabindex="-1">Add Condition</li><li id="addConditionalBreakpoint" class="breakpoint-menu-item context_item hide-me" tabindex="-1">Add conditional breakpoint</li><li id="editCondition" class="breakpoint-menu-item context_item hide-me" tabindex="-1">Edit condition</li><li id="removeCondition" class="breakpoint-menu-item context_item hide-me" tabindex="-1">Remove condition</li></ul></div></div></div></div><script type="text/javascript">document.getElementById("script").style.visibility="visible";</script><div id="script.lint.tr" style="display:none"><div colspan="2"><div id="script.lint.div" class="outputmsg outputmsg_error"><span id="script.lint" style="display:inline"></span></div></div></div><script language="javascript">var script_editor;
			function init_script_editor() {
				// Don't initialize the editor more than once.
				if (script_editor) {
					script_editor.editor.layout();
					return;
				}

				var monacoOptions = {
					tabSize: 4,
					insertSpaces: !true,
					readOnly: false,
					language: (true === false) ? 'html' : 'javascript',
					quickSuggestions: false === false
				};
				var options = {
					codeComplete: false === false,
					lazyLoadCompletions: false === false,
					contextMenuData: '{\"flushTime\":{\"sys_db_object\":1757084556219,\"sys_script_include\":1757084556219},\"apiDocResourceIds\":\"{\\\"GlideServletRequest\\\":\\\"GlideServletRequest-Scoped\\\",\\\"sn_ws.SOAPMessageV2\\\":\\\"SOAPMessageV2-Scoped-Global\\\",\\\"sn_ws.SOAPResponseV2\\\":\\\"SOAPResponseV2-Scoped-Global\\\",\\\"XMLNode\\\":\\\"XMLNode-Scoped\\\",\\\"GlideScopedEvaluator\\\":\\\"GlideScopedEvaluator-Global\\\",\\\"GlidePluginManager\\\":\\\"GlidePluginManager-Scoped\\\",\\\"GlideTableHierarchy\\\":\\\"GlideTableHierarchy-Scoped\\\",\\\"sn_ws_int.RESTAPIResponseStream\\\":\\\"RESTAPIResponseStream-Scoped-Global\\\",\\\"GlideRecord\\\":\\\"GlideRecord-Global\\\",\\\"GlideServletResponse\\\":\\\"GlideServletResponse-Scoped\\\",\\\"sn_clotho.Data\\\":\\\"Data-Scoped-Global\\\",\\\"GlideElementDescriptor\\\":\\\"GlideElementDescriptor-Scoped\\\",\\\"GlideQueryCondition\\\":\\\"GlideQueryCondition-Global\\\",\\\"GlideScriptableInputStream\\\":\\\"GlideScriptableInputStream-Scoped\\\",\\\"sn_clotho.Transformer\\\":\\\"Transformer-Scoped-Global\\\",\\\"GlideRecordSecure\\\":\\\"GlideRecordSecure-Global\\\",\\\"sn_clotho.DataBuilder\\\":\\\"DataBuilder-Scoped-Global\\\",\\\"sn_ws_int.RESTAPIRequest\\\":\\\"RESTAPIRequest-Scoped-Global\\\",\\\"sn_ws_int.RESTAPIRequestBody\\\":\\\"RESTAPIRequestBody-Scoped-Global\\\",\\\"sn_clotho.TransformPart\\\":\\\"TransformPart-Scoped-Global\\\",\\\"XMLDocument2\\\":\\\"XMLDocument2-Scoped\\\",\\\"sn_auth.GlideOAuthToken\\\":\\\"GlideOAuthToken-Scoped-Global\\\",\\\"GlideDuration\\\":\\\"GlideDuration-Scoped\\\",\\\"GlideAggregate\\\":\\\"GlideAggregate-Global\\\",\\\"sn_impex.CSVParser\\\":\\\"CSVParser-Scoped-Global\\\",\\\"sn_auth.GlideOAuthClientRequest\\\":\\\"GlideOAuthClientRequest-Scoped-Global\\\",\\\"sn_ws_err\\\":\\\"sn-ws-err\\\",\\\"sn_auth.GlideOAuthClient\\\":\\\"GlideOAuthClient-Scoped-Global\\\",\\\"GlideSession\\\":\\\"GlideSession-Global\\\",\\\"sn_ws_int.RESTAPIResponse\\\":\\\"RESTAPIResponse-Scoped-Global\\\",\\\"gs\\\":\\\"GlideSystem-Global\\\",\\\"GlideFilter\\\":\\\"GlideFilter-Scoped\\\",\\\"GlideDate\\\":\\\"GlideDate-Scoped\\\",\\\"sn_clotho.Client\\\":\\\"Client-Scoped-Global\\\",\\\"sn_ws.RESTMessageV2\\\":\\\"RESTMessageV2-Scoped-Global\\\",\\\"GlideScriptedProcessor\\\":\\\"GlideScriptedProcessor-Scoped\\\",\\\"GlideTime\\\":\\\"GlideTime-Scoped\\\",\\\"GlideUser\\\":\\\"GlideUser-Global\\\",\\\"sn_ws.RESTResponseV2\\\":\\\"RESTResponseV2-Scoped-Global\\\",\\\"GlideElement\\\":\\\"GlideElement-Global\\\",\\\"GlideSchedule\\\":\\\"GlideSchedule-Scoped\\\",\\\"sn_clotho.TransformResult\\\":\\\"TransformResult-Scoped-Global\\\",\\\"GlideDateTime\\\":\\\"GlideDateTime-Global\\\",\\\"GlideDBFunctionBuilder\\\":\\\"GlideDBFunctionBuilder-Scoped-Global\\\",\\\"sn_auth.GlideOAuthClientResponse\\\":\\\"GlideOAuthClientResponse-Scoped-Global\\\",\\\"GlideLocale\\\":\\\"GlideLocale-Scoped\\\",\\\"XMLNodeIterator\\\":\\\"XMLNodeIterator-Scoped\\\"}\"}',
					isClientScript: true === false,
					scope: g_scratchpad.scope,
					accessKey: 'CTRL',
					contextMenu: 'true',
					breakpoints: {breakpoints:true, hasBreakpointRole: true, hasLogpointRole: true},
					linter: true,
					eslintConfig: '{\n  \"rules\": {\n    \"constructor-super\": \"warn\",\n    \"no-case-declarations\": \"warn\",\n    \"no-class-assign\": \"warn\",\n    \"no-compare-neg-zero\": \"warn\",\n    \"no-cond-assign\": \"warn\",\n    \"no-console\": \"warn\",\n    \"no-const-assign\": \"warn\",\n    \"no-constant-condition\": \"warn\",\n    \"no-control-regex\": \"warn\",\n    \"no-debugger\": \"warn\",\n    \"no-delete-var\": \"warn\",\n    \"no-dupe-args\": \"warn\",\n    \"no-dupe-class-members\": \"warn\",\n    \"no-dupe-keys\": \"warn\",\n    \"no-duplicate-case\": \"warn\",\n    \"no-empty-character-class\": \"warn\",\n    \"no-empty-pattern\": \"warn\",\n    \"no-empty\": [\"warn\", { \"allowEmptyCatch\": true }],\n    \"no-ex-assign\": \"warn\",\n    \"no-extra-boolean-cast\": \"warn\",\n    \"no-extra-semi\": \"warn\",\n    \"semi\" : \"warn\",\n    \"no-fallthrough\": \"warn\",\n    \"no-func-assign\": \"warn\",\n    \"no-global-assign\": \"warn\",\n    \"no-inner-declarations\": \"warn\",\n    \"no-invalid-regexp\": \"warn\",\n    \"no-irregular-whitespace\": \"warn\",\n    \"no-mixed-spaces-and-tabs\": \"warn\",\n    \"no-new-symbol\": \"warn\",\n    \"no-obj-calls\": \"warn\",\n    \"no-octal\": \"warn\",\n    \"no-redeclare\": \"warn\",\n    \"no-regex-spaces\": \"warn\",\n    \"no-self-assign\": \"warn\",\n    \"no-sparse-arrays\": \"warn\",\n    \"no-this-before-super\": \"warn\",\n    \"no-undef\": \"off\",\n    \"no-unexpected-multiline\": \"warn\",\n    \"no-unreachable\": \"warn\",\n    \"no-unsafe-finally\": \"warn\",\n    \"no-unsafe-negation\": \"warn\",\n    \"no-unused-labels\": \"warn\",\n    \"no-unused-vars\": \"off\",\n    \"no-useless-escape\": \"warn\",\n    \"require-yield\": \"warn\",\n    \"use-isnan\": \"warn\",\n    \"valid-typeof\": \"warn\"\n  }\n}',
					apiList: ""
				};

				var editorOptionOverrides = '{\"minHeight\":400,\"maxHeight\":700,\"breakpoints\":{\"breakpoints\":false}}';
				if (editorOptionOverrides) {
					Object.assign(options, JSON.parse(editorOptionOverrides));
				}

				var monacoOptionOverrides = '';
				if (monacoOptionOverrides) {
					Object.assign(monacoOptions, JSON.parse(monacoOptionOverrides));
				}

				script_editor = new GlideEditorMonaco('div_script', 'script', monacoOptions, options);

				var extraCommands = script_editor.getExtraCommands();
				var extraKeyMap = script_editor.getExtraKeyMap();
				for (var key in extraCommands) {
					setupOnclickFunc(key);
					setIconTitle(key, extraCommands[key]);
				}

				function setupOnclickFunc(func) {
					//This setups the toolbar onclick functions
					var funcid = 'script.' + func;
					if ($(funcid)) {
						$(funcid).on("click", function() {
							var funcid = this.id.replace('script.', '');
							if (script_editor[funcid])
								script_editor[funcid](script_editor.editor, 'script');
						});
					}
				}

				function setIconTitle(id, command) {
					if ($('script.' + id)) {
						var shortcut = extraKeyMap[id] ? " (" + extraKeyMap[id] + ")" : '';
						$('script.' + id).writeAttribute('data-original-title', command + shortcut );
					}
				}

				var scriptField = 'script'.split('.')[1];
				monaco.scriptInfo = {id: '', type: '', field:scriptField};

				$('script.toggleLinter').on("click", function(){
						script_editor.toggleLinter(script_editor.editor);
					});
				//Register the g_form handlers for monaco
				var inputHandler = new MonacoTextAreaElement('script');
				g_form.registerHandler('script', inputHandler);
			}

			addAfterPageLoadedEvent(function() {
				//We initialize the editor at several points

				// Initialize the editor on load.
				init_script_editor();

				//When tabs are disabled, it's possible the script editor needs to be initialized.
				CustomEvent.observe('tabs.disable', function(e){
					init_script_editor();
				});

				//If the editor becomes visible, but has not yet initialized, we initialize it for the first time.
				CustomEvent.observe('element_script_display_true', function(e){
					init_script_editor();
				});

				// Initialize the editor on tab switch.
				CustomEvent.observe('tab.activated', function(){
					init_script_editor();
				});
			});</script><script language="javascript">function runLint(suppressAlert) {
		var code = "";code = gel('script').value;
		var isValid = JSHINT(code);
		var d = gel("script.lint");
		var tr = gel("script.lint.tr");
		if (!isValid && d) {
		d.innerHTML = '';
		var errors = JSHINT.errors;
		for (var i = 0; i != errors.length; i++) {
		var err = errors[i];
		// ignore the FATAL errors
		if ((err == null) || err.type == 'quit')
		continue;

		d.innerHTML += (err.type == 'error' ? 'ERROR' : 'WARNING') + ' at line ' + err.line + ': ' + err.reason + "<br></br>";
		}

		tr.style.display = "";
		if (!suppressAlert)
		alert(getMessage("Some errors/warnings were found... see details below"));

		return false;
		} else {
		tr.style.display = "none";
		if (!suppressAlert)
		alert(getMessage("Syntax OK"));

		return true;
		}
		}</script><div class="code-editor" id="div_script"></div><div class="script-control-container"><div class="script-control"><button type="submit" id="MANDATORY" onclick="undefined" style="" class="btn btn-default">Run Script</button></div><div class="script-control"><label style="margin-top: 4px;">in scope<select name="sys_scope" id="sys_scope"><option value="global" selected="selected">global</option></select></label></div><div class="script-control"><label style="margin-top: 4px;">Record for rollback?<input checked="true" name="record_for_rollback" type="checkbox"></label></div><div class="script-control"><label style="margin-top: 4px;">Execute in sandbox?<input name="sandbox" type="checkbox"></label></div><div class="script-control"><label style="margin-top: 4px;">Execute as scriptlet?<input name="scriptlet" type="checkbox"></label></div><div class="script-control"><label style="margin-top: 4px;">Cancel after 4 hours<input checked="true" name="quota_managed_transaction" type="checkbox"></label></div></div></div><div class="script-list-container"><ul class="script-list-container"><li class="script-list-containeritem script-list-toggleable script-list-hidden">Instance Scripts</li></ul></div><input name="runscript" type="hidden"><textarea id="script" name="script" style="display:none;"></textarea></form><script type="text/javascript" src="./1_files/sysScriptsModern.min.jsx"></script><div style="border:none; visibility:hidden"><form name="sys_personalize" method="GET" action="https://dev353233.service-now.com/slushbucket.do"><input type="hidden" name="sysparm_referring_url" value="sys.scripts.modern.do"><input type="hidden" name="sysparm_view" value=""></form></div><script type="text/javascript" src="./1_files/ui_page_footer.jsx"></script><span style="display:none" data-comments="js_includes_last_doctype"></span><script type="text/javascript" src="./1_files/purify.jsx"></script><script>NOW.xperf.lastDoctypeBegin = NOW.xperf.now();</script><script type="text/javascript" src="./1_files/js_includes_last_doctype.jsx"></script><script type="text/javascript" src="./1_files/heisenberg_all.jsx"></script><script type="text/javascript" src="./1_files/js_includes_list_edit_doctype.jsx"></script><script type="text/javascript" src="./1_files/transaction_scope_includes.jsx"></script><script>if ('') 
			GlideTransactionScope.setTransactionScope('');
		if ('') 
			GlideTransactionScope.setRecordScope('');
		if ('') 
			GlideTransactionScope.setTransactionUpdateSet('');
		if (typeof g_form != 'undefined')
			$(g_form.getFormElement()).fire('glidescope:initialized', {gts : GlideTransactionScope});</script><span style="display:none" data-comments="requires"></span><script>/*! RESOURCE: /scripts/elements/element_attributes.jsx */
addAfterPageLoadedEvent(function () {
document.body.on('click', 'a[data-type="spell_check"]', function(evt, element) {
	spellCheck(element.getAttribute('data-ref'));
});
document.body.on('click', 'a[data-type="mode_toggler"]', function(evt, element) {
	toggleMode(element.getAttribute('data-ref')); 
});
document.body.on('click', 'a[data-type="debug_toggler"]', function(evt, element) {
	toggleDebug(element.getAttribute('data-ref')); 
});
document.body.on('click', 'a[data-type="html_view"]', function(evt, element) {
	htmlView(element.getAttribute('data-ref'), element.getAttribute('data-sys_id')); 
});
function toggleMode(id) {
	var widget = $("ni_mode_" + id);
	if (!widget)
		return;
	var currentMode = widget.value;
	if (currentMode == 'freeform')
		currentMode = 'select';
	else
		currentMode = 'freeform';
	widget.value = currentMode;
	setMyVisibility(id);
	setPreference('mode_' + id, currentMode);
}
});
;</script><script>/*! RESOURCE: /scripts/elements/textarea_sizer.jsx */
function textareaSizer_initialize(id, collapsed, rows) {
	var e = gel(id);
	if (e) {
	    if (collapsed) {
		   e.is_collapsed = true;
		   e.expand_to_rows = rows;
           Event.observe(e, "change", textareaSizer_Expand, false);
		   Event.observe(e, "focus", textareaSizer_Expand, false);
		}
		textareaSizer_Related(e);
	}		
}
function textareaSizer_Resize(id, change) {
	var e = gel(id);
    if (e) {
       e.is_collapsed = false;
	   textareaResizer(id, change);
	   textareaSizer_Related(e);
       CustomEvent.fire('textarea.resize', id, change);
    }
}
		    
function textareaSizer_Expand(ev) {
    var e = Event.element(ev);
    if (e) {
       if (e.is_collapsed) {
           e.is_collapsed = false;
           textareaSizer(e.id, e.expand_to_rows);
	   	   textareaSizer_Related(e);
       }
    }
 }
 function textareaSizer_Related(e) {
	setTimeout("textareaSizer_Related0('" + e.id + "')", 0);
}
function textareaSizer_Related0(id) {
    var taElement = gel(id);
    if (taElement) {
        var relatedBuddy = taElement.getAttribute("relatedBuddy");
        if (relatedBuddy) {
            var h = getHeight(taElement);
            var div = gel(relatedBuddy);
        	div.style.height = h;
        }
    }
}
;</script><script>/*! RESOURCE: /scripts/elements/textarea_autosizer.jsx */
var textareaResize = (function($) {
	var defaults = {
			className: 'autosizejs',
			id: 'autosizejs',
			append: '\n',
			callback: false,
			resizeDelay: 10,
			placeholder: true
		},
copy = '<textarea tabindex="-1" aria-label="{{textarea}}" aria-hidden="true" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
		typographyStyles = [
			'fontFamily',
			'fontSize',
			'fontWeight',
			'fontStyle',
			'letterSpacing',
			'textTransform',
			'wordSpacing',
			'textIndent',
			'lineHeight'
		],
		mirrored,
		mirror = $(copy).data('autosize', true)[0];
	return function(id, options) {
		if (!id)
			return;
		var ta = document.getElementById(id);
		if (!ta)
			return;
		var $ta = $(ta);
		if ($ta.data('autosize'))
			return;
		if (!options)
			options = {};
		if (!mirror.parentNode || mirror.parentNode !== document.body)
			$(document.body).append(mirror);
		var maxHeight,
			minHeight,
			boxOffset = 0,
			codeMirrorBoxOffset = 0,
			callback = $.isFunction(options.callback),
			originalStyles = {
				height: ta.style.height,
				overflow: ta.style.overflow,
				overflowY: ta.style.overflowY,
				wordWrap: ta.style.wordWrap,
				resize: ta.style.resize
			},
			timeout,
			width = $ta.width(),
			codeMirror = ($(ta.nextSibling).hasClass('CodeMirror')) ? ta.nextSibling : undefined;
		var codeMirrorContent = codeMirror ? codeMirror.lastChild.firstChild : undefined;
		$ta.data('autosize', true);
		if ($ta.css('box-sizing') === 'border-box' || $ta.css('-moz-box-sizing') === 'border-box' || $ta.css('-webkit-box-sizing') === 'border-box')
			boxOffset = $ta.outerHeight() - $ta.height();
		if(codeMirror) {
			if ($(codeMirror).css('box-sizing') === 'border-box' || $(codeMirror).css('-moz-box-sizing') === 'border-box' || $(codeMirror).css('-webkit-box-sizing') === 'border-box')
				codeMirrorBoxOffset = $(codeMirror).outerHeight() - $(codeMirror).height();
			if (codeMirror.CodeMirror && codeMirror.CodeMirror.options.mode === "javascript")
				codeMirrorBoxOffset += 25;
		}
		minHeight = Math.max(parseInt($ta.css('minHeight'), 10) - boxOffset || 0, $ta.height());
		if (ta.tagName && ta.tagName.toLowerCase() === 'span') {
			$ta.css({
				overflow: $ta[0].style.overflow || 'hidden',
				overflowY: $ta[0].style.overflowY || 'hidden',
				wordWrap: 'break-word',
				resize: $ta[0].style.resize || 'none'
			});
		} else {
			$ta.css({
				overflow: 'hidden',
				overflowY: 'hidden',
				wordWrap:'break-word',
				resize: 'none'
			});
		}
		var style, bordersAndPadding;
		function setWidth() {
			style = style || window.getComputedStyle(ta, null) || ta.style;
			var width = ta.getBoundingClientRect().width;
			if (width === 0 || typeof width !== 'number')
				width = parseInt(style.width, 10);
			if (!bordersAndPadding) {
				bordersAndPadding = ['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth'].reduce(function(acc, val) {
					return acc + parseInt(style[val], 10);
				}, 0);
			}
			mirror.style.width = (width - bordersAndPadding) + 'px';
		}
		function initMirror() {
			mirrored = ta;
			mirror.className = options.className;
			mirror.id = options.id;
			maxHeight = parseInt($ta.css('maxHeight'), 10);
			var styles = typographyStyles.reduce(function(acc, val) {
				acc[val] = codeMirror ? $(codeMirror).css(val) : $ta.css(val);
				return acc;
			}, {});
			$(mirror).css(styles).attr('wrap', $ta.attr('wrap'));
			setWidth();
		}
		function adjust(e) {
			var height, original, codeMirrorHeight, doc, docValue;
			if (ta.tagName && ta.tagName.toLowerCase() === 'span') {
				return;
			}
			if (mirrored !== ta)
				initMirror();
			else
				setWidth();
			if (!ta.value && options.placeholder) {
				mirror.value = ($ta.attr("placeholder") || '') + options.append;
			} else {
				doc = codeMirror && codeMirror.codeMirror && codeMirror.CodeMirror.getDoc();
				docValue = doc && doc.getValue();
				mirror.value = (docValue ? docValue : ta.value) + options.append;
			}
			mirror.style.overflowY = ta.style.overflowY;
			original = parseInt(ta.style.height,10);
			height = mirror.scrollHeight;
			if (maxHeight && height > maxHeight) {
				ta.style.overflowY = 'scroll';
				height = maxHeight;
				if (codeMirror)
					codeMirror.lastChild.style.overflowY = 'scroll';
			} else {
				ta.style.overflowY = 'hidden';
				if (height < minHeight)
					height = minHeight;
				if (codeMirror)
					codeMirror.lastChild.style.overflowY = 'hidden';
			}
			if (codeMirror) {
				codeMirrorHeight = height + codeMirrorBoxOffset;
				if (parseInt(codeMirrorContent.style.height, 10))
					codeMirrorHeight = Math.max(parseInt(codeMirrorContent.style.height, 10), codeMirrorHeight);
				if (maxHeight)
					codeMirrorHeight = Math.min(maxHeight, codeMirrorHeight);
			}
			height += boxOffset;
			if (original !== height) {
				ta.style.height = height + 'px';
				if (codeMirror && codeMirror.CodeMirror)
					if (codeMirror.CodeMirror.setHeight)
						codeMirror.CodeMirror.setHeight(codeMirrorHeight + 'px');
					else if (codeMirror.CodeMirror.setSize)
						codeMirror.CodeMirror.setSize(null, codeMirrorHeight + 'px');
				if (callback)
					options.callback.call(ta,ta);
			}
			if ($ta.closest('.tabs2_section').hasClass('tab_section') && !$ta.closest('.tabs2_section').is(':visible')){
				CustomEvent.observe("tab.activated", function(tab){
					if ($ta.closest('.tabs2_section').hasClass(tab))
						adjust();
				});
				return false;
			}
			if (window._frameChanged)
				_frameChanged();
		}
		function resize () {
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				var newWidth = $ta.width();
				if (newWidth !== width && $ta.val() !== '') {
					width = newWidth;
					adjust();
				}
			}, parseInt(options.resizeDelay, 10));
		}
		$ta.on('input.autosize change.autosize', adjust);
		if(codeMirror)
			$(codeMirror).on('paste.autosize keydown.autosize', adjust);
		if (options.resizeDelay !== false)
			$(window).on('resize.autosize', resize);
		$ta.on('autosize.resize', adjust);
		$ta.on('autosize.resizeIncludeStyle', function() {
			mirrored = null;
			adjust();
		});
		$ta.on('autosize.destroy', function(){
			mirrored = null;
			clearTimeout(timeout);
			$(window).off('resize', resize);
			$ta
				.off('autosize')
				.off('.autosize')
				.css(originalStyles)
				.removeData('autosize');
			if(codeMirror)
				$(codeMirror).off('.autosize');
		});
		if (ta.value)
			adjust();
	}
})(window.jQuery);
;</script><script>NOW.xperf.lastDoctypeEnd = NOW.xperf.now();</script><span style="display:none" data-comments="db_context_menu_script"></span><script>NOW.xperf.dbContextBegin = NOW.xperf.now();</script><script>NOW.xperf.dbContextEnd = NOW.xperf.now();</script><span style="display:none" data-comments="db_context_menu_script"></span><script data-description="MessagesTag">(function() {
 var messages = new GwtMessage();
messages.set('Timing Type');
messages.set('Time Range');
messages.set('Total Time');
messages.set('{0}ms');
messages.set('{0} ms');
messages.set('Browser response time');
messages.set('Server');
messages.set('Timing details');
messages.set('{0} of {1} {2}: {3}');
messages.set('{0} of {1} Other: {2}');
messages.set('{0} of {1} {2}: {3}');
messages.set('Show Timing Breakdown');
messages.set('Browser timing detail');
messages.set('Time');
messages.set('Other');
messages.set('Timing details breakdown');
messages.set('Response time(ms): {0}');
messages.set('Network: {0}');
messages.set('Network: {0}ms');
messages.set('Server: {0}');
messages.set('Server: {0}ms');
messages.set('Browser: {0}');
messages.set('Browser: {0}ms');
messages.set('Response time','Response Time');
messages.set('Close');
messages.set('Cache/DNS/TCP');
messages.set('DOM Processing');
messages.set('Script Load/Parse');
messages.set('CSS and JS Parse');
messages.set('Form Sections');
messages.set('UI Policy - On Load');
messages.set('Client Scripts - On Load');
messages.set('Client Scripts - On Change (initial load)');
messages.set('Browser processing before onload');
messages.set('DOMContentLoaded to LoadEventEnd');
messages.set('addLoadEvent functions');
messages.set('Related Lists');
messages.set('Related Lists (sync)');
messages.set('Related Lists (async)');
messages.set('onLoad');
messages.set('Unload');
})()</script><script type="text/javascript">var g_serverTime = parseInt("223") + parseInt("0");
            var g_logClientViewRoles = "";

			// do not do this for the navigation menu
            if (window.name != 'gsft_nav') {
				 addAfterPageLoadedEvent(function() {
					 if (window.performance)
						setTimeGraph();
					 else 
						firePageTimer();
				 });
			 }
			 
			function setTimeGraph() {
				if (window.performance.timing.loadEventEnd > 0)
			 		firePageTimer();
			 	else 
			 		setTimeout(setTimeGraph, 300);
			 }
			 
			function firePageTimer() {
				 if (window.performance && performance.timing.requestStart != performance.timing.responseStart) {
				 	var p = performance.timing;

				 	CustomEvent.fire('page_timing', { name: 'SERV', ms: p.responseEnd - p.requestStart});
				 	CustomEvent.fire('page_timing', { name: 'REND', ms: (p.loadEventEnd - p.responseEnd) });
				 	CustomEvent.fire('page_timing_network', { name: 'NETW', ms: (p.responseEnd - p.navigationStart) });
				 } else {
				    CustomEvent.fire('page_timing', { name: 'SERV', ms: g_serverTime });
					CustomEvent.fire('page_timing', { name: 'REND', startTime: g_loadTime });
					CustomEvent.fire('page_timing_network', { name: 'NETW', loadTime: g_loadTime });
				 }CustomEvent.fire('page_timing_show', {
						isFixed: '', 
						show: '' 
					 });var o = {};
	      o.types = {};o.types['SECT'] = true;o.types['RLV2'] = true;o.types['UIOL'] = true;o.types['CSOL'] = true;
	
	      o.transaction_id = 'eac7efe19333221096fdfd10ed03d65b';
	      o.table_name = '';
	      o.form_name = 'sys.scripts.modern';
	      o.view_id = 'Default view';
	      o.logged_in = true;
	      o.win = window;
	      CustomEvent.fire('page_timing_client', o);}
			 
            // The following line is used to set the time when we start requesting a new page
            Event.observe(window, 'beforeunload', function() {
				new CookieJar({sameSite: 'strict'}).put('g_startTime', new Date().getTime());
                CustomEvent.fireTop('request_start', document);
            });

            // simple pages fire this (stats.do, etc.)
            CustomEvent.observe('simple_page.unload', function() {
				new CookieJar({sameSite: 'strict'}).put('g_startTime', new Date().getTime());
            }); 

            // indicate we have completed the request (used by RequestManager.js for cancel widget)
            addLoadEvent(function() {
            	CustomEvent.fireTop("request_complete", window.location);
            });</script><script type="text/javascript" src="./1_files/z_last_include.jsx"></script><span id="ac.status" role="status" aria-live="polite" class="sr-only"></span><span aria-live="polite" class="sr-only"></span><textarea tabindex="-1" aria-label="{{textarea}}" aria-hidden="true" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"></textarea><script type="text/html" id="popup_template"><div class="popup popup_form" style=""><iframe src="$src" style=""></iframe></div></script><div class="monaco-aria-container"><div class="monaco-alert" role="alert" aria-atomic="true"></div><div class="monaco-alert" role="alert" aria-atomic="true"></div><div class="monaco-status" role="complementary" aria-live="polite" aria-atomic="true"></div><div class="monaco-status" role="complementary" aria-live="polite" aria-atomic="true"></div></div><div id="page_timing_div" role="complementary" aria-label="Timing details" class="timingDiv"><svg class="patterns_svg" width="0" height="0"><defs><pattern id="pattern_timing_network" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)"><line class="pattern_stroke" x1="0" y1="0" x2="0" y2="5" stroke-width="2"></line></pattern><pattern id="pattern_timing_server" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)"><line class="pattern_stroke" x1="0" y1="3" x2="2" y2="3" stroke-width="2"></line><line class="pattern_stroke" x1="4" y1="3" x2="6" y2="3" stroke-width="2"></line></pattern><pattern id="pattern_timing_browser" patternUnits="userSpaceOnUse" width="5.5" height="5.5" patternTransform="rotate(135)"><line class="pattern_stroke" x1="0" y1="0" x2="0" y2="5.5" stroke-width="7"></line></pattern></defs></svg><button class="pointerhand icon-stop-watch btn btn-icon btn-response-time" type="button" aria-controls="glide:timing_widget" title="Response time(ms): 849, Network: 6, Server: 814, Browser: 29" aria-label="Response Time"></button><div style="display: none;"><div class="timing_span" id="glide:timing_widget">Response time(ms): 849, Network: 6, Server: 814, Browser: 29<div class="timingGraphDiv"><span class="timing_graph" data-aria-label="Show Timing Breakdown"><span class="timing_network" title="Network: 6ms" style="width: 7%;"><svg class="breakdown_svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="url(#pattern_timing_network)"></rect></svg></span><span class="timing_server" title="Server: 814ms" style="width: 102%;"><svg class="breakdown_svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="url(#pattern_timing_server)"></rect></svg></span><span class="timing_browser" title="Browser: 29ms" style="width: 9%;"><svg class="breakdown_svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="url(#pattern_timing_browser)"></rect></svg></span></span></div><table class="timing_breakdown table table-condensed" id="glide:timingBreakdown_widget" aria-hidden="false" aria-label="Timing details breakdown"><thead>       <tr><th aria-hidden="true"></th>       <th class="timing_label" scope="col">Timing Type</th>       <th id="time_range" scope="col">Time Range</th>       <th id="total_time" scope="col">Total Time</th></tr></thead><tbody><tr><td aria-hidden="true" rowspan="1" class="timing_network"><div class="wrapper_div"><svg class="table_svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="url(#pattern_timing_network)"></rect></svg></div></td><th scope="row" id="timing_network" class="timing_label">Cache/DNS/TCP</th><td headers="time_range timing_network">6-6ms</td><td headers="total_time timing_network">0ms</td></tr><tr><td aria-hidden="true" rowspan="1" class="timing_server"><div class="wrapper_div"><svg class="table_svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="url(#pattern_timing_server)"></rect></svg></div></td><th scope="row" id="timing_server" class="timing_label">Server</th><td headers="time_range timing_server">6-820ms</td><td headers="total_time timing_server">814ms</td></tr><tr><td aria-hidden="true" rowspan="3" class="timing_browser"><div class="wrapper_div"><svg class="table_svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="url(#pattern_timing_browser)"></rect></svg></div></td><th scope="row" id="timing_browser_unload" class="timing_label">Unload</th><td headers="time_range timing_browser">553-553ms</td><td headers="total_time timing_browser">0ms</td></tr><tr><th scope="row" id="timing_browser_dom" class="timing_label">DOM Processing</th><td headers="time_range timing_browser">554-842ms</td><td headers="total_time timing_browser">288ms</td></tr><tr><th scope="row" id="timing_browser_onload" class="timing_label">onLoad</th><td headers="time_range timing_browser">842-849ms</td><td headers="total_time timing_browser">7ms</td></tr></tbody></table><table class="table table-condensed table-timing-detail" aria-label="Browser timing detail"><thead><tr><th>Browser timing detail</th><th>Time</th></tr></thead><tbody id="page_timing_details"></tbody></table></div></div></div></body></html>
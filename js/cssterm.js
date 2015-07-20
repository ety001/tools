$(document).ready(function() {

  // Better performance in replacing js in any browsers. http://jsperf.com/encode-html-entities
  if($.browser.name != "chrome") {
    var tagsToReplace = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      ' ': '&nbsp;',
      '#': '<root>[root@to0l.cn]# </root>',
      '$': '<user>[user@to0l.cn]$ </user>'
    };
    function replaceTag(tag) {
      return tagsToReplace[tag] || tag;
    }
    function htmlEscape(str) {
      return str.replace(/[&<> ]/g, replaceTag);
    }
    function userReplace(str) {
      return str.replace(/^[#$]/gi, replaceTag);
    }
  } else {
    function htmlEscape(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/ /g, '&nbsp');
    }
    function userReplace(str) {
      return str.replace(/^#/gi, '<root>[root@to0l.cn]# </root>').replace(/^\$/gi, '<user>[user@to0l.cn]$ </user>');
    }
  }

  // the html that will be inserted to replace the shortened code
  // the terminal bar and body before the text is placed
	var termTop = '<div class="cssterm">\
  <p> \
';

	// closes the html that has been inserted, ends the terminal display
	var termBot = '\
	</p>\
  </div>';

  // tell jQuery to search for each instance of the shortened code
  $(".cssterm").each(function() {
    var myContent = $(this).text();
    var arrayContent = myContent.split('\n');
    var newString = "";
    jQuery.each(arrayContent, function() {
      // make sure there's text to avoid blank spaces
      if (this.length != 0) {
        // is string a root command
        if (this.charAt(0) == "#" || this.charAt(0) == "$") {
          newString += userReplace(this) + "<br>\n";
        } else {
          newString += htmlEscape(this) + "<br>\n";
      }
    }
  });
  $(this).replaceWith( termTop + newString + termBot );
  });
});

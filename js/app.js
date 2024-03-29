/*
**** PRODUCT LIST ****
1. Upan
2. Online Clipboard
3. Review Bookmark
4. Pix
5. SS
6. Ji Zhang
7. Party Time

**** DONATE ME ****
Type 'donate' to donate me.

**** MY BLOG ****
Type 'blog' to enter my blog.
*/
var app = {
  list: {
    1: 'https://u.to0l.cn',
    2: 'https://oc.to0l.cn',
    3: 'https://creatorsdaily.com/9999e88d-0b00-46dc-8ff1-e1d311695324#comments',
    4: 'https://pix.akawa.ink',
    5: 'https://cors.to0l.cn',
    6: 'http://to0l.cn/phpshell.html',
    'md5': 'md5,your_str',
    'donate': 'https://akawa.ink/donate',
    'blog': 'https://akawa.ink',
    'github': 'https://github.com/ety001',
    'steemit': 'https://steemit.com/@ety001'
  },
  run: function(){
    $('.term').terminal(
      function(command, term) {
        var tmp_command = command.split(',');
        if(tmp_command[0]=='md5') {
          return term.echo( md5(tmp_command[1]) );
        }
        if(app.list[command]!=undefined){
          window.open( app.list[command] );
          term.echo( new String('You are visiting ' + app.list[command]) );
        } else {
          term.echo(new String('Wrong command!'));
        }
      }, {
        greetings: $('#welcome').html(),
        name: 'to0ls',
        height: '100%',
        width: '100%',
        prompt: 'work@akawa.ink $ '
      }
    );
  }
};
$(function(){
  app.run();
})

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
    3: 'https://bm.to0l.cn',
    4: 'https://pix.domyself.me',
    5: 'https://cors.to0l.cn',
    6: 'http://to0l.cn/phpshell.html',
    'md5': 'md5,your_str',
    'donate': 'https://pix.domyself.me/donate',
    'blog': 'https://pix.domyself.me',
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
        prompt: 'work@domyself.me $ '
      }
    );
  }
};
$(function(){
  app.run();
})

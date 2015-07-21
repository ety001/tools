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
    1: 'http://upan.pro',
    2: 'http://oc.to0l.cn',
    3: 'http://bm.to0l.cn',
    4: 'http://pix.domyself.me',
    5: 'http://gfw.fuckspam.in',
    6: 'http://jizhang.ohshit.cc',
    7: 'http://partytime.cc',
    8: 'http://ohshit.cc',
    'donate': 'http://www.domyself.me/donate',
    'blog': 'http://www.domyself.me'
  },
  run: function(){
    $('.term').terminal(
      function(command, term) {
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
        prompt: 'ety001@to0l.cn $ '
      }
    );
  }
};
$(function(){
  app.run();
})

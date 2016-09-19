import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        // 最右边用户图片按钮，点击显示退出菜单
        Ember.$(".ddnote-navbar-header-tools .user-profile").click(function() {
            var el = Ember.$(".ddnote-navbar-header-tools .profile-menu");
            if (el.is(':hidden')) {
                // el.show();
                el.slideDown();
            } else {
                el.slideUp();
            }
        });
        //左边笔记本、笔记按钮，点击显示对应的列表
        Ember.$(".ddnote-notebook-toggle").click(function() {
            // 把另一个隐藏
            Ember.$('.note-selector').hide();
            // 设置另一个为非激活状态
            Ember.$(".ddnote-note-toggle").removeClass('notebook-active');
            if (Ember.$('.notebook-selector').is(":hidden")) {
                Ember.$(this).addClass('notebook-active');
                Ember.$('.notebook-selector').slideDown();
            } else {
                Ember.$('.notebook-selector').slideUp();
            }
        });
        Ember.$(".ddnote-note-toggle").click(function() {
            Ember.$('.notebook-selector').hide();
            // 设置另一个为非激活状态
            Ember.$(".ddnote-notebook-toggle").removeClass('notebook-active');
            if (Ember.$('.note-selector').is(":hidden")) {
                Ember.$(this).addClass('notebook-active');
                Ember.$('.note-selector').slideDown();
            } else {
                Ember.$('.note-selector').slideUp();
            }
        });
        // 设置显示面板右上角的star标记
        Ember.$('.ddnote-main-container .inner .ddnote-star').click(function() {
            if (Ember.$(this).hasClass('ddnote-star-active')) {
                Ember.$(this).removeClass('ddnote-star-active');
                Ember.$('.ddnote-main-container .inner .ddnote-star i').html('&#xe605;');
            } else {
                Ember.$(this).addClass('ddnote-star-active');
                Ember.$('.ddnote-main-container .inner .ddnote-star i').html('&#xe603;');
            }
        });

        //双击可编辑
        Ember.$('.ddnote-note-comm .notebook li ul a').dblclick(function() {
            Ember.$(this).attr('contentEditable', true);
        });
    },
    actions: {
        updateNotebook(id) {
            console.log('notebook id = ' + id);
            Ember.$("#xx1").attr('contentEditable', false);
        }
    }
});

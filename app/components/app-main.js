import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        Ember.$(".ddnote-navbar-header-tools .user-profile").click(function() {
            var el = Ember.$(".ddnote-navbar-header-tools .profile-menu");
            if (el.is(':hidden')) {
                // el.show();
                el.slideDown();
            } else {
                el.slideUp();
            }
        });
    }
});

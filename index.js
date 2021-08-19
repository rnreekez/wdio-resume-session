module.exports = {
    init: function(browser, config) {
        if(!config.sessionId) {
            console.warn('Resume session enabled without sessionId, disabling');
            return;
        }

        browser.init = function () {
            this.requestHandler.sessionID = config.sessionId;
            return this.requestHandler;
        };

        browser.end = function() { return };
    }
}

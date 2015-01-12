var Dispatcher = require('./dispatcher.js');
var merge  = require('react/lib/merge');

var AppDispatcher = merge(Dispatcher.prototype, {
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  },
  handleRequestAction: function(action){
    console.log("async data from api dispatched");
    console.log(action);
    this.dispatch({
      source: 'WEB_API_ACTION',
      action: action
    })
  },
})

module.exports = AppDispatcher;
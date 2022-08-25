import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import { App } from '/imports/ui/App';
import { A } from '../imports/ui/A';

Meteor.startup(() => {
  // render(<App/>, document.getElementById('react-target'));
  render(<A/>, document.getElementById('react-target'));
});

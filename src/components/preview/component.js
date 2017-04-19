var maquette = require('maquette'),
    h        = maquette.h;

var preview = {
  renderMaquette: function() {
    return h('aside', [
      h('h4', [
        'Preview'
      ]),
      h('canvas#preview', {
        height: 360,
        width:  480
      }, [
        '...'
      ]),
      h('span', [
        'Projection:'
      ]),
      h('input.perspective', {
        type:    'radio',
        checked: 'checked',
        name:    'projection',
        value:   'perspective'
      }),
      'Perspective',
      h('input.orthographic', {
        type:  'radio',
        name:  'projection',
        value: 'orthographic'
      }),
      'Orthographic'
    ])
  }
};

module.exports = preview;

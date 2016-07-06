import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('password-input-confirmation', 'Integration | Component | password input confirmation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{password-input-confirmation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#password-input-confirmation}}
      template block text
    {{/password-input-confirmation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

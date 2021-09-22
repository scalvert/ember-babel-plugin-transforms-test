import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | baz', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /baz', async function (assert) {
    await visit('/baz');

    assert.equal(currentURL(), '/baz');
  });
});

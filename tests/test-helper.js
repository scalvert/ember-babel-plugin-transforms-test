import Application from 'classic/app';
import config from 'classic/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import { setupMiddlewareReporter } from 'ember-a11y-testing/test-support';
import {
  setupGlobalA11yHooks,
  setupConsoleLogger,
} from 'ember-a11y-testing/test-support';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

setupGlobalA11yHooks(() => true);

setupConsoleLogger();
setupMiddlewareReporter();

start();

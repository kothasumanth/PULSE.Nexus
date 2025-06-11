import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../../Util/world';
import { NexusPulsePage } from '../pages/NexusPulsePage';

Given('I launch the Pulse web application from Nexus', async function (this: CustomWorld) {
  this.page = await this.initPage();
  this.nexusPulsePage = new NexusPulsePage(this.page);
  await this.nexusPulsePage.goto();
});

When('I enter the email {string} in the email input field', async function (this: CustomWorld, email: string) {
  await this.nexusPulsePage.enterEmail(email);
});

Then('The email input should contain {string}', async function (this: CustomWorld, email: string) {
  const value = await this.nexusPulsePage.getEmailValue();
  expect(value).toBe(email);
});

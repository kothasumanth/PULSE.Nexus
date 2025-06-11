import { Page } from '@playwright/test';
import { PulseLoginPage } from '../../Pulse/src/pages/PulseLoginPage';

export class NexusPulsePage extends PulseLoginPage {
  constructor(page: Page) {
    super(page);
  }

  async enterEmail(email: string) {
    await this.page.fill('input[name="email"]', email);
  }

  async getEmailValue() {
    return this.page.inputValue('input[name="email"]');
  }
}

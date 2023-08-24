import {test, expect} from '@playwright/test';

test('ParallelRun', async({page})=>{
  await page.goto('https://e69b-203-110-83-67.ngrok-free.app/',{timeout : 10000});
  await page.getByRole('button', { name: 'Visit Site' }).click();
  await page.getByPlaceholder('Write your question').click();
  await page.getByPlaceholder('Write your question').fill('Count 1 to 100');
  await page.getByRole('button', { name: 'Send' }).click({timeout : 60000});
  // await expect(page.locator("//strong[normalize-space()='Chatbot:']")).toBeVisible();
  await expect(page.locator("//button[@id='send']")).toBeVisible({timeout : 60000});
})
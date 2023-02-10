describe('Yu-gi-oh! flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have a monster pack', async () => {
    await expect(element(by.id('monster-pack'))).toBeVisible();
  });

  it('should have a spell and trap pack', async () => {
    await expect(element(by.id('spell-trap-pack'))).toBeVisible();
  });

  it('should reveal the card when on tap some card', async () => {
    const index = Math.floor(Math.random() * 4)
    const card = element(by.id(`card-${index}`));
    await expect(card).toBeVisible();
    await card.tap();
    await expect(card).toHaveLabel('visible');
  });

  it('should mount a new pack after user reveal all cards', async () => {
    await device.reloadReactNative();

    const card = element(by.id(`card-0`));
    await expect(card).toBeVisible();
    await card.tap();
    await expect(card).toHaveLabel('visible');

    const card1 = element(by.id(`card-1`));
    await expect(card1).toBeVisible();
    await card1.tap();
    await expect(card1).toHaveLabel('visible');

    const card2 = element(by.id(`card-2`));
    await expect(card2).toBeVisible();
    await card2.tap();
    await expect(card2).toHaveLabel('visible');

    const card3 = element(by.id(`card-3`));
    await expect(card3).toBeVisible();
    await card3.tap();
    await expect(card3).toHaveLabel('visible');

    await waitFor(card).toHaveLabel('hide').withTimeout(8000);
    await waitFor(card1).toHaveLabel('hide').withTimeout(8000);
    await waitFor(card2).toHaveLabel('hide').withTimeout(8000);
    await waitFor(card3).toHaveLabel('hide').withTimeout(8000);
  });
});
describe('SauceDemo Test Suite', () => {
    it('should login successfully with valid credentials', async () => {
        // Akses halaman login
        await browser.url('https://www.saucedemo.com/');

        // Mengisi username dan password
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');

        // Klik tombol login
        await $('#login-button').click();

        // Validasi user berada di dashboard setelah login
        await expect(browser).toHaveUrlContaining('inventory.html');
        await expect($('span.title')).toHaveText('Products');
    });

    it('should add item to the cart', async () => {
        // Menambahkan item ke cart
        const addToCartButton = await $('button[name="add-to-cart-sauce-labs-backpack"]');
        await addToCartButton.click();

        // Validasi item berhasil ditambahkan ke cart
        const cartBadge = await $('.shopping_cart_badge');
        await expect(cartBadge).toBeDisplayed();
        await expect(cartBadge).toHaveText('1');
    });
});

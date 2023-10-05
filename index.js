import { createApp } from 'vue';

const app = createApp({});

app.component('header-component', {
    template: `
    <header>
        <!-- ... (existing header content) ... -->
    </header>
    `
});

app.component('image-component', {
    template: `
    <section class="back_image_section">
        <div class="back_image"></div>
    </section>
    `
});

app.component('table-component', {
    template: `
    <section class="table_section">
        <table>
            <!-- ... (existing table content) ... -->
        </table>
    </section>
    `
});

app.component('form-component', {
    template: `
    <section class="form_section">
        <form>
            <!-- ... (existing form content) ... -->
        </form>
    </section>
    `
});

// Mount the app
app.mount('#app');
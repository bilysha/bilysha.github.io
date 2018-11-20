import 'whatwg-fetch'
import 'core-js/fn/promise';

import App from './app';

const onLoad = () => {
    const app = new App();

    app.init();
};

document.addEventListener("DOMContentLoaded", onLoad);

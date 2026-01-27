export const chromeCapabilities = {
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'wdio:enforceWebDriverClassic': false,
    'goog:loggingPrefs': { browser: 'ALL'},
    'goog:chromeOptions': {
        args: [
            '--disable-default-apps', // Prevents loading of default chrome apps
            '--window-size=1920,1080', // Sets Window size for consistency/screenshots
            '--disable-component-extensions-with-background-pages', // Disables background pages for component extensions
            '--disable-extensions', // Disabled all Chrome extensions
            '--no-default-browser-check', // Skips default browser prompt
            '--no-first-run', // Skips first run wizards
            '--force-disable-signin-fire', // Disabled forced sign-in prompts
            '--disable-background-networking', // Reduces network noise/background requests
        ],
    },
};

export const ciChromeCapabilities = {
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'wdio:enforceWebDriverClassic': true,
    'goog:loggingPrefs': { browser: 'ALL'},
    'goog:chromeOptions': {
        args: [
            '--log-level=3', // Reduces ChromeDriver log verbosity
            '--no-sandbox', // Required for running as root in CI containers
            '--disable-dev-shm-usage', // Avoids /dev/shm issues in Docker
            '--enable-precise-memory-info', // More detailed memory info for debugging
            '--disable-default-apps', // Prevents loading of default Chrome apps
            '--window-size=1920,1080', // Sets Window size for consistency / Screenshots
            '--headless=new', // Uses new headless mode (recommended for Chrome 109+)
            '--disable-background-timer-throttling', // Prevents throttling of background timers
            '--disable-renderer-backgrounding', // Prevents backgrounding of renderer processes
        ]
    }
};
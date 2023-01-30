const NOSE_COLOR = 'rgba(0,0,0,0.1)';

const BIG_NOSE = `
<svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.1234 38.1411C93.0631 63.5686 51.7706 73.1039 33.8031 69.9254C18.2901 72.3092 -18.6496 73.8985 11.4828 38.1411C11.4828 20.6598 21.4759 8.98025e-06 33.8031 8.98025e-06C46.1303 8.98025e-06 52.8866 18.276 56.1234 38.1411Z" fill="${NOSE_COLOR}" />
</svg>
`;

const NARROW_NOSE = `
<svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.1234 38.1411C93.0631 63.5686 51.7706 73.1039 33.8031 69.9254C18.2901 72.3092 -18.6496 73.8985 11.4828 38.1411C11.4828 20.6598 21.4759 8.98025e-06 33.8031 8.98025e-06C46.1303 8.98025e-06 52.8866 18.276 56.1234 38.1411Z" fill="${NOSE_COLOR}" />
</svg>
`;

const WIDE_NOSE = `
<svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M54.0092 37.546C86.2664 57.2433 50.2081 64.6297 34.5182 62.1676C20.9717 64.0142 -11.2855 65.2453 15.0272 37.546C15.0272 24.0041 23.7536 8.00001 34.5182 8.00001C45.2828 8.00001 51.1827 22.1574 54.0092 37.546Z" fill="${NOSE_COLOR}" />
</svg>
`;

const noses = [
    {
        label: 'Big',
        value: BIG_NOSE,
    },
    {
        label: 'Narrow',
        value: NARROW_NOSE,
    },
    {
        label: 'Wide',
        value: WIDE_NOSE,
    },
];
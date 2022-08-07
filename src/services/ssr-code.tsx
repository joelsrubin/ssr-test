export const MagicScriptTag = () => {
  let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {

      const persistedColorPreference = window && window?.localStorage.getItem('color-mode');

      const hasPersistedPreference = typeof persistedColorPreference === 'string';
      // If the user has explicitly chosen light or dark,
      // let's use it. Otherwise, this value will be null.

      if (hasPersistedPreference) {
        return persistedColorPreference;
      }

      // If they haven't been explicit, let's check the media
      // query
      const mql = window && window.matchMedia('(prefers-color-scheme: dark)');

      const hasMediaQueryPreference = typeof mql.matches === 'boolean';

      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }
      // If they are using a browser/OS that doesn't support
      // color themes, let's default to 'light'.
      return 'light';
    }
    const colorMode = getInitialColorMode();

    const root = document.documentElement;

    root.setAttribute('class', colorMode);
  })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

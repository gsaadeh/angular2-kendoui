/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'jquery': 'vendor/jquery/dist/jquery.js',
  'kendo-ui-core': 'vendor/kendo-ui-core/js'
};

/** User packages configuration. */
const packages: any = {
  'kendo-ui-core/core': {
    format: 'cjs',
    defaultExtension: 'js',
    main: '../kendo.core.js'
  },
  'kendo-ui-core/numerictextbox': {
    format: 'cjs',
    defaultExtension: 'js',
    main: '../kendo.numerictextbox.js'
  },
  'kendo-ui-core/slider': {
    format: 'cjs',
    defaultExtension: 'js',
    main: '../kendo.slider.js'
  },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages,
  defaultJSExtensions: true
});

// Apply the user's configuration.
System.config({ map, packages });

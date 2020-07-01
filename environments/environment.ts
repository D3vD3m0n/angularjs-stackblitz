// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoints: {
    // API_FAMILY_BASE_V1: 'https://gb-bim-family-administration-test.azurewebsites.net/api/v1/family',
    // API_FAMILY_SEARCH_V1: 'https://gb-bim-family-administration-test.azurewebsites.net/api/v1/search',
    // API_FAMILY_BASE_V2: 'https://gb-bim-family-administration-test.azurewebsites.net/api/v2/family',
    // API_FAMILY_SEARCH_V2: 'https://gb-bim-family-administration-test.azurewebsites.net/api/v2/search',
    // API_FAMILY_HEALTH_V2: 'https://gb-bim-family-administration-test.azurewebsites.net/api/v2/health',
    API_FAMILY_BASE_V1: 'https://localhost:5001/api/v1/family',
    API_FAMILY_SEARCH_V1: 'https://localhost:5001/api/v1/search',
    API_FAMILY_BASE_V2: 'https://localhost:5001/api/v2/family',
    API_FAMILY_SEARCH_V2: 'https://localhost:5001/api/v2/search',
    API_FAMILY_HEALTH_V2: 'https://localhost:5001/api/v2/health',
},
azureAD: {
    tenant: '3e15a380-3b22-49ce-a93d-8032a6065ebb',
    clientId: '86080083-d77a-49f0-b16d-5e7436fd60a8'
    // clientId:'16037a6b-83fb-4249-98b2-2ec9a37a846f'
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

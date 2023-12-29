# Deeplinks in Angular Firebase with i18n

Issue with i18n on Firebase Hosting with Angular.

1. Navigate to [https://test-ng-deeplinks.web.app](https://test-ng-deeplinks.web.app).

2. Click the "English" or "Greek" buttons.

3. Each button navigates to `/en` or `/fr` respectively.

4. Should show each language, it does not.

Clearly I have misconfigured something. I just cannot find what I have misconfigured.

How to reproduce:

1. Clone this repo.
2. `npm install`
3. `ng deploy`

You will not be able to deploy, obviously, but you can see at least the build output.

You can see the firebase hosting settings in my [`firebase.json`](firebase.json) file.

You can see the i18n settings in my [`angular.json`](project.json) file.

You can see the routing settings in my [`src/app/app.routes.ts`](src/app/app.routes.ts) file.

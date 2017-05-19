$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/com.Nopcommerce/register.feature");
formatter.feature({
  "line": 2,
  "name": "User should able to register successfully",
  "description": "",
  "id": "user-should-able-to-register-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.before({
  "duration": 6792419083,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User can register with valid credentials",
  "description": "",
  "id": "user-should-able-to-register-successfully;user-can-register-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters all valid detaild for registration",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 609825474,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersAllValidDetaildForRegistration()"
});
formatter.result({
  "duration": 3039235851,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToRegisterSuccessfully()"
});
formatter.result({
  "duration": 37959881,
  "status": "passed"
});
formatter.after({
  "duration": 4055177,
  "status": "passed"
});
});
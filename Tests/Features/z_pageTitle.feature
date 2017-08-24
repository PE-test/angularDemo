Feature: Page title
    As a user I should be able to see page title

    Scenario: Angular JS page title
        Given a user opens the angular JS page
        When angular JS page is loaded
        Then angular JS page title is "AngularJS — Superheroic JavaScript MVW Framework"

    Scenario: Angular IO page title
        Given a user opens the angular IO page
        When angular IO page is loaded
        Then angular IO page title is "Angular"

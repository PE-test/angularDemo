Feature: Placeholder text
    As a user I want to see appropriate text in the placeholder

    Scenario: Placeholder text on the new page
        Given a user opens the angular JS page
        When angular JS page is loaded
        Then placeholder text is "Enter a name here"

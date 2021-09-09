
Feature: Carnival Test Cases

  Background: Navigate to Carnival
    Given the user navigate to Carnival Cruises homepage
    When the user search cruises to "The Bahamas" with duration between "6 - 9 Days"
    
    @UserStory1
  Scenario: Filter search by price
    When the user filters by price, using the slider bar:
    | min | max  |
    | 500 | 2000 |
    | 600 | 1500 |
    Then the user can view cruises within the selected price ranges

    @UserStory1 @ignored
  Scenario: Sort search by price
    When the user sorts by price
    Then Then the search results are sorted according to the selected order

    @UserStory2
  Scenario: Select sailing plan
    When the user selects a sailing plan
    Then the user will be able to read ABOUT each day
    And the button BOOK NOW will be placed into the page

    @UserStory3 @ignored
  Scenario: Select staterooms quantity
    When the user starts the booking process
    Then the booking page will load
    And the message "HOW MANY PEOPLE ARE CRUISING?" must be visible

    @UserStory4 @ignored
  Scenario: Carnival Cruise Lines
    When the user starts the booking process
    Then a link to call Carnival Cruise Lines should be displayed in the footer
    And The link must open a new tab with further instructions to proceed



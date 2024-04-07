Feature: Banker Journey Feature
A banker should be able to create, assign and delete users account

  Background: 
    Given I am on the bank app
    When I click the bank login
    And I click on add customer

  Scenario Outline: A banker should be able to create user with example table
    When I enter "<firstname>",  "<surname>",  "<postcode>"
    And I click on create customer login

    Examples: 
      | firstname | surname | postcode |
      | Paul      | Smith   | NG5 7LF  |

  Scenario: A banker should be able to delete user created
    When I enter valid user details:
      | fName | lName | pCode   |
      | James | Jones | NG5 7LF |
    And I click on create customer login
    And I click on customer button
    Then I delete customer profile

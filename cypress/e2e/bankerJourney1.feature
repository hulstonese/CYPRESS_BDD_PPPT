@test
Feature: Banker Journey Feature
A banker should be able to create, assign and delete users account

Background:
    Given I am on the bank app
    When I click the bank login
    And I click on add customer
@smoke
  Scenario: A banker should be able to create user 
    When I enter the firstname
    When I enter the surname
     When I enter the postcode
    And I click on create customer login
    
  @test  
  Scenario: A banker should be not be able to create user validate in accountlist  
    When I enter valid user details:
      | fName | lName | pCode   |
      | James | Jones | NG5 7LF |
    And I click on create customer login
    Then I should see the customer profile

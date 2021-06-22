Feature: Testing demos chat

  Scenario: 2 users chat
  Given I see the two users open the landing page and see connection message
  When I see that both users enter a unique name
  And I see that both users connect to broker
  And I see that both users see themselves and other user in Connected Users Tab
  And I see that User1 and User2 sends a message
  And I see that User1 and User2 receives the sent message
  Then I see that both users can disconnect and lose connection

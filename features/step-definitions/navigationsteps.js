import { Given,When,Then } from "@cucumber/cucumber";
import { test } from "../support/test";

Given("I see the two users open the landing page and see connection message",function() {
   test.navigationTest.openPageAndSeeTheMessage()
});

When("I see that both users enter a unique name",function(){
test.navigationTest.bothUsersEnterNickname()
});

When('I see that both users connect to broker',function(){
   test.navigationTest.clickConnectButton()
})

When('I see that both users see themselves and other user in Connected Users Tab',function(){
   test.navigationTest.checkUsers()
})

When('I see that User1 and User2 sends a message',function(){
   test.navigationTest.bothUsersEnterWord()
})

When('I see that User1 and User2 receives the sent message',function(){
   test.navigationTest.checkForMessage()
})


Then('I see that both users can disconnect and lose connection',function(){
   test.navigationTest.disconnect()
})





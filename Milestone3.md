Boil Timer Test
    Verify that boil timer works and provides proper notifications
Description
    Test the boil timer
Pre-conditions
    User is on the right page
Test steps
    1. Navigate to Timer page
    2. Set timer to 60 seconds and click add time
    3. Click start
Expected result
	1. First step should be displayed below the timer before the timer is started
	2. As time counts down, the upcoming step should be displayed below the timer
	3. As time counts down, the current step should be displayed below the timer
	4. Should hear sound when timer reaches the time of the upcoming step to signal that has been reached\
	5. Current step and upcoming step should update
Actual result
    . First step is displayed below the timer before the timer is started
	2. As time counts down, the upcoming step is displayed below the timer
	3. As time counts down, the current step is displayed below the timer
	4. Sound is produced when timer reaches the time of the upcoming step to signal that has been reached\
	5. Current step and upcoming step update
Status (Pass/Fail)
    Pass
Notes
    N/A
Post-conditions
    Timer stops at 0, current step is last step of recipe and upcoming step is N/A
    
   


Create user test
    Verify a new account can be created and can be logged into
Description
    Test account creation and login
Pre-conditions
    User is on the right page
Test steps
    1. Navigate to Home Page
    2. Input new username
    3. Click submit
	4. Input the username into the login field
	5. Click submit
Expected result
	1. The new username will appear below the field
	2. Inputing a username in the login field that has not been added will output an error
	3. Inputing a valid username will login the user
Actual result
	1. The new username appeared below the field
	2. Inputing a username in the login field that has not been added output an error
	3. Inputing a valid username logged in the user
    Pass
Notes
    N/A
Post-conditions
    N/A
    
    
Equations/Calculations test
    The equations work properly
Description
    Test calculations
Pre-conditions
    User is on the equations page
Test steps
  ABV Test
    1. Navigate to Equations page
    2. Enter Original gravity and Final gravity
    3. Click Calculate
  IBU Test
    1. Navigate to Equations page
    2. Enter wieght of hops, alpha acid content, batch volume, SG of batch, time of hop addition
    3. Click Calculate
Expected result
  ABV Test
    1. If the FG is greater than OG, an alert will appear
    2. Otherwise the calculated ABV will appear below the calculate button
  IBU Test
    1. The IBUs will update below the calculate button.
Actual result
  ABV Test
    1. If the FG is greater than OG, an alert appears
    2. Otherwise the calculated ABV appears below the calculate button
  IBU Test
    1. The IBUs updates below the calculate button.
    Pass
Notes
    N/A
Post-conditions
    N/A

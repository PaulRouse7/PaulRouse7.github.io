"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  $allFavoritesList.hide();
  $allMyStoriesList.hide();
  putStoriesOnPage();
  updateNavOnLogin();
}

$body.on("click", "#nav-all", navAllStories);

// Show story submit form on click of "Submit Story"

function navStorySubmitClick(evt){
  console.debug("navStorySubmitClick", evt);
  $allFavoritesList.hide();
  $allMyStoriesList.hide();
  $allStoriesList.hide();
  $storyform.show();
}
$navStorySubmit.on("click",navStorySubmitClick);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  $navStorySubmit.show();
  $navMyStories.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
  $navStorySubmit.show();
  $navFavorites.show();
  $navMyStories.show();
}


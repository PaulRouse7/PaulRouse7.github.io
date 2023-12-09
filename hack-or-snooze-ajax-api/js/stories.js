"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;
const favStoriesArray = [];
/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();

}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);
  const hostName = story.getHostName();
  if(favStoriesArray.includes(story.storyId)){   //checking if storyId is in fav array to set checkbox as checked
  return $(`
      <li id="${story.storyId}">
        <input type="checkbox" class="favoriteCheckbox" checked>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${story.url})</small>
        <br>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
        <button class="delete">Delete</button>
      </li>
    `);
  }
  else{
    return $(`
      <li id="${story.storyId}">
        <input type="checkbox" class="favoriteCheckbox">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${story.url})</small>
        <br>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
        <button class="delete">Delete</button>
      </li>
    `);
  }
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  for(let favStories of currentUser.favorites){  //populates array with favorite storyIds to check later
    favStoriesArray.push(favStories.storyId);
  }

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

// Gets data from submit story form and calls addStory function

async function submitStory(){
  const storyTitle = $("#story-title").val();
  const storyURL = $("#story-url").val();
  const storyObject = {
    title : storyTitle,
    url : storyURL
  };
  await StoryList.addStory(currentUser.name, storyObject);
  console.debug("submitStory");
}
$storyform.on("submit", submitStory);


// Delete stories using delete button

$(document).on('click', '.delete', async function() {
  const $target = $(this);
  const $Li = $target.parent("li");
  const $storyId = $Li.attr("id");
  console.log($storyId);
  console.log(BASE_URL);
  const res = await axios({
    url: `${BASE_URL}/stories/${$storyId}`,
    method: "DELETE",
    data: { token: apiToken },
  });
  console.log(res);
  
})
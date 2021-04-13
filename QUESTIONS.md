1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

- I spent 4 days from Friday to Monday. First of all, I would put more useful information that user may want to know in each article box and format additional information neatly with current information. Secondly. I noticed that UI from Chrome Inspection tool is different from what I actually check it with my mobile phone. I could find small UI differences from what I expected. If I had more time, it would be good to find what those are and check what causes the difference.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

- It should be a useful features but for some reasons I had an error using it and time is running out so I couldn't use it. It is middleware in redux

export function middleWare({ dispatch }) {
return function (next) {
return function (action) {
if (action.type === "KEYWORD") {
let cleanedKeyword = action.paylaod.replace(/['"]+/g, "").trim();

        if (action.payload >= 40) {
          dispatch({
            type: "ERROR_MESSAGE",
            payload: "Keyword should be less than 40 characters",
          });
        }

        if (cleanedKeyword !== "") {
          dispatch({
            type: "ERROR_MESSAGE",
            payload: "Keyword should not be empty",
          });
        }
      }
      return next(action);
    };

};
}

since action and reducers only work with receiving and distributing states, if I want to add some bussiness rules, any rules, or filters, a middleware is a nice feature for it.

3. How would you track down a performance issue in production? Have you ever had to do this?

- Since I am using third party API ( New York Times APIs), there were response delays which ignored my logic flow. I handled with async and await to get a correct sync in order. In addition, I used some boolean states such as loading to decide if it is ready to be displayed in the browser.

4. How would you improve the API that you just used?

- I used New York Times APIs and I personally think that those are very easy and simple to use. One thing that I wish to improve is that I might standardize a structure of response JSON so that you do not need to map all response differently. I have used two APIs and a structure of each response JSON was different, so I had to use if statement to differenciate.

5. Please describe yourself using JSON.

- Once I receive a JSON formatted response, I expend key value pairs to find information that I am looking for. When I actually get a response and save into one state, I save a specific information through keys and values paths. Then, I map it to HTML elements to display. If there is sub-information that is not shown in HTML elements for some reasons such as it is an object or extra actions are needed to be displayed, then with some extra implementation, I map it to HTML elements and use index of the first mapped elements to map with the new mapped elements.

like first.map((element, index) => {
second[index].element
})

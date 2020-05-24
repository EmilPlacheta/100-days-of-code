### DAY 20: 24th May 2020, Sunday

**Today's Progress**: Played around with the HTML data attribute, and how nicely it can be used in JS. Ive created 2 short functions that can replace the mess I curently have on my personal website that is meant to show text while cards are hovered over.

**Thoughts**: I really should redo my website, Ive learned so much since when it was created.  

---

### DAY 19: 23rd May 2020, Saturday

**Today's Progress**: Looked into canvas and how to use it. Then did a final checks on the brewery website and submitted it to the client.

**Thoughts**: I wonder how time consuming would it be to recreate MS Paint using canvas..

---

### DAY 18: 22nd May 2020, Friday

**Today's Progress**: brewery website is done :smiley:

**Thoughts**: Really happy with the result. Clean, crisp design, made folllowing 'mobile first' methodology. Goal was to keep the layout relatively similar so it will feel familiar to the usual users.

---

### DAY 17: 21st May 2020, Thursday

**Today's Progress**: brewery website almost finished, needs just more content carried over.

**Thoughts**: I wanted to have this site done purely with html/css and whatever funcionality came with Materialize, but the Beer menu is begging to be a React component. Something to look into at later date.

---

### DAY 16: 20th May 2020, Wednesday

**Today's Progress**: continued working on the brewery site. aded two more pages today, 2 left. Its coming along nicely.

**Thoughts**: Every time I work with materialize or Bootrstrap I enjoy how easy it is to just 'style' with html classes only to overwrite it anyway later on :sweat_smile: However, I feel I found a good balance today between the two.

---

### DAY 15: 19th May 2020, Tuesday

**Today's Progress**: worked on a website, first time using the mobile first approach. made good progress, index page is pretty much finished.

**Thoughts**: it was refreshing to just work with html and css for a change.

---

### DAY 14: 18th May 2020, Monday

**Today's Progress**: created a simple app to show JS event keycode.

**Thoughts**: Needed to get the event keycode for space bar, and after googling I found Wes Bos's https://keycode.info/ and decided to make one myself :)

---

### DAY 13: 17th May 2020, Sunday

**Today's Progress**: added navigation and About page to the Surprise App.

**Thoughts**: 'Surprise me.' is now finished, moving to new project tomorrow. Quite excited actually :smiley:

---

### DAY 12: 16th May 2020, Saturday

**Today's Progress**: maintanence of personal website, making space for a new project

**Thoughts**: no exciting thoughts to report

---

### DAY 11: 15th May 2020, Friday

**Today's Progress**: styled the fetched results results and played with the layout.

**Thoughts**: Neat and clean look. Still needs navigation, footer etc.

---

### DAY 10: 14th May 2020, Thursday

**Today's Progress**: set up the fetch and basic scafolding for the results

**Thoughts**: It turned out the CocktailDB API doesnt allow to search cocktails by ingredient in the free version. I still wanted to use it, so I settled for showing a random cocktail instead.

---

### DAY 9: 13th May 2020, Wednesday

**Today's Progress**: Worked on refactoring Mixer, my very first js App, to work with an acutal API instead of a hardcoded db of cocktails.
**Thoughts**: I feel like I could benefit from more API practice, and using async js in general.

---

### DAY 8: 12th May 2020, Tuesday

**Today's Progress**: --DAY MISSED--

---

### DAY 7: 11th May 2020, Monday

**Today's Progress**: Refactored the the code a bit to improve redability.

**Thoughts**: Not happy with how the final results are stored. Makes it easy to display, but difficult to reuse the data. This will be an issue, as I was thinking of adding an optoion to exclude amounts from the total, to be paid by the individual person. Eg: Person A goes shopping and gets groceries for everyone (A, B and C) and an certain item only for person B - which person B will pay in full. This item will have to be acluded from the total and paid solely by person B.

---

### DAY 6: 10th May 2020, Sunday

**Today's Progress**: Worked on adding the UI to the receipt splitter I worked on yesterday.

**Thoughts**: Short day today, not much 'coding' or problem solving, but it was good to have a quick refresh of Materialize.

---

### DAY 5: 9th May 2020, Saturday

**Today's Progress**: Spend few hours experimenting and finally did it. Ive changed the approach. Put everyone into an array of objects called `group`, with their `name` and `amountSpent` as properties. Reduced it to get the `total` amount spent.
Divide by length of the array to get the `fairShare`.
Looped over the array with forEach and added `balance` property by substracting `fairShare` from `amountSpent`.

With another forEach and a conditional, I went over the `group` and segregated people with negative and positive balance and pushed their `name` and `balance` into the `owe` and `owed` arrays respectively.
This gives a clear view who is owed and how much.

**Thoughts**: :smiley:

---

### DAY 4: 8th May 2020, Friday

**Today's Progress**: Kept trying to find the right formula for the bill splitting. Started again from scratch trying different approach, based on the 'balance' after calculating 'spentAmount' - 'fairShare'. Still dont have the right solution that works in every scenario.

**Thoughts**: Frustrated. I can feel this is the right approach, but i dont see the solution.

---

### DAY 3: 7th May 2020, Thursday

**Today's Progress**: I wanted to cleanup the mockup code from yesterday, and add a basic UI and some styling, but I noticed a bug. The calculation will only be correct if only one person spends more than the average share (total spent / 3 = fair share everyone should pay). At the momemnt calculation determines the biggest speneder, checks how much over the average (fair share) they spent and and how much others spent below the average and prints the respective diference.
This does not work when one person spent a lot less and need to compensate the other two.

**Thoughts**: Sometimes if you think something seems easy, it might be because you didnt think longe enough about it.

---

### DAY 2: 6th May 2020, Wednesday

**Today's Progress**: Receipt splitter that showes who is owed money after a week of shopping, when 3 people did a shop and spent different amounts. It logs who should recieve money from who and how much.

**Thoughts**: I thought ill make this to better answer my girlfriends mum question from few days ago about what Im doing, and what web development can be. Had to be made quickly as I could see my girlfriends and her mums attention slipping with every passing second...

---

### DAY 1: 5th May 2020, Tuesday

**Today's Progress**: First day, did a list of small projects I could do during the remaining 99days, that i always wanted to do but didnt have time or easnt worth the time at that moment. More edabid challanges.

**Thoughts**: Although I find challanges to be a good way to learn, small projects are the way to go. It will also bolster my portfolio, hopefully.

---

### DAY 0: 4th May 2020, Monday

**Today's Progress**: Joined the challange. Forked the repo and spent the evening solving challanges on edabit.

**Thoughts**: Although im doing something code related pretty much every day, I was intrigued by the 'log' keeping aspect of the challange. It seems like a good way to track progress and will be helpful in the future to look back on what see what I found challenging in the past.

# Instructions

You will create a simple dice game where the player and the computer roll a pair of dice to see who wins each round based on the highest total. This project introduces functions, events, and basic DOM manipulation for displaying results on the screen. 

## Plan

### Objective
Define the purpose of the dice game.

### Features
- Players and computer each roll two dice.
- The game determines the winner based on the higher dice total.
- Display the current roll and cumulative score.

### Requirements
- Use functions to handle the dice roll.
- Use `Math.random()` to generate dice values.
- Display roll results and scores on the page.
- Use a button to start each new roll.

### Breakdown Requirements

1. **Determine necessary variables**:  
   List variables and describe their content.

2. **Decide on basic HTML structure**:
   - Header: name of the game, student name
   - Main Section:  
     - Paragraph (P): explain game rules
   - Footer: copyright

3. **User Interactions**:
   - How will we roll the dice?

### Design

#### HTML Structure
What elements do you need?  
Write pseudo code for HTML layout:
- Example (use as a starting point; add sections for gameplay):
  - **Header**: Name of game, student name
  - **Main**:
    - **Section**:
      - P: Explain game
  - **Footer**: Copyright

#### Visual Layout
Keep it simple. Attach a wireframe.

## Function Design

Write pseudo code for each of the following functions:
1. `rollDice()`: Generates random dice rolls.
2. `calculateScore()`: Calculates the result and updates the score.
3. `displayResults()`: Updates the HTML to show the current roll and scores.

## Implement
- Write your code
- Don’t forget descriptive comments

## Test

1. **Unit Testing**: Test each function (e.g., `rollDice()`, `playRound()`, `displayResults()`) individually.
2. **Gameplay Testing**: Verify that rolls are random, results display correctly, and scores update accurately.
3. **Edge Cases**: Test scenarios like ties and re-rolling to ensure consistent results.

### Roll Record Table

| Roll # | Player D1 | Player D2 | Computer D1 | Computer D2 | Winner (P/C) | Running Score - Player | Running Score - Computer |
|--------|-----------|-----------|-------------|-------------|--------------|------------------------|--------------------------|
| 1      |           |           |             |             |              |                        |                          |
| 2      |           |           |             |             |              |                        |                          |
| ...    |           |           |             |             |              |                        |                          |
| 10     |           |           |             |             |              |                        |                          |

## Results

- Which number came up the most? ______  
- How many times? _____  
- Which number came up the least? ______  
- How many times? _____  
- Are there any numbers that did not come up at all? If yes, which one(s)? _________  
- How many times did player or computer roll doubles? _____________  
- Were there any errors in determining the winner? _______________  
- Were there any errors in keeping score? ___________________

### Retest if Needed

| Roll # | Player D1 | Player D2 | Computer D1 | Computer D2 | Winner (P/C) | Running Score - Player | Running Score - Computer |
|--------|-----------|-----------|-------------|-------------|--------------|------------------------|--------------------------|
|        |           |           |             |             |              |                        |                          |

## Deploy
Submit assignment on Google Classroom

## Maintain

- What would you do to expand on this project?

## Rubric

| Criteria                        | Exceeds Expectations (100%) | Meets Expectations (90%) | Approaching Expectations (75%) | Needs Improvement (50%) | Did Not Attempt (0%) |
|---------------------------------|-----------------------------|---------------------------|--------------------------------|--------------------------|-----------------------|
| **Plan** (8 points)             | Thoroughly defines project goals, features, and technical requirements with clear planning and documentation. | Defines most goals and requirements with minor gaps in details. | Basic goals/requirements outlined, lacks comprehensive planning. | Minimal planning, unclear project direction. | Did Not Attempt |
| **Design** (8 points)           | Detailed wireframe, logical layout, user-friendly, aesthetically cohesive. | Mostly complete and functional, minor layout/user flow gaps. | Basic or lacks critical user flow/layout. | Minimal design, poorly organized. | Did Not Attempt |
| **Implement** (10 points)       | On-time submission, before class start on due date. | By end of due date. | One or two days late. | Less than a week late. | Over one week late. |
| **Test** (8 points)             | Comprehensive testing, issues logged and addressed. | Adequate testing, minor issues remain. | Minimal testing, several issues. | No testing, major issues unresolved. | Did Not Attempt |
| **Maintain** (8 points)         | Plans for future development with potential new release. | Significant improvement plans for the program. | Ideas for improvement but lacks planning. | Ideas but no significant change to program. | Did Not Attempt |
| **HTML Structure** (10 points)  | Valid HTML, properly closed tags, consistent indentation, semantic tags. | Mostly correct HTML, minor issues. | Syntax/structure errors, improper tags. | Minimal functionality, errors affect readability. | Did Not Attempt |
| **CSS Placement** (5 points)    | Primarily external CSS, organized, minimal internal styles. | Mostly external with minimal internal styles. | Partially external, internal styles without clear justification. | Mostly internal or inline, poor organization. | Did Not Attempt |
| **Core Functionality** (20 pts) | All core features work as specified. | Most features work, minor issues. | Partially implemented, limited functionality. | Minimal functionality, major features not working. | Did Not Attempt |
| **User Experience** (8 points)  | Cohesive design, intuitive layout, smooth interactions. | Mostly cohesive, minor alignment/layout issues. | Functional but lacks consistency. | Disorganized, poor alignment/user flow. | Did Not Attempt |
| **Comments** (15 points)        | Detailed, insightful, enhances understanding. | Relevant comments. | Present, but vague. | Lacks detail or vague. | Did Not Attempt |

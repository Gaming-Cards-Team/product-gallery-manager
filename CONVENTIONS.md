# Conventions

## Commit conventions
To create a useful revision history, teams should first agree on a commit message convention to use. 
A well-crafted Git commit message is the best way to communicate context about a change to other developers working on that project, and indeed, to your future self.

The most important part of a commit message is that it should be clear and meaningful.

### Specify the type of commit:
feat: The new feature you're adding to a particular application
fix: A bug fix
style: Feature and updates related to styling
refactor: Refactoring a specific section of the codebase
test: Everything related to testing
docs: Everything related to documentation
chore: Regular code maintenance.[ You can also use emojis to represent commit types]

### Add the story number
Add the story number in the commit help to have a better history of our changes

### Add the name of the authors 
Is a good idea have a reference of who was working in an specific task

### other recommendations
Do not assume the reviewer understands what the original problem was, ensure you add it.
Do not end the subject line with a period
Remove unnecessary punctuation marks
Wrap lines at 72 characters

Example:
```
LOG-666: [byleto/vegeta] - feat: Add get starwars cards workflow
```

## folder structure
    From an architectural perspective, the most obvious consequence of composing bigger functions from smaller ones is that functional systems tend to look like pipelines with inputs and outputs, rather than a message-oriented request/response model.

    Instead to follow an OO approach to organize folders, we should follow a funcional style worflow approach

    folder structure example
    ├── src
        ├── workflowName
            ├──__tests__
            ├──__mocks__
            controller.js
            service.js
            client.js

## Coding Conventions

### Uses two-space indentation
Tabs and 2-space indentation are being used equally. Since a lot of errors on JSLint often result from mixed use of space and tab using 2 spaces throughout prevents these errors up front.

### Using shorthand for conditional statements
An alternative for using braces is the shorthand notation for conditional statements. When using multiple conditions, the conditional statement can be split on multiple lines.

### Opening Brace Location
Always put the opening brace on the same line as the previous statement.

### Closing Brace Location
The closing brace should be on the same indent as the original function call.

### Function Declaration Location
Non anonymous functions should be declared before use.

## Naming Conventions
Naming conventions include generic patterns for setting names and identifiers throughout a script.

### Methods/Functions
A method/function should always start with a small letter.

### TitleCase, camelCase
Follow the camel case convention, typing the words in lower-case, only capitalizing the first letter in each word.

### Variables
Follow the camel case convention

### Constants
JavaScript constants are different than symbolic constants, symbolic constants Should be Capitalized 
example:
```
const HOURS_IN_DAY = 24;
```

### Private Methods
Just don't export them.

### No Abbreviations
Abbreviations should not be used to avoid confusion

### Plurals
Plurals should be used when assigning names for arrays

### Use Comments
Should be avoid use comments, Always try to explain yourself in code.

### File names
Should follow camel case

### Test file names
Should follow camel, use the same name of the subject under test plus .spec example: controller.spec.js

## Tests
### Test estructure
Use a describe to include a function to test, use clear fors describes and tests(it)
Example:
```
describe('star Wars cards controller')
  it("should get all cards", async () => {
```

### Organize Test
Organize test using the AAA Pattern (Arrange, Act, Assert) 
Example:
```
it("should get all cards", async () => {
    //arrange
    const response = new MockExpressResponse() 
    const request = new MockExpressRequest() 

    //act
    await getCards(request, response); 

    //assert
    expect(starWarCardsService.getStarWarsCards).toHaveBeenCalledTimes(1); 
});

```
Note: Don't use the comments in a real test
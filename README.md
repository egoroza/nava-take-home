# Nava Takehome

Hello! Here is my takehome project for the Frontend Designer/Developer position. Make sure you have node and NPM installed - open terminal, and navigate to the correct project folder. Then run the following command:

    npm install && npm run dev

**This project was timeboxed at 1.5 hours.**

## Q&A

**Which framework did you choose and why?** I decided to go with React/TypeScript for this project since it's what I am most comfortable with development wise - no other real reason! This could also be built using vanilla javascript but I find the bells and whistles automatically included in React very useful (i.e. state and hooks!)

**If you used libraries, how did you choose them?** For this project I didn't actually use any libraries asides from the built-in React packages and tools. I don't like to reinvent the wheel so I typically like to use libraries that are necessary for a specific project, but I also don't like to bloat an application with unnecessary packages. This was pretty simple so didn't require any additional libraries, but my go-to tends to be Google's Material UI library.

**Any choices you made that were inspired from or deviated from the wireframe and why.** I didn't deviate from the given wireframe since this is a government tool and I like to keep things as simple as possible for these. However, I didn't have any spacing measurements, font sizes, or typography to work with so just tried to match the mocks as closely as possible. Additionally, I added a design for a very simple view for the "Add Member" modal, in order to collect the correct information for the user/project requirements and acceptance criteria. I also made the assumption that "description" really meant "contact type" and created mock values for this accordingly.

**Any questions that you would have liked to ask the design team while working on this.**

1. Could styling specs be provided if they are important? This seems to be part of an existing interface so would want to ensure there is parity between the rest of the interface and this application.
2. Is there a cap for the number of members that can be added? Is there a minimum for the number of members? What should we display if there are no members? How do we handle an overwhelming amount of members - should we refer to pagination, lazy loading on scroll, or a "load more" button?
3. Should members be displayed in a certain order? (oldest first, newest first, alphabetical, etc.)
4. What types of information should be considered when displaying members? The mocks only show "description" and "favorite fruit" but does not expand on what that means. What values can these hold? Strings vs. integers/numbers, etc.
5. What information do we need to collect when adding new member(s)? The modal currently only collects the information that is displayed but it seems possible that there is other data we should consider. Additionally, which of these fields are required?

**Thanks for looking through my project and for your time! Appreciate this opportunity. 😄**

[https://leonardoai-oliyoungs-projects.vercel.app/](https://leonardoai-oliyoungs-projects.vercel.app/)

# Notes

## Strongly Typed

I strongly typed most of the application since it improves code reliability by catching errors during development, enhances the developer experience through better autocomplete and suggestions, and most importantly makes the codebase easier to maintain and refactor by providing clear data structures and expectations.

## User Peristance in LocalStorage

I chose to use localStorage as this was the simplest way to persist data across saves and with a simple hook, easy to manage. It does have a side-effect of being a little imcompatible with NextJS's server-side rendering, so in `app/layout.tsx` I needed to to a `useEffect` / `useState` dance to ensure it didn't trip up the hydration.

I used `useContext` to abstract out the `User` model and to simplify the distribution of the object into `app/page.tsx` where it was needed to guard the gql retrieval.

## Character Detail modal

Again, using `useContext` to distribute data through the stack, keeping the dialog toward the top of the DOM, we send the character in question in to the context and conditionally reactively rendering the dialog dependant on the data present.

## GraphQL

Chose the Rick & Morty Character subgraph for the simplicity and to meet the image requirements, I conditionally render each character depending on their state, fading Characters with an Unknown state and blurring dead Characters.

## Responsive

I used a responsive grid to change the layout depending on the width of the browser, dropping down to a single column on narrowest devices.

## Pagination & Deep linking

I use search parameters and the pushState method to manage deep linking in this app. This lets me update the URL dynamically to reflect things like search filters or view states without a full page reload. It also preserves the user's state for bookmarking or sharing, while keeping the browser’s back and forward buttons functional.


# What I would've done next

## Cypress and ReactTestingLibrary

Normally I would've started with a TDD approach, but because I was new to Chakra I dedicated more time to learning and understanding that library at the expense of adding tests. I would've added tests around the pagination effects and URL changes, the character modal and the User profile storage and updates.

## Internationalisation

Implementing i18n would be a top priority for me. I believe it should be integrated early on, as it enables localized content that creates a more inclusive and user-friendly experience. By offering content in a user’s preferred language, it helps them better understand the interface and feel more comfortable using the app.

Additionally, tools like react-i18next and Next.js simplify this process, providing built-in support for language routing, automatic detection, and fallback options, which makes implementing i18n straightforward and seamless.

## Accessibility (A11y)

Images do have alt tags, but this isn't sufficient for a modern application. I'd add ARIA labels, keyboard navigation and possibly test with screen readers.

## Error Handling

There is no error handling, a network failure or similar would currently provide a bad UX.
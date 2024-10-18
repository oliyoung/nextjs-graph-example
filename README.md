# Notes

## User peristance

I chose to use localStorage as this was the simplest way to persist data across saves and with a simple hook, easy to manage. It does have a side-effect of being a little imcompatible with NextJS's server-side rendering, so in `app/layout.tsx` I needed to to a `useEffect` / `useState` dance to ensure it didn't trip up the hydration.

I used `useContext` to abstract out the `User` model and to simplify the distribution of the object into `app/page.tsx` where it was needed to guard the gql retrieval.

## Character detail

Again, using `useContext` to distribute data through the stack, keeping the dialog toward the top of the DOM, we send the character in question in to the context and conditionally reactively rendering the dialog dependant on the data present.

## GraphQL

Chose the Rick & Morty Character subgraph for the simplicity and to meet the image requirements, I conditionally render each character depending on their state, fading Characters with an Unknown state and blurring dead Characters. I used a responsive grid to change the layout depending on the width of the browser, dropping down to a single column on narrowest devices.

## Pagination & Deep linking

I use search parameters and the pushState method to manage deep linking in this app. This lets me update the URL dynamically to reflect things like search filters or view states without a full page reload. It also preserves the user's state for bookmarking or sharing, while keeping the browser’s back and forward buttons functional. T
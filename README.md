# Not sure about this one...
The assignment says
> the application should also have an option to show a new set of users without reloading the page ( generate / refresh button or similar )

Arunoda says
> re-route to the same url using our next/router API. Then it'll run getInitialProps again.

https://github.com/zeit/next.js/issues/1982

I am probably missing proper Next.js idiomatic way of doing this. I'm not trying to go against the assignment, but I haven't found a better way yet. I think it depends on whether the assignment means that a user doesn't have to use the browser refresh button or whether I'm supposed to change out the users array with no routing. In a real work environment, I'd get clarification before plowing ahead.

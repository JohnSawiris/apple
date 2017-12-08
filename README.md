## Thoughts

We started off brainstorming a website idea that we'll tackle for two days, then my partner suggested to work on re-structuring timberarmy.com. After we discussed which components that needed to be taken away and which components that needed improvement, the notion of how the website will look like after the process became clear. At this point we just started out the wire framing process to have a visual layout that we can add, move, and position elements within. After that we decided not use a framework and create a grid system and styles using Sass, we had a idea of how to create a grid system but we looked up how to use Sass to create a grid system just to reference, we found a video on CSS-Tricks which turned out to be a great educational resource, with the information that we learned from the video we created out grid system, but we used Flex-box in stead of floats. Now, we have the very minimal tools and layout design to start working, we start with the nav-bar, hero, main (where we used grid system), and footer. At the main section we had a pattern in mind that didn't work, we were trying to build three columns, first column will take up 50% of the row space and the other two columns that will take the other 50%, but these two columns in stead of been next each other they will be stacked, we tried to work around it but at the end we had to change our minds on this pattern and we switched to three columns in a row next to each other.  

## Table
| Sass Element    | How Used   |
| :------------- | :------------- |
| Variables      | We used Variables to store our color palette and font families that we used in the project   |
| Nesting      |  The nesting nature in Sass helped us contain and compartmentalize our layout components |
| Mixins     |  Mixins came in handy when build the grid system, we were able to pass arguments and create as many columns grid systems as we wanted example 12 column or 24 column |
| Loop     |  Loop in Sass created 12 different sizes columns with a few line, saved us a lot of typing and time |
| Color Functions     | Color Functions were used to change the hue of our color palette which helped with the elements the changes state example :hover |

Today I will start with mobile-first approach and apply my styles from the outer elements to the inner elements.
I learned that wire framing is important in the designing process, because it's the first interpretation of the website design and clarifies how certain elements will look before typing a line of code which helps revealing any potential problems that our design might run into.s

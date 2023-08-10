<h1 align="center">Zupan Take Home Challenge - Web UI</h1>

## How to Run /Set Up App Locally
1. Clone the project repository to your local machine
2. In the project root directory, run ``npm install`` to install dependencies
3. In the project directory, run ``npm start`` to run the app
4. Open ``http://localhost:3000`` to view it in your browser
You can also access from the deployed version from this [link](zupan-assignment.vercel.app)

## Requirements
- Responsive design (mobile should have a system to show less data in order to make it less noisy)</br>
- Dark/light design</br>
- Format dates to human readable ones (you can choose any culture)</br>
- Format numbers to human readable (you can choose any culture)</br>
- Format currencies to human readable (you can choose any culture)</br>
- Pagination, show current page, able to change page and page size</br>
- Every header has the ability to be sorted when you click the header itself, it should represent the current status of the sorting in all directions, non sorted, descendant and ascendant(Remember you don’t need to implement the actual sorting of the items)</br>
- Filters, on the header the user has the ability to filter depending on the type </br>
&nbsp;&nbsp;&nbsp;&nbsp;- String, input text</br>
&nbsp;&nbsp;&nbsp;&nbsp;- Number, two number input text with min and max</br>
&nbsp;&nbsp;&nbsp;&nbsp;- Date, two input date pickers that show the beginning and end of the period</br>

## App Structure
### Language & Framework 
- React.js (This allows to showcase HTML skills as well)
- CSS
  
### Files
- ``src/Components``: Components that constructs the app
- ``src/styles``: CSS files that adds styling to the app</br>
 &nbsp;&nbsp;&nbsp;&nbsp;- ```reset.css```: Resets default styling of elements</br>
 &nbsp;&nbsp;&nbsp;&nbsp;- ```layout.css```: Any styling related to layouts. Utilized these classes like in Tailwind CSS</br>
 &nbsp;&nbsp;&nbsp;&nbsp;- ```responsive.css```: Styling related to responseiveness</br>
 &nbsp;&nbsp;&nbsp;&nbsp;- remaining css files: Related to each Components with the same naming</br>

## Design
### Overview
Assuming the table is used to have a glance of data (id, user name, "counted at" date, quantity, price, product), it is necessary to have a clean, simple interface. This allows to minimize needless noises and distraction.</br>
Taking the inspiration from Zupan's logo, icons and design has roundness and curves to make the brand more cohesive.

### Color
To keep Zupan's brand, the majority of colors in this app are extracted from [Zupan's website](https://zupan.ai/). Several colors as well as colors for dark mode are modified from the extracted colors. 

### Fonts
Fonts are chosen from [Google Fonts](https://fonts.google.com/) – my knowledge about fonts are very minimal, so I've selected fonts that are a recommended pairing through my research.</br>
Numbers are delibrately with monospace fonts, which has equal spacing between characters. This keeps the length of the numbers even when listed in a table, eliminating crooked alignment. 


## Requirement Rundown
### Responsive design
<h4>Desktop / Big Screen</h4>
The table and its data are able to see in one glance.</br>

<h4>Tablet / Mobile</h4>
The table's length expands and able to scroll horizontally. The right side of the table has a blurr effect to indicate that there are more contents to be shown.</br> 
The search bar also shifts under the title to minimize the crowdness in the header.


### Dark / Light Design
The "Light/Dark" switch button is located on the top right corner. Once clicked, the entire interface toggles gradually to its respected mode.

### Format Data
To format the given data (dates, numbers, currency) to human-readable, functions are created accordingly. These functions are found in ``src/helpers/formatters.js``.

### Pagination
Once scrolled down to the bottom of the table, users can click to move back/next to change pages. The current page number is also visible.

### Sorting
When hovering each header, the font weight changes to bold to indicate that these elements are clickable. Once clicked, the font weight remains bold and switch to italic, showing which current header is active.</br>
Each header has its own "sorting icons" – "ascendant" when top icon is active, and "descendant" when bottom icon is active. These icons might not point out directly what they are, but in order to maintain the clean, simple interface, I went for this design assuming users would learn quickly enough.</br>
Header states rotate in the order of: "descendant" => "ascendant" => "none" .

### Filter
To keep the interface organized, the filter system has its own window by clicking the filter icon located on the right. Date, amount and price are able to filter, with dates input and amount/price inputs and slider.</br>
Although string input is required in the filter, this would be more suitable as a search bar since users will be searching for specific keywords. The search bar is next to the filter button for faster access. 


## Improvement
- User research is heavily needed to implement what the users need. This step can determine how the order of the table data should be, how the interface/layout should be etc. The design I came up is all among assumption what the users "might" want to have, hence this design might not be the best solution.
- It will be more user-friendly when the blurr effect for smaller screen would clear out once the user reach to the end of the table.

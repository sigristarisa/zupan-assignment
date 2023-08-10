<h1 align="center">Zupan Take Home Challenge - Web UI</h1>

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






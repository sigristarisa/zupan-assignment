# Zupan Take Home Challenge - Web UI

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
- React.js => This allows to also showcase HTML skills
- CSS
### Structure
- ``src/Components``: Components that constructs the app
- ``src/styles``: CSS files that adds styling to the app</br>
 &nbsp;&nbsp;&nbsp;&nbsp;- ```reset.css```: Resets default styling of elements</br>
 &nbsp;&nbsp;&nbsp;&nbsp;- ```layout.css```: Any styling related to layouts. Utilized these classes like in Tailwind CSS</br>
 &nbsp;&nbsp;&nbsp;&nbsp;- ```responsive.css```: Styling related to responseiveness</br>
 &nbsp;&nbsp;&nbsp;&nbsp;- remaining css files: Related to each Components with the same naming</br>

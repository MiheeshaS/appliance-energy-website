# ⚡ Appliance Energy Consumption Website

## Project Overview

**EnergyWise** is an interactive website developed to demonstrate the use of **HTML, CSS, and JavaScript** while presenting information related to household appliance energy consumption in the Australian market.

The website currently focuses on **television energy consumption** and provides example content to demonstrate how appliance energy information can be presented to users.

The website also provides a foundation for adding interactive data visualisations developed during future tasks in this unit.

This project was created to practise:

- HTML webpage development
- CSS styling and responsive design
- JavaScript interaction
- GitHub version control
- GitHub Desktop
- Website deployment using Vercel


---

## Website Pages

The website contains three separate webpages.

### 1. Home

The **Home** page introduces the topic of household appliance energy consumption and explains the importance of understanding energy efficiency.

It includes:

- Introduction to appliance energy consumption
- Information about energy efficiency
- Energy-related information cards
- Navigation to other areas of the website


### 2. Televisions

The **Televisions** page focuses on television energy consumption.

It includes:

- Example television energy consumption information
- Comparison of different television sizes
- Energy-saving tips
- An interactive television energy calculator


### 3. About Us

The **About Us** page explains the purpose of the EnergyWise website and how the website was developed.

It includes:

- Project purpose
- Technologies used
- Project information
- Generative AI acknowledgement


---

## Website Features

The website includes:

- Three separate webpages: **Home, Televisions, and About Us**
- A consistent top navigation menu
- JavaScript-based navigation between webpages
- A clickable power logo that returns the user to the Home page
- Mouse-over feedback for navigation buttons and interactive elements
- Visual highlighting of the current webpage
- A colour scheme based on the supplied power logo
- Content related to appliance energy consumption in the Australian market
- Example television energy consumption information
- An interactive energy consumption calculator
- Energy-saving information
- Responsive layouts for different screen sizes
- A consistent footer across all webpages
- GenAI acknowledgement


---

## Technologies Used

### HTML

HTML was used to create the structure and content of the website.

Three HTML files were created:

- `index.html` – Home page
- `televisions.html` – Televisions page
- `about.html` – About Us page


### CSS

A single external CSS file, `style.css`, is shared by all three webpages.

CSS was used for:

- Colours
- Typography
- Navigation styling
- Page layouts
- Cards
- Buttons
- Hover effects
- Current-page highlighting
- Image and icon styling
- Responsive design
- Footer styling


### JavaScript

A single JavaScript file, `script.js`, provides the interactive functionality of the website.

JavaScript is used for:

- Navigation between webpages
- Television energy consumption calculations
- Input validation
- Displaying calculated results


---

## Project Structure

```text
appliance-energy-website/
│
├── index.html
├── televisions.html
├── about.html
├── style.css
├── script.js
├── README.md
│
└── images/
    ├── PowerIcon.png
    └── other website icons and images
```


---

## JavaScript Navigation

JavaScript is used to navigate between the three separate webpages.

The navigation function is:

```javascript
function navigateTo(page) {
    window.location.href = page;
}
```

When a user selects a navigation button, the required HTML page is passed to the `navigateTo()` function.

For example:

```html
<button onclick="navigateTo('televisions.html')">
    Televisions
</button>
```

The power logo also uses this navigation function to return the user to the Home page.


---

## Current Page Feedback

The website provides visual feedback to show which page the user is currently viewing.

For example, the active navigation button uses the `active` CSS class:

```css
.nav-button.active {
    background-color: #443a2c;
    color: white;
}
```

This makes the current page visually different from the other navigation options.


---

## Mouse-Over Feedback

CSS hover effects are used to provide feedback when the user moves the mouse over interactive elements.

For example:

```css
.nav-button:hover {
    background-color: #e9a63d;
    color: white;
    transform: translateY(-2px);
}
```

This helps users recognise that the navigation buttons are interactive.


---

## Television Energy Calculator

The Televisions page includes an interactive calculator that estimates the daily energy consumption of a television.

The user enters:

1. Television power rating in **Watts**
2. Daily usage time in **hours**

The calculator uses the following formula:

```text
Energy (kWh) = Power (W) × Time (hours) / 1000
```

For example, if a television has a power rating of **100 W** and is used for **4 hours per day**:

```text
Energy = 100 × 4 / 1000

Energy = 0.40 kWh
```

Therefore, the estimated daily energy consumption is:

**0.40 kWh**

JavaScript is used to read the user's input, validate the values, perform the calculation and display the result.


---

## Responsive Design

The website uses CSS media queries to improve usability on different screen sizes.

The layout automatically adjusts for smaller displays by:

- Changing multi-column layouts into single-column layouts
- Adjusting navigation
- Reducing heading sizes
- Stacking buttons
- Adjusting content spacing
- Reorganising footer content

This helps make the website usable on both desktop and smaller screens.


---

## GitHub and Version Control

GitHub is used to store and manage the project source code.

**GitHub Desktop** is used to manage the local repository, create commits and push changes to GitHub.

During development, meaningful changes to the project are committed to maintain a record of the website's development.

Examples of development changes include:

- Creating the initial website structure
- Developing the Home page
- Adding the Televisions page
- Adding the About Us page
- Implementing the shared CSS styling
- Adding JavaScript navigation
- Developing the television energy calculator
- Adding images and icons
- Improving responsive design
- Adding project documentation


---

## Use of Generative AI

Generative AI was used as a development support tool during this project.

GenAI was used to assist with:

- Planning the website structure
- Providing suggestions for HTML, CSS and JavaScript
- Developing interface and layout ideas
- Creating and improving placeholder content
- Troubleshooting HTML and CSS layout issues
- Improving code organisation and readability
- Understanding and correcting code

The generated suggestions were reviewed, tested and modified before being included in the final website.

The code was also reviewed to ensure that its purpose and functionality could be understood and explained.


---

## Use of GitHub Copilot

GitHub Copilot was used as a coding assistance tool while developing the website in Visual Studio Code.

Copilot was useful for providing code suggestions and assisting with repetitive development tasks.

Suggestions were reviewed before being accepted to ensure that they were suitable for the project requirements and consistent with the existing website code.


---

## Deployment

The source code for this website is stored in a **public GitHub repository**.

The website is hosted online using **Vercel**, with the Vercel project connected to the GitHub repository.

This allows the website to be redeployed when updated code is pushed to the repository.


### Live Website

**Vercel:**  
`ADD YOUR VERCEL WEBSITE LINK HERE`


### GitHub Repository

**GitHub:**  
`ADD YOUR GITHUB REPOSITORY LINK HERE`


---

## GenAI Acknowledgement

Generative AI tools were used to assist with code development, troubleshooting, interface ideas, content development and project documentation.

All generated suggestions used in the project were reviewed and tested as part of the development process.


---

## Author

**Miheesha Samarakoon**

## Year

**2026**
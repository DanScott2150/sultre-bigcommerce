# Changelog
##1.3.6 (March 15th, 2021)
 - Rolled back package.json to use previous version of stencil utils as new version was causing an issue with product filtering and pagination
 - Upgraded code for credit card vaulting [THEME-2066]
 - Improved styling of store credit in header 
 - Allowed additional footer menu to be visible on mobiles and tablets
 - Fixed bug where if multiple product options were out of stock and one of the out of stock options were selected by default, the add to cart button was not displaying correctly.

##1.3.5 (Feb 20th, 2021)
 - Fixed bug in menu on ipad
 - Fixed bug with pagination placing the next button on second line if have a lot of pages
 - Upgraded package.json to use latest stencil utils and other dependencies
 - Adjusted menu to support even more sub menus if they are on separate rows
 - Fixed bug where "On Sale" menu item was not highlighting correctly if it had child categories
 - Added Geotrust SSL Site seal into footer
 - Made simple menu dropdown parent item clickable instead of opening menu on click

##1.3.4 (Feb 5th, 2021)
 - Updated theme verticals [THEME-2045]
 - Adjusted faceted search [THEME-2051]
 - Performance optimizations and tweaks
 
##1.3.3 (Jan 14th, 2021)
 - Removed H1 tags surrounding logo
 - Styled position of FB recommend button on product page
 - Added option for smaller font sizes for main menu buttons
 - Moved footer payment icons to centre column to make room for phone and email on right column
 - Tweaked position of web pages menu

##1.3.2 (Jan 9th, 2021)
 - Fixed product page images not swapping correctly when clicking certain options
 - Fixed "read more" button on the our story section of home page being on incorrect layer
 - Removed grey border when home page category image has no image
 - Adjusted the "Call for Pricing" label on product page
 - Added support for drop down menu from child web pages in menu
 - Added option for displaying phone and email in footer below address

##1.3.1 (Dec 14th, 2020)
 - Updated mobile menu when simple fly out menu was selected to show more menus in its depth
 - Added option to set the link color of the "Read more" button in the "Our Story" section on home page
 - Added option to hide the Home Page button in menu
 - Added option to set background color of home page recent updates section
 - Changed blog post titles to have H1 tag instead of H2
 - Fixed bug where button border hover color was not updating correctly
 - Fixed bug on search results page where it was loading grid and list view at same time in some instances

## 1.3.0 (Nov 15th, 2020)
 - Redeveloped the sticky header animation making it a much smoother transition
 - Reduced spacing between main navigation bar buttons so can fit more on a single row across header
 - Adjusted spacing on sub-menu drop down buttons if using the simple fly out menu option
 - Added option in customizer to hide category sidebar

## 1.2.4 (Nov 6th, 2020)
 - Added option in customizer to display category images either in banners behind title or as sub-category thumbnails in a grid.  
 - Fixed typo in schema file for "First webpage link" - renamed to "Third webpage link"

## 1.2.3 (Nov 1st, 2020)
 - Fixed bug with colour swatches with 2 or more patterns per option were not displaying correctly
 - Adjusted search box styling on Outdoors variant (with logo aligned left)

## 1.2.2 (Oct 31st, 2020)
 - Tweaked main menu color option in customizer
 - Set mobile menu arrows to be same color as button text

## 1.2.1 (Oct 30th, 2020)
 - Hide the new page builder sidebar banners on mobile as they were sitting above content and pushing page down too far
 - Fixed bug in quick cart drop down in header where Braintree payment gateway was injecting payment icons and affecting display of cart items.

## 1.2.0 (Oct 26th, 2020)
 - Added shadow and option to set shadow color for category banners on home page
 - Added global region for page builder in category sidebar allowing for banners and customization site-wide or per category.
 - Tweaked lazy loading of images for Low Quality Image Preview (LQIP) mode
 - Tweaked search bar input field to use font color from utility nav
 - Redesigned blog to be more compact and added ability to set summary length and posts per page in customizer
 - Added option in customizer to set default display for categories either to grid or list view

## 1.1.0 (Oct 20th, 2020)
 - Added global region support in header for Page Builder
 - Fixed bug where Google Font: "Saira" was not loading correctly in menu
 - Tweaked config file with font changes
 - Fixed bug where sidebar was not displaying correctly if shop by price was turned off

## 1.0.2 (Oct 14th, 2020)
 - Updated schema with new marketplace categories and documentation link

## 1.0.1 (Sep 25th, 2020)
 - Tweaks and Fixes after further UAT

## 1.0.0 (Sep 7th, 2020)
 - Initial Stable Release
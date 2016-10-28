# Headers

Headers help users identify where they are and provide a quick, organized way to reach the main sections of a website. Our headers include branding to identify the site and horizontal navigation.

## Accessibility
<ul class="usa-content-list">
  <li>Include skip navigation links to allow users with screen readers to bypass long navigation lists. Make sure you include an id at the beginning of your main content and that it matches the skipnav link. Find more information here: <a href="http://webaim.org/techniques/skipnav/">http://webaim.org/techniques/skipnav/</a></li>
  <li>Include Tab focus for all top-level navigation navigation items — this will allow keyboard-reliant users to easily navigate interactive items.</li>
  <li>Ensure your horizontal navigation is keyboard compatible; test to make sure users can use Tab to navigate and Space (or Enter) to open pages.</li>
  <li>Avoid using hover to expand dropdown lists. Hover is difficult for some users and won't work on touch screens. Drop downs should expand on click or with keyboard navigation.</li>
  <li>We use semantic header and nav elements with <code>role="banner"</code> and <code>role="navigation"</code> respectively. <code>role="banner"</code> is your masthead.</li>
  <li>You can use multiple nav elements for groups of navigation links, but you should only use one <code>role="navigation"</code> for the main nav of a page.</li>
  <li>Use lists for your nav links — this enables screen readers to decipher header contents.</li>
  <li>If you’re using a logo that’s an image rather than text, make sure you include alternative text for screen readers.</li>
  <li>If you’re using a logo that’s text, use an <code>em</code>, not an <code>h1</code>, unless it’s the homepage. Find more information here: <a href="http://csswizardry.com/2010/10/your-logo-is-an-image-not-a-h1/">http://csswizardry.com/2010/10/your-logo-is-an-image-not-a-h1/</a></li>
</ul>

## When to use
<ul class="usa-content-list">
  <li>We recommend that all federal government sites include the “official government site” banner and a logo or site name.</li>
  <li>Most sites will require some form of navigation to help users find the information they’re looking for. While a horizontal navigation bar is just one option for navigation design, it is one of the most visible and familiar ways of helping users navigate a site.</li>
</ul>

## Guidance
<ul class="usa-content-list">
  <li>List all important website sections as links in the horizontal navigation bar.</li>
  <li>For large websites, use drop-down menus to help users preview lower-level content. If lower-level sections are closely related and users will need to quickly jump between them, consider using a side navigation instead of — or in addition to — a drop down.</li>
  <li>Use descriptive, recognizable link labels. Don’t label links with jargon or unfamiliar terms.</li>
  <li>Left-justify link labels to make them more easily scannable.</li>
  <li>Present links in priority order: Higher-demand links should appear farther to the left, and lower-demand links should appear farther to the right.</li>
  <li>Don’t model your navigation after your agency’s org structure. Instead, structure it according to the tasks and information your users most frequently need to access.</li>
  <li>Show users where they are within the menu options by highlighting the current section.</li>
  <li>Conduct research with your users and base decisions about your site’s information architecture and navigation structure on your findings. Continue researching to confirm that updates meet your users’ needs.</li>
</ul>

## For further reading
<ul>
  <li><a href="https://www.nngroup.com/articles/menu-design/">https://www.nngroup.com/articles/menu-design/</a></li>
  <li><a href="https://www.usertesting.com/blog/2015/03/19/site-navigation-tree-testing/">https://www.usertesting.com/blog/2015/03/19/site-navigation-tree-testing/</a></li>
</ul>

## The “official government site” banner

<p>We recommend that all federal government sites include the “official government site” banner and a logo or site name. The banner helps people identify that your organization is part of the government, while the logo or site name helps visitors understand what your site is and what it does.</p>
<h4>Building with HTTPS</h4>
<p><a href="https://18f.gsa.gov/2014/11/13/why-we-use-https-in-every-gov-website-we-make/">HTTPS is a best practice</a> for all websites: It’s secure, private, and fast, and search engines prefer encrypted sites. But it’s especially important for government websites. The .gov in government websites carries a lot of weight. The public expects the contents of .gov websites to be official and accurate, and they expect any information they submit to that website to be private. The U.S. CIO provides guidance to implementing HTTPS for government websites at <a href="https://https.cio.gov/">https://https.cio.gov/</a></p>

## Documentation

<p>The basic header is great if you have a modest number of sections in your main navigation. You can customize it (depending on your site structure) and use it with:</p>
<ul>
  <li>A text or image logo</li>
  <li>With or without dropdown menus</li>
  <li>With or without a search bar</li>
  <li>With or without call-to-action buttons in place of the search bar</li>
</ul>
<h4 class="usa-heading">Why use it</h4>
<p>Use the basic header if you have few enough sections in your main navigation to fit comfortably next to your logo; this will depend on the length of your text and whether you include a search bar. You may also use it if you’d like to include the full search bar in your header, or if each main section listed in the horizontal navigation has six or fewer subsections that you’d like to include in a dropdown menu.</p>
<h4 class="usa-heading">When not to use it</h4>
<p>Consider using the extended header if you have more sections in your horizontal navigation than will fit comfortably next to your logo, or if you have complex sections that require the use of a mega menu.</p>

# Button

The examples demonstrate how to use button elements. To use a button style on an anchor link, add the `usa-button` class to your anchor link.

To use a different style button on your anchor link, add the special button class in addition to `usa-button`:

## Styling

| Class   | Description |
| ------   | -----------|
| `usa-button-primary | Use for the most important action the user can take. |
| `usa-button-primary-alt | Alternate primary action to use for the most important action the user can take. |
| `usa-button-secondary` | Use for secondary actions the user can take like cancel or close. |
| `usa-button-gray` | Alternate secondary action to use for less important actions.  |
| `usa-button-outline` | Alternate styling for button. Not to be used with other button styling classes. |
| `usa-button-outline-inverse` | Use on a dark background. |
| `usa-button-disabled` | Use for actions that are currently disabled for the user. |

## Sizing

| Class   | Description |
| ------   | -----------|
| `usa-button-big` | Use to increase the button size. This can be used with any of the styling classes. |

For example, a secondary button style would use the following code: ```
<a class="usa-button usa-button-secondary" href="/my-link">My button</a>```

## Accessibility
- Buttons should display a visible focus state when users tab to them.
- Avoid using <div> or <img> tags to create buttons. Screen readers don't automatically know either is a usable button.
- When styling links to look like buttons, remember that screen readers handle links slightly differently than they do buttons. Pressing the Space key triggers a button, but pressing the Enter key triggers a link.

## Usability

### When to use
- Use buttons for the most important actions you want users to take on your site, such as "download," "sign up," or "log out."

### When to consider something else
- If you want to lead users between pages of a website. Use links instead.
- Less popular or less important actions may be visually styled as links.

### Guidance
- Generally, use primary buttons for actions that go to the next step and use secondary buttons for actions that happen on the current page.
- Style the button most users should click in a way that distinguishes from other buttons on the page. Try using the “large button” or the most visually distinct fill color.
- Make sure buttons should look clickable—use color variations to distinguish static, hover and active states.
- Avoid using too many buttons on a page.
- Use sentence case for button labels.
- Button labels should be as short as possible with “trigger words” that your users will recognize to clearly explain what will happen when the button is clicked (for example, “download,” “view” or “sign up”).
- Make the first word of the button’s label a verb. For example, instead of “Complaint Filing” label the button “File a complaint.”
- At times, consider adding an icon to signal specific actions (“download”, “open in a new window”, etc).

import { Theme, Button } from '../components/';

const DocumentedButton = {
  component: (
    <Button
      styling={Theme.buttons.primary}
      size="medium"
    >
      This is our button
    </Button>
  ),
  examples: [
    <Button
      styling={Theme.buttons.primary.green}
      size="small"
    >
        Small button
    </Button>,
    <Button
      styling={Theme.buttons.primary.blue}
      size="large"
    >
        Large button
    </Button>,
    <Button
      styling={Theme.buttons.secondary}
      disabled
    >
        Disabled button
    </Button>,
    <Button
      styling={Theme.buttons.primary.blue}
      isActive
    >
        Active button
    </Button>,
  ],
};

export default DocumentedButton;

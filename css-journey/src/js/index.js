import { createIcons, icons } from 'lucide';

// Caution, this will import all the icons and bundle them.
createIcons({ icons });

// Recommended way, to include only the icons you need.
import { createIcons, Phone } from 'lucide';

createIcons({
  icons: {
    Phone
  }
});
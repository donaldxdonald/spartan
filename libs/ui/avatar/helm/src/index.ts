import { HlmAvatarFallbackDirective } from './lib/fallback';
import { HlmAvatarImageDirective } from './lib/image';
import { HlmAvatarComponent } from './lib/hlm-avatar.component';

export * from './lib/fallback';
export * from './lib/hlm-avatar.component';
export * from './lib/image';

export const HlmAvatarImports = [HlmAvatarFallbackDirective, HlmAvatarImageDirective, HlmAvatarComponent];

/** Private blue theme foundation client plugin. */
import type { Context as ClientContext } from '@deepseek-ai/cordis';
export declare const BLUE_THEME_OVERRIDE_SOURCE = "dsh-theme-blue";
export declare const BLUE_THEME_ROOT_CLASS = "dsh-private-theme-blue";
export declare const BLUE_THEME_STYLE_ID: string;
export declare const inject: string[];
/** Apply the blue foundation as token and visual overrides without changing the official preference. */
export declare function apply(ctx: ClientContext): void;

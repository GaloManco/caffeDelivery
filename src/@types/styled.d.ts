import { defaultThemecoffer } from '../styles/themes/default'
import 'styled-components'

type ThemeType = typeof defaultThemecoffer

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

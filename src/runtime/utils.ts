import type { Mixpanel } from 'mixpanel-browser'
import type { ModuleOptions } from '../module'

export function createMixpanelWrapper(mixpanel: Mixpanel, options: ModuleOptions): Mixpanel {
  const wrapper: Record<string, any> = {}

  for (const propertyName in mixpanel) {
    const property = mixpanel[propertyName as keyof Mixpanel] as any
    if (typeof property === 'function') {
      wrapper[propertyName] = (...args: any[]) => {
        if (process.server || options.disable) {
          return
        }

        return property(...args)
      }
    } else {
      wrapper[propertyName] = property
    }
  }

  return wrapper as Mixpanel
}

import type { Mixpanel } from 'mixpanel-browser'
import type { ModuleOptions } from '../module'

export function createMixpanelWrapper(mixpanel: Mixpanel, options: ModuleOptions): Mixpanel {
  return new Proxy(mixpanel, {
    get(target, propertyName: string) {
      const originalMethod = Reflect.get(target, propertyName)
      const isMethod = typeof originalMethod === 'function'

      if (isMethod && (options.disable || import.meta.server)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (...args: any[]) => {
          if (!options.config.debug || import.meta.server) {
            return
          }
          console.info(`Mixpanel is disabled, "${propertyName}" method has not been called.`)
          console.info(
            `${propertyName}(${args
              .filter(Boolean)
              .map(arg => JSON.stringify(arg))
              .join(', ')})`,
          )
        }
      }

      return originalMethod
    },
  })
}

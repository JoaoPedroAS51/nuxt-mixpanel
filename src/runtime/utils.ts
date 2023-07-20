import type { Mixpanel } from 'mixpanel-browser'
import type { ModuleOptions } from '../module'

export function createMixpanelWrapper(mixpanel: Mixpanel | undefined, options: ModuleOptions): Mixpanel {
  return new Proxy(mixpanel ?? {} as Mixpanel, {
    get(target, propertyName: string) {
      const originalMethod = Reflect.get(target, propertyName)
      const isMethod = typeof originalMethod === 'function'

      if (isMethod && (options.disable || process.server)) {
        return (...args: any[]) => {
          if (!options.config.debug || process.server) {
            return
          }
          console.info(`Mixpanel is disabled, "${propertyName}" method has not been called.`)
          console.info(
            `${propertyName}(${args
              .filter(Boolean)
              .map((arg) => JSON.stringify(arg))
              .join(', ')})`
          )
        }
      }

      return originalMethod
    },
  })
}

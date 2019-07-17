type EventRemover = () => void
type EventHandler = (evt: Event) => void
type EventOptions = AddEventListenerOptions | boolean
type State = { listeners: EventRemover[] }

export type EventStore = {
  add: (
    node: EventTarget,
    type: string,
    handler: EventHandler,
    options?: EventOptions,
  ) => EventStore
  removeAll: () => EventStore
}

export function EventStore(): EventStore {
  const state: State = { listeners: [] }

  function add(
    node: EventTarget,
    type: string,
    handler: EventHandler,
    options: EventOptions = false,
  ): EventStore {
    node.addEventListener(type, handler, options)
    state.listeners.push(() =>
      node.removeEventListener(type, handler, options),
    )
    return self
  }

  function removeAll(): EventStore {
    state.listeners.filter(remove => remove())
    return self
  }

  const self: EventStore = {
    add,
    removeAll,
  }
  return Object.freeze(self)
}

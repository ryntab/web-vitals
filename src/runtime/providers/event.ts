const eventListeners = []
// @ts-ignore
window.onVitalEvent = (listener) => {
  eventListeners.push(listener)
}

export function sendToAnalytics (context, metric, options: any) {
  const event = {
    date: new Date(),
    context,
    metric,
    options
  }
  eventListeners.forEach((listener) => {
    listener(event)
  })
}

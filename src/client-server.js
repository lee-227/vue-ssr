import createApp from './app'
export default (context) => {
  let url = context.url
  return new Promise((resolve, reject) => {
    const { app, router,store } = createApp()
    router.push(url)
    router.onReady(()=>{
      const matchComponents = router.getMatchedComponents()
      if(!matchComponents.length){
        return reject({code:404})
      }
      Promise.all(matchComponents.map(component=>{
        if(component.asyncData){
          return component.asyncData(store)
        }
      })).then(()=>{
        context.state = store.state
        resolve(app)
      },reject)      
    },reject)
  })
}

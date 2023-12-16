function customRender(reactElement: constainer){
  const domElement = document.createElement
  (reactElement.type)
}

const reactElement = {
  type: 'a'
  props: {
    href: 'https://google.com'
    target: '_blank'
  }, 
  childeren : 'click me to visist google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)


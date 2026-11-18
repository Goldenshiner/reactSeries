function customRender(reactElement, container) {
    const domElement= document.createElement(reactElement.type)
    domElement.href= reactElement.props.href
    domElement.textContent= reactElement.props.children
    container.appendChild(domElement)
}

const reactElement= {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        children: 'Click me'    
    }
}

const container= document.getElementById('root')

customRender(reactElement, container)


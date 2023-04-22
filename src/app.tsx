import * as ReactDOM from 'react-dom';
// Define a React component

  // Mount the component to the DOM element with ID "root"
  export const render = (component: JSX.Element, selector: string) => {
    const container = document.querySelector(selector);
  
    ReactDOM.render(component, container);
  };
  
  function hasChildNodes(element: Element): boolean {
    return element.childNodes.length > 0;
  }
  export function clearElement(container: Element){
    ReactDOM.unmountComponentAtNode(container);
    if (container && hasChildNodes(container)) {
      ReactDOM.unmountComponentAtNode(container);
    }
  }
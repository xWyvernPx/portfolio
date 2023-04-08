
import EventEmitter from "eventemitter3";
import css from "csstype";
declare global {
    interface Window {
      $on: typeof emitter.on;
      $emit: typeof emitter.emit;
    }
    interface HTMLElement {
      setStyle: (style: css.Properties) => void;
    }
  }
  const emitter = new EventEmitter();
  window.$on = emitter.on.bind(emitter);
  window.$emit = emitter.emit.bind(emitter);
  
  HTMLElement.prototype.setStyle = function (style) {
    for (const prop in style) {
      if (this.style[prop] == "" || !this.style[prop] == null) {
        this.style[prop] = style[prop].toString();
      }
    }
  };
  
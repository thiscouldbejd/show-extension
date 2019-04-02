/* === Function Constants === */
const FN = {
  isSlides : url => !!url.match(/:\/\/docs.google.com\/presentation/),
  isPresenting : url => !!url.match(/:\/\/docs.google.com\/presentation\/d\/[-\w]{25,}\/present/),
  id : url => url.match(/[-\w]{25,}/),
  log : console.log,
  warn : console.warn
};
/* === Function Constants === */

/* === Selection Constants === */
const ELEMENTS = {
  svg : "svg",
  div : "div"
};
/* === Selection Constants === */

/* === Selection Constants === */
const SELECTORS = {
  nav : "punch-viewer-nav-v2",
  block : "goog-inline-block",
  button : "goog-flat-button",
  hover_button : "goog-flat-button-hover",
  captioned_button : "punch-viewer-captioned-button",
  icon : "punch-viewer-icon",
  slides : "punch-viewer-container",
  content : "punch-viewer-content",
  svg : "punch-viewer-svgpage-svgcontainer",
  slide : "punch-viewer-page-wrapper",
  page : "punch-viewer-svgpage",
  add : "show-extension-added-graphics",
  a11y : "punch-viewer-svgpage-a11yelement",
};
/* === Selection Constants === */

/* === Icon / Sprite Constants === */
const ICONS = {
  size : 24,
  colours : {
    default : "#ccc",
  	highlight : "#fff",
  },
  format: (size, colour) => `<svg xmlns='http://www.w3.org/2000/svg' width='${size ? size : ICONS.size}' height='${size ? size : ICONS.size}' viewBox='0 0 24 24'><path style='stroke: ${colour ? colour : ICONS.colours.default}; fill: ${colour ? colour : ICONS.colours.default}' d='M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z'/><path d='M0 0h24v24H0z' fill='none'/></svg>`,
	gesture: (size, colour) => `<svg xmlns='http://www.w3.org/2000/svg' width='${size ? size : ICONS.size}' height='${size ? size : ICONS.size}' viewBox='0 0 24 24'><path style='stroke: ${colour ? colour : ICONS.colours.default}; fill: ${colour ? colour : ICONS.colours.default}' d='M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z'/><path d='M0 0h24v24H0z' fill='none'/></svg>`,
	highlight: (size, colour) => `<svg xmlns='http://www.w3.org/2000/svg' width='${size ? size : ICONS.size}' height='${size ? size : ICONS.size}' viewBox='0 0 24 24'><path style='stroke: ${colour ? colour : ICONS.colours.default}; fill: ${colour ? colour : ICONS.colours.default}' d='M6 14l3 3v5h6v-5l3-3V9H6zm5-12h2v3h-2zM3.5 5.875L4.914 4.46l2.12 2.122L5.62 7.997zm13.46.71l2.123-2.12 1.414 1.414L18.375 8z'/><path d='M0 0h24v24H0z' fill='none'/></svg>`,
	brush: (size, colour) => `<svg xmlns='http://www.w3.org/2000/svg' width='${size ? size : ICONS.size}' height='${size ? size : ICONS.size}' viewBox='0 0 24 24'><path style='stroke: ${colour ? colour : ICONS.colours.default}; fill: ${colour ? colour : ICONS.colours.default}' d='M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z'/><path d='M0 0h24v24H0z' fill='none'/></svg>`,
	save: (size, colour) => `<svg xmlns='http://www.w3.org/2000/svg' width='${size ? size : ICONS.size}' height='${size ? size : ICONS.size}' viewBox='0 0 24 24'><path style='stroke: ${colour ? colour : ICONS.colours.default}; fill: ${colour ? colour : ICONS.colours.default}' d='M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z'/><path d='M0 0h24v24H0z' fill='none'/></svg>`,
	clear: (size, colour) => `<svg xmlns='http://www.w3.org/2000/svg' width='${size ? size : ICONS.size}' height='${size ? size : ICONS.size}' viewBox='0 0 24 24'><path style='stroke: ${colour ? colour : ICONS.colours.default}; fill: ${colour ? colour : ICONS.colours.default}' d='M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z'/><path d='M0 0h24v24H0z' fill='none'/></svg>`
};
/* === Icon / Sprite Constants === */

/* === Drawing Constants === */
const DRAWING = {
  colours : [
    "#faff05",
    "#ea00ea",
    "#36db00"
  ],
  brushes :  [
    "lines",
    "freehand"
  ],
  width : 16,
  transparency : "50",
};
/* === Drawing Constants === */

/* === Button Constants === */
const BUTTONS = {
  highlight : {
    name : "Highlight",
    desc : "Turn on the highlighter (H)",
    icon : ICONS.gesture
  },
  screenshot : {
    name : "Save",
    desc : "Capture and Download Screenshot",
    icon : ICONS.save
  },
  clear : {
    name : "Clear",
    desc : "Erase Highlights from Slide",
  },
}
/* === Button Constants === */

/* === Get Constants === */
const GET = {
  
  element : (className, parent) => {
    var _return = (parent || document).getElementsByClassName(className);
    if (_return.length > 0) return _return[0];
  },
  
  background : () => GET.element(SELECTORS.slides),

	container : () => GET.element(SELECTORS.content),

	slide : () => GET.element(SELECTORS.slide),
  
  svg : parent => {
    var _return = (parent || document).getElementsByClassName(SELECTORS.svg);
    if (_return.length > 0) {
      _return = _return[0].getElementsByTagName(ELEMENTS.svg);
      if (_return.length > 0) return _return[0];
    }
  }  
	
};
/* === Get Constants === */

/* === Draw Constants === */
const DRAW = {
  current: {},
  start: e => {
    DRAW.current = {
      active: true,
      x: e.clientX,
      y: e.clientY
    };
  },
  end: e => {
    if (DRAW.current.active) {
      DRAW.draw(DRAW.current.x, DRAW.current.y, e.clientX, e.clientY);
      DRAW.current = {};
    }
  },
  move: e => {
    if (DRAW.current.active) {
      if (DRAW.current.shape) DRAW.current.shape.remove();
      DRAW.current.shape = DRAW.draw(DRAW.current.x, DRAW.current.y, e.clientX, e.clientY);
    }
  }
};
/* === Draw Constants === */

/* === Handler Constants === */
const HANDLERS = {
  handle : (name, deadend, handle, log) => e => {
    if (deadend) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
    if (log) FN.log(name, e);
    if (handle) handle(e);
  },
  background : {
    click: e => HANDLERS.handle("BG-CLICK", DRAW.current.active, DRAW.current.active ? DRAW.end : null)(e),
  },
  capture : {
    click: e => HANDLERS.handle("CLICK", true)(e),
    mousedown: e => HANDLERS.handle("MOUSEDOWN", true)(e),
    mouseup: e => HANDLERS.handle("MOUSEUP", true)(e),
    touchstart: e => HANDLERS.handle("TOUCHSTART", true)(e),
    touchend: e => HANDLERS.handle("TOUCHEND", true)(e),
    pointerdown: e => HANDLERS.handle("POINTERDOWN", true, DRAW.start)(e),
    pointerup: e => HANDLERS.handle("POINTERUP", true, DRAW.end)(e),
  },
  passive : {
    pointermove: e => HANDLERS.handle("POINTERMOVE", false, DRAW.move)(e),
  },
  configure: (attach, background, foreground) => {
    
    /* === Background Handlers === */
    Object.keys(HANDLERS.background).forEach(key => attach ?
      background.parentElement.addEventListener(key, HANDLERS.background[key], true) :
      background.parentElement.removeEventListener(key, HANDLERS.background[key], true));

    /* === Foreground Capturing Handlers === */
    Object.keys(HANDLERS.capture).forEach(key => attach ?
      foreground.addEventListener(key, HANDLERS.capture[key], true) :
      foreground.removeEventListener(key, HANDLERS.capture[key], true));
    
    /* === Foreground Passive Handlers === */
    Object.keys(HANDLERS.passive).forEach(key => attach ?
      foreground.addEventListener(key, HANDLERS.passive[key], {
        passive: true
      }) :
      foreground.removeEventListener(key, HANDLERS.passive[key], {
        passive: true
      }));
    
	}
};
/* === Handler Constants === */

/* === Create Functions === */
var CREATE = {
  
  background : (background, colour) => `transparent url('data:image/svg+xml;base64,${window.btoa(background(ICONS.size, colour))}') no-repeat center center`,
  
  button : (title, name, background, click) => {

    var _setAttributes = (el, attributes) => {
      Object.keys(attributes).forEach(key => el.setAttribute(key, attributes[key]));
      return el;
    };

    var button = _setAttributes(document.createElement(ELEMENTS.div), {
        class: `${SELECTORS.block} ${SELECTORS.button}`,
        role: "button",
        tabindex: "0",
        title: title,
        style: "user-select: none;"
      }),
      holder = button.appendChild(_setAttributes(document.createElement(ELEMENTS.div), {
        class: "punch-viewer-captioned-button",
      })),
      icon = holder.appendChild(_setAttributes(document.createElement(ELEMENTS.div), {
        class: `${SELECTORS.icon} punch-viewer-${name.toLowerCase()}-icon goog-inline-block`
      })),
      caption = holder.appendChild(_setAttributes(document.createElement(ELEMENTS.div), {
        class: `punch-viewer-${name.toLowerCase()}-option-text goog-inline-block`,
      }));
    caption.appendChild(document.createTextNode(name));
    icon.style.background = CREATE.background(background, ICONS.colours.default);

    button.addEventListener("mouseleave", event => {
      var _el = event.currentTarget,
          _name = _el.dataset.name,
      		_button = BUTTONS[_name];
      _el.classList.remove(SELECTORS.hover_button);
      GET.element(SELECTORS.icon, _el).style.background =
        CREATE.background(_button.current || _button.icon || ICONS[_name],
                          _button.colour || ICONS.colours.default);
      
    }, false);

    button.addEventListener("mouseenter", event => {
      var _el = event.currentTarget,
          _name = _el.dataset.name,
      		_button = BUTTONS[_name];
      _el.classList.add(SELECTORS.hover_button);
      GET.element(SELECTORS.icon, _el).style.background =
        CREATE.background(_button.current || _button.icon || ICONS[_name], ICONS.colours.highlight);
    }, false);

    button.addEventListener("click", event => {
      if (click) click(event.currentTarget);
    }, false);

    return button;

  },

};
/* === Create Functions === */

/* === Action Functions === */
var ACTIONS = {
  
  clear : () => {
    var _targets = GET.svg().getElementsByClassName(SELECTORS.added);
    while (_targets.length > 0) _targets[0].remove();
  },

  reset : () => {
    
    /* === Clear Event Listeners === */
    HANDLERS.configure(false, GET.background(), GET.container());
    
    /* === Clear Observer === */
    if (ACTIONS.observer) {
      ACTIONS.observer.disconnect();
      ACTIONS.observer = null;
    }
    
    /* === Reset Highlight Button Background === */
    GET.element(SELECTORS.icon, BUTTONS.highlight.button).style.background = 
      CREATE.background(BUTTONS.highlight.icon || ICONS[_name], ICONS.colours.default);
    
    /* === Reset Highlight Button Colour === */
    delete BUTTONS.highlight.colour;
    delete BUTTONS.highlight.current;
    delete BUTTONS.highlight.button.dataset.colour;
    
  },
  
  highlight : el => {

    try {
      var _name = el.dataset.name,
          _button = BUTTONS[_name],
        	_index = el.dataset.colour,
    			_icon = GET.element(SELECTORS.icon, el);
      
      /* === Colour Index (on a cycle) === */
      _index = _index ? parseInt(_index) >= DRAWING.colours.length - 1 ? -1 : parseInt(_index) + 1 : 0;

      if (_index < 0) {

        /* === Reset Everything, as we have cycled through the colours === */
        ACTIONS.reset();
        
      } else {
				
        var _target = GET.svg(),
          	_surface = GET.container(),
          	_surround = GET.background();
        
        if (_target) {

          /* === Draw Handler === */
          DRAW.draw = (x1, y1, x2, y2) => {

            var _w = parseInt(_surface.style.width) || 0,
                _h = parseInt(_surface.style.height) || 0,
                _l = parseInt(_surface.style.left) || 0,
                _t = parseInt(_surface.style.top) || 0;

            x1 -= _l;
            x2 -= _l;
            y1 -= _t;
            y2 -= _t;

            if (_target.hasAttribute("viewBox")) {

              var _sizes = _target.getAttribute("viewBox").split(" ");
              var _width =  parseInt(_sizes[2]) || 0,
                  _height = parseInt(_sizes[3]) || 0;

              if (_width && _height) {
                x1 = (x1 / _w) * _width;
                x2 = (x2 / _w) * _width;
                y1 = (y1 / _h) * _height;
                y2 = (y2 / _h) * _height;
              }

            }

            /* TODO: DRAW.host.linearPath([[x, y], [x, y], [x, y], [x, y]]); */
            
            var line = DRAW.host.line(x1, y1, x2, y2, {
                roughness: 0.8,
                bow: 0.8,
                stroke: `${BUTTONS.highlight.colour || DRAWING.colours[0]}${DRAWING.transparency}`,
                strokeWidth: DRAWING.width
              });
            line.classList.add(SELECTORS.added);
            return _target.appendChild(line);
          }

          /* === Attach Event Listeners === */
          HANDLERS.configure(true, _surround, _surface);

            /* === Listen for Slide Change (Clear Toggled Highlight Status) === */
            if (ACTIONS.observer) ACTIONS.observer.disconnect();
            var _config = {
                attributes: false,
                childList: true,
                subtree: true
              },
              _handle = mutants => mutants.forEach(m => {
                if (m.type == "childList" && m.addedNodes) {
                  m.addedNodes.forEach(node => {
                    if (node.nodeName == ELEMENTS.div.toUpperCase() && 
                        node.classList.contains(SELECTORS.page)) ACTIONS.reset();
                  });
                }
              });
            ACTIONS.observer = new MutationObserver(_handle);
            ACTIONS.observer.observe(GET.slide(), _config);

            /* === Create Drawing Context === */
            DRAW.host = rough.svg(_target);
        }
        _icon.style.background = CREATE.background(_button.icon || ICONS[_name],
                                                   _button.colour = DRAWING.colours[_index]);
        el.dataset.colour = _index;
      }
      
    } catch (e) {
      FN.warn("HIGHLIGHT ERROR", e);
    }

  },
  
  screenshot : () => {
    try {
      var _target = GET.svg(),
        _title = GET.element(SELECTORS.a11y);

      if (_target) saveSvgAsPng(_target, _title && _title.hasAttribute("aria-label") ?
        _title.getAttribute("aria-label") : "screenshot.png");
    } catch (e) {
      FN.warn("SCREENSHOT ERROR", e);
    }
  },

  start : () => {
    var _url = window.location.href;
    if (FN.isSlides(_url)) {
      if (FN.isPresenting(_url)) {
        FN.log("SHOW", "Slides Presenting");
        var _nav = document.getElementsByClassName(SELECTORS.nav);
        if (_nav.length >= 1) {
          
          var _buttons = _nav[0].getElementsByClassName(SELECTORS.button), _last;
          Array.prototype.forEach.call(_buttons, el => {
            if (el.getElementsByClassName(SELECTORS.captioned_button).length > 0) _last = el;
          });
          
          if (_last) Object.keys(BUTTONS).forEach(key => {
              var _button = BUTTONS[key];
              _last = _last.insertAdjacentElement("afterend",
              	_button.button = CREATE.button(_button.desc, _button.name, 
                            _button.icon || ICONS[key], _button.action || ACTIONS[key]));
            		_button.button.dataset.name = key;
            });
        }
      } else {
        FN.log("SHOW", "Slides Open");
      }
    }
  },
  
};
/* === Action Functions === */

/* === Let's Go! === */
ACTIONS.start();
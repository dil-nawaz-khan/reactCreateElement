// valina JS
// const h2 = document.createElement('h2');
// h2.innerText = 'Hello JS';
// h2.classList.add('sub-heading');
// h2.className = 'sub-heading';

// const root = document.getElementById('root');
// root.append(h2);

// React JS

// const h2 = React.createElement("h2", {className: 'sub-heading', id:'heading-text'}, "Hello World");
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(h2);
// root.render({
//     $$typeof: Symbol.for('react.element'),
//     type:'span',
//     ref:null,
//     props:{
//         children: [
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type:'span',
//                 ref:null,
//                 props:{
//                     children:  {
//                         $$typeof: Symbol.for('react.element'),
//                         type:'button',
//                         ref:null,
//                         props:{
//                             children: 'Hello button React JS'
//                         }
//                     }
//                 }
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type:'i',
//                 ref:null,
//                 props:{
//                     children: 'Hello React JS'
//                 }
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 type:'b',
//                 ref:null,
//                 props:{
//                     children: 'Hello React JS'
//                 }
//             }
//         ]
//     }
// })

const container = React.createElement(
  "div",
  { className: "container", id: "container" },

  React.createElement(
    "section",
    { className: "s1" },
    React.createElement(
      "p",
      { className: "p1" },
      "The library for web and native user interfaces"
    )
  )
);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);

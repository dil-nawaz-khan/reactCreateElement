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

// const container = React.createElement(
//   "div",
//   { className: "container", id: "container" },
//   [
//     React.createElement("section", { key: 1, className: "s1" }, [
//       React.createElement(
//         "p",
//         { key: 1, className: "p1" },
//         "The library for web and native user interfaces"
//       ),
//       React.createElement("img", {
//         key: 2,
//         className: "img1",
//         style: {
//           width: 100,
//           backgroundColor: "teal",
//           borderRadius: 16,
//         },
//         src: "https://picsum.photos/200/300",
//       }),
//       React.createElement(
//         "form",
//         {
//           key: 3,
//           className: "img1",
//           style: {},
//         },
//         [
//           React.createElement("div", { className: "inputContainer", key:'1' }, [
//             React.createElement(
//               "label",
//               { key: 1, id: "label", htmlFor: "username" },
//               "User Name"
//             ),
//             React.createElement("input", { key: 2, id: "username" }),
//           ]),
//           React.createElement("div", { className: "inputContainer", key:'2' }, [
//             React.createElement(
//               "label",
//               { key: 1, id: "pwd", htmlFor: "password",  },
//               "Password"
//             ),
//             React.createElement("input", { key: 2, id: "password", type:'password'  }),
//           ]),
//         ]
//       ),
//     ]),
//   ]
// );

const h2 = /*#__PURE__*/React.createElement("h2", null, "Hello Babel");
const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", {
  className: "s1"
}, /*#__PURE__*/React.createElement("p", {
  className: "p1"
}, "The library for web and native user interfaces"), /*#__PURE__*/React.createElement("img", {
  className: "img1",
  src: "https://picsum.photos/200/300",
  style: {
    width: '100px',
    backgroundColor: 'teal',
    borderRadius: '16px'
  }
}), /*#__PURE__*/React.createElement("form", {
  className: "img1"
}, /*#__PURE__*/React.createElement("div", {
  className: "inputContainer"
}, /*#__PURE__*/React.createElement("label", {
  id: "label",
  htmlFor: "username"
}, "User Name"), /*#__PURE__*/React.createElement("input", {
  id: "username"
})), /*#__PURE__*/React.createElement("div", {
  className: "inputContainer"
}, /*#__PURE__*/React.createElement("label", {
  id: "pwd",
  htmlFor: "password"
}, "Password"), /*#__PURE__*/React.createElement("input", {
  id: "password",
  type: "password"
})))));
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
//# sourceMappingURL=script.js.map
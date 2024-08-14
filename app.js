
const heading= React.createElement("div",{ id:"heading"},[
    React.createElement("div",{ id:"child"},[
        React.createElement("h1",{},"I am an h1 tag for child"),
        React.createElement("h2",{},"I am an h2 tag for child"),
    ]),
    React.createElement("div",{ id:"child2"},[
        React.createElement("h1",{},"I am an h1 tag for child2"),
        React.createElement("h2",{},"I am an h2 tag for child2"),
    ]),
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

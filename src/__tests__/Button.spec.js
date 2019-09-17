import { create, act } from "react-test-renderer";
import React, { useState } from "react";

// function Button(props) {
//     return <button>Nothing to do for now</button>;
// }

// describe("Button component", () => {
//     test("Matches the snapshot", () => {
//         const button = create(<Button />)
//         expect(button.toJSON()).toMatchSnapshot()
//     })
// })

// class Button extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { text: "" };
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//       this.setState(() => {
//         return { text: "PROCEED TO CHECKOUT" };
//       });
//     }
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.text || this.props.text}
//         </button>
//       );
//     }
// }

// The function below does the same as the code above in 7 lines instead of 19!
function Button(props) {
    const [text, setText] = useState("");
    function handleClick() {
      setText("PROCEED TO CHECKOUT");
    }
    return <button onClick={handleClick}>{text || props.text}</button>;
}

describe("Button component", () => {
    test("it shows the expected text when clicked", () => {
        let component
        act(() => {
            component = create(<Button text="SUBSCRIBE TO BASIC" />)
        })
        const instance = component.root
        const button = instance.findByType("button")
        act(() => button.props.onClick())
        expect(button.props.children).toBe("PROCEED TO CHECKOUT")
    });
});
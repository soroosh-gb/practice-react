import React from'react'

// class Counts extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render () {
//         return (
//             <ul>
//             {
//                 this.props.previousCounts.map(count => <li>{count}</li>)
//             }
//         </ul>
//         )
//     }
  
// }
const Counts = ({ previousCounts }) => (
    <ul>
        {
            previousCounts.map((count, index) => <li key={index}>{count}</li>)
        }
    </ul>
)

export default Counts
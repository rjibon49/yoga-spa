import React from 'react';


const Progress = ({content, done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
            h5: `${content}`,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="prog-title">
            <div className="progress-line ">
			    <div className="progress-done justify-content-between" style={style}>
                    <div className="ps-3">{content}</div>
                    <div className="pe-3">{done}%</div>
			    </div>
		    </div>
        </div>
	)
}

const StyleProgress = () => {
    
    return (
            <>
		<Progress content="Strengthened muscles"  done="90"/>
		<Progress content="Calmed nerves"  done="75"/>
		<Progress content="Developed flexibility"  done="80"/>
		<Progress content="Became slim"  done="60"/>
	</>
    );
};

export default StyleProgress;
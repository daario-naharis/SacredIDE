import React from 'react';
import reactHTMLParser from 'react-html-parser'
const Result = ({compileRes,runRes,sourceCode,codeLanguage,inputCases}) => {
	if(codeLanguage==="Select")
		codeLanguage="";
	return(
		<div className="tl">
			<h1 className="white ma5">Result</h1>
			<div className="i washed-red mh5 mt2 f4">{reactHTMLParser(compileRes)}</div>
			<p className="washed-blue ml5 mb2">{reactHTMLParser(runRes)}</p>
			<h1 className=" white ma5">{codeLanguage} code you submitted was</h1>
			<p className="washed-blue ma2 ml5">{sourceCode}</p>
			<h1 className=" white ma5 mb4">The input was</h1>
			<p className="washed-blue ml5">{inputCases}</p>
			<br/><br/>
		</div>
	);
}

export default Result;
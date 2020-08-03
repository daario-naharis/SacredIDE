import React from 'react' ;


const Problem = ({onCodeChange,onLanguageChange,onInputChange,onButtonSubmit,onButtonCompile}) =>{
	return(
		<div >
			<div>
				<h1 className="red">Strange Number</h1>
			</div>
			<div className="bg-yellow pa4 ma4 tl">
				<div>
					<p>
						When Varsha was travelling home, she saw a mysterious villa. Varsha is curious about this strange villa and wants to explore it. When she reached the entry gate, the guard gave her a problem to solve and said that he would allow her to enter the villa only if she solved it.

						The guard gave Varsha two integers X and K. Varsha needs to determine whether there is an integer A such that it has exactly X positive integer divisors and exactly K of them are prime numbers.

						Varsha found this problem really hard to solve. Can you help her?
					</p>
				</div>
				<h3>Input</h3>
				<p>
					The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.
					The first and only line of each test case contains two space-separated integers X and K.
				</p>
				<h3>Output</h3>
				<p>
					For each test case, print a single line containing one integer: 1 if a valid integer A exists or 0 if it does not exist.
				</p>
			</div>
			<div className="bg-yellow pa4 ma4 tl">
				<h3>Sample Input</h3>
				<p>
					1<br/>4 3
				</p>
				<h3>Sample Output</h3>
				<p>
					1
				</p>
			</div>
			<div className=''>			
				<label className='f4 ma2 white '>Select Language:</label>
				<select name="language" id="language" onChange={onLanguageChange}>
				  <option label="Select">Select</option>
				  <option label="C">C</option>
				  <option label="C++14">CPP14</option>
				  <option label="Python3">PYTHON3</option>
				  <option label="Java">JAVA</option>
				  <option label="C#">CSHARP</option>
				</select>
			</div>
			<div>
				<h1 className="tl white mh4 mt4 mb2">Write your code here</h1>
			</div>
			<div>
				<textarea 
					id="code" name="code" 
					className="i db border-box w-90 hover-black ba b--white-20 pa2 br2 ma4" 
					style = {{"height": "400px","resize":"none","backgroundColor":"black","color":"white"}} 
					onChange={onCodeChange}
					>
					
				</textarea>
			</div>
			<p className="white tl mh4">BUG FOUND : If you want to compile, hit the compile button twice and if you want to run, hit the run button twice</p>
			<div>
				<button 
				type="button"
				className='f3 dim ba bw2 ph2 pv2 mb2 dib bg-washed-red purple pointer'
				onClick={onButtonCompile}
				>
				Compile
				</button>
			</div>
			<div>
				<h1 className="tl white mh4 mv2">Input</h1>
			</div>
			<div>
				<textarea 
					id="code" name="code" 
					className="i db border-box w-90 hover-black ba b--white-20 pa2 br2 ma4" 
					style = {{"height": "100px","resize":"none","backgroundColor":"black","color":"white"}} 
					onChange={onInputChange}
					>
					
				</textarea>
			</div>
			<div>
				<button 
				type="button"
				className='f3 dim ba bw2 ph2 pv2 mb2 dib bg-washed-red purple pointer'
				onClick={onButtonSubmit}
				>
				Submit
				</button>
			</div>
		</div>
	);
};

export default Problem;
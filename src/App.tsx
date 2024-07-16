import {useState} from "react"
import PullToRefresh from "./components/PullToRefresh"

const num = 5;
function App() {
	const [list, setList] = useState<string[]>(new Array(num).fill(""));
	return (
		<>
			<PullToRefresh onRefresh={async () => {
				return new Promise((resolve) => setTimeout(() => {
					setList(prev => prev.concat(new Array(num).fill("")));
					resolve(1)
				}, 2000))
			}}>
				<ul className="text-center select-none">
					{
						list.map((_, idx) => (
							<li key={idx} className="text-center h-32">
								{idx}
							</li>
						))
					}
				</ul>
			</PullToRefresh>
		</>
	)
}

export default App

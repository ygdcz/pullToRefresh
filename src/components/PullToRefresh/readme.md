# pullToRefresh

```tsx
	const [list, setList] = useState<string[]>(new Array(num).fill(""));
	const num = 5;

	const onRefresh = async () => {
		return new Promise((resolve) => setTimeout(() => {
			setList((prev) => prev.concat(new Array(num).fill("")));
			resolve(1)
		}, 2000));
	};

  	<PullToRefresh onRefresh={onRefresh}>
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
```
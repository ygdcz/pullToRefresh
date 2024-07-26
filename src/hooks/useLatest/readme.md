## useLatest

```tsx
const [count, setCount] = useState(0);
	const latestCount = useLatest(count);
	const onClick = () => setTimeout(() => alert(`click time ${latestCount.current}`), 300);
	return (
		<div>
			{`click time ${count}`}
			<button className="border-1 px-16 py-8 mx-8" onClick={() => setCount(count + 1)}>add</button>
			<button className="border-1 px-16 py-8" onClick={onClick}>alert</button>
		</div>
	)
```